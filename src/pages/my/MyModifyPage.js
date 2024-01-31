import React, { useEffect, useRef, useState } from "react";
import {
  MyModifyPageButton,
  MyModifyPageForm,
  MyModifyPageInfo,
  MyModifyPageProfile,
  MyModifyPageTitle,
  MyModifyPageWrapper,
  MyMoidfyNicknameCheck,
  MyNickName,
  ProfileImg,
} from "./styles/MyModifyPageStyle";
import Button from "../../components/button/Button";
import {
  API_SERVER_HOST,
  getUserInfo,
  nickNameCheck,
  putUserInfo,
} from "../../api/MyApi";
import useModal from "../../hooks/useModal";
import ResultModal from "../../components/common/ResultModal";
import { useSelector } from "react-redux";

const host = API_SERVER_HOST;

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
  const authState = useSelector(state => state.authSlice);

  const [myProfileData, setMyProfileData] = useState(initialProfile);
  const [selectedImage, setSelectedImage] = useState(null);

  // 업로드 이미지 미리보기 상태 업데이트
  const [image, setImage] = useState(authState.pic);

  const uploadRef = useRef(null);

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

  useEffect(() => {
    // 기존 이미지 URL 초기화
    const initialImageUrl = `${host}/pic/user/${authState.iuser}/${
      authState.pic
    }?v=${Date.now()}`;
    setImage(initialImageUrl);
  }, [authState.pic]);

  // 새 업로드 이미지 미리보기 및 교체
  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImage(previewUrl);
      setSelectedImage(file);
    }
  };

  // 사진 추가 버튼 클릭 시 이미지 파일 선택
  const handleClickImg = () => {
    uploadRef.current.click();
  };

  // 글 작성 시 내용 업데이트
  const handleChange = e => {
    myProfileData[e.target.name] = e.target.value;
    setMyProfileData({ ...myProfileData });
  };

  // 유저 정보 수정 (PUT)
  const handleChangeUser = () => {
    const formData = new FormData();
    const dto = new Blob(
      [
        JSON.stringify({
          nickname: myProfileData.nickname,
          address: myProfileData.address,
          tel: myProfileData.tel,
        }),
      ],
      { type: "application/json" },
    );

    formData.append("dto", dto);
    formData.append("pic", selectedImage);

    putUserInfo({
      putUserForm: formData,
      successFn: successPut,
      failFn: failPut,
      errorFn: errorPut,
    });
  };
  const successPut = putResult => {
    console.log("프로필 수정 성공", putResult);
  };
  const failPut = putResult => {
    console.log("프로필 수정 실패", putResult);
  };
  const errorPut = putResult => {
    console.log("프로필 수정 서버 오류", putResult);
  };

  // 모달창
  const { useResultModal, openModal, closeModal } = useModal();
  const handleDeleteUser = () => {
    openModal();
  };

  // 닉네임 중복확인
  const [nickname, setNickname] = useState();
  const [isAvailable, setIsAvailable] = useState(null);

  const handleCheckAvailability = async e => {
    e.preventDefault();
    try {
      const response = await nickNameCheck({ iNickCheck: nickname });
      const isAvailable = response.data;
      setIsAvailable(isAvailable ? 1 : 0);
    } catch (error) {
      console.error("닉네임 중복 확인 오류", error);
    }
  };

  return (
    <MyModifyPageWrapper>
      <MyModifyPageTitle>
        <span>프로필 수정</span>
      </MyModifyPageTitle>
      <MyModifyPageProfile>
        <ProfileImg>
          <img src={image} alt="프로필 사진 미리보기" />
          <div onClick={handleClickImg}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/profile_camera.svg`}
              alt="업로드 버튼"
            />
          </div>
          <input
            type="file"
            ref={uploadRef}
            style={{ display: "none" }}
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
        <input
          type="number"
          name="tel"
          value={myProfileData.tel}
          placeholder="변경할 휴대폰 번호를 입력하세요."
          onChange={e => handleChange(e)}
        />
        <p>닉네임</p>
        <div onClick={handleCheckAvailability}>
          <Button bttext="중복 확인"></Button>
        </div>
        <MyMoidfyNicknameCheck>
          {isAvailable === 1 && (
            <p style={{ color: "green" }}>사용 가능한 닉네임입니다.</p>
          )}
          {isAvailable === 0 && (
            <p style={{ color: "red" }}>이미 사용 중인 닉네임입니다.</p>
          )}
        </MyMoidfyNicknameCheck>
        <input
          type="text"
          name="nickname"
          value={myProfileData.nickname}
          placeholder="변경할 닉네임을 입력하세요."
          onChange={e => handleChange(e)}
        />
        <p>주소</p>
        <div>
          <Button bttext="우편번호 찾기" />
        </div>
        <input
          type="text"
          name="address"
          value={myProfileData.address}
          placeholder="변경할 주소를 입력하세요."
          onChange={e => handleChange(e)}
        />
      </MyModifyPageForm>
      <MyModifyPageButton>
        <div
          onClick={() => {
            handleChangeUser();
          }}
        >
          <Button bttext="회원정보 수정"></Button>
        </div>
        <div onClick={handleDeleteUser}>
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
