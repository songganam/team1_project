import { ChangeEvent, useState } from "react";
import { TSTextareaFieldStyle } from "./styles/TSTextareaFieldStyle";
import { useRecoilState } from "recoil";
import { atomStoreInfoState } from "../../atom/atomStoreInfoState";

// 텍스트필드 스타일 props 타입 정의
type TextareaStateProps = "default" | "focus" | "error" | "filled";

interface TSTextareaProps {
  placeholder?: string;
  name?: string;
}

const TSTextarea: React.FC<TSTextareaProps> = ({ placeholder, name }) => {
  const [storeInfo, setStoreInfo] = useRecoilState(atomStoreInfoState);

  // 스타일컴포넌트 props 상태 관리
  const [state, setState] = useState<TextareaStateProps>("default");
  const handleFocus = () => setState("focus");
  const handleBlur = () => {
    const value = storeInfo.open;
    if (value.length > 100) {
      setState("error");
    } else {
      setState(value ? "filled" : "default");
    }
  };

  // 텍스트에어리어 이벤트 핸들러
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setStoreInfo({
      ...storeInfo,
      open: e.target.value,
    });
  };
  return (
    <TSTextareaFieldStyle
      state={state}
      placeholder={placeholder}
      name={name}
      value={storeInfo.open}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default TSTextarea;
