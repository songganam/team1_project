import React from "react";
import Button from "../button/Button";
import {
  AddBoxStyle,
  ContentBoxStyle,
  FootStyle,
  ImageBoxStyle,
  UserBoxStyle,
} from "./styles/AddStyle";
import { WrapStyle } from "./styles/ListStyle";

const Add = () => {
  return (
    <WrapStyle>
      <AddBoxStyle>
        <div className="titleBox">제목</div>
        <div className="inputBox">
          <input type="text" />
        </div>
      </AddBoxStyle>
      <UserBoxStyle>
        <div className="titleBox">작성자</div>
        <div className="writerBox">어쭈구리고기봐라</div>
      </UserBoxStyle>
      <ContentBoxStyle>
        <div className="titleBox">내용</div>
        <div className="inputBox">
          <textarea type="text" />
        </div>
      </ContentBoxStyle>
      <ImageBoxStyle>
        <div className="titleBox">사진</div>
        <Button bttext="사진추가" />
        <div className="inputBox">
          <input />
        </div>
      </ImageBoxStyle>
      <FootStyle>
        <div className="btnBox">
          <Button bttext="확인" />
          <Button bttext="취소" />
        </div>
      </FootStyle>
    </WrapStyle>
  );
};

export default Add;
