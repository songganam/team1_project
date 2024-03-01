import { ChangeEvent, useState } from "react";
import { TSInputStyle, TSTextFieldStyle } from "./styles/TSTextFieldStyle";
import { useRecoilState } from "recoil";
import { atomStoreInfoState } from "../../atom/atomStoreInfoState";

// 텍스트필드 스타일 props 타입 정의
type TextFieldStateProps = "default" | "focus" | "error" | "filled";

interface TSTextFieldProps {
  placeholder: string;
  name: "name" | "tel";
}

const TSTextField: React.FC<TSTextFieldProps> = ({ placeholder, name }) => {
  const [storeInfo, setStoreInfo] = useRecoilState(atomStoreInfoState);

  // 스타일컴포넌트 props 상태 관리
  const [state, setState] = useState<TextFieldStateProps>("default");
  const handleFocus = () => setState("focus");
  const handleBlur = () => {
    const value = storeInfo[name];
    if (value.length === 0 || value.length > 30) {
      setState("error");
    } else {
      setState(value ? "filled" : "default");
    }
  };

  // 텍스트필드 이벤트 핸들러
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStoreInfo({
      ...storeInfo,
      [name]: e.target.value,
    });
  };

  return (
    <TSTextFieldStyle state={state}>
      <TSInputStyle
        type="text"
        placeholder={placeholder}
        name={name}
        value={storeInfo[name]}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </TSTextFieldStyle>
  );
};

export default TSTextField;
