import React, { ChangeEvent, useEffect, useState } from "react";
import { TSCheckBoxLabelStyle } from "./styles/TSCheckBoxLabelStyle";
import { TSBoxInnerStyle } from "./styles/TSModifyStyle";
import { useRecoilState } from "recoil";
import { atomStoreInfoState } from "../../atom/atomStoreInfoState";

// 체크박스 옵션 타입 정의
interface CheckboxOption {
  id: number;
  label: string;
  checked: boolean;
  value: string;
}

const TSCheckBoxInput = () => {
  const [storeInfo, setStoreInfo] = useRecoilState(atomStoreInfoState);

  const [checkboxes, setCheckboxes] = useState<CheckboxOption[]>([]);
  // 체크박스 옵션 초기화
  const initialCheckboxes: CheckboxOption[] = [
    {
      id: 1,
      label: "주차장",
      checked: storeInfo.facilities.includes(1),
      value: "parking",
    },
    {
      id: 2,
      label: "단체가능",
      checked: storeInfo.facilities.includes(2),
      value: "group",
    },
    {
      id: 3,
      label: "포장가능",
      checked: storeInfo.facilities.includes(3),
      value: "togo",
    },
    {
      id: 4,
      label: "배달가능",
      checked: storeInfo.facilities.includes(4),
      value: "delivery",
    },
    {
      id: 5,
      label: "Wi-fi",
      checked: storeInfo.facilities.includes(5),
      value: "wifi",
    },
    {
      id: 6,
      label: "예약가능",
      checked: storeInfo.facilities.includes(6),
      value: "reservation",
    },
    {
      id: 7,
      label: "화장실구분",
      checked: storeInfo.facilities.includes(7),
      value: "restroom",
    },
    {
      id: 8,
      label: "대기공간",
      checked: storeInfo.facilities.includes(8),
      value: "waiting",
    },
    {
      id: 9,
      label: "장애인시설",
      checked: storeInfo.facilities.includes(9),
      value: "handicap",
    },
    {
      id: 10,
      label: "반려동물",
      checked: storeInfo.facilities.includes(10),
      value: "animal",
    },
    {
      id: 11,
      label: "유아의자",
      checked: storeInfo.facilities.includes(11),
      value: "baby",
    },
    {
      id: 12,
      label: "간편결제",
      checked: storeInfo.facilities.includes(12),
      value: "payment",
    },
  ];

  useEffect(() => {
    // Recoil 상태에 기반한 체크박스 상태 초기화
    const updatedCheckboxes = initialCheckboxes?.map(option => ({
      ...option,
      checked: storeInfo.facilities.includes(option.id),
    }));
    setCheckboxes(updatedCheckboxes);
  }, [storeInfo.facilities]);

  // 체크박스 변경 사항 처리
  const handleChange = (optionId: number) => {
    const newFacilities = [...storeInfo.facilities];
    if (newFacilities.includes(optionId)) {
      // 이미 포함된 경우 제거
      const index = newFacilities.indexOf(optionId);
      newFacilities.splice(index, 1);
    } else {
      // 포함되지 않은 경우 추가
      newFacilities.push(optionId);
    }
    setStoreInfo({
      ...storeInfo,
      facilities: newFacilities,
    });
  };

  return (
    <TSBoxInnerStyle>
      <div className="title">
        <div>편의시설</div>
        {/* <div className="essential">*</div> */}
      </div>
      <div className="check-box-wrap">
        {initialCheckboxes?.map(option => (
          <TSCheckBoxLabelStyle key={option.id}>
            <input
              type="checkbox"
              id={`facility-${option.id}`}
              checked={option?.checked}
              onChange={() => handleChange(option?.id)}
            />
            <div className="checkbox-custom">
              {option?.checked ? (
                // 체크된 상태일 때의 SVG 아이콘
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <rect width="16" height="16" fill="#099e76" />
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
