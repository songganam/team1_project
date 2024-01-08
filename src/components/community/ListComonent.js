import React, { useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { getList } from "../../api/communityApi";

// 서버데이터 초기값 객체
const initState = {
  current: 0,
  dtoList: [],
  next: false,
  nextpage: 0,
  pageNumlist: [],
  pageRequestDTO: null,
  prev: false,
  prevPage: 0,
  totalCount: 0,
  totalPage: 0,
};

const ListComonent = () => {
  const navigate = useNavigate();

  // 데이터가 바뀌면 화면을 새로 렌더링
  const [serverData, setServerData] = useState(initState);

  // 쿼리 알아내기
  const [urlSerchParams, setUrlSearchParams] = useSearchParams();

  // 현재 목록 페이지 번호
  const page = urlSerchParams.get("page")
    ? parseInt(urlSerchParams.get("page"))
    : 1;
  // 페이지당 보여줄 개수
  const size = urlSerchParams.get("size")
    ? parseInt(urlSerchParams.get("size"))
    : 10;

  // []에 감시할 대상에 따라 함수 실행
  useEffect(() => {
    console.log(page, "페이지 호출");
    getList(page, size)
      .then(result => {
        console.log("결과", result);
        setServerData(result);
      })
      .catch(error => {
        console.log("실패", error);
        alert("데이터 호출에 실패하였습니다.");
      });
  }, [page, size]);

  // 페이지 호출하기
  const movePage = pageNum => {
    console.log(pageNum);
    // 쿼리만들기
    const queryStr = createSearchParams({
      page: pageNum,
      size: size,
    }).toString();
    navigate({ pathname: "/community/list", search: queryStr });
  };

  return (
    <div>
      <h1>고기잡담 목록</h1>
      <div>
        {serverData.dtoList.map(item => (
          <div key={item.tno}>
            <div>
              {item.tno} {item.writer} {item.dueDate}
            </div>
          </div>
        ))}
      </div>
      {/* 페이징 처리 */}
    </div>
  );
};

export default ListComonent;
