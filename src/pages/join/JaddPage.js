import React from "react";
import {
  Navigate,
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

// 회원가입 작성 페이지입니다.
const JaddPage = () => {
  // 패스 이동하기
  const navigate = useNavigate();

  const handleClickJoin = () => {
    navigate("/join/jread");
  };
  const handleClickCancel = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>회원가입 정보 작성하기</h2>
      <button
        onClick={() => {
          handleClickJoin();
        }}
      >
        회원가입 작성완료
      </button>
      <button
        onClick={() => {
          handleClickCancel();
        }}
      >
        회원가입 취소하기
      </button>
    </div>
  );
};

export default JaddPage;
