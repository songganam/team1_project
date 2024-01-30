import React, { useState } from "react";

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = e => {
    // 입력값에서 숫자만 추출
    const inputValue = e.target.value.replace(/\D/g, "");

    // 전화번호 형식에 맞게 하이픈 추가
    const formattedPhoneNumber = formatPhoneNumber(inputValue);

    // 상태 업데이트
    setPhoneNumber(formattedPhoneNumber);
  };

  const formatPhoneNumber = value => {
    // 000-0000-0000 형식으로 포맷팅
    const regex = /^(\d{3})(\d{0,4})(\d{0,4})$/;
    const matches = value.match(regex);

    if (matches) {
      return `${matches[1]}${matches[2] ? "-" + matches[2] : ""}${
        matches[3] ? "-" + matches[3] : ""
      }`;
    }

    // 일치하지 않는 경우 그대로 반환
    return value;
  };

  return (
    <input
      type="text"
      value={phoneNumber}
      placeholder="000-0000-0000"
      onChange={handleInputChange}
      onKeyDown={e => {
        // 입력 중간에 하이픈 추가
        if (
          (e.key === "Backspace" || e.key === "Delete") &&
          e.target.selectionStart < phoneNumber.length
        ) {
          setPhoneNumber(prevPhoneNumber =>
            prevPhoneNumber.slice(0, prevPhoneNumber.length - 1),
          );
        }
      }}
    />
  );
};

export default PhoneNumberInput;
