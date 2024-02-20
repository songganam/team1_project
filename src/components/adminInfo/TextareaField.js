import React, { useState } from "react";
import { TextareaFieldStyle } from "./styles/TextareaFieldStyle";

const TextareaField = ({ placeholder, onInputChange }) => {
  const [value, setValue] = useState("");
  const [state, setState] = useState("default");

  const validateInput = value => {
    if (value.length > 100) {
      setState("error");
    } else {
      setState(value ? "filled" : "default");
    }
  };

  const handleFocus = () => setState("focus");
  const handleBlur = () => validateInput(value);

  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
    validateInput(newValue);
    if (onInputChange) {
      // 상위 컴포넌트로 현재 입력값의 길이 전달
      onInputChange(newValue.length);
    }
  };

  return (
    <TextareaFieldStyle
      state={state}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default TextareaField;
