import React, { useState } from "react";
import Calendar from "react-calendar";
import "./styles/GCalendar.css";
import moment from "moment";

const ReserCalendar = ({ onDateChange }) => {
  const [value, setValue] = useState(new Date());
  const today = new Date();
  const todyMonthLater = moment(today).add(1, "month").toDate();
  const onChange = e => {
    setValue(e);
    onDateChange(moment(e).format("YYYY.MM.DD"));
  };
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        locale="ko-KO"
        next2Label={null}
        prev2Label={null}
        formatDay={(locale, date) => moment(date).format("D")}
        minDate={today}
        maxDate={todyMonthLater}
      />
    </div>
  );
};

export default ReserCalendar;
