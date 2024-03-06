import { useEffect, useState } from "react";
import { TSBoxInnerStyle } from "./styles/TSModifyStyle";
import { TSRadioLableStyle } from "./styles/TSRadioLabelStyle";
import { useRecoilState } from "recoil";
import { atomStoreInfoState } from "../../atom/atomStoreInfoState";

// 라디오 옵션 타입 정의
interface RadioOption {
  id: number;
  label: string;
  checked: boolean;
  value: string;
}

const TSRadioInput = () => {
  const [storeInfo, setStoreInfo] = useRecoilState(atomStoreInfoState);

  // 라디오 버튼 변경 이벤트 핸들러
  const handleChange = (selectedId: number) => {
    // imeat 속성 업데이트
    setStoreInfo({
      ...storeInfo,
      imeat: selectedId,
    });
  };

  const radios = [
    { id: 1, label: "돼지", value: "pork" },
    { id: 2, label: "소", value: "beef" },
    { id: 3, label: "닭", value: "chicken" },
    { id: 4, label: "오리", value: "duck" },
    { id: 5, label: "양", value: "lamb" },
    { id: 0, label: "정육점", value: "butcher" },
  ];

  return (
    <TSBoxInnerStyle>
      <div className="title">
        <div>고기종류</div>
        <div className="essential">*</div>
      </div>
      <div className="radio-wrap">
        {radios?.map(option => (
          <TSRadioLableStyle key={option.id}>
            <input
              type="radio"
              value={option.id}
              checked={storeInfo.imeat === option.id}
              onChange={() => handleChange(option.id)}
            />
            <div className="radio-custom">
              {storeInfo.imeat === option.id ? (
                // 체크된 상태일 때의 SVG 아이콘
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle cx="10" cy="10" r="10" fill="#099e76" />
                  <circle cx="10" cy="10" r="4" fill="white" />
                </svg>
              ) : (
                // 체크되지 않은 상태일 때의 SVG 아이콘
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle cx="10" cy="10" r="10" fill="#E5E7EB" />
                </svg>
              )}
            </div>
            {option.label}
          </TSRadioLableStyle>
        ))}
      </div>
      <div className="text-guide">정육점 사장님은 정육점 선택</div>
    </TSBoxInnerStyle>
  );
};

export default TSRadioInput;
