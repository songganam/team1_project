import React from "react";
import More from "./More";
import { WrapStyle } from "./styles/ListStyle";
import {
  MoreHeadStyle,
  MoreTitleStyle,
  TitleBoxStyle,
} from "./styles/ReadStyle";

const Read = () => {
  return (
    <WrapStyle>
      <TitleBoxStyle>
        <MoreTitleStyle>
          고기로 너무 좋아요!! 중구에 고깃집 하나 추천합니다.
        </MoreTitleStyle>
        <div className="writerBox">
          <div className="userName">어쭈구리고기봐라</div>
          <div className="date">2024.01.08 오후 10:30:47</div>
          <div className="viewBox">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/view_eye.svg`}
              alt=""
            />
            <div className="viewCount">3574</div>
          </div>
        </div>
      </TitleBoxStyle>
      <More />
    </WrapStyle>
  );
};

export default Read;
