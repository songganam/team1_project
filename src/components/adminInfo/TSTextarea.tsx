import { ChangeEvent, useState } from "react";
import { TSTextareaFieldStyle } from "./styles/TSTextareaFieldStyle";

// textarea 타입 정의
interface TextareaProps {
  placeholder: string;
  value: string; // 부모 컴포넌트에서 관리
  name?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
// 텍스트필드 스타일 props 타입 정의
type TextareaStateProps = "default" | "focus" | "error" | "filled";

const TSTextarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  name,
  onChange,
}) => {
  // 스타일컴포넌트 props 상태 관리
  const [state, setState] = useState<TextareaStateProps>("default");
  const handleFocus = () => setState("focus");
  const handleBlur = () => {
    if (value.length > 100) {
      setState("error");
    } else {
      setState(value ? "filled" : "default");
    }
  };

  return (
    <TSTextareaFieldStyle
      state={state}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default TSTextarea;
