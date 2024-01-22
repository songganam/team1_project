import React from "react";
import { useNavigate } from "react-router-dom";
import TitleHeader from "../../components/titleheader/TitleHeader";
import Layout from "../../layouts/Layout";
import "../login/LoginPage.css";
import {
  LoginPageBts,
  LoginPageCheckbox,
  LoginPageID,
  LoginPageInfo,
  LoginPageMain,
  LoginPagePW,
  LoginPageWrap,
} from "./styles/LoginPageStyle";

// 로그인 페이지입니다.
const LoginPage = () => {
  const navigate = useNavigate();
  const handleClickLogin = () => {
    console.log("로그인이 되었습니다.");
    console.log("아이디  : 1234")
    console.log("비밀번호  : 1234")
  };
  const handleClickJoin = () => {
    navigate("/join");
  };
  return (
    <Layout>
      <LoginPageWrap>
        <TitleHeader
          timg="https://picsum.photos/1920/215/?category=meat"
          tname="로그인"
          tcontent="우울할 땐 고기 앞으로"
        ></TitleHeader>
        <LoginPageMain>
          <LoginPageInfo>
            <LoginPageID placeholder="이메일 아이디"></LoginPageID>
            <LoginPagePW placeholder="비밀번호"></LoginPagePW>
          </LoginPageInfo>
          <LoginPageCheckbox>
            <img src="../assets/images/Checkboxes.svg"></img>
            로그인 상태 유지
          </LoginPageCheckbox>
          <LoginPageBts>
            <button
              type="button"
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
          </LoginPageBts>
        </LoginPageMain>
      </LoginPageWrap>
    </Layout>
  );
};

export default LoginPage;
