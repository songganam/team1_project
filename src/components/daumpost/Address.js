import React, { useEffect } from "react";

const AddressForm = () => {
  useEffect(() => {
    // Daum 우편번호 서비스 스크립트 로딩
    const script = document.createElement("script");
    script.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js?autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      // Daum 우편번호 서비스 초기화
      new window.daum.Postcode({
        oncomplete: function (data) {
          // 팝업에서 검색결과 항목을 클릭했을 때 실행할 코드
          // 예제를 참고하여 다양한 활용법을 작성하세요.
          console.log(data);
        },
      }).open();
    };

    return () => {
      // 컴포넌트가 언마운트될 때 스크립트 제거
      document.head.removeChild(script);
    };
  }, []); // 빈 배열은 마운트될 때만 실행

  return <div>{/* 주소 입력 폼 및 기타 UI 요소들 */}</div>;
};

export default AddressForm;
