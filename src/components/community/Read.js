import React from "react";
import Button from "../button/Button";
import More from "./More";
import { WrapStyle } from "./styles/ListStyle";
import {
  BtnBox,
  BtnBoxStyle,
  MoreTitleStyle,
  PrnvContentStyle,
  TitleBoxStyle,
  WriterBoxStyle,
} from "./styles/ReadStyle";

const Read = () => {
  return (
    <WrapStyle>
      <TitleBoxStyle>
        <MoreTitleStyle>
          고기로 너무 좋아요!! 중구에 고깃집 하나 추천합니다.
        </MoreTitleStyle>
        <WriterBoxStyle>
          <div className="userName">어쭈구리고기봐라</div>
          <div className="date">2024.01.08 오후 10:30:47</div>
          <div className="viewBox">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/view_eye.svg`}
              alt="img"
            />
            <div className="viewCount">3574</div>
          </div>
        </WriterBoxStyle>
      </TitleBoxStyle>
      <More />
      <PrnvContentStyle>
        <div className="prnv">
          <div className="prnvIcon">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/mingcute_up-line.svg`}
              alt="img"
            />
          </div>
          <div className="prnvText">이전글</div>
        </div>
        <div className="prnvTitle">
          고기로 너무 좋아요!! 중구에 고깃집 하나 추천합니다.
        </div>
      </PrnvContentStyle>
      <PrnvContentStyle>
        <div className="prnv">
          <div className="prnvIcon">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/mingcute_down-line.svg`}
              alt="img"
            />
          </div>
          <div className="prnvText">다음글</div>
        </div>
        <div className="prnvTitle">
          고기로 너무 좋아요!! 중구에 고깃집 하나 추천합니다.
        </div>
      </PrnvContentStyle>
      <BtnBoxStyle>
        <div className="editBtn">
          <Button bttext="수정하기" />
          <Button bttext="삭제하기" />
        </div>
        <Button bttext="목록보기" />
      </BtnBoxStyle>
      <div className="reviewBox">
        <div className="readReviewBox"></div>
        <div className="inputReviewBox"></div>
      </div>
    </WrapStyle>
  );
};

export default Read;
