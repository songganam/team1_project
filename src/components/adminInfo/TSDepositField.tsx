import { ChangeEvent, useState } from "react";
import { TSInputStyle, TSTextFieldStyle } from "./styles/TSTextFieldStyle";

// 텍스트필드 props 타입 정의
interface TextFieldProps {
  placeholder: string;
  value: number; // 부모 컴포넌트에서 관리
  name?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
// 텍스트필드 스타일 props 타입 정의
type TextFieldStateProps = "default" | "focus" | "error" | "filled";

const TSDepositField: React.FC<TextFieldProps> = ({
  placeholder,
  value,
  name,
  onChange,
}) => {
  // 스타일컴포넌트 props 상태 관리
  const [state, setState] = useState<TextFieldStateProps>("default");
  const handleFocus = () => setState("focus");
  const handleBlur = () => {
    if (value <= 0 || value == 0) {
      setState("error");
    } else {
      setState(value ? "filled" : "default");
    }
  };

  return (
    <TSTextFieldStyle state={state}>
      <TSInputStyle
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </TSTextFieldStyle>
  );
};

export default TSDepositField;
