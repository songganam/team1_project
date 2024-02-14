import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Fetching from "../components/common/Fetching";
import ResultModal from "../components/common/ResultModal";
import SelectedModal from "../components/common/SelectedModal";
import useCustomHook from "../components/meat/hooks/useCustomHook";
import TitleHeader from "../components/titleheader/TitleHeader";
import {
  DefaultBt,
  JaddAddressBts,
  JaddAddressWrap,
  JaddMailWrap,
  JaddMorePwWrap,
  JaddNameWrap,
  JaddPageInfo,
  JaddPageMain,
  JaddPageWrap,
  JaddPwWrap,
} from "../pages/join/styles/JaddPageStyle";

// 회원가입 작성 페이지입니다.
const JaddPage = () => {
  // const [todo, setTodo] = useState({});

  const initState = {
    bNo: "",
    bName: "",
    bStartAt: "",
    bAddress: "",
    bId: "",
    bPassword: "",
    bStoreName: "",
  };
  const [adminData, setAdminData] = useState(initState);
  const [fetching, setFetching] = useState(false);

  const handleChange = e => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
    setMessage(""); // (비밀번호 확인 메시지) 사용자가 다시 입력할 때 메시지 초기화
  };

  const {
    isModal,
    openModal,
    closeModal,
    isSelectModal,
    openSelectModal,
    confirmSelectModal,
    cancelSelectModal,
  } = useCustomHook();

  const handleClick = async adminData => {};

  // 회원가입 등록 시 resultModal 닫기 callFn

  // 글 등록 버튼 클릭 핸들러
  const handleAddClick = () => {
    const bNo = {
      b_no: [adminData.bNo],
    };
    console.log("bNo", bNo);

    const dto = {
      bName: adminData.bName,
      bStartAt: adminData.bStartAt,
      bAddress: adminData.bAddress,
      bId: adminData.bId,
      bPassword: adminData.bPassword,
      bStoreName: adminData.bStoreName,
    };
    console.log("dto", dto);
  };

  // Submit Result Action
  const successFn = addResult => {};
  const failFn = addResult => {};
  const errorFn = addResult => {};

  // 비밀번호 확인 메시지
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const handleValiation = () => {
    if (adminData.upw === adminData.checkUpw) {
      setMessage("비밀번호가 일치합니다.");
      setMessageColor("green");
    } else {
      setMessage("비밀번호가 일치하지 않습니다.");
      setMessageColor("red");
    }
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
        <JaddPageInfo>
          <div className="JaddMailInfo">
            <JaddMailWrap>
              <label>아이디</label>
              <input
                type="text"
                name="bId"
                value={adminData.bId}
                className="JoinMail"
                placeholder="아이디는 4-8글자입니다."
                onChange={e => handleChange(e)}
              ></input>
            </JaddMailWrap>
            <br />

            <form action="" method="post">
              <JaddPwWrap>
                <label>비밀번호</label>
                <input
                  type="password"
                  name="bPassword"
                  value={adminData.bPassword}
                  className="JaddPw"
                  placeholder="비밀번호를 입력하세요.(특수문자 포함 4-8자)"
                  onChange={e => handleChange(e)}
                />
              </JaddPwWrap>
              <br />
              <JaddMorePwWrap>
                <label>비밀번호 확인</label>
                <input
                  type="password"
                  name="checkbPassword"
                  value={adminData.checkbPassword}
                  className="JaddMorePw"
                  placeholder="입력한 비밀번호를 한번 더 확인하세요."
                  onChange={e => handleChange(e)}
                  maxLength="8"
                  minLength="4"
                  onBlur={handleValiation}
                />
                {message !== "" &&
                  adminData.upw !== "" &&
                  adminData.checkUpw !== "" && (
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
            <JaddNameWrap>
              <label>사업자등록번호</label>
              <input
                type="text"
                name="bNo"
                value={adminData.bNo}
                className="JaddName"
                placeholder="10자리 정확히 입력해주세요. (- 제외)"
                onChange={e => handleChange(e)}
              ></input>
            </JaddNameWrap>

            <br />
            <JaddAddressWrap>
              <label>주소</label>
              <input
                type="text"
                name="bAddress"
                value={adminData.bAddress}
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
export default JaddPage;
