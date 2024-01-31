import React, { useState } from "react";
import Calendar from "react-calendar";
import "./styles/GCalendar.css";
import moment from "moment";
import dayjs from "dayjs";

const ReserCalendar = ({ onDateChange }) => {
  const [value, setValue] = useState(new Date());
  const today = dayjs().toDate();
  const todyMonthLater = dayjs().add(1, "month").toDate();
  const onChange = e => {
    setValue(e);
    onDateChange(dayjs(e).format("YYYY.MM.DD"));
  };
  // console.log("캘린더임", dateOnly);
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        locale="ko-KO"
        next2Label={null}
        prev2Label={null}
        formatDay={(locale, date) => dayjs(date).format("D")}
        minDate={today}
        maxDate={todyMonthLater}
      />
    </div>
  );
};

export default ReserCalendar;
