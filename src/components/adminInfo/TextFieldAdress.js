import React, { useState } from "react";
import { InputStyle, TextFieldAdressStyle } from "./styles/TextFieldStyle";

const TextFieldAdress = ({ placeholder }) => {
  const [value, setValue] = useState("");
  const [state, setState] = useState("default");

  const validateInput = value => {
    if (value.length === 0 || value.length > 30) {
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
  };

  return (
    <TextFieldAdressStyle state={state}>
      <InputStyle
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </TextFieldAdressStyle>
  );
};

export default TextFieldAdress;
