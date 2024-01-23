import React, { useState } from "react";
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

// const initState = {
//   id: "",
//   password: "",
// };

const LoginPage = () => {
  // ! 훅이든 기능이든 이런 건 몰라도 되는데, 어떻게 하면 댈까 라는 생각은 해야대요
  // ! 로그인을 한다. => 아이디 비밀번호 적는 란이 필요하죠. console.log, 적는란에 적은걸 저장해주수? 가 필요해요.는 변
  // ! 로그인을 한다
  // ! 로그인을 한다
  // ! 로그인을 한다
  // ! 로그인을 한다
  // ! 뭔가를 해야한다. 뭔가를 넣어야한다 등등 행위가 들어가면 함수가 필요해요 그때마다.

  const [todo, setTodo] = useState({});

  // 얘도 함수고
  const handleChange = e => {
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
  };
  // ? handle !!!! Click => 누르는거 onClick handle!!!!Change  => 값이 함수에 의해서 변하는거에요 onChange
  // 얘도 함수
  const handleClickLogin = () => {
    // 콘솔로그
    console.log("로그인이 되었습니다.");

    console.log(todo.id);
    console.log(todo.password);
    console.log(loginData);


    const email = todo.id;
    const upw = todo.password;

    const loginData = {
      email: email,
      upw: upw,
    };
  };

  const navigate = useNavigate();
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
            {/* 적는 란 */}
            <LoginPageID
              type="text"
              name="id"
              value={todo.id}
              placeholder="아이디"
              onChange={e => handleChange(e)}
            />

            <LoginPagePW
              type="password"
              name="password"
              value={todo.password}
              placeholder="비밀번호"
              onChange={e => handleChange(e)}
            />
          </LoginPageInfo>
          <LoginPageCheckbox>
            <img src="../assets/images/Checkboxes.svg"></img>
            아이디 기억하기
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
