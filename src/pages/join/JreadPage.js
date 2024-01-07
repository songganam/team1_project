import React from "react";
import { useNavigate } from "react-router-dom";

// 회원가입할 때 입력한 정보가 맞는지 최종확인하는 페이지입니다.
const JreadPage = () => {
  //패스 이동
  const navigate = useNavigate();

  const handleClickModify = () => {
    navigate("/join/jmodify");
  };

  const handleClickJoin = () => {
    navigate("/gogi");
    console.log("회원가입 완료");
  };

  return (
    <div>
      <h2>회원가입 정보 확인</h2>
      <button
        onClick={() => {
          handleClickModify();
        }}
      >
        회원가입 정보 수정하기
      </button>
      <button
        onClick={() => {
          handleClickJoin();
        }}
      >
        회원가입 하기
      </button>
    </div>
  );
};

export default JreadPage;
