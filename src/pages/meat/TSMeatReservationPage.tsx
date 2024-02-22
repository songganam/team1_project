import { AxiosError } from "axios";
import dayjs from "dayjs";
import moment from "moment";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { postReserTS } from "../../api/typeApi";
import Fetching from "../../components/common/Fetching";
import ResultModal from "../../components/common/ResultModal";
import ReserCalendar from "../../components/meat/ReserCalendar";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import { ReserForm } from "./Meat";
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
  ReserTimeItem,
  ReserTimeWrap,
  ReserTitle,
  ReserWrap,
  ReserWrapper,
} from "./styles/MeatReservationStyle";
import { ReserTimeBtn } from "./styles/TS_Style";

// 고깃집 리뷰 쓰기 페이지입니다.
const MeatReservationPage = () => {
  const { ishop } = useParams();

  const initState: ReserForm = {
    ishop: ishop ? parseInt(ishop, 10) : 0,
    date: "",
    request: "",
    headCount: 1,
  };

  const [reserData, setReserData] = useState(initState);
  const location = useLocation();
  const storeName = location.state?.storeName;
  const [fetching, setFetching] = useState(false);
  const navigate = useNavigate();
  // ! Modal Control

  const { isModal, openModal, closeModal } = useCustomHook();
  // ! 사람 카운팅
  //   const [personCount, setPersonCount] = useState(1);
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

  const [clickedValue, setClickedValue] = useState("");
  // * 시간에 대한 로직(timeCount)

  const handleClickTCount = (event: MouseEvent<HTMLButtonElement>) => {
    const clickedValue = (event.target as HTMLButtonElement).innerText;
    setTimeCount(clickedValue);
    setClickedValue(clickedValue);
    // getTimeValue(selectedDate, clickedValue);
  };
  // * Calendar(예약달력)
  const nowDate = dayjs().format("YYYY-MM-DD");
  // const createdate = new Date();
  // const nowdata = moment(createdate).format("YYYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(nowDate);

  const handleDateChange = (formattedDate: string) => {
    if (formattedDate) {
      const dateData = dayjs(formattedDate).format("YYYY-MM-DD");
      setSelectedDate(dateData);
      // getTimeValue(dateData, timeCount);
      console.log("값임 :", dateData);
    } else {
      console.log("formattedDate is undefined");
    }
  };

  // * submit 날짜 + 시간 Value 폼
  useEffect(() => {
    const timeCountvalue =
      timeCount.split(":")[0] + ":" + timeCount.split(":")[1] + ":00";
    console.log(timeCountvalue);
    const timeline = selectedDate + " " + timeCountvalue;
    console.log(timeline);
    console.log("timecount :", timeCount);

    // setReserData를 사용하여 reserData의 date 값을 변경
    setReserData(prevState => ({ ...prevState, date: timeline }));
    console.log(timeline);
  }, [timeCount, selectedDate]); // 빈 배열을 넘겨주어 컴포넌트가 처음 렌더링될 때만 실행되도록 합니다.

  // * 인원수에 관한 로직 (PersonCount)

  const handleClickPCountPlus = () => {
    setReserData(prevData => ({
      ...prevData,
      headCount: prevData.headCount + 1,
    }));
  };

  const handleClickPCountMinus = () => {
    if (reserData.headCount > 1) {
      setReserData(prevData => ({
        ...prevData,
        headCount: prevData.headCount - 1,
      }));
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
    setReserData(prevData => ({ ...prevData, headCount: 1 }));
  };
  const handleRequireMsg = (e: ChangeEvent<HTMLInputElement>) => {
    setReserData(prevData => ({ ...prevData, request: e.target.value }));
    // setRequiredMsg(e.target.value);
  };

  // @AREA React-Query
  const addMutation = useMutation({
    mutationFn: (reserData: ReserForm) => postReserTS({ reserData }),
    onSuccess: result => {
      setFetching(false);
      openModal("예약완료", "예약이 완료되었습니다.", () => {
        closeModal();
        navigate("/my/book");
      });
    },
    onError: (error: AxiosError) => {
      setFetching(false);
      if (error.response && error.response.status === 400) {
        openModal("예약 실패", "시간을 기입해주세요.", closeModal);
      }
      if (error.response && error.response.status === 500) {
        openModal("예약 실패", "관리자에게 문의해주세요.", closeModal);
      }
    },
  });

  // ! postData => ireser(PK), date, request, headcount
  // * Submit
  const handleReserSubmit = () => {
    // @COMMENT 이거 처리해아함
    // console.log("날", reserData.date);
    console.log("너는 :", timeCount);
    // console.log("너는 :", timeCount.split(":")[0], "입니다.");
    if (timeCount === "") {
      console.log("타임카운트", timeCount);
      openModal(
        "예약시간오류",
        "예약시간을 입력하지 않았습니다. 시간을 입력해주세요.",
        closeModal,
      );
      return;
    }
    setFetching(true);

    addMutation.mutate(reserData);
    console.log("결과데이터", reserData);
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
                  <span>{reserData.headCount}</span>
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
                  name="request"
                  onChange={e => handleRequireMsg(e)}
                  value={reserData.request}
                  placeholder="요청사항을 입력해주세요. (30자 내외)"
                  maxLength={50}
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
