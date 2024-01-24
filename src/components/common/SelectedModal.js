import React from "react";
import Button from "../button/Button";

// 타이틀, 내용, 확인버튼 클릭시 콜백 함수
const SelectedModal = ({ title, content, confirmFn, cancelFn }) => {
  const popstyle = {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.7)",
    zIndex: 999,
  };
  return (
    <div style={popstyle}>
      <div
        style={{
          background: "#fff",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          padding: "20px",
          width: "300px",
          borderRadius: "10px",
          fontFamily: "DAEAM_LEE_TAE_JOON",
          fontSize: "19px",
        }}
      >
        <div
          style={{
            paddingBottom: "5px",
            borderBottom: "1px dashed #8f8f8f",
          }}
        >
          {title}
        </div>
        <div
          style={{
            paddingBottom: "5px",
            borderBottom: "1px dashed #8f8f8f",
          }}
        >
          {content}
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <div onClick={confirmFn}>
            <Button bttext="확인" />
          </div>
          <div onClick={cancelFn}>
            <Button bttext="취소" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedModal;
