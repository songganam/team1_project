import React, { useState } from "react";
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
} from "./styles/GaddPageStyle";
import GCalendar from "../../components/gogi/ReserCalendar";
import ReserCalendar from "../../components/gogi/ReserCalendar";

// 고깃집 리뷰 쓰기 페이지입니다.
const GaddPage = () => {
  // 시간 카운팅
  const [timeCount, setTimeCount] = useState("");
  // 사람 카운팅
  const [personCount, setPersonCount] = useState(0);
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

  // * 시간에 대한 로직(timeCount)
  const handleClickTCount = event => {
    const clickedValue = event.target.innerText;
    return setTimeCount(clickedValue);
  };
  // * 인원수에 관한 로직 (PersonCount)
  const handleClickPCountPlus = () => {
    setPersonCount(personCount + 1);
  };
  const handleClickPCountMinus = () => {
    if (personCount > 0) {
      setPersonCount(personCount - 1);
    } else {
      // TODO MODAL로 변경하여야 함
      alert("인원 수가 0명 이하일 수없습니다.");
    }
  };
  const handleClickPCountReset = () => {
    const personCount = 0;
    setPersonCount(personCount);
  };
  // * Calendar(예약달력)
  const [selectedDate, setSelectedDate] = useState("");
  const handleClickSelectedDate = () => {};
  return (
    <div>
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
                <span>목구멍</span>
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
                <span>2024.01.12</span>
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
              <ReserTimeItem>
                {timeValue.map((item, index) => (
                  <ReserTimeBtn key={index} onClick={handleClickTCount}>
                    <span>{item}</span>
                  </ReserTimeBtn>
                ))}
              </ReserTimeItem>
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
                  placeholder="요청사항을 입력해주세요. (30자 내외)"
                  maxLength="50"
                />
              </ReserContent>
            </ReserFormWrap>
          </ReserItemWrap>
          {/* Calendar */}
          <div>
            <ReserCalendar setSelectedDate={setSelectedDate} />
          </div>
        </ReserWrap>
        {/* button */}
        <ReserSubmitBtn>
          <span>예약하기</span>
        </ReserSubmitBtn>
      </ReserWrapper>
    </div>
  );
};

export default GaddPage;
