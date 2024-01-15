import moment from "moment";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "./styles/GCalendar.css";

const ReserCalendar = () => {
  const [value, setValue] = useState(new Date());
  const onChange = e => {
    // setSelectedDate = moment(value).format("YYYY년 MM월 DD일");
    // console.log(setSelectedDate);
    setValue(e);
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
      />
    </div>
  );
};

export default ReserCalendar;
