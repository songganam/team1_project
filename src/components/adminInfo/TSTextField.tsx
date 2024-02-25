import React, { ChangeEvent, useEffect, useState } from "react";
import { TSInputStyle, TSTextFieldStyle } from "./styles/TSTextFieldStyle";

// 텍스트필드 props 타입 정의
interface TextFieldProps {
  placeholder: string;
  value: string; // 부모 컴포넌트에서 관리
  name?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

// 텍스트필드 스타일 props 타입 정의
type TextFieldStateProps = "default" | "focus" | "error" | "filled";

const TSTextField: React.FC<TextFieldProps> = ({
  placeholder,
  value,
  name,
  onChange,
}) => {
  const [state, setState] = useState<TextFieldStateProps>("default");

  // 텍스트필드 유효성 상태 업데이트
  useEffect(() => {
    if (value.length > 30) {
      setState("error");
    } else {
      setState(value ? "filled" : "default");
    }
  }, [value]);

  return (
    <TSTextFieldStyle state={state}>
      <TSInputStyle
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setState("focus")}
        onError={() => setState(value.length === 0 ? "error" : "default")}
        onBlur={() => setState(value.length > 0 ? "filled" : "default")}
      />
    </TSTextFieldStyle>
  );
};

export default TSTextField;
