import moment from "moment";
import React, { useState } from "react";
import ReserCalendar from "../../components/meat/ReserCalendar";
import {
  ReserContent,
  ReserCountBox,
  ReserCountBtn,
  ReserCountResetBtn,
  ReserCountWrap,
  ReserFormWrap,
  ReserItem,
  ReserItemWrap,
  ReserRequireInput,
  ReserSubmitBtn,
  ReserTimeBtn,
  ReserTimeItem,
  ReserTimeWrap,
  ReserTitle,
  ReserWrap,
  ReserWrapper,
} from "./styles/MeatReservationStyle";
import ResultModal from "../../components/common/ResultModal";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { postReser } from "../../api/meatApi";
import dayjs from "dayjs";
import Fetching from "../../components/common/Fetching";

// 고깃집 리뷰 쓰기 페이지입니다.
const MeatReservationPage = () => {
  const { ishop } = useParams();
  const location = useLocation();
  const storeName = location.state?.storeName;
  const [fetching, setFetching] = useState(false);
  // ! Modal Control
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState({
    isOpen: false,
    title: "",
    content: "",
    callFn: null,
  });
  const openModal = (title, content, callFn) => {
    setIsModal({ isOpen: true, title, content, callFn });
  };
  const closeModal = () => {
    setIsModal(prev => ({ ...prev, isOpen: false }));
  };
  const submitModal = () => {
    setIsModal(prev => ({ ...prev, isOpen: false }));
    navigate("/meat/list");
  };
  // ! 사람 카운팅
  const [personCount, setPersonCount] = useState(1);
  const timeValue = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
  ];
  const [timeCount, setTimeCount] = useState("");
  // * 시간 버튼에 대한 로직
  /* 
  ? 의사코드
  ? 상태를 저장할 useState 생성 안눌렀을때 A상태 눌렀을 때 B상태(!A)
  ? Map을 돌린다면 prop로 GaddPageStyle -> REserTimeBtn 진입
  ? (위 조건) ? color : "red" : "blue" 
  */

  const [clickedValue, setClickedValue] = useState("");
  // * 시간에 대한 로직(timeCount)
  const handleClickTCount = event => {
    const clickedValue = event.target.innerText;
    setTimeCount(clickedValue);
    setClickedValue(clickedValue);
  };

  // * 인원수에 관한 로직 (PersonCount)
  const handleClickPCountPlus = () => {
    setPersonCount(personCount + 1);
  };
  const handleClickPCountMinus = () => {
    if (personCount > 1) {
      setPersonCount(personCount - 1);
    } else {
      // TODO MODAL로 변경하여야 함
      openModal(
        "인원 수 오류",
        "인원 수가 1명보다 적을 수 없습니다.",
        closeModal,
      );
    }
  };
  const handleClickPCountReset = () => {
    setPersonCount(1);
  };

  const [requiredMsg, setRequiredMsg] = useState("");
  const handleRequireMsg = e => {
    setRequiredMsg(e.target.value);
  };

  // * Calendar(예약달력)
  const nowDate = dayjs().format("YYYY-MM-DD");
  // const createdate = new Date();
  // const nowdata = moment(createdate).format("YYYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(nowDate);

  const handleDateChange = formattedDate => {
    if (formattedDate) {
      const dateData = moment(formattedDate).format("YYYY-MM-DD");
      setSelectedDate(dateData);
      console.log("값임 :", dateData);
      return dateData;
    } else {
      console.log("formattedDate is undefined");
    }
  };

  // * submit 날짜 + 시간 Value 폼
  const timeCountvalue =
    timeCount.split(":")[0] + ":" + timeCount.split(":")[1] + ":00";
  console.log(timeCountvalue);
  const timeline = selectedDate + " " + timeCountvalue;
  console.log(timeline);
  console.log("timecount :", timeCount);

  const reserData = {
    ishop: ishop,
    date: timeline,
    headCount: personCount,
    request: requiredMsg,
  };
  // ! postData => ireser(PK), date, request, headcount
  // * Submit
  const handleReserSubmit = () => {
    // ! No exist Value
    if (timeCountvalue.includes(undefined)) {
      openModal(
        "예약시간오류",
        "예약시간을 입력하지 않았습니다. 시간을 입력해주세요.",
        closeModal,
      );
    }
    setFetching(true);
    postReser({ reserData, successFn, failFn, errorFn });

    console.log("내용 :", reserData);
    return reserData;
  };
  const successFn = result => {
    setFetching(false);
    openModal("예약완료", "예약이 완료되었습니다.", submitModal);
    console.log(result);
  };
  const failFn = result => {
    setFetching(false);
    console.log(result);
  };
  const errorFn = error => {
    setFetching(false);
    if (error.response && error.response.status === 400) {
      openModal("예약 실패", "시간을 기입해주세요.", closeModal);
    }
    if (error.response && error.response.status === 500) {
      openModal("예약 실패", "관리자에게 문의해주세요.", closeModal);
    }
  };
  return (
    <div>
      {fetching ? <Fetching /> : null}
      {isModal.isOpen && (
        <ResultModal
          title={isModal.title}
          content={isModal.content}
          callFn={isModal.callFn}
        />
      )}
      <ReserWrapper>
        {/* title */}
        <ReserTitle>
          <span>예약하기</span>
        </ReserTitle>
        {/* wrapper */}
        <ReserWrap>
          {/* Item - Wrapper */}
          <ReserItemWrap>
            {/* 
            // * 가게명 
            */}
            <ReserFormWrap>
              <ReserItem>
                <span>가게명</span>
              </ReserItem>
              <ReserContent>
                <span>{storeName}</span>
              </ReserContent>
            </ReserFormWrap>
            {/* 
            // * 예약날짜 
            */}
            <ReserFormWrap>
              <ReserItem>
                <span>날짜</span>
              </ReserItem>
              <ReserContent>
                <span>{selectedDate}</span>
              </ReserContent>
            </ReserFormWrap>
            {/* 
            // * 예약가능시간 
            */}
            <ReserTimeWrap>
              <ReserItem>
                <span>예약가능시간</span>
              </ReserItem>
              {/* 에약 가능 시간대 버튼 */}
              {nowDate && nowDate ? (
                <ReserTimeItem>
                  {timeValue.map((item, index) => (
                    <ReserTimeBtn
                      key={index}
                      onClick={handleClickTCount}
                      clicked={clickedValue == item}
                    >
                      <span>{item}</span>
                    </ReserTimeBtn>
                  ))}
                </ReserTimeItem>
              ) : (
                <div></div>
              )}
            </ReserTimeWrap>
            {/* 
            // * 인원 수 
            */}
            <ReserCountWrap>
              <ReserItem>
                <span>인원 수</span>
              </ReserItem>
              {/* Counting Box */}
              <ReserCountBox>
                <ReserCountBtn onClick={handleClickPCountMinus}>
                  <button>-</button>
                </ReserCountBtn>
                <ReserCountBtn>
                  <span>{personCount}</span>
                </ReserCountBtn>
                <ReserCountBtn onClick={handleClickPCountPlus}>
                  <button>+</button>
                </ReserCountBtn>
              </ReserCountBox>
              <ReserCountResetBtn onClick={handleClickPCountReset}>
                <span>다시작성</span>
              </ReserCountResetBtn>
            </ReserCountWrap>

            {/* 
            // * 요청사항
            */}
            <ReserFormWrap>
              <ReserItem>
                <span>요청사항</span>
              </ReserItem>
              <ReserContent>
                <ReserRequireInput
                  type="text"
                  name="requireMsg"
                  onChange={e => handleRequireMsg(e)}
                  value={requiredMsg}
                  placeholder="요청사항을 입력해주세요. (30자 내외)"
                  maxLength="50"
                />
              </ReserContent>
            </ReserFormWrap>
          </ReserItemWrap>
          {/* Calendar */}
          <div>
            <ReserCalendar onDateChange={handleDateChange} />
          </div>
        </ReserWrap>
        {/* button */}
        <ReserSubmitBtn onClick={handleReserSubmit}>
          <span>예약하기</span>
        </ReserSubmitBtn>
      </ReserWrapper>
    </div>
  );
};

export default MeatReservationPage;
