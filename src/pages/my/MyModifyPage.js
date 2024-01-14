import React from "react";
import {
  MyModifyPageButton,
  MyModifyPageForm,
  MyModifyPageProfile,
  MyModifyPageTitle,
  MyModifyPageWrapper,
  MyNickName,
  ProfileImg,
} from "./styles/MyModifyPageStyle";
import Button from "../../components/button/Button";

// 프로필 수정 페이지
const MyModifyPage = () => {
  return (
    <MyModifyPageWrapper>
      <MyModifyPageTitle>
        <span>프로필 수정</span>
      </MyModifyPageTitle>
      <MyModifyPageProfile>
        <ProfileImg>
          <img src="https://picsum.photos/280/280/?category=meat" alt=""></img>
          <button>사진수정버튼</button>
        </ProfileImg>
        <MyNickName>닉네임</MyNickName>
      </MyModifyPageProfile>
      <MyModifyPageForm>
        <span>이름</span>
        <span>성별</span>
        <span>생년월일</span>
        <span>이메일</span>
        <span>휴대폰 번호</span>
        <input></input>
        <span>닉네임</span>
        <input></input>
        <span>거주지</span>
        <input></input>
        <input></input>
      </MyModifyPageForm>
      <MyModifyPageButton>
        <Button bttext="저장하기"></Button>
        <Button bttext="회원탈퇴"></Button>
      </MyModifyPageButton>
    </MyModifyPageWrapper>
  );
};

export default MyModifyPage;
