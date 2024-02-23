import { ChangeEvent, useState } from "react";
import { TSInputStyle, TSTextFieldStyle } from "./styles/TSTextFieldStyle";

// props 타입 정의
interface TSTextFieldProps {
  placeholder?: string;
  value?: string;
  name?: string;
  onInputChange?: (length: number) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

// state 타입 정의
type StateType = "default" | "focus" | "error" | "filled";

const TSTextField: React.FC<TSTextFieldProps> = ({
  placeholder,
  onInputChange,
}) => {
  const [value, setValue] = useState<string>("");
  const [state, setState] = useState<StateType>("default");

  const validateInput = (value: string) => {
    if (value.length === 0 || value.length > 30) {
      setState("error");
    } else {
      setState(value ? "filled" : "default");
    }
  };

  const handleFocus = () => setState("focus");
  const handleBlur = () => validateInput(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    validateInput(newValue);
    if (onInputChange) {
      // 상위 컴포넌트로 현재 입력값의 길이 전달
      onInputChange(newValue.length);
    }
  };

  return (
    <TSTextFieldStyle state={state}>
      <TSInputStyle
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </TSTextFieldStyle>
  );
};

export default TSTextField;
