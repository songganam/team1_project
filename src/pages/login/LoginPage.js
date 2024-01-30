import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import useCustomLogin from "../../components/meat/hooks/useCustomLogin";
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
import { useNavigate } from "react-router-dom";

// 로그인 페이지입니다.

// const initState = {
//   id: "",
//   password: "",
// };

const initState = {
  email: "",
  upw: "",
};
const LoginPage = () => {
  const [authParam, setAuthParam] = useState(initState);
  const { doLogin, moveToPath, loginComplete } = useCustomLogin();
  const { isModal, openModal, closeModal } = useCustomHook();
  const navigate = useNavigate();
  const handleChange = e => {
    authParam[e.target.name] = e.target.value;
    setAuthParam({ ...authParam });
  };
  const dispatch = useDispatch();
  const handleClick = async () => {
    try {
      await doLogin({ authParam, successFn, failFn, errorFn });
      loginComplete();
    } catch (error) {
      console.log(error);
      // navigate(-1);
    }
  };

  const successFn = result => {
    console.log("성공", result);
    moveToPath("/");
  };

  const failFn = result => {
    console.log("실패", result);
    alert("이메일 및 비밀번호 확인하세요.");
  };

  const errorFn = result => {
    console.log("서버 에러", result);
    openModal("비밀번호 에러", "비밀번호를 확인해주세요.", closeModal);
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
            {/* 적는 란 */}
            <LoginPageID
              type="text"
              name="email"
              value={authParam.email}
              placeholder="이메일"
              onChange={e => handleChange(e)}
            />

            <LoginPagePW
              type="password"
              name="upw"
              value={authParam.upw}
              placeholder="비밀번호"
              onChange={e => handleChange(e)}
              maxLength="8"
            />
          </LoginPageInfo>
          <LoginPageCheckbox>
            {/* <img src="../assets/images/Checkboxes.svg"></img>
            이메일 기억하기 */}
          </LoginPageCheckbox>
          <LoginPageBts>
            <button
              type="button"
              className="Loginbutton"
              onClick={() => {
                handleClick();
              }}
            >
              로그인
            </button>
            <button type="button" className="Joinbutton" onClick={() => {}}>
              회원가입
            </button>
          </LoginPageBts>
        </LoginPageMain>
      </LoginPageWrap>
    </Layout>
  );
};

export default LoginPage;
