import React, { useState } from "react";
import Postcode from "react--postcode";

const MyComponent = () => {
  const [postcode, setPostcode] = useState("");
  const [roadAddress, setRoadAddress] = useState("");
  const [jibunAddress, setJibunAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [extraAddress, setExtraAddress] = useState("");
  const [guide, setGuide] = useState("");
  const [isPostOpen, setIsPostOpen] = useState(false);

  const handleComplete = data => {
    const roadAddr = data.roadAddress; // 도로명 주소 변수
    let extraRoadAddr = ""; // 참고 항목 변수

    if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
      extraRoadAddr += data.bname;
    }
    // 건물명이 있고, 공동주택일 경우 추가한다.
    if (data.buildingName !== "" && data.apartment === "Y") {
      extraRoadAddr +=
        extraRoadAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
    }
    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
    if (extraRoadAddr !== "") {
      extraRoadAddr = ` (${extraRoadAddr})`;
    }

    // 우편번호와 주소 정보를 state에 업데이트한다.
    setPostcode(data.zonecode);
    setRoadAddress(roadAddr);
    setJibunAddress(data.jibunAddress);

    // 참고항목 문자열이 있을 경우 state를 업데이트한다.
    if (roadAddr !== "") {
      setExtraAddress(extraRoadAddr);
    } else {
      setExtraAddress("");
    }

    // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
    if (data.autoRoadAddress) {
      const expRoadAddr = data.autoRoadAddress + extraRoadAddr;
      setGuide(`(예상 도로명 주소 : ${expRoadAddr})`);
    } else if (data.autoJibunAddress) {
      const expJibunAddr = data.autoJibunAddress;
      setGuide(`(예상 지번 주소 : ${expJibunAddr})`);
    } else {
      setGuide("");
    }

    setIsPostOpen(false); // 팝업 닫기
  };

  const handlePostOpen = () => {
    setIsPostOpen(true);
  };

  const handlePostClose = () => {
    setIsPostOpen(false);
  };

  return (
    <div>
      <input
        type="text"
        id="sample4_postcode"
        value={postcode}
        placeholder="우편번호"
        readOnly
      />
      <input type="button" onClick={handlePostOpen} value="우편번호 찾기" />
      <br />
      <input
        type="text"
        id="sample4_roadAddress"
        value={roadAddress}
        placeholder="도로명주소"
        readOnly
      />
      <input
        type="text"
        id="sample4_jibunAddress"
        value={jibunAddress}
        placeholder="지번주소"
        readOnly
      />
      <span
        id="guide"
        style={{ color: "#999", display: guide ? "block" : "none" }}
      >
        {guide}
      </span>
      <input
        type="text"
        id="sample4_detailAddress"
        value={detailAddress}
        placeholder="상세주소"
        onChange={e => setDetailAddress(e.target.value)}
      />
      <input
        type="text"
        id="sample4_extraAddress"
        value={extraAddress}
        placeholder="참고항목"
        readOnly
      />
      {isPostOpen && (
        <Postcode onClose={handlePostClose} onComplete={handleComplete} />
      )}
    </div>
  );
};

export default MyComponent;
