import React from "react";
import {
  InfoStyle,
  TitleStyle,
  TnoStyle,
  TtableStyle,
} from "./styles/ListStyle";
import { ColorStyle } from "../../styles/common/CommonStyle";

const Ttable = () => {
  return (
    <TtableStyle>
      <TnoStyle color={ColorStyle.g700}>공지</TnoStyle>
      <TitleStyle>이메일로 회원가입이 안되는 경우 읽어주세요.</TitleStyle>
      <InfoStyle color={ColorStyle.g700}>
        <div>고기로</div>
        <div>2024.01.08</div>
        <div>3578</div>
      </InfoStyle>
    </TtableStyle>
  );
};

export default Ttable;
