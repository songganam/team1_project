import React from "react";
import { CheckBoxLabelStyle } from "./styles/CheckBoxLabelStyle";

const CheckBoxInput = ({ name, checked, onChange, value, label }) => {
  return (
    <CheckBoxLabelStyle>
      <input
        type="checkbox"
        value={value}
        name={name}
        label={label}
        checked={checked}
        onChange={onChange}
      />
      <div className="checkbox-custom">
        {checked ? (
          // 체크된 상태일 때의 SVG 아이콘
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <rect width="16" height="16" fill="#3B82F6" />
            <path
              d="M3.5 7.35L7.1499 11L12.9999 5"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
        ) : (
          // 체크되지 않은 상태일 때의 SVG 아이콘
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <rect width="16" height="16" fill="#E5E7EB" />
          </svg>
        )}
      </div>
      {label}
    </CheckBoxLabelStyle>
  );
};

export default CheckBoxInput;
