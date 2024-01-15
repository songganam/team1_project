import moment from "moment";
import React, { useState } from "react";
import ReserCalendar from "../../components/gogi/ReserCalendar";
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

// 고깃집 리뷰 쓰기 페이지입니다.
const GaddPage = () => {
  // 시간 카운팅
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
  const [timeCount, setTimeCount] = useState("");
  // * 시간 버튼에 대한 로직
  /* 
  ? 의사코드
  ? 상태를 저장할 useState 생성 안눌렀을때 A상태 눌렀을 때 B상태(!A)
  ? Map을 돌린다면 prop로 GaddPageStyle -> REserTimeBtn 진입
  ? (위 조건) ? color : "red" : "blue" 
  
  */
  // const [isSwitched, setIsSwitched] = useState("");
  const [clickedValue, setClickedValue] = useState(null);
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
    if (personCount > 0) {
      setPersonCount(personCount - 1);
    } else {
      // TODO MODAL로 변경하여야 함
      alert("인원 수가 0명 이하일 수없습니다.");
    }
  };
  const handleClickPCountReset = () => {
    setPersonCount(0);
  };

  const [requiredMsg, setRequiredMsg] = useState("");
  const handleRequireMsg = e => {
    setRequiredMsg(e.target.value);
  };
  // * Calendar(예약달력)
  const date = new Date();
  const nowdata = moment(date).format("YYYY.MM.DD");
  const [selectedDate, setSelectedDate] = useState(nowdata);
  const handleDateChange = formattedDate => {
    console.log(formattedDate);
    setSelectedDate(formattedDate);
  };
  // * Submit
  const handleReserSubmit = () => {
    const reserData = {
      selectedDate,
      timeCount,
      personCount,
    };
    console.log(reserData);
  };
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

export default GaddPage;
