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
    <div className="LoginPage-wrap">
      <div className="LoginPage-header"></div>

      <div className="LoginPage-main">
        <Layout>
          <input className="login-id" placeholder="이메일아이디"></input>
          <br />
          <input className="login-pw" placeholder="비밀번호"></input>
          <br />
          <button 
            onClick={() => {
              handleClickLogin();
            }}
          >
            로그인
          </button>
          <br />
          <button
            onClick={() => {
              handleClickJoin();
            }}
          >
            회원가입
          </button>
        </Layout>
        <div className="LoginPage-footer"> </div>
      </div>
    </div>
  );
};

export default LoginPage;
