import React from "react";
import {
  MyModifyPageButton,
  MyModifyPageForm,
  MyModifyPageInfo,
  MyModifyPageProfile,
  MyModifyPageTitle,
  MyModifyPageWrapper,
  MyNickName,
  ProfileImg,
} from "./styles/MyModifyPageStyle";
import Button from "../../components/button/Button";

// 프로필 수정 페이지
const MyModifyPage = () => {
  // input 휴대폰 번호 부분, 11자리 숫자만 입력 가능하도록 제한
  const handlePhoneNumberChange = e => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 11);
    e.target.value = value;
  };

  return (
    <MyModifyPageWrapper>
      <MyModifyPageTitle>
        <span>프로필 수정</span>
      </MyModifyPageTitle>
      <MyModifyPageProfile>
        <ProfileImg>
          <img src="https://picsum.photos/280/280/?category=meat" alt=""></img>
          <button>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/profile_camera.svg`}
            ></img>
          </button>
        </ProfileImg>
        <MyNickName>닉네임</MyNickName>
      </MyModifyPageProfile>
      <MyModifyPageInfo>
        <span>이름</span>
        <span>성별</span>
        <span>생년월일</span>
        <span>이메일</span>
      </MyModifyPageInfo>
      <MyModifyPageForm>
        <span>휴대폰 번호</span>
        <input
          type="text"
          placeholder="변경할 휴대폰 번호를 입력하세요."
          onChange={handlePhoneNumberChange}
        ></input>
        <span>닉네임</span>
        <input type="text" placeholder="변경할 닉네임을 입력하세요."></input>
        <span>현재주소</span>
        <input type="text" placeholder="변경할 주소를 입력하세요."></input>
      </MyModifyPageForm>
      <MyModifyPageButton>
        <Button bttext="저장하기"></Button>
        <Button bttext="회원탈퇴"></Button>
      </MyModifyPageButton>
    </MyModifyPageWrapper>
  );
};

export default MyModifyPage;
