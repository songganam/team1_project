import React from "react";
import { ClipLoader } from "react-spinners";
import { ColorStyle } from "../../styles/common/CommonStyle";

const Fetching = () => {
  const laodingCss = {
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 999,
    width: "100%",
    height: "100%",
    background: "rgba(255,255,255,0.8)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={laodingCss}>
      <ClipLoader size={50} color={ColorStyle.primary} loading={true} />
      <div
        style={{
          fontFamily: "DAEAM_LEE_TAE_JOON",
          fontSize: "25px",
        }}
      >
        맛있게 굽고 있는 중...
      </div>
    </div>
  );
};

export default Fetching;
