import React from "react";
import {
  TitleContent,
  TitleHeaderInfo,
  TitleHeaderWrapper,
  TitleName,
} from "./styles/TitleHeaderStyle";

const TitleHeader = props => {
  const { timg, tname, tcontent } = props;

  return (
    <TitleHeaderWrapper>
      <img src={timg} alt="타이틀 헤더 이미지"></img>
      <TitleHeaderInfo>
        <TitleName>{tname}</TitleName>
        <TitleContent>{tcontent}</TitleContent>
      </TitleHeaderInfo>
    </TitleHeaderWrapper>
  );
};

export default TitleHeader;
