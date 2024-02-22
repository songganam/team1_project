import { ChangeEvent, useState } from "react";
import {
  TSInputStyle,
  TSTextFieldAdressStyle,
} from "./styles/TSTextFieldStyle";

// props 타입 정의
interface TSTextFieldAdressProps {
  placeholder: string;
  readonly?: boolean;
}

// state 타입 정의
type StateType = "default" | "focus" | "error" | "filled";

const TSTextFieldAdress: React.FC<TSTextFieldAdressProps> = ({
  placeholder,
  readonly = false,
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
  };

  return (
    <TSTextFieldAdressStyle state={state}>
      <TSInputStyle
        type="text"
        placeholder={placeholder}
        readOnly={readonly}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </TSTextFieldAdressStyle>
  );
};

export default TSTextFieldAdress;
