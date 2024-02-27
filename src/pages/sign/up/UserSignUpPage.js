import { useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import "../up/styles/UserSignUpStyles.css";

import { nickNameCheck, postJadd } from "../../../api/joinApi";
import Fetching from "../../../components/common/Fetching";
import ResultModal from "../../../components/common/ResultModal";
import SelectedModal from "../../../components/common/SelectedModal";
import useCustomHook from "../../../components/meat/hooks/useCustomHook";
import TitleHeader from "../../../components/titleheader/TitleHeader";
import useCustomMove from "../../../hooks/useCustomMove";
import {
  DefaultBt,
  GenderBtWrap,
  JaddAddressBts,
  JaddAddressWrap,
  JaddBirthWrap,
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
  NicknameCheck,
} from "./styles/UserSignUpStyles";

const initState = {
  pic: "",
  email: "",
  upw: "",
  checkUpw: "",
  name: "",
  nickname: "",
  birth: "",
  gender: "",
  address: "",
  tel: "",
};
// 회원가입 작성 페이지입니다.
const UserSignUpPage = () => {
  // const [todo, setTodo] = useState({});

  const [product, setProduct] = useState(initState);
  const [fetching, setFetching] = useState(false);

  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    setMessage(""); // (비밀번호 확인 메시지) 사용자가 다시 입력할 때 메시지 초기화
  };

  const [image, setImage] = useState(null); // 단일 이미지를 저장하는 상태를 사용합니다.
  const [selectedImage, setSelectedImage] = useState(null);
  const {
    isModal,
    openModal,
    closeModal,
    isSelectModal,
    openSelectModal,
    confirmSelectModal,
    cancelSelectModal,
  } = useCustomHook();

  const uploadRef = useRef();
  const handleClickImg = () => {
    uploadRef.current.click();
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImage(previewUrl);
      setSelectedImage(file);
    }
  };

  const deleteImage = () => {
    setImage(null);
  };

  console.log("이1", product.email);
  console.log("이2", product.upw);
  console.log("이3", product.checkUpw);
  console.log("이4", product.name);
  console.log("이5", product.nickname);
  console.log("이6", product.birth);
  console.log("이7", product.gender);
  console.log("이8", product.address);
  console.log("이9", product.tel);

  const handleClick = async product => {
    const formData = new FormData();
    const dto = new Blob(
      [
        JSON.stringify({
          email: product?.email,
          upw: product?.upw,
          checkUpw: product?.checkUpw,
          name: product?.name,
          nickname: product?.nickname,
          birth: product?.birth,
          gender: product?.gender,
          address: product?.address,
          tel: product?.tel,
        }),
      ],
      // JSON 형식으로 설정
      { type: "application/json" },
    );
    formData.append("dto", dto);
    formData.append("pic", selectedImage);

    postJadd({ product: formData, successFn, failFn, errorFn });
  };

  // 모달창
  // 회원 가입 시 예외처리 결과 상태 업데이트
  const [result, setResult] = useState(false);
  // 회원가입 시 모달창 관련
  const [addResult, setAddResult] = useState(false);
  // resultModal 관련
  const [popTitle, setPopTitle] = useState("");
  const [popContent, setPopContent] = useState(false);
  // 페이지 이동 관련
  const [popRedirect, setPopRedirect] = useState(false);
  // selectedModal 띄우기 상태 업데이트
  const [showModal, setShowModal] = useState(false);

  // 확인 버튼 클릭 시
  const handleConfirm = product => {
    // 글 등록 로직 실행
    if (product.email === "") {
      openModal("이메일 필수 입력", "이메일을 입력해주세요.", closeModal);
    } else if (product.upw === null) {
      openModal("비밀번호 4~8자 이내", "비밀번호를 입력해주세요.", closeModal); // c,k
    } else if (product.checkUpw === null) {
      openModal(
        "비밀번호 확인 필수 입력",
        "비밀번호를 확인해주세요.",
        closeModal,
      ); // ck
    } else if (product.name === "") {
      openModal("이름 필수 입력", "이름을 입력해주세요.", closeModal);
    } else if (product.nickname === "") {
      openModal("닉네임 3~6 이내", "닉네임을 입력해주세요.", closeModal);
    } else if (product.birth === "") {
      openModal("생년월일 필수 입력", "생년월일 입력해주세요.", closeModal);
    } else if (product.gender === "") {
      openModal("성별 필수 선택", "성별을 선택해주세요.", closeModal);
    } else if (product.address === "") {
      openModal("주소 필수 입력", "주소를 입력해주세요.", closeModal);
    } else if (product.tel === "") {
      openModal(
        "휴대폰 번호 필수 입력",
        "휴대폰 번호를 입력해주세요.",
        closeModal,
      );
    } else {
      handleClick(product);
    }
  };

  const { moveToModify } = useCustomMove();

  // 회원가입 등록 시 resultModal 닫기 callFn
  const closeJaddModal = () => {
    // 모달창 닫기
    setAddResult(false);
    if (popRedirect === true) {
      // 메인 페이지로 가기
      moveToModify({});
    }
  };
  // 회원가입 등록 시 예외처리용 resultModal 닫기 callFn
  const closeException = () => {
    setResult(false);
  };
  // selectedModal 취소 버튼 클릭 시
  const handleCancel = () => {
    setShowModal(false);
  };

  // 글 등록 버튼 클릭 핸들러
  const handleAddClick = () => {
    openSelectModal(
      "회원가입",
      "회원가입을 하시겠습니까?",
      () => {
        handleConfirm(product), confirmSelectModal();
      },
      cancelSelectModal,
    );
  };

  const successFn = addResult => {
    console.log("글 등록 성공", addResult);
    openModal("회원가입 완료", "회원가입이 완료 되었습니다.", () => {
      closeModal, navigate("/");
    });
  };
  const failFn = addResult => {
    console.log("글 등록 실패", addResult);
    setFetching(false);
    setAddResult(false);
    setPopTitle("글 등록 실패");
    setPopContent("오류가 발생하였습니다. 잠시 후 다시 시도해주세요");
    setPopRedirect(false);
  };
  const errorFn = addResult => {
    console.log("글 등록 실패", addResult);
    setFetching(false);
    setAddResult(true);
    setPopTitle("서버 오류");
    setPopContent("서버가 불안정합니다. 관리자에게 문의해주세요.");
    setPopRedirect(false);
  };

  // 비밀번호 확인 메시지
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const handleValiation = () => {
    if (product.upw === product.checkUpw) {
      setMessage("비밀번호가 일치합니다.");
      setMessageColor("green");
    } else {
      setMessage("비밀번호가 일치하지 않습니다.");
      setMessageColor("red");
    }
  };

  // 성별 선택
  const genderChoice = () => {
    console.log("성별");
  };
  const [genderSelect, setGenderSelect] = useState(0);
  const handleGenderClick = e => {
    product.gender;
    if (e == 1) {
      product.gender = "남";
      setGenderSelect(1);

      console.log("남");
    } else if (e == 2) {
      product.gender = "여";
      console.log("여");
      setGenderSelect(2);
    }
  };

  // 닉네임 중복확인
  // 닉네임 중복확인
  const [nickname, setNickname] = useState();
  const [isAvailable, setIsAvailable] = useState(null);

  // 이거는 나름 규칙으로 하면되죠
  // setIsAvailable(nickname.length >= 3);
  // console.log("테스트", product.nickname);
  const handleCheckAvailability = iNickCheck => {
    // const iNickCheck = nickname;
    console.log("니크네임", product.nickname);
    nickNameCheck({
      iNickCheck: product.nickname,
      successNickFn,
      failNickFn,
      errorNickFn,
    });
  };

  const successNickFn = () => {
    openModal("닉네임 중복확인", "사용가능한 닉네임 입니다.", closeModal);
  };
  const failNickFn = () => {
    console.log("페일");
  };
  const errorNickFn = error => {
    if (error.response && error.response.status === 400) {
      openModal("닉네임 중복확인", "중복된 닉네임입니다.", closeModal);
    }
    // console.log("에러임 ㄹㅇㅋㅋ");
  };
  // 휴대폰번호 하이픈 자동입력
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = e => {
    // 입력값에서 숫자만 추출
    const inputValue = e.target.value.replace(/\D/g, "");

    // 전화번호 형식에 맞게 하이픈 추가
    const formattedPhoneNumber = formatPhoneNumber(inputValue);

    // 상태 업데이트
    setPhoneNumber(formattedPhoneNumber);
  };

  const formatPhoneNumber = value => {
    // 000-0000-0000 형식으로 포맷팅
    const regex = /^(\d{3})(\d{0,4})(\d{0,4})$/;
    const matches = value.match(regex);

    if (matches) {
      return `${matches[1]}${matches[2] ? "-" + matches[2] : ""}${
        matches[3] ? "-" + matches[3] : ""
      }`;
    }
    // 일치하지 않는 경우 그대로 반환
    return value;
  };

  // 생년월일 형식
  const [birthday, setBirthday] = useState("");

  const handleBirthChange = event => {
    // 입력값에서 숫자만 추출
    const inputValue = event.target.value.replace(/\D/g, "");

    // 생년월일 형식으로 변환
    const formattedBirthday = inputValue.replace(
      /(\d{4})(\d{0,2})(\d{0,2})/,
      (match, p1, p2, p3) => {
        let result = p1;
        if (p2) {
          result += `/${p2}`;
        }
        if (p3) {
          result += `/${p3}`;
        }
        return result;
      },
    );

    // 상태 업데이트
    setBirthday(formattedBirthday);
  };

  // 패스 이동하기
  const navigate = useNavigate();

  const handleClickCancel = () => {
    navigate("/");
  };

  const callModal = () => {
    openModal("테스트", "테스트입니다", closeModal);
  };

  return (
    <JaddPageWrap>
      {fetching ? <Fetching /> : null}
      {isModal.isOpen && (
        <ResultModal
          title={isModal.title}
          content={isModal.content}
          callFn={isModal.callFn}
        />
      )}
      {isSelectModal.isOpen && (
        <SelectedModal
          title={isSelectModal.title}
          content={isSelectModal.content}
          confirmFn={isSelectModal.confirmFn}
          cancelFn={isSelectModal.cancelFn}
        />
      )}
      <TitleHeader
        timg={`${process.env.PUBLIC_URL}/assets/images/join_header.png`}
        tname="회원가입"
        tcontent="오늘도 맛있는 고기와 함께하세요"
      ></TitleHeader>
      <JaddPageMain>
        <JaddPageImage>
          {/* 프로필 사진 미리 보기 */}
          <div className="previewBox">
            {image ? (
              <img src={image} alt="프로필미리보기" />
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/user_profile.png`}
                alt={`미리보기`}
                onClick={deleteImage}
              />
            )}
          </div>

          {/* 파일 업로드 버튼 */}
          <div className="uploadBox" onClick={handleClickImg}>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/profile_camera.svg`}
                alt="업로드 버튼"
              />
              <input
                type="file"
                ref={uploadRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* 커스텀 스타일이 적용된 버튼 */}
          {/* <button
            className="JaddPage-img-button "

          ></button> */}
        </JaddPageImage>
        <JaddPageInfo>
          <div className="JaddMailInfo">
            <JaddMailWrap>
              <label>이메일</label>
              <input
                type="text"
                name="email"
                value={product.email}
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
                value={product.name}
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
                  type="password"
                  name="upw"
                  value={product.upw}
                  className="JaddPw"
                  placeholder="비밀번호를 입력하세요.(특수문자 포함 4-8자)"
                  onChange={e => handleChange(e)}
                  maxLength="8"
                  minLength="4"
                />
              </JaddPwWrap>
              <br />
              <JaddMorePwWrap>
                <label>비밀번호 확인</label>
                <input
                  type="password"
                  name="checkUpw"
                  value={product.checkUpw}
                  className="JaddMorePw"
                  placeholder="입력한 비밀번호를 한번 더 확인하세요."
                  onChange={e => handleChange(e)}
                  maxLength="8"
                  minLength="4"
                  onBlur={handleValiation}
                />
                {message !== "" &&
                  product.upw !== "" &&
                  product.checkUpw !== "" && (
                    <div
                      style={{
                        color: messageColor,
                        fontSize: "14px",
                        paddingTop: "5px",
                      }}
                    >
                      {message}
                    </div>
                  )}
              </JaddMorePwWrap>
            </form>
            <br />
            <JaddGenderWrap>
              <div className="JaddGender">
                성별
                <GenderBtWrap>
                  <DefaultBt
                    type="button"
                    name="gender"
                    className="gender-bt-man"
                    onClick={e => handleGenderClick(1)}
                    clicked={product.gender === "남"}
                    // 성별={1}
                  >
                    <span>남성</span>
                  </DefaultBt>
                  <DefaultBt
                    type="button"
                    name="gender"
                    className="gender-bt-woman"
                    onClick={e => handleGenderClick(2)}
                    clicked={product.gender === "여"}
                  >
                    <span>여성</span>
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
                  value={product.nickname}
                  className="JaddNickName"
                  placeholder="사용할 닉네임을 입력하세요."
                  onChange={e => handleChange(e)}
                  maxLength="6"
                  minLength="1"
                ></input>

                <DefaultBt
                  className="JaddNickName-Bt"
                  onClick={handleCheckAvailability}
                >
                  중복확인
                </DefaultBt>
              </JaddNickNameInner>
              <NicknameCheck>
                {isAvailable === 1 && (
                  <p style={{ color: "green", paddingTop: "5px" }}>
                    사용 가능한 닉네임입니다.
                  </p>
                )}
                {isAvailable === 0 && (
                  <p style={{ color: "red", paddingTop: "5px" }}>
                    이미 사용 중인 닉네임입니다.
                  </p>
                )}
              </NicknameCheck>
            </JaddNickNameWrap>
            <br />

            <JaddNumberWrap>
              <label>휴대폰 번호</label>
              <input
                type="text"
                name="tel"
                value={product.tel.replace(/(\d{3})(\d{4})(\d{3})/, "$1-$2-$3")}
                className="JaddNumber"
                placeholder="휴대폰 번호를 입력하세요."
                onChange={e => {
                  let input = e.target.value.replace(/[^0-9]/g, "");
                  let event = {
                    target: {
                      name: e.target.name,
                      value: input,
                    },
                  };
                  handleChange(event);
                }}
                maxLength="13"
              />
            </JaddNumberWrap>
            <br />
            <JaddBirthWrap>
              <label>생년월일</label>
              <input
                type="text"
                name="birth"
                value={product.birth.replace(
                  /(\d{4})(\d{2})(\d{2})/,
                  "$1/$2/$3",
                )}
                className="JaddBirth"
                placeholder="YYYY/MM/DD"
                onChange={e => {
                  let input = e.target.value.replace(/[^0-9]/g, "");
                  let event = {
                    target: {
                      name: e.target.name,
                      value: input,
                    },
                  };
                  handleChange(event);
                }}
                maxLength="10"
              />
            </JaddBirthWrap>
            <br />
            <JaddAddressWrap>
              <label>주소</label>
              <input
                type="text"
                name="address"
                value={product.address}
                className="JaddAddress"
                placeholder="거주 중인 주소를 입력하세요."
                onChange={e => handleChange(e)}
              ></input>
            </JaddAddressWrap>
            <JaddAddressBts>
              <DefaultBt
                type="button"
                className="join-button"
                onClick={handleAddClick}
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
export default UserSignUpPage;
