import React, { useEffect, useState } from "react";
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
import { nickNameCheck, postJadd } from "../../api/loginApi";
// 회원가입 작성 페이지입니다.

const JaddPage = () => {
  const [todo, setTodo] = useState({});
  // const [passCheckError,setPassCheckError] = useState(false)

  const passCheckForm = () => {
    const upw = todo.upw;
    const checkUpw = todo.checkUpw;
    if (upw === checkUpw) {
      return <div>비밀번호가 일치합니다.</div>;
    } else {
      return <div>비밀번호가 일치하지 않습니다.</div>;
    }
  };

  const genderChoice = () => {
    console.log("성별");
  };

  const handleClick = e => {
    todo.gender;

    if (e == 1) {
      todo.gender = "남";
      console.log("남");
    } else if (e == 2) {
      todo.gender = "여";
      console.log("여");
    }
  };

  const handleChange = e => {
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
  };
  const handleClickJadd = () => {
    console.log("회원가입이 완료되었습니다.");
    // console.log(todo.id);
    // console.log(todo.password);

    const email = todo.email;
    const upw = todo.upw;

    const checkUpw = todo.checkUpw;
    const name = todo.name;
    const nickname = todo.nickname;
    // const nicknameCheck = todo.nicknameCheck;
    // const birth = todo.birth
    const gender = todo.gender;
    const address = todo.address;
    const tel = todo.tel;

    const iJadd = {
      pic: "profile image",
      dto: {
        email: email,
        upw: upw,
        checkUpw: checkUpw,
        name: name,
        nickname: nickname,
        gender: gender,
        address: address,
        tel: tel,
      },
    };
    console.log(iJadd);
    // console.log(todo.password);
    // console.log(upw);
    postJadd(iJadd);
  };

  // 닉네임 중복확인
  const [nickname, setNickname] = useState("");
  const [nickCheck, setNickCheck] = useState(null);

  const iNickCheck = () => {
    if (nickname.length >= 3) {
      setNickCheck(true);
    } else {
      setNickCheck(false);
    }
  };

  const handleNicknameChange = e => {
    setNickname(e.target.value);
  };
  const handleNicknameCheck = () => {
    console.log("중복 확인");
  };

  // console.log("테스트");
  // const iNickCheck = { nickname: todo.nickname };
  // nickNameCheck({ iNickCheck });

  // 패스 이동하기
  const navigate = useNavigate();

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
                name="email"
                value={todo.email}
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
            <form action="" method="post" onSubmit="return passCheckForm()">
              <JaddPwWrap>
                <label>비밀번호</label>
                <input
                  type="text"
                  name="upw"
                  value={todo.upw}
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
                  name="checkUpw"
                  value={todo.checkUpw}
                  className="JaddMorePw"
                  placeholder="입력한 비밀번호를 한번 더 확인하세요."
                  onChange={e => handleChange(e)}
                ></input>

                <div className="passCheck">{passCheckForm()}</div>

                <div>
                  {/* {passCheckError && (
                    <label style={{ color: "red" }}>
                      비밀번호가 일치하지 않습니다.
                    </label>
                  )} */}
                </div>
              </JaddMorePwWrap>
            </form>
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
                  onChange={e => handleNicknameChange(e)}
                ></input>

                <DefaultBt
                  className="JaddNickName-Bt"
                  onClick={handleNicknameCheck}
                >
                  중복확인
                </DefaultBt>
              </JaddNickNameInner>
              <div>
                {nickCheck === true && (
                  <p style={{ color: "green" }}>사용 가능</p>
                )}
                {nickCheck === false && (
                  <p style={{ color: "red" }}>사용 불가</p>
                )}
              </div>
            </JaddNickNameWrap>
            <br />
            <JaddNumberWrap>
              <label>휴대폰 번호</label>
              <input
                type="text"
                name="number"
                value={todo.tel}
                className="JaddNumber"
                placeholder="휴대폰 번호를 입력하세요."
                onChange={e => handleChange(e)}
              ></input>
            </JaddNumberWrap>
            <br />
            <JaddAddressWrap>
              <label>주소</label>
              <input
                type="text"
                name="address"
                className="JaddAddress"
                placeholder="거주 중인 주소를 입력하세요."
                onChange={e => handleChange(e)}
              ></input>
            </JaddAddressWrap>
            <JaddAddressBts>
              <DefaultBt
                type="button"
                className="Jadd-Join-Bt"
                onClick={() => {
                  handleClickJadd();
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
