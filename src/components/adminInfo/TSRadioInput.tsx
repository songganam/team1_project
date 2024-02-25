import { useEffect, useState } from "react";
import { TSBoxInnerStyle } from "./styles/TSModifyStyle";
import { TSRadioLableStyle } from "./styles/TSRadioLabelStyle";

// 라디오 옵션 타입 정의
interface RadioOption {
  id: number;
  label: string;
  checked: boolean;
  value: string;
}

// 라디오 props 타입 정의
interface RadioProps {
  onChange: (selected: number) => void;
}

const TSRadioInput: React.FC<RadioProps> = ({ onChange }) => {
  const [radios, setRadios] = useState<RadioOption[]>([
    { id: 1, label: "돼지", checked: true, value: "pork" },
    { id: 2, label: "소", checked: false, value: "beef" },
    { id: 3, label: "닭", checked: false, value: "chicken" },
    { id: 4, label: "오리", checked: false, value: "duck" },
    { id: 5, label: "양", checked: false, value: "lamb" },
    { id: 0, label: "정육점", checked: false, value: "butcher" },
  ]);

  useEffect(() => {
    // 초기에 선택된 라디오의 ID 배열을 부모 컴포넌트로 전달
    const initCheckedId = radios.find(radio => radio.checked)?.id;
    if (initCheckedId !== undefined) {
      onChange(initCheckedId);
    }
  }, []);

  // 라디오 변경 사항 처리
  const handleChange = (optionId: number) => {
    const updateRadios = radios.map(radio => ({
      ...radio,
      checked: radio.id === optionId,
    }));
    setRadios(updateRadios);

    // 선택된 라디오 버튼을 부모 컴포넌트로 전달
    onChange(optionId);
  };

  return (
    <TSBoxInnerStyle>
      <div className="title">
        <div>고기종류</div>
        <div className="essential">*</div>
      </div>
      <div className="radio-wrap">
        {radios.map(option => (
          <TSRadioLableStyle key={option.id}>
            <input
              type="radio"
              value={option.id}
              checked={option.checked}
              onChange={() => handleChange(option.id)}
            />
            <div className="radio-custom">
              {option.checked ? (
                // 체크된 상태일 때의 SVG 아이콘
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle cx="10" cy="10" r="10" fill="#3B82F6" />
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
