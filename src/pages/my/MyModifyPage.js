import React, { useEffect, useRef, useState } from "react";
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
  const [image, setImage] = useState();
  // 교체 할 이미지 상태 업데이트
  const [replaceImg, setRePlaceImg] = useState(null);
  // 이미지 삭제 정보 상태
  const [deletedImageIds, setDeletedImageIds] = useState([]);
  const uploadRef = useRef(null);
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

  useEffect(() => {
    // 기존 이미지 URL 초기화
    const initialImages = pic => ({
      url: `${host}/pic/user/${authState.iuser}/${authState.pic}`,
    });
    setImage(initialImages);
  }, [myProfileData.pics, myProfileData.iboard]);

  // 프로필 이미지 업로드
  const handleImageChange = e => {
    const file = e.target.files[0];
    setSelectedImage(file);
    const newFiles = file => ({
      // 각 사진에게 특별한 주소 생성
      url: URL.createObjectURL(file),
      file, // 새로운 파일 정보를 추가합니다.
      isNew: true, // 새 이미지임을 표시합니다.
    });
    setImage(prevImages => [...prevImages, ...newFiles]);
  };

  // input 휴대폰 번호 부분 (11자리 숫자만 입력 가능하도록 제한)
  const handlePhoneNumberChange = e => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 11);
    e.target.value = value;
  };

  // 유저 정보 수정 (PUT)
  const handleChangeUser = (pic, nickname, address, tel) => {
    const putUserForm = {
      pic: pic,
      dto: {
        nickname: nickname,
        address: address,
        pic: pic,
        tel: tel,
      },
    };
    putUserInfo({ putUserForm, successFn, failFn, errorFn });
    console.log(putUserForm);
  };

  // 모달창
  const { useResultModal, openModal, closeModal } = useModal();
  const handleDeleteUser = () => {
    openModal();
  };

  // // const [nickname, setNickname] = useState();
  // const handleCheckAvailability = iNickCheck => {
  //   // const iNickCheck = nickname;
  //   nickNameCheck({ iNickCheck: nickname });
  // };

  return (
    <MyModifyPageWrapper>
      <MyModifyPageTitle>
        <span>프로필 수정</span>
      </MyModifyPageTitle>
      <MyModifyPageProfile>
        <ProfileImg>
          <img
            src={`${host}/pic/user/${authState.iuser}/${authState.pic}`}
            alt="프로필 사진"
          ></img>
          <label htmlFor="imageUpload">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/profile_camera.svg`}
              alt="업로드 버튼"
            />
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
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
        <span>{isModified ? modifiedPhoneNumber : myProfileData.tel}</span>
        <input
          type="text"
          placeholder="변경할 휴대폰 번호를 입력하세요."
          onChange={handlePhoneNumberChange}
        />
        <p>닉네임</p>
        <span>{isModified ? modifiedNickname : myProfileData.nickname}</span>
        <Button bttext="중복 확인"></Button>
        <input
          type="text"
          placeholder="변경할 닉네임을 입력하세요."
          value={modifiedNickname}
          onChange={e => setModifiedNickname(e.target.value)}
          // onClick={handleCheckAvailability}
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
