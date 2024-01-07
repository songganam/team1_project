import React from "react";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

// 글 읽기 페이지입니다.
const ReadPage = () => {
  // 패스로 이동하기
  const navigate = useNavigate();

  const { tno } = useParams();

  // 쿼리 알아내기
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();

  // 현재 글 목록 페이지 번호
  const page = urlSearchParams.get("page")
    ? parseInt(urlSearchParams.get("page"))
    : 1;
  // 페이지당 보여줄 개수
  const size = urlSearchParams.get("size")
    ? parseInt(urlSearchParams.get("size"))
    : 10;

  // 쿼리스트링 만들기
  const queryStr = createSearchParams({ page, size }).toString();

  const handleClickModify = _tno => {
    navigate({ pathname: `/community/modify/${tno}`, search: queryStr });
  };

  const hnadleClickList = () => {
    console.log("글 목록 이동");
  };

  return (
    <div>
      <h2>글 읽기 {tno}</h2>
      <button
        onClick={() => {
          handleClickModify(tno);
        }}
      >
        글 수정하기
      </button>
      <button
        onClick={() => {
          hnadleClickList();
        }}
      >
        글 목록
      </button>
    </div>
  );
};

export default ReadPage;
