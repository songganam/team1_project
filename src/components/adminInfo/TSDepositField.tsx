import { ChangeEvent, useState } from "react";
import { TSInputStyle, TSTextFieldStyle } from "./styles/TSTextFieldStyle";
import { useRecoilState } from "recoil";
import { atomStoreInfoState } from "../../atom/atomStoreInfoState";

// 텍스트필드 props 타입 정의
interface TextFieldProps {
  placeholder: string;
  name?: string;
}
// 텍스트필드 스타일 props 타입 정의
type TextFieldStateProps = "default" | "focus" | "error" | "filled";

const TSDepositField: React.FC<TextFieldProps> = ({ placeholder, name }) => {
  const [storeInfo, setStoreInfo] = useRecoilState(atomStoreInfoState);

  // 스타일컴포넌트 props 상태 관리
  const [state, setState] = useState<TextFieldStateProps>("default");
  const handleFocus = () => setState("focus");
  const handleBlur = () => {
    const value = storeInfo.deposit;
    if (value <= 0 || value == 0) {
      setState("error");
    } else {
      setState(value ? "filled" : "default");
    }
  };

  // 예약금 변경 이벤트 핸들러
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setStoreInfo({
      ...storeInfo,
      deposit: newValue ? parseInt(newValue, 10) : 0,
    });
  };

  return (
    <TSTextFieldStyle state={state}>
      <TSInputStyle
        type="number"
        placeholder={placeholder}
        value={storeInfo.deposit || ""}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </TSTextFieldStyle>
  );
};

export default TSDepositField;
