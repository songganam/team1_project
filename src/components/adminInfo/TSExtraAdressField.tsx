import { ChangeEvent, useEffect, useState } from "react";
import {
  TSInputStyle,
  TSTextFieldAdressStyle,
} from "./styles/TSTextFieldStyle";

// 텍스트필드 props 타입 정의
interface AdressFieldProps {
  placeholder: string;
  value: string; // 부모 컴포넌트에서 관리
  name?: string;
  readonly?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
// 텍스트필드 스타일 props 타입 정의
type AdressFieldStateProps = "default" | "focus" | "error" | "filled";

const TSExtraAdressField: React.FC<AdressFieldProps> = ({
  placeholder,
  value,
  name,
  readonly,
  onChange,
}) => {
  // 스타일컴포넌트 props 상태 관리
  const [state, setState] = useState<AdressFieldStateProps>("default");
  const handleFocus = () => setState("focus");
  const handleBlur = () => {
    if (value === undefined || value.length === 0) {
      setState("error");
    } else {
      setState(value ? "filled" : "default");
    }
  };

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
        name={name}
        value={value || ""}
        readOnly={readonly}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </TSTextFieldAdressStyle>
  );
};

export default TSExtraAdressField;
