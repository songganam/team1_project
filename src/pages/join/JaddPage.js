import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import TitleHeader from "../../components/titleheader/TitleHeader";
import "../join/JaddPage.css";
import { DefaultBt } from "../../components/button/styles/ButtonStyle";

// 회원가입 작성 페이지입니다.
const JaddPage = () => {
  // 패스 이동하기
  const navigate = useNavigate();

  const handleClickJoin = () => {
    navigate("/join/jread");
  };
  const handleClickCancel = () => {
    navigate("/");
  };

  return (
    <div className="JoinPage-wrap">
      <TitleHeader
        timg="https://picsum.photos/1920/215/?category=meat"
        tname="회원가입"
        tcontent="오늘도 맛있는 고기와 함께하세요"
      ></TitleHeader>
      <div className="JoinPage-main">
        <div className="JoinPage-img">
          <button className="JoinPage-img-button"></button>
        </div>
        <div className="JoinPage-info">
          <div className="Join-mail-wrap">
            <div>
              <label>이메일</label>
              <input
                className="Join-mail"
                placeholder="@까지 정확하게 입력하세요."
              ></input>
            </div>
            <br />
            <div className="Join-name-wrap">
              <label>이름</label>
              <input
                className="Join-name"
                placeholder="본인 이름을 입력하세요."
              ></input>
            </div>
            <br />
            <div className="Join-pw-wrap">
              <label>비밀번호</label>
              <input
                className="Join-pw"
                placeholder="비밀번호를 입력하세요.(특수문자 포함 4-8자)"
              ></input>
            </div>
            <br />
            <div className="Join-morepw-wrap">
              <label>비밀번호 확인</label>
              <input
                className="Join-morepw"
                placeholder="입력한 비밀번호를 한번 더 확인하세요."
              ></input>
            </div>
            <br />
            <div className="Join-gender-wrap">
              <div className="Join-gender">
                성별
                <div className="gender-bt-wrap">
                  <DefaultBt className="gender-bt-man">남성</DefaultBt>
                  <DefaultBt className="gender-bt-woman">여성</DefaultBt>
                </div>
              </div>
            </div>
            <br />
            <div className="Join-nickname-wrap">
              <label>닉네임</label>
              <div className="nickname-inner">
                <input
                  className="Join-nickname"
                  placeholder="사용할 닉네임을 입력하세요."
                ></input>
                <DefaultBt className="nickname-bt">중복확인</DefaultBt>
              </div>
            </div>
            <br />
            <div className="Join-phonenumber-wrap">
              <label>휴대폰 번호</label>
              <input
                className="Join-phonenumber"
                placeholder="휴대폰 번호를 입력하세요."
              ></input>
            </div>
            <br />
            <div className="Join-address-wrap">
              <label>주소</label>
              <input
                className="Join-address"
                placeholder="거주 중인 주소를 입력하세요."
              ></input>
            </div>
            <div className="Join-buttons">
              <DefaultBt className="Join-button">회원가입</DefaultBt>
              <button
                type="button"
                className="cancel-button"
                onClick={() => {
                  handleClickJoin();
                }}
              >
                취소하기
              </button>
            </div>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <div className="JoinPage-footer"></div>
    </div>
  );
};

export default JaddPage;
