import React, { useEffect, useState } from "react";
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
import { getUserInfo, putUserInfo } from "../../api/MyApi";
import useModal from "../../hooks/useModal";
import ResultModal from "../../components/common/ResultModal";

// 프로필 정보 초기값
const initialProfile = {
  email: "",
  name: "",
  nickname: "",
  birth: "",
  gender: "",
  address: "",
  pic: "",
  tel: "",
};

// 프로필 수정 페이지
const MyModifyPage = () => {
  const [myProfileData, setMyProfileData] = useState(initialProfile);
  const [fetching, setFetching] = useState(false);
  const [result, setResult] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modifiedNickname, setModifiedNickname] = useState("");
  const [modifiedAddress, setModifiedAddress] = useState("");
  const [modifiedPhoneNumber, setModifiedPhoneNumber] = useState("");
  const [isModified, setIsModified] = useState(false);

  // 유저 정보 불러오기 (GET)
  useEffect(() => {
    const param = {};
    getUserInfo({ param, successFn, failFn, errorFn });
  }, []);

  const successFn = result => {
    setMyProfileData(result);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  // 프로필 이미지 업로드
  const handleImageChange = e => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  // input 휴대폰 번호 부분 (11자리 숫자만 입력 가능하도록 제한)
  const handlePhoneNumberChange = e => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 11);
    e.target.value = value;
  };

  // 유저 정보 수정 (PUT) 안됨 고쳐야됨 뭘고쳐하지
  const handleChangeUser = async () => {
    try {
      const userData = {
        pic: "", // 이미지는 스웨거에 없어서 빈 문자열로 처리
        dto: {
          nickname: isModified ? modifiedNickname : myProfileData.nickname,
          address: isModified ? modifiedAddress : myProfileData.address,
          pic: "", // 이미지는 스웨거에 없어서 빈 문자열로 처리
          tel: isModified ? modifiedPhoneNumber : myProfileData.tel,
        },
      };

      setFetching(true);
      await putUserInfo({
        myProfileData: userData,
        successFn: successFnMyModify,
        failFn: failFnMyModify,
        errorFn: errorFnMyModify,
      });

      const getUserInfoResult = await getUserInfo({ param: {} });

      if (getUserInfoResult) {
        setMyProfileData(getUserInfoResult);
        console.log(
          "프로필 수정 후 유저 정보 다시 불러오기 성공",
          getUserInfoResult,
        );
      } else {
        console.log("프로필 수정 후 유저 정보 다시 불러오기 실패");
      }
    } catch (error) {
      console.log("프로필 수정 오류", error);
    } finally {
      setFetching(false);
    }
  };

  const successFnMyModify = result => {
    console.log("프로필 수정 성공", result);
    setResult(true);
  };

  const failFnMyModify = result => {
    console.log("프로필 수정 실패", result);
    setResult(false);
  };

  const errorFnMyModify = result => {
    console.log("프로필 수정 실패", result);
    setResult(true);
  };
  // 여기까지 정보 수정 ㅋㅋㅋ 안됨...

  // 모달창
  const { useResultModal, openModal, closeModal } = useModal();
  const handleDeleteUser = () => {
    openModal();
  };

  return (
    <MyModifyPageWrapper>
      <MyModifyPageTitle>
        <span>프로필 수정</span>
      </MyModifyPageTitle>
      <MyModifyPageProfile>
        <ProfileImg>
          <img src="" alt=""></img>
          <label htmlFor="imageUpload">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/profile_camera.svg`}
              alt="Upload Icon"
            />
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </ProfileImg>
        <MyNickName>{myProfileData.nickname}</MyNickName>
      </MyModifyPageProfile>
      <MyModifyPageInfo>
        <p>이름</p>
        <span>{myProfileData.name}</span>
        <p>성별</p>
        <span>{myProfileData.gender}</span>
        <p>생년월일</p>
        <span>{myProfileData.birth}</span>
        <p>이메일</p>
        <span>{myProfileData.email}</span>
      </MyModifyPageInfo>
      <MyModifyPageForm>
        <p>휴대폰 번호</p>
        <span>{isModified ? modifiedPhoneNumber : myProfileData.tel}</span>
        <input
          type="text"
          placeholder="변경할 휴대폰 번호를 입력하세요."
          onChange={handlePhoneNumberChange}
        />
        <p>닉네임</p>
        <span>{isModified ? modifiedNickname : myProfileData.nickname}</span>
        <input
          type="text"
          placeholder="변경할 닉네임을 입력하세요."
          value={modifiedNickname}
          onChange={e => setModifiedNickname(e.target.value)}
        />
        <p>주소</p>
        <span>{isModified ? modifiedAddress : myProfileData.address}</span>
        <Button bttext="우편번호 찾기" />
        <input type="text" placeholder="변경할 주소를 입력하세요." />
      </MyModifyPageForm>
      <MyModifyPageButton>
        <div
          onClick={() => {
            handleChangeUser();
          }}
        >
          <Button bttext="저장하기"></Button>
        </div>
        <div
          onClick={() => {
            handleDeleteUser();
          }}
        >
          <Button bttext="회원탈퇴"></Button>
        </div>
        {useResultModal && (
          <ResultModal
            title="회원 탈퇴"
            content="모든 회원 정보가 삭제됩니다."
            callFn={() => {
              closeModal();
            }}
          />
        )}
      </MyModifyPageButton>
    </MyModifyPageWrapper>
  );
};

export default MyModifyPage;
