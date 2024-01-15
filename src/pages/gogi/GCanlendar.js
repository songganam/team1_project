import React, { useState } from "react";
import Calendar from "react-calendar";
//  Calendar Custom CSS
import "react-calendar/dist/Calendar.css";

const GCanlendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = newDate => {
    setDate(newDate);
  };

  return (
    <div>
      {date.toString()}
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

export default GCanlendar;
