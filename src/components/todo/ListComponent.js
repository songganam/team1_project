import React, { useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { getList } from "../../api/todoApi";
import PageComponent from "../common/PageComponent";
import useCustomMove from "../../hooks/useCustomMove";

// 서버 데이터 초기값 객체
const initState = {
  current: 0,
  dtoList: [],
  next: false,
  nextPage: 0,
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  prevPage: 0,
  totalCount: 0,
  totalPage: 0,
};

const ListComponent = () => {
  const { page, size, moveToRead } = useCustomMove();
  const [serverData, setServerData] = useState(initState);

  useEffect(() => {
    getList({page, size})
      .then(result => {
        // console.log("결과", result);
        setServerData(result);
      })
      .catch(error => {
        console.log("에러", error);
        alert("데이터 호출에 실패하였습니다.");
      });
  }, [page, size]);

  return (
    <div>
      <h1>목록 페이지</h1>

      <div>
        {serverData.dtoList.map(item => (
          <div key={item.tno}>
            <div
              onClick={() => {
                moveToRead(item.tno);
              }}
            >
              {item.tno} {item.writer} {item.dueDate}
            </div>
          </div>
        ))}
      </div>

      {/* 페이징 처리 */}
      <PageComponent serverData={serverData} />
    </div>
  );
};

export default ListComponent;
