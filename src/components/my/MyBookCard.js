import React from "react";
import {
  MyBookCardBookButton,
  MyBookCardContent,
  MyBookCardDateContent,
  MyBookCardDateTitle,
  MyBookCardInfo,
  MyBookCardPlace,
  MyBookCardSubTitle,
  MyBookCardTitle,
  MyBookCardVisual,
  MyBookCardWrapper,
  MyBookmark,
} from "./styles/MyBookCardStyle";

const MyBookCard = props => {
  const { gogiimg } = props;
  return (
    <MyBookCardWrapper>
      <MyBookCardVisual>
        <img src={gogiimg} alt="가게 이미지"></img>
      </MyBookCardVisual>
      <MyBookCardContent>
        <MyBookCardTitle>
          <MyBookmark>북마크</MyBookmark>
          <MyBookCardPlace>지점명</MyBookCardPlace>
          <MyBookCardSubTitle>가게명</MyBookCardSubTitle>
          <MyBookCardBookButton>
            <button>예약변경</button>
            <button>예약취소</button>
          </MyBookCardBookButton>
        </MyBookCardTitle>
        <MyBookCardInfo>
          <MyBookCardDateTitle>
            <li>날짜</li>
            <li>시간</li>
            <li>인원 수</li>
            <li>요청사항</li>
          </MyBookCardDateTitle>
          <MyBookCardDateContent>
            <li>날짜내용</li>
            <li>시간내용</li>
            <li>인원내용</li>
            <li>요청내용</li>
          </MyBookCardDateContent>
        </MyBookCardInfo>
      </MyBookCardContent>
    </MyBookCardWrapper>
  );
};

export default MyBookCard;
