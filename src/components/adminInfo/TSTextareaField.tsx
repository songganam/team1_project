import { ChangeEvent, useState } from "react";
import { TSTextareaFieldStyle } from "./styles/TSTextareaFieldStyle";

// props 타입 정의
interface TSTextareaFieldProps {
  placeholder: string;
  onInputChange?: (length: number) => void;
}

// state 타입 정의
type StateType = "default" | "focus" | "error" | "filled";

const TSTextareaField: React.FC<TSTextareaFieldProps> = ({
  placeholder,
  onInputChange,
}) => {
  const [value, setValue] = useState<string>("");
  const [state, setState] = useState<StateType>("default");

  const validateInput = (value: string) => {
    if (value.length > 100) {
      setState("error");
    } else {
      setState(value ? "filled" : "default");
    }
  };

  const handleFocus = () => setState("focus");
  const handleBlur = () => validateInput(value);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    validateInput(newValue);
    if (onInputChange) {
      // 상위 컴포넌트로 현재 입력값의 길이 전달
      onInputChange(newValue.length);
    }
  };

  return (
    <TSTextareaFieldStyle
      state={state}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default TSTextareaField;
