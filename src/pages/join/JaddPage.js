import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import TitleHeader from "../../components/titleheader/TitleHeader";
import "../join/JaddPage.css";
import { DefaultBt } from "../../components/button/styles/ButtonStyle";
import { GenderBtWrap, JaddAddressBts, JaddAddressWrap, JaddGenderWrap, JaddMailWrap, JaddMorePwWrap, JaddNameWrap, JaddNickNameInner, JaddNickNameWrap, JaddNicknameInner, JaddNumberWrap, JaddPageImage, JaddPageInfo, JaddPageMain, JaddPageWrap, JaddPwWrap } from "./styles/JaddPageStyle";
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
                className="JoinMail"
                placeholder="@까지 정확하게 입력하세요."
              ></input>
            </JaddMailWrap>
            <br />
            <JaddNameWrap>
              <label>이름</label>
              <input
                className="JaddName"
                placeholder="본인 이름을 입력하세요."
              ></input>
            </JaddNameWrap>
            <br />
            <JaddPwWrap>
              <label>비밀번호</label>
              <input
                className="JaddPw"
                placeholder="비밀번호를 입력하세요.(특수문자 포함 4-8자)"
              ></input>
            </JaddPwWrap>
            <br />
            <JaddMorePwWrap>
              <label>비밀번호 확인</label>
              <input
                className="JaddMorePw"
                placeholder="입력한 비밀번호를 한번 더 확인하세요."
              ></input>
            </JaddMorePwWrap>
            <br />
            <JaddGenderWrap>
              <div className="JaddGender">
                성별
                <GenderBtWrap>
                  <DefaultBt className="gender-bt-man">남성</DefaultBt>
                  <DefaultBt className="gender-bt-woman">여성</DefaultBt>
                </GenderBtWrap>
              </div>
            </JaddGenderWrap>
            <br />
            <JaddNickNameWrap>
              <label>닉네임</label>
              <JaddNickNameInner>
                <input
                  className="JaddNickName"
                  placeholder="사용할 닉네임을 입력하세요."
                ></input>
                <DefaultBt className="JaddNickName-Bt">중복확인</DefaultBt>
              </JaddNickNameInner>
            </JaddNickNameWrap>
            <br />
            <JaddNumberWrap>
              <label>휴대폰 번호</label>
              <input
                className="JaddNumber"
                placeholder="휴대폰 번호를 입력하세요."
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
              <DefaultBt className="Jadd-Join-Bt">회원가입</DefaultBt>
              <button
                type="button"
                className="cancel-button"
                onClick={() => {
                  handleClickJoin();
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
