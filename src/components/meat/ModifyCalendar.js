import dayjs from "dayjs";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "./styles/GCalendar.css";

const ReserCalendar = ({ onDateChange, dateOnly }) => {
  const [value, setValue] = useState(
    dateOnly ? dayjs(dateOnly).toDate() : dayjs().toDate(),
  );
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
