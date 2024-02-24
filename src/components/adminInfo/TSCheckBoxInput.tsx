import React, { useEffect, useState } from "react";
import { TSCheckBoxLabelStyle } from "./styles/TSCheckBoxLabelStyle";
import { TSBoxInnerStyle } from "./styles/TSModifyStyle";

// 체크박스 옵션 타입 정의
interface CheckboxOption {
  id: string;
  label: string;
  checked: boolean;
  value: string;
}

// 체크박스 props 타입 정의
interface CheckboxProps {
  onChange: (selected: string[]) => void; // 선택된 체크박스의 ID배열을 외부로 전달
}

const TSCheckBoxInput: React.FC<CheckboxProps> = ({ onChange }) => {
  const [checkboxes, setCheckboxes] = useState<CheckboxOption[]>([
    { id: "checkbox1", label: "주차장", checked: true, value: "parking" },
    { id: "checkbox2", label: "화장실구분", checked: false, value: "restroom" },
    { id: "checkbox3", label: "단체", checked: false, value: "group" },
    { id: "checkbox4", label: "Wi-fi", checked: false, value: "wifi" },
  ]);

  useEffect(() => {
    const initChecked = checkboxes
      // 선택된 체크박스만 필터링
      .filter(checkbox => checkbox.checked)
      // 그 ID를 배열로 만듦
      .map(checkbox => checkbox.id);
    // 초기에 선택된 체크박스의 ID 배열을 부모 컴포넌트로 전달
    onChange(initChecked);
  }, []);

  // 체크박스 변경 사항 처리
  const handleChange = (optionId: string) => {
    // 체크박스 배열에서 클릭된 체크박스의 ID와 일치하는 체크박스의 상태를 토글
    const updateCheckboxes = checkboxes.map(
      checkbox =>
        checkbox.id === optionId
          ? { ...checkbox, checked: !checkbox.checked } // 일치하는 ID의 체크박스는 checked 상태를 반전
          : checkbox, // 일치하지 않는경우 유지
    );
    setCheckboxes(updateCheckboxes);

    // 선택된 체크박스의 ID배열을 계산
    const selectedOptionIds = updateCheckboxes
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.id);
    // 선택된 체크박스의 ID배열을 부모 컴포넌트로 전달
    onChange(selectedOptionIds);
  };

  return (
    <TSBoxInnerStyle>
      <div className="title">
        <div>편의시설</div>
        <div className="essential">*</div>
      </div>
      <div className="check-box-wrap">
        {checkboxes.map(option => (
          <TSCheckBoxLabelStyle key={option.id}>
            <input
              type="checkbox"
              value={option.id}
              checked={option.checked}
              onChange={() => handleChange(option.id)}
            />
            <div className="checkbox-custom">
              {option.checked ? (
                // 체크된 상태일 때의 SVG 아이콘
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <rect width="16" height="16" fill="#3B82F6" />
                  <path
                    d="M3.5 7.35L7.1499 11L12.9999 5"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              ) : (
                // 체크되지 않은 상태일 때의 SVG 아이콘
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <rect width="16" height="16" fill="#E5E7EB" />
                </svg>
              )}
            </div>
            {option.label}
          </TSCheckBoxLabelStyle>
        ))}
      </div>
      <div className="text-guide">해당하는 편의시설은 모두 선택</div>
    </TSBoxInnerStyle>
  );
};

export default TSCheckBoxInput;
