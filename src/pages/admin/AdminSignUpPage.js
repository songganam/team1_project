import React, { useState } from "react";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import Layout from "../../layouts/Layout";
import { postBusiNum } from "../../api/meatApi";
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
import TitleHeader from "../../components/titleheader/TitleHeader";

const initState = {
  bId: "",
  bPw: "",
  checkBpw: "",
  bNo: "",
  bName: "",
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

  return (
    <JaddPageWrap>
      <TitleHeader
        timg={`${process.env.PUBLIC_URL}/assets/images/join_header.png`}
        tname="사장님 회원가입"
        tcontent="세상에 나쁜 고기는 없다."
      />

      <div>회원기입 폼</div>
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
