import React, { useRef, useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { getCoord, postBusiNum } from "../../api/meatApi";
import EmptyModal from "../../components/common/EmptyModal";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import TitleHeader from "../../components/titleheader/TitleHeader";
import {
  DefaultBt,
  JaddAddressBts,
  JaddMorePwWrap,
  JaddNameWrap,
  JaddNickNameInner,
  JaddNickNameWrap,
  JaddPageImage,
  JaddPageInfo,
  JaddPageMain,
  JaddPageWrap,
  JaddPwWrap,
} from "./styles/JaddPageStyle";
import {
  CateSelectWrap,
  SelectMeatItem,
  SelectMeatWrap,
  SelectedCate,
} from "./styles/AdminSignUpStyles";
import RadioInput from "../../components/adminInfo/RadioInput";
import { BoxInnerStyle } from "../../components/adminInfo/styles/ModifyStyle";

const initState = {
  id: "",
  upw: "",
  checkUpw: "",
  num: "",
  name: "",
  shopName: "",
  x: "",
  y: "",
  location: "",
  imeat: 0,
};
const AdminJoinPage = () => {
  // @COMMENT join-form-data , fetching state
  const [signUpData, setSignUpData] = useState(initState);
  const [ckeckFlag, setCheckFlag] = useState(false);
  const [fetch, setFetching] = useState(false);
  const {
    openModal,
    closeModal,
    isModal,
    isSelectModal,
    openSelectModal,
    cancelSelectModal,
    confirmSelectModal,
    isEmptyModal,
    openEmptyModal,
    closeEmptyModal,
  } = useCustomHook();

  const handleChange = e => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  // @COMMENT Uploading Image
  const [image, setImage] = useState(null);
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

  // @COMMENT 사업자 등록이 완료되었다는 Flag
  // b_no:["사업자등록번호"]
  const handleClickBusiCheck = () => {
    const dataForm = {
      b_no: [`${signUpData.num}`],
    };
    postBusiNum({ dataForm, successFn, errorFn });
  };

  // 5048525999, 1231231231 ,0012402024
  const successFn = result => {
    const resultData = result.data[0].b_stt;
    console.log("result", resultData);
    if (resultData === "계속사업자") {
      setCheckFlag(true);
      console.log("체크 플래그 ", ckeckFlag);
      console.log("사업자등록번호 인증이 완료되었습니다.");
    } else {
      setCheckFlag(false);
      console.log("체크 플래그 ", ckeckFlag);
      console.log("폐업을 했거나 존재하지 않는 사업자등록번호입니다.");
    }
  };
  const errorFn = result => {
    console.log("result", result);
  };

  const handleClickPost = () => {
    // @COMMENT except pic
    const data = {
      pic: selectedImage,
      id: signUpData.id,
      upw: signUpData.upw,
      checkUpw: signUpData.checkUpw,
      num: signUpData.num,
      name: signUpData.name,
      shopName: signUpData.shopName,
      imeat: signUpData.imeat,
      // hiddenValue
      x: signUpData.x,
      y: signUpData.y,
      location: signUpData.location,
    };
    console.log("결과값 : ", data);
    if (ckeckFlag === false) {
      alert("님 사업자체크하셈 안댐 이건");
    } else {
      alert("님통과");
    }
  };

  // @COMMENT Password
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const handleValiation = () => {
    if (signUpData.upw === signUpData.checkUpw) {
      setMessage("비밀번호가 일치합니다.");
      setMessageColor("green");
    } else {
      setMessage("비밀번호가 일치하지 않습니다.");
      setMessageColor("red");
    }
  };

  // @COMMENT daum-post (여기는 건들면 안돼용!!!)
  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    // fullAddress가 이제 대구 동구 머시기저시기 찍히는 변수입니다.
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setSignUpData({ ...signUpData, location: fullAddress });
    // 이건 X,Y 값을 알아내기 위한 API이기때문에 필요없으시면 사용하실 필요 없습니다.
    getCoord({ fullAddress, successCoordFn });
    closeEmptyModal();
  };
  // @COMMENT X, Y Coord Value
  const successCoordFn = result => {
    console.log("result value ", result);
    // const xValue = result.x;
    // const yValue = result.y;
    setSignUpData(prev => ({ ...prev, x: result.x, y: result.y }));
  };
  // @COMMENT 다음포스트 호출
  const handleTest = () => {
    console.log("modal on");
    openEmptyModal(
      // 얘가 다음 포스트 입니다. 저는 모달안에다가 띄우기 위해서 이렇게 했지만
      // 다른 방식으로 사용하셔도 무방합니다.
      <DaumPostcodeEmbed onComplete={handleComplete} />,
      closeEmptyModal,
    );
  };

  // @COMMENT Store Category
  const RadioBtnActive =
    process.env.PUBLIC_URL + `/assets/images/radioBtn_active.png`;
  const RadioBtnNone =
    process.env.PUBLIC_URL + `/assets/images/radioBtn_none.png`;

  const [selectedCate, setSelectedCate] = useState(0);
  const storeCategory = ["돼지", "소", "닭", "오리", "양"];
  const handleClickCate = index => {
    setSelectedCate(index);
    if (index === 1) {
      setSelectedMeat(0);
      setSignUpData({ ...signUpData, imeat: 0 });
      // console.log("imeat 변경값 :", signUpData.imeat);
    } else {
      setSelectedMeat(null);
      setSignUpData({ ...signUpData, imeat: null });
    }
  };
  const [selectedMeat, setSelectedMeat] = useState();
  const handleClickMeat = index => {
    setSelectedMeat(index);
    setSignUpData({ ...signUpData, imeat: index + 1 });
    // console.log("imeat 변경값 :", signUpData.imeat);
  };

  const [selectedRadioValue, setSelectedRadioValue] = useState("돼지");
  const handleRadioChange = e => {
    setSelectedRadioValue(e.target.value);
    console.log(e.target.value);
  };
  const options = ["돼지", "소", "닭", "오리", "양"];

  return (
    <JaddPageWrap>
      {isEmptyModal.isOpen && (
        <EmptyModal
          content={isEmptyModal.content}
          callFn={isEmptyModal.callFn}
        />
      )}
      <TitleHeader
        timg={`${process.env.PUBLIC_URL}/assets/images/join_header.png`}
        tname="사장님 회원가입"
        tcontent="세상에 나쁜 고기는 없다."
      />
      {/* 필요한 데이터 */}
      <JaddPageMain>
        <JaddPageInfo>
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

          <JaddNameWrap>
            <label htmlFor="id">아이디</label>
            <input
              type="text"
              name="id"
              value={signUpData.id}
              className="JaddName"
              placeholder="아이디임"
              onChange={e => handleChange(e)}
              maxLength={20}
            />
          </JaddNameWrap>
          <br />
          <form action="" method="post">
            <JaddPwWrap>
              <label htmlFor="upw">비밀번호</label>
              <input
                type="password"
                name="upw"
                value={signUpData.upw}
                className="JaddPw"
                placeholder="비번임"
                onChange={e => handleChange(e)}
              />
            </JaddPwWrap>
            <br />
            <JaddMorePwWrap>
              <label htmlFor="checkUpw">비밀번호 확인</label>
              <input
                type="password"
                name="checkUpw"
                value={signUpData.checkUpw}
                className="JaddMorePw"
                placeholder="비번체크다"
                onChange={e => handleChange(e)}
                onBlur={handleValiation}
              />
              {message !== "" &&
                signUpData.upw !== "" &&
                signUpData.checkUpw !== "" && (
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
          <JaddNickNameWrap>
            <label htmlFor="num">사업자등록번호</label>
            <JaddNickNameInner>
              <input
                type="text"
                name="num"
                value={signUpData.num}
                className="JaddNickName"
                placeholder="사업자번호임 제대로 적어"
                maxLength={10}
                onChange={e => handleChange(e)}
              />
              <DefaultBt
                onClick={handleClickBusiCheck}
                className="JaddNickName-Bt"
              >
                체크
              </DefaultBt>
            </JaddNickNameInner>
          </JaddNickNameWrap>
          <br />
          <JaddNameWrap>
            <label htmlFor="name">이름</label>
            <input
              type="text"
              name="name"
              value={signUpData.name}
              className="JaddName"
              placeholder="실명"
              onChange={e => handleChange(e)}
            />
          </JaddNameWrap>
          <br />
          <JaddNickNameWrap>
            <label htmlFor="location">주소</label>
            <JaddNickNameInner>
              <input
                type="text"
                name="location"
                value={signUpData.location}
                className="JaddNickName"
                placeholder="주소다 이말이야"
                readOnly
                onChange={e => handleChange(e)}
              />
              <DefaultBt onClick={handleTest} className="JaddNickName-Bt">
                주소찾기
              </DefaultBt>
            </JaddNickNameInner>
          </JaddNickNameWrap>
          <br />
          <JaddNameWrap>
            <label htmlFor="bId">가게이름</label>
            <input
              type="text"
              name="shopName"
              value={signUpData.shopName}
              className="JaddName"
              placeholder="가게이름임"
              onChange={e => handleChange(e)}
            />
          </JaddNameWrap>
          <br />
          <JaddNameWrap>
            <CateSelectWrap>
              <SelectedCate
                selected={selectedCate === 0}
                onClick={() => handleClickCate(0)}
              >
                고깃집
              </SelectedCate>
              <SelectedCate
                selected={selectedCate === 1}
                onClick={() => handleClickCate(1)}
              >
                정육점
              </SelectedCate>
            </CateSelectWrap>
            {selectedCate === 0 && (
              <div>
                <SelectMeatWrap>
                  <BoxInnerStyle>
                    <form>
                      {options.map((option, index) => (
                        <RadioInput
                          key={option}
                          name={options[index]}
                          value={`${index + 1}`} // 1, 2, 3, 4, 5로 설정
                          checked={selectedRadioValue === `${index + 1}`}
                          onChange={handleRadioChange}
                        />
                      ))}
                    </form>
                  </BoxInnerStyle>
                </SelectMeatWrap>
              </div>
            )}
          </JaddNameWrap>

          <JaddAddressBts>
            <DefaultBt
              type="button"
              className="join-button"
              onClick={handleClickPost}
            >
              회원가입
            </DefaultBt>
            <button
              type="button"
              className="cancel-button"
              // onClick={() => {
              //   handleClickCancel();
              // }}
            >
              취소하기
            </button>
          </JaddAddressBts>
        </JaddPageInfo>
      </JaddPageMain>
    </JaddPageWrap>
  );
};
export default AdminJoinPage;
