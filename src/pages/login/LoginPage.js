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
import ResultModal from "../../components/common/ResultModal";

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
    if (authParam.email === "" || authParam.upw === "") {
      console.log("id", authParam.email);
      console.log("pw", authParam.upw);
      openModal(
        "로그인 실패",
        "이메일 또는 비밀번호를 입력하지 않으셨습니다.",
        closeModal,
      );
      return; // 추가된 부분: 조건을 만족하면 함수 종료
    }
    try {
      await doLogin({ authParam, successFn, failFn, errorFn });
      loginComplete();
    } catch (error) {
      console.log(error);
    }
  };

  const successFn = result => {
    console.log("성공", result);
    moveToPath("/");
  };

  const failFn = result => {
    openModal("비밀번호 에러", "비밀번호를 확인해주세요.", closeModal);
    console.log("실패", result);
    // alert("이메일 및 비밀번호 확인하세요.");
  };

  const errorFn = error => {
    // console.log("서버 에러", result);
    if (error.response && error.response.status === 404) {
      openModal(
        "로그인 실패",
        "이메일 또는 비밀번호를 확인해주세요.",
        closeModal,
      );
    } else if (error.response && error.response.status === 400) {
      openModal(
        "로그인 실패",
        "이메일 또는 비밀번호를 확인해주세요.",
        closeModal,
      );
    }
  };
  return (
    <Layout>
      {isModal.isOpen && (
        <ResultModal
          title={isModal.title}
          content={isModal.content}
          callFn={isModal.callFn}
        />
      )}
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
              minLength="4"
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
