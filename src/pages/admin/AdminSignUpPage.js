import React, { useState } from "react";
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
  JaddPageInfo,
  JaddPageMain,
  JaddPageWrap,
  JaddPwWrap,
} from "../join/styles/JaddPageStyle";

const initState = {
  bId: "",
  bPw: "",
  checkBpw: "",
  bNo: "",
  bName: "",
  bAddress: "",
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

  // @COMMENT 사업자 등록이 완료되었다는 Flag
  // b_no:["사업자등록번호"]
  const handleClickBusiCheck = () => {
    const dataForm = {
      b_no: [`${signUpData.bNo}`],
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
    const data = {
      bId: signUpData.bId,
      bPw: signUpData.bPw,
      checkBpw: signUpData.checkBpw,
      bNo: signUpData.bNo,
      bName: signUpData.bName,
    };
    console.log("결과값 : ", data);
    if (ckeckFlag === false) {
      alert("님 사업자체크하셈 안댐 이건");
    } else {
      alert("님통과");
    }
  };

  // @COMMENT daum-post
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

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setSignUpData({ ...signUpData, bAddress: fullAddress });
    getCoord({ fullAddress, successCoordFn });
    closeEmptyModal();
  };
  // @COMMENT X, Y Coord Value
  const successCoordFn = result => {
    console.log("result value ", result);
    const xValue = result.x;
    const yValue = result.y;
    console.log("result xValue ", xValue);
    console.log("result yValue ", yValue);
  };

  const handleTest = () => {
    console.log("modal on");
    openEmptyModal(<DaumPostcodeEmbed onComplete={handleComplete} />);
  };

  return (
    <JaddPageWrap>
      {isEmptyModal.isOpen && <EmptyModal content={isEmptyModal.content} />}
      <TitleHeader
        timg={`${process.env.PUBLIC_URL}/assets/images/join_header.png`}
        tname="사장님 회원가입"
        tcontent="세상에 나쁜 고기는 없다."
      />
      {/* 필요한 데이터 */}
      <JaddPageMain>
        <JaddPageInfo>
          <JaddNameWrap>
            <label htmlFor="bId">아이디</label>
            <input
              type="text"
              name="bId"
              value={signUpData.bId}
              className="JaddName"
              placeholder="아이디임"
              onChange={e => handleChange(e)}
            />
          </JaddNameWrap>
          <br />
          <JaddPwWrap>
            <label htmlFor="bPw">비밀번호</label>
            <input
              type="password"
              name="bPw"
              value={signUpData.bPw}
              className="JaddPw"
              placeholder="비번임"
              onChange={e => handleChange(e)}
            />
          </JaddPwWrap>
          <br />
          <JaddMorePwWrap>
            <label htmlFor="checkBpw">비밀번호 확인</label>
            <input
              type="password"
              name="checkBpw"
              value={signUpData.checkBpw}
              className="JaddMorePw"
              placeholder="비번체크다"
              onChange={e => handleChange(e)}
            />
          </JaddMorePwWrap>
          <br />
          <JaddNickNameWrap>
            <label htmlFor="bNo">사업자등록번호</label>
            <JaddNickNameInner>
              <input
                type="text"
                name="bNo"
                value={signUpData.bNo}
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
            <label htmlFor="bName">이름</label>
            <input
              type="text"
              name="bName"
              value={signUpData.bName}
              className="JaddName"
              placeholder="실명"
              onChange={e => handleChange(e)}
            />
          </JaddNameWrap>
          <br />
          <JaddNickNameWrap>
            <label htmlFor="bAddress">주소</label>
            <JaddNickNameInner>
              <input
                type="text"
                name="bNo"
                value={signUpData.bAddress}
                className="JaddNickName"
                placeholder="주소다 이말이야"
                onChange={e => handleChange(e)}
              />
              <DefaultBt onClick={handleTest} className="JaddNickName-Bt">
                주소찾기
              </DefaultBt>
            </JaddNickNameInner>
          </JaddNickNameWrap>

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
