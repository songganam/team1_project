import React from "react";
import { useNavigate } from "react-router-dom";

// 회원가입 정보 수정하기 페이지입니다.
const JmodifyPage = () => {
  // 패스 이동
  const navigate = useNavigate();

  const handlClickJoin = () => {
    navigate("/");
    console.log("회원가입이 완료되었습니다");
  };

  return (
    <div>
      <h2>회원가입 정보 수정하기</h2>
      <button
        onClick={() => {
          handlClickJoin();
        }}
      >
        회원가입 하기
      </button>
    </div>
  );
};

export default JmodifyPage;
