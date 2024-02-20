import React from "react";
import { RadioLableStyle } from "./styles/RadioLabelStyle";

const RadioInput = ({ name, value, checked, onChange }) => {
  return (
    <RadioLableStyle>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        name={name}
      />
      <div className="radio-custom">
        {checked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle cx="10" cy="10" r="10" fill="#3B82F6" />
            <circle cx="10" cy="10" r="4" fill="white" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle cx="10" cy="10" r="10" fill="#E5E7EB" />
          </svg>
        )}
      </div>

      {name}
      {/* {value} */}
    </RadioLableStyle>
  );
};

export default RadioInput;
