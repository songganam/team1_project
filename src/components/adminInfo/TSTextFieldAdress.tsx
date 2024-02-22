import { ChangeEvent, useEffect, useState } from "react";
import {
  TSInputStyle,
  TSTextFieldAdressStyle,
} from "./styles/TSTextFieldStyle";

// props 타입 정의
interface TSTextFieldAdressProps {
  placeholder: string;
  readonly?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

// state 타입 정의
type StateType = "default" | "focus" | "error" | "filled";

const TSTextFieldAdress: React.FC<TSTextFieldAdressProps> = ({
  placeholder,
  readonly = false,
  value,
  onChange,
}) => {
  const [state, setState] = useState<StateType>("default");

  const validateInput = (value: string) => {
    if (value === undefined || value.length === 0) {
      setState("error");
    } else {
      setState(value ? "filled" : "default");
    }
  };

  const handleFocus = () => setState("focus");
  const handleBlur = () => validateInput(value ?? "");

  useEffect(() => {
    if (readonly) {
      setState(value && value.length > 0 ? "filled" : "default");
    }
  }, [value, readonly]);

  return (
    <TSTextFieldAdressStyle state={state}>
      <TSInputStyle
        type="text"
        placeholder={placeholder}
        readOnly={readonly}
        value={value || ""} // value가 undefined일 경우 빈 문자열 사용
        onChange={onChange} // 외부에서 전달받은 onChange 핸들러를 그대로 사용
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </TSTextFieldAdressStyle>
  );
};

export default TSTextFieldAdress;
