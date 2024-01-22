import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { DefaultBt } from "../../components/button/styles/ButtonStyle";
import TitleHeader from "../../components/titleheader/TitleHeader";
import "../join/JaddPage.css";
import {
  GenderBtWrap,
  JaddAddressBts,
  JaddAddressWrap,
  JaddGenderWrap,
  JaddMailWrap,
  JaddMorePwWrap,
  JaddNameWrap,
  JaddNickNameInner,
  JaddNickNameWrap,
  JaddNumberWrap,
  JaddPageImage,
  JaddPageInfo,
  JaddPageMain,
  JaddPageWrap,
  JaddPwWrap,
} from "./styles/JaddPageStyle";
// 회원가입 작성 페이지입니다.

const JaddPage = () => {
  const [성별, 딸깍] = useState("");
  const [todo, setTodo] = useState({});

  const handleClick = e => {
    if (e == 1) {
      console.log("남자임");
      // 딸깍(성별);
    } else if (e == 2) {
      console.log("여자임");
      // 딸깍(성별);
    }
  };

  const handleChange = e => {
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
  };
  const handleClickJadd = () => {
    console.log("회원가입이 완료되었습니다.");
    console.log(todo.id);
    console.log(todo.password);
  };
  // 패스 이동하기
  const navigate = useNavigate();
  const handleClickJoin = () => {
    console.log(todo);

    navigate("/join/read");
  };
  const handleClickCancel = () => {
    navigate("/");
  };
  return (
    <JaddPageWrap>
      <TitleHeader
        timg="https://picsum.photos/1920/215/?category=meat"
        tname="회원가입"
        tcontent="오늘도 맛있는 고기와 함께하세요"
      ></TitleHeader>
      <JaddPageMain>
        <JaddPageImage>
          <button className="JaddPage-img-button"></button>
        </JaddPageImage>
        <JaddPageInfo>
          <div className="JaddMailInfo">
            <JaddMailWrap>
              <label>이메일</label>
              <input
                type="text"
                name="id"
                value={todo.id}
                className="JoinMail"
                placeholder="@까지 정확하게 입력하세요."
                onChange={e => handleChange(e)}
              ></input>
            </JaddMailWrap>
            <br />
            <JaddNameWrap>
              <label>이름</label>
              <input
                type="text"
                name="name"
                value={todo.name}
                className="JaddName"
                placeholder="본인 이름을 입력하세요."
                onChange={e => handleChange(e)}
              ></input>
            </JaddNameWrap>
            <br />
            <JaddPwWrap>
              <label>비밀번호</label>
              <input
                type="text"
                name="password"
                value={todo.password}
                className="JaddPw"
                placeholder="비밀번호를 입력하세요.(특수문자 포함 4-8자)"
                onChange={e => handleChange(e)}
              ></input>
            </JaddPwWrap>
            <br />
            <JaddMorePwWrap>
              <label>비밀번호 확인</label>
              <input
                type="text"
                name="confirm"
                value={todo.confirm}
                className="JaddMorePw"
                placeholder="입력한 비밀번호를 한번 더 확인하세요."
                onChange={e => handleChange(e)}
              ></input>
            </JaddMorePwWrap>
            <br />
            <JaddGenderWrap>
              <div className="JaddGender">
                성별
                <GenderBtWrap>
                  <DefaultBt
                    type="button"
                    name="man"
                    className="gender-bt-man"
                    onClick={e => handleClick(1)}
                    // 성별={1}
                  >
                    남성
                  </DefaultBt>
                  <DefaultBt
                    type="button"
                    name="woman"
                    className="gender-bt-woman"
                    onClick={e => handleClick(2)}
                  >
                    여성
                  </DefaultBt>
                </GenderBtWrap>
              </div>
            </JaddGenderWrap>
            <br />
            <JaddNickNameWrap>
              <label>닉네임</label>
              <JaddNickNameInner>
                <input
                  type="text"
                  name="nickname"
                  value={todo.nickname}
                  className="JaddNickName"
                  placeholder="사용할 닉네임을 입력하세요."
                  onChange={e => handleChange(e)}
                ></input>
                <DefaultBt
                  className="JaddNickName-Bt"
                  onClick={e => handleClick()}
                >
                  중복확인
                </DefaultBt>
              </JaddNickNameInner>
            </JaddNickNameWrap>
            <br />
            <JaddNumberWrap>
              <label>휴대폰 번호</label>
              <input
                type="text"
                name="number"
                value={todo.number}
                className="JaddNumber"
                placeholder="휴대폰 번호를 입력하세요."
                onChange={e => handleChange(e)}
              ></input>
            </JaddNumberWrap>
            <br />
            <JaddAddressWrap>
              <label>주소</label>
              <input
                className="JaddAddress"
                placeholder="거주 중인 주소를 입력하세요."
              ></input>
            </JaddAddressWrap>
            <JaddAddressBts>
              <DefaultBt
                type="button"
                className="Jadd-Join-Bt"
                onClick={() => {
                  handleClickJoin();
                }}
              >
                회원가입
              </DefaultBt>
              <button
                type="button"
                className="cancel-button"
                onClick={() => {
                  handleClickCancel();
                }}
              >
                취소하기
              </button>
            </JaddAddressBts>
          </div>
        </JaddPageInfo>
        <div>
          <Outlet />
        </div>
      </JaddPageMain>
    </JaddPageWrap>
  );
};
export default JaddPage;
