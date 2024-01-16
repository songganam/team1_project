import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { ColorStyle, FontSize } from "../../styles/common/CommonStyle";

const GoTop = () => {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottm] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullContentHeight = document.documentElement.scrollHeight;
      const bottomLimit = 50;

      if (
        scrolled > 30 &&
        scrolled < fullContentHeight - viewportHeight - bottomLimit
      ) {
        setShowTop(true);
        setShowBottm(true);
      } else if (scrolled < 30) {
        setShowTop(false);
        setShowBottm(true);
      } else {
        setShowTop(true);
        setShowBottm(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleClickBottom = () => {
    window.scrollTo({ top: 9999, behavior: "smooth" });
  };

  const GoTopStyle = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 9999;
    padding: 10px;
    bottom: 90px;
    right: 20px;
    width: 80px;
    background: ${ColorStyle.secondary};
    border-radius: 10px;
    display: ${showTop ? "block" : "none"};
    cursor: pointer;
    font-family: "DAEAM_LEE_TAE_JOON";
    font-size: ${FontSize.strong};
    color: ${ColorStyle.grayScale};
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    opacity: 0.85;
  `;

  const GoBottomStyle = styled(GoTopStyle)`
    display: ${showBottom ? "block" : "none"};
    bottom: 20px;
  `;

  return (
    <>
      <GoTopStyle
        onClick={() => {
          handleClickTop();
        }}
      >
        맨 위로
      </GoTopStyle>
      <GoBottomStyle
        onClick={() => {
          handleClickBottom();
        }}
      >
        맨 아래
      </GoBottomStyle>
    </>
  );
};

export default GoTop;
