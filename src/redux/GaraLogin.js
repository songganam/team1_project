import React, { useState } from "react";
import Select from "react-select";
import "./TimeSelector.css"; // CSS 파일 추가
import { FontSize } from "../styles/common/CommonStyle";

function TimeSelector() {
  const [meridiem, setMeridiem] = useState("AM");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("00");
  const [openingHour, setOpeningHour] = useState(9);
  const [closingHour, setClosingHour] = useState(20);

  const meridiemOptions = [
    { value: "AM", label: "오전" },
    { value: "PM", label: "오후" },
  ];

  const hourOptions = Array.from({ length: 12 }, (_, i) => ({
    value: i + 1,
    label: String(i + 1).padStart(2, "0"),
  })).filter((option, index) => {
    if (meridiem === "AM") {
      return option.value >= openingHour && option.value <= 12;
    } else {
      const value24 = (option.value % 12) + 12;
      return value24 <= closingHour;
    }
  });

  const minuteOptions = Array.from({ length: 60 }, (_, i) => ({
    value: i,
    label: String(i).padStart(2, "0"),
  }));

  const handlePrint = () => {
    const hour24 = meridiem === "PM" ? (hour % 12) + 12 : hour % 12;
    const time = `${String(hour24).padStart(2, "0")}-${minute}`;
    console.log(time);
  };

  const customStyles = {
    control: (styles, { isFocused, isSelected }) => ({
      ...styles,
      border: isFocused || isSelected ? "1.5px solid #066E52" : "none",
      boxShadow: isFocused ? "0 0 0 1px #066E52" : null,
      "&:hover": {
        border: "1.5px solid #066E52",
      },
    }),
    menu: styles => ({ ...styles, zIndex: 999 }),
    singleValue: (provided, state) => ({
      ...provided,
      fontFamily: "DAEAM_LEE_TAE_JOON",
      fontSize: "14px",
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: "DAEAM_LEE_TAE_JOON",
      fontSize: "14px",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      fontFamily: "DAEAM_LEE_TAE_JOON",
      fontSize: "14px",
    }),
  };

  return (
    <div className="time-selector">
      <div className="select-box">
        <Select
          options={meridiemOptions}
          placeholder="오전/오후"
          onChange={option => setMeridiem(option.value)}
          onMenuOpen={() => setMeridiem(meridiem)}
          styles={customStyles}
        />
      </div>
      <div className="select-box">
        <Select
          options={hourOptions}
          placeholder="시"
          onChange={option => setHour(option.value)}
          onMenuOpen={() => setHour(hour)}
          styles={customStyles}
        />
      </div>
      <div className="select-box">
        <Select
          options={minuteOptions}
          placeholder="분"
          onChange={option => setMinute(option.value)}
          onMenuOpen={() => setMinute(minute)}
          styles={customStyles}
        />
      </div>
      <button onClick={handlePrint}>데이터 출력</button>
    </div>
  );
}

export default TimeSelector;
