import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  // 1시부터 10시까지의 시간 배열 생성
  const availableTimes = Array.from({ length: 10 }, (_, index) => {
    const hour = index + 13; // 13부터 22까지 오후 시간으로 설정
    return new Date().setHours(hour, 0, 0, 0);
  });

  // 시간을 "HH:mm:ss" 형식으로 변환
  const formatTime = time => {
    return time.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  // 비활성화된 시간을 필터링
  const isTimeDisabled = time => {
    const currentTime = time.getTime();
    return !availableTimes.includes(currentTime);
  };

  return (
    <DatePicker
      selected={selectedTime}
      onChange={time => setSelectedTime(time)}
      showTimeSelect
      showTimeSelectOnly
      minTime={availableTimes[0]} // 최소 시간
      maxTime={availableTimes[availableTimes.length - 1]} // 최대 시간
      timeIntervals={60} // 1시간 간격
      timeCaption="시간"
      dateFormat="HH:mm:ss" // 24시간 형식으로 표시
      filterTime={isTimeDisabled} // 비활성화된 시간 필터링
      timeFormat="HH:mm:ss" // 시간 형식
      locale={ko} // 한국어로 표시
      timeInputLabel="시간"
      injectTimes={availableTimes.map(time => new Date(time))}
      customTimeInput={<input />}
      showTimeInput
      withPortal
    />
  );
};

export default TimePicker;
