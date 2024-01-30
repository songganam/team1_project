import moment from "moment";
import React, { useEffect, useState } from "react";
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
import { putMyBook } from "../../api/MyApi";

// 예약 변경 페이지
const MeatModifyPage = () => {
  const { ireser } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");
  const headcount = queryParams.get("headcount");
  const date = queryParams.get("date");
  const request = queryParams.get("request");
  console.log("이름", name);
  console.log("인원 수", headcount);
  console.log("예약일시", date);
  console.log("요청사항", request);

  const time = date.split(" ")[1].substring(0, 5);
  console.log(time);
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
  // ! 데이터 가져올 때 인원 수 count
  //!  const [personCount, setPersonCount] useState(headcount)
  const initHeadCount = parseInt(headcount);
  const [personCount, setPersonCount] = useState(initHeadCount);

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

  const [clickedValue, setClickedValue] = useState(time);
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

  useEffect(() => {
    console.log("변경 후의 값", personCount);
    // 추가 작업 수행
  }, [personCount]);

  const handleClickPCountReset = () => {
    setPersonCount(1);
  };

  const [requiredMsg, setRequiredMsg] = useState(request);
  const handleRequireMsg = e => {
    setRequiredMsg(e.target.value);
  };

  const dateOnly = date.split(" ")[0];
  // * Calendar(예약달력)
  const createdate = new Date();
  const nowdata = moment(createdate).format("YYYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(dateOnly);

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

  // ! postData => ireser(PK), date, request, headcount
  // * Submit
  const handleReserSubmit = (ireser, date, headCount, request) => {
    // 예약 변경 (PUT)
    const reserChangeForm = {
      ireser: ireser,
      date: date,
      headCount: headCount,
      request: request,
    };
    // ! No exist Value
    if (timeCount == "") {
      openModal(
        "예약시간오류",
        "예약시간을 입력하지 않았습니다. 시간을 입력해주세요.",
        closeModal,
      );
    }
    putMyBook({ reserChangeForm, successFn, failFn, errorFn });
    openModal("예약완료", "예약이 완료되었습니다.", submitModal);
    console.log("내용 :", reserChangeForm);
    return reserChangeForm;
  };
  const successFn = result => {
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  return (
    <div>
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
                <span>{name}</span>
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
              {createdate && createdate ? (
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
            // * 요청사항 (Request)
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
            <ReserCalendar
              onDateChange={handleDateChange}
              dateOnly={dateOnly}
            />
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

export default MeatModifyPage;
