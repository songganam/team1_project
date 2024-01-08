import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";

// 로그인 페이지입니다.
const LoginPage = () => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    console.log("로그인이 되었습니다.");
  };
  const handleClickJoin = () => {
    navigate("/join");
  };

  return (
    <Layout>
      <h1>로그인</h1>
      <button
        onClick={() => {
          handleClickLogin();
        }}
      >
        로그인
      </button>
      <button
        onClick={() => {
          handleClickJoin();
        }}
      >
        회원가입
      </button>
    </Layout>
  );
};

export default LoginPage;
