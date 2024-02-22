import { ChangeEvent, RefObject, useRef, useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { getCoord, postBusiNum } from "../../api/meatApi";
import RadioInput from "../../components/adminInfo/RadioInput";
import { BoxInnerStyle } from "../../components/adminInfo/styles/ModifyStyle";
import EmptyModal from "../../components/common/EmptyModal";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import TitleHeader from "../../components/titleheader/TitleHeader";
import { CateSelectWrap, SelectMeatWrap } from "./styles/AdminSignUpStyles";
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
import { AdminJoinData } from "./TSJoin";
import { AxiosError, AxiosResponse } from "axios";
import { SelectedCate } from "../meat/styles/TS_Style";

const initState: AdminJoinData = {
  pic: [""],
  dto: {
    id: "",
    upw: "",
    checkUpw: "",
    num: "",
    name: "",
    shopName: "",
    x: "",
    y: "",
    location: "",
    imeat: 1,
  },
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  // @COMMENT Uploading Image
  const [image, setImage] = useState<null | string>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const uploadRef: RefObject<HTMLInputElement> = useRef(null);
  const handleClickImg = () => {
    if (uploadRef.current) {
      uploadRef.current.click();
    }
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
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
      b_no: [`${signUpData.dto.num}`],
    };
    postBusiNum({ dataForm, successFn, errorFn });
  };

  // 5048525999, 1231231231 ,0012402024
  const successFn = (result: AxiosResponse) => {
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
  const errorFn = (result: AxiosError) => {
    console.log("result", result);
  };

  const handleClickPost = () => {
    // @COMMENT except pic
    const data = {
      pic: selectedImage,
      id: signUpData.dto.id,
      upw: signUpData.dto.upw,
      checkUpw: signUpData.dto.checkUpw,
      num: signUpData.dto.num,
      name: signUpData.dto.name,
      shopName: signUpData.dto.shopName,
      imeat: signUpData.dto.imeat,
      // hiddenValue
      x: signUpData.dto.x,
      y: signUpData.dto.y,
      location: signUpData.dto.location,
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
    if (signUpData.dto.upw === signUpData.dto.checkUpw) {
      setMessage("비밀번호가 일치합니다.");
      setMessageColor("green");
    } else {
      setMessage("비밀번호가 일치하지 않습니다.");
      setMessageColor("red");
    }
  };

  // @COMMENT daum-post (여기는 건들면 안돼용!!!)
  const handleComplete = (data: any) => {
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
    setSignUpData(prevState => ({
      ...prevState,
      dto: {
        ...prevState.dto,
        location: fullAddress,
      },
    }));
    // 이건 X,Y 값을 알아내기 위한 API이기때문에 필요없으시면 사용하실 필요 없습니다.
    getCoord({ fullAddress, successCoordFn });
    closeEmptyModal();
  };
  // @COMMENT X, Y Coord Value
  type ApiResult = {
    x: string;
    y: string;
    // 다른 필요한 속성들...
  };
  // successCoordFn 함수의 타입을 변경합니다.
  const successCoordFn = (result: AxiosResponse<ApiResult>) => {
    console.log("result value ", result);
    setSignUpData(prev => ({
      ...prev,
      dto: {
        ...prev.dto,
        x: result.data.x,
        y: result.data.y,
      },
    }));
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
  //   const storeCategory = ["돼지", "소", "닭", "오리", "양"];
  const handleClickCate = (index: number) => {
    setSelectedCate(index);
    if (index === 1) {
      setSelectedMeat(0);
      setSignUpData(prevState => ({
        ...prevState,
        dto: {
          ...prevState.dto,
          imeat: 0,
        },
      }));
      // console.log("imeat 변경값 :", signUpData.imeat);
    } else {
      setSelectedMeat(null);
      setSignUpData(prevState => ({
        ...prevState,
        dto: {
          ...prevState.dto,
          imeat: null,
        },
      }));
    }
  };
  const [selectedMeat, setSelectedMeat] = useState<number | null>(null);
  const handleClickMeat = (index: number) => {
    setSelectedMeat(index);
    setSignUpData(prevState => ({
      ...prevState,
      dto: {
        ...prevState.dto,
        imeat: index + 1,
      },
    }));
    // console.log("imeat 변경값 :", signUpData.imeat);
  };

  const [selectedRadioValue, setSelectedRadioValue] = useState("돼지");
  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
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
              value={signUpData.dto.id}
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
                value={signUpData.dto.upw}
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
                value={signUpData.dto.checkUpw}
                className="JaddMorePw"
                placeholder="비번체크다"
                onChange={e => handleChange(e)}
                onBlur={handleValiation}
              />
              {message !== "" &&
                signUpData.dto.upw !== "" &&
                signUpData.dto.checkUpw !== "" && (
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
                value={signUpData.dto.num}
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
              value={signUpData.dto.name}
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
                value={signUpData.dto.location}
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
              value={signUpData.dto.shopName}
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
