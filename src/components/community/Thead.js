import React from "react";
import {
  InfoStyle,
  TableStyle,
  TitleStyle,
  TnoStyle,
} from "./styles/ListStyle";

const Thead = () => {
  return (
    <TableStyle>
      <TnoStyle>번호</TnoStyle>
      <TitleStyle justifyContent="center">제목</TitleStyle>
      <InfoStyle>
        <div>작성자</div>
        <div>작성일</div>
        {/* <div>조회수</div> */}
      </InfoStyle>
    </TableStyle>
  );
};

export default Thead;
