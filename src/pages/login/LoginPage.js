import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";
import "../login/LoginPage.css";
import TitleHeader from "../../components/titleheader/TitleHeader";
import Button from "../../components/button/Button";

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
      <div className="LoginPage-wrap">
        <TitleHeader
          timg="https://picsum.photos/1920/215/?category=meat"
          tname="로그인"
          tcontent="우울할 땐 고기 앞으로"
        ></TitleHeader>

        <div className="LoginPage-main">
          <div className="LoginPage-info">
            <input className="Login-id" placeholder="이메일 아이디"></input>

            <input className="Login-pw" placeholder="비밀번호"></input>
          </div>

          <div className="Login-checkbox">
            <img src="../assets/images/Checkboxes.svg"></img>
            로그인 상태 유지
          </div>
          <div className="Login-bts">
         
       
              <button
            
                className="Loginbutton"
                onClick={() => {
                  handleClickLogin();
                }}
              >
                로그인
              </button>
         
            
              <button
                type="button"
                className="Joinbutton"
                onClick={() => {
                  handleClickJoin();
                }}
              >
                회원가입
              </button>
            
          </div>
        </div>
          <div className="LoginPage-footer"> </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
