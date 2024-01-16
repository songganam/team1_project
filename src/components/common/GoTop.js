import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { ColorStyle, FontSize } from "../../styles/common/CommonStyle";

const GoTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const GoTopStyle = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    bottom: 40px;
    right: 40px;
    width: 80px;
    background: #fff;
    border: 2px solid ${ColorStyle.secondary};
    border-radius: 10px;
    display: ${show ? "block" : "none"};
    cursor: pointer;
    font-family: "DAEAM_LEE_TAE_JOON";
    font-size: ${FontSize.strong};
    color: ${ColorStyle.primary};
  `;

  return (
    <GoTopStyle
      onClick={() => {
        handleClick();
      }}
    >
      맨 위로
    </GoTopStyle>
  );
};

export default GoTop;
