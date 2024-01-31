import React, { useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { nickNameCheck, postJadd } from "../../api/joinApi";
import Fetching from "../../components/common/Fetching";
import ResultModal from "../../components/common/ResultModal";
import SelectedModal from "../../components/common/SelectedModal";
import TitleHeader from "../../components/titleheader/TitleHeader";
import useCustomMove from "../../hooks/useCustomMove";
import "../join/JaddPage.css";
import {
  DefaultBt,
  GenderBtWrap,
  ImgSelectBtn,
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
} from "./styles/JaddPageStyle";

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
const JaddPage = () => {
  // const [todo, setTodo] = useState({});

  const [product, setProduct] = useState(initState);
  const [fetching, setFetching] = useState(false);

  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const [image, setImage] = useState(null); // 단일 이미지를 저장하는 상태를 사용합니다.
  const [selectedImage, setSelectedImage] = useState(null);

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
  const [result, setResult] = useState(false);
  const [addResult, setAddResult] = useState(false);
  const [popTitle, setPopTitle] = useState("");
  const [popContent, setPopContent] = useState(false);
  const [popRedirect, setPopRedirect] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // 확인 버튼 클릭 시
  const handleConfirm = product => {
    // 글 등록 로직 실행
    handleClick(product);
    // 모달 닫기
    setShowModal(false);
  };

  const closeModal = () => {
    // 모달창 닫기
    setAddResult(false);
    if (popRedirect === true) {
      // 목록으로 가기
      moveToList({ page: 1 });
    }
  };
  // 취소 버튼 클릭 시
  const handleCancel = () => {
    // 모달 닫기
    setShowModal(false);
  };

  // 글 등록 버튼 클릭 핸들러
  const handleAddClick = () => {
    // 모달 띄우기
    setShowModal(true);
  };

  const successFn = addResult => {
    console.log("글 등록 성공", addResult);
    setFetching(false);
    setAddResult(true);
    setPopTitle("글 등록 성공");
    setPopContent("글 등록에 성공하였습니다.");
    setPopRedirect(true);
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

  const { moveToList } = useCustomMove();

  // 비밀번호 확인
  const passCheckForm = () => {
    const upw = product.upw;
    const checkUpw = product.checkUpw;
    if (upw === checkUpw) {
      return <div>비밀번호가 일치합니다.</div>;
    } else {
      return <div>비밀번호가 일치하지 않습니다.</div>;
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

  // const handleClickJadd = () => {
  //   console.log("회원가입이 완료되었습니다.");
  //   // console.log(todo.id);
  //   // console.log(todo.password);

  //   const email = product.email;
  //   const upw = product.upw;

  //   const checkUpw = product.checkUpw;
  //   const name = product.name;
  //   const nickname = product.nickname;
  //   const gender = product.gender;
  //   const address = product.address;
  //   const inputValue = product.tel;

  //   const iJadd = {
  //     pic: "profile image",
  //     dto: {
  //       email: email,
  //       upw: upw,
  //       checkUpw: checkUpw,
  //       name: name,
  //       nickname: nickname,
  //       birth: birthday,
  //       gender: gender,
  //       address: address,
  //       tel: inputValue,
  //     },
  //   };
  //   console.log(iJadd);
  //   // console.log(todo.password);
  //   // console.log(upw);
  //   postJadd(iJadd);
  // };

  // 닉네임 중복확인
  const [nickname, setNickname] = useState();
  const [isAvailable, setIsAvailable] = useState(null);

  // 이거는 나름 규칙으로 하면되죠
  // setIsAvailable(nickname.length >= 3);
  const handleCheckAvailability = iNickCheck => {
    // const iNickCheck = nickname;
    console.log(nickname);
    nickNameCheck({ iNickCheck: nickname });
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
  return (
    <JaddPageWrap>
      {fetching ? <Fetching /> : null}
      <TitleHeader
        timg="https://picsum.photos/1920/215/?category=meat"
        tname="회원가입"
        tcontent="오늘도 맛있는 고기와 함께하세요"
      ></TitleHeader>
      <JaddPageMain>
        <JaddPageImage>
          <div>
            <div className="JaddPage-img-button" onClick={handleClickImg}>
              <div className="inputBox">
                <input
                  type="file"
                  ref={uploadRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <div className="previewBox">
                  <ImgSelectBtn />
                  {image && (
                    <img
                      src={image}
                      alt={`미리보기`}
                      style={{
                        width: "280px",
                        height: "280px",
                        cursor: "pointer",
                        borderRadius: "250px",
                      }}
                      onClick={deleteImage}
                    />
                  )}
                </div>
              </div>
            </div>

          )}
          {/* 보이지 않는 파일 선택 버튼 */}
          <input
            // className="JaddPage-img-button"
            type="file"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />

          {/* 커스텀 스타일이 적용된 버튼 */}
          {/* <button
            className="JaddPage-img-button "
            // onClick={handleButtonClick}
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
                  type="text"
                  name="upw"
                  value={product.upw}
                  className="JaddPw"
                  placeholder="비밀번호를 입력하세요.(특수문자 포함 4-8자)"
                  onChange={e => handleChange(e)}
                  maxLength="8"
                ></input>
              </JaddPwWrap>
              <br />
              <JaddMorePwWrap>
                <label>비밀번호 확인</label>
                <input
                  type="text"
                  name="checkUpw"
                  value={product.checkUpw}
                  className="JaddMorePw"
                  placeholder="입력한 비밀번호를 한번 더 확인하세요."
                  onChange={e => handleChange(e)}
                  maxLength="8"
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
                ></input>

                <DefaultBt
                  className="JaddNickName-Bt"
                  onClick={handleCheckAvailability}
                >
                  중복확인
                </DefaultBt>
              </JaddNickNameInner>
              <NicknameCheck>
                {isAvailable === true && (
                  <p style={{ color: "green" }}>사용 가능한 닉네임입니다.</p>
                )}
                {isAvailable === false && (
                  <p style={{ color: "red" }}>이미 사용 중인 닉네임입니다.</p>
                )}
              </NicknameCheck>
            </JaddNickNameWrap>
            <br />

            <JaddNumberWrap>
              <label>휴대폰 번호</label>
              <input
                type="text"
                name="tel"
                value={product.tel}
                className="JaddNumber"
                placeholder="휴대폰 번호를 입력하세요."
                onChange={e => handleChange(e)}
                maxLength="13"
                // onKeyDown={e => {
                //   if (
                //     (e.key === "Backspace" || e.key === "Delete") &&
                //     e.target.selectionStart < phoneNumber.length
                //   ) {
                //     setPhoneNumber(prevPhoneNumber =>
                //       prevPhoneNumber.slice(0, prevPhoneNumber.length - 1),
                //     );
                //   }
                // }}
              />
            </JaddNumberWrap>
            <br />
            <JaddBirthWrap>
              <label>생년월일</label>
              <input
                type="text"
                name="birth"
                value={product.birth}
                className="JaddBirth"
                placeholder="YYYY/MM/DD"
                onChange={e => handleChange(e)}
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
                className="Jadd-Join-Bt"
                onClick={() => {
                  handleAddClick();
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
      {showModal ? (
        <SelectedModal
          title="글 등록 확인"
          content="글을 등록하시겠습니까?"
          confirmFn={() => handleConfirm(product)}
          cancelFn={handleCancel}
        />
      ) : null}
      {addResult ? (
        <ResultModal
          title={popTitle}
          content={popContent}
          callFn={closeModal}
        />
      ) : null}
    </JaddPageWrap>
  );
};
export default JaddPage;
