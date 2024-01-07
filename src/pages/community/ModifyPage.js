import React from "react";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

// 글 수정하기 페이지입니다.
const ModifyPage = () => {
  // 패스 이동하기
  const navigate = useNavigate();
  // 몇번 글 수정되는지 파악
  const { tno } = useParams();
  // 쿼리 알아내기
  const [urlSerchParams, setUrlSearchParams] = useSearchParams();

  // 현재 글 목록 페이지 번호
  const page = urlSerchParams.get("page")
    ? parseInt(urlSerchParams.get("page"))
    : 1;
  // 페이지당 보여줄 개수
  const size = urlSerchParams.get("size")
    ? parseInt(urlSerchParams.get("size"))
    : 10;

  // 쿼리스트링 만들기
  const queryStr = createSearchParams({ page, size }).toString();

  const handleClickDelete = _tno => {
    console.log("삭제");
  };
  const handleClickComplete = _tno => {
    console.log("완료");
  };
  const handleClickCancel = _tno => {
    navigate({ pathname: `/community/read/${tno}`, search: queryStr });
  };

  return (
    <div>
      <h2>글 수정 글 번호{tno}</h2>
      <button
        onClick={() => {
          handleClickDelete(tno);
        }}
      >
        삭제
      </button>
      <button
        onClick={() => {
          handleClickComplete(tno);
        }}
      >
        완료
      </button>
      <button
        onClick={() => {
          handleClickCancel(tno);
        }}
      >
        취소
      </button>
    </div>
  );
};

export default ModifyPage;
