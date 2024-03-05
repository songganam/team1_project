import React from "react";
import {
  InfoStyle,
  TableStyle,
  TitleStyle,
  TnoStyle,
} from "./styles/ListStyle";
import { ColorStyle } from "../../styles/common/CommonStyle";

const Thead = () => {
  return (
    <TableStyle
      marginTop="30px"
      background={ColorStyle.g200}
      borderTop="1px solid #8F8F8F"
    >
      <TnoStyle>번호</TnoStyle>
      <TitleStyle justifyContent="center">제목</TitleStyle>
      <InfoStyle>
        <div>작성자</div>
        <div>작성일</div>
        <div>좋아요</div>
      </InfoStyle>
    </TableStyle>
  );
};

export default Thead;
