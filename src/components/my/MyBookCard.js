import React from "react";
import Button from "../../components/button/Button";
import {
  MyBookCardBookButton,
  MyBookCardContent,
  MyBookCardDateContent,
  MyBookCardDateTitle,
  MyBookCardInfo,
  MyBookCardName,
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
          <MyBookCardSubTitle>
            <MyBookmark>
              <img src="../public/assets/images/bookmark_null.svg"></img>
            </MyBookmark>
            <MyBookCardPlace>지점명</MyBookCardPlace>
          </MyBookCardSubTitle>
          <MyBookCardName>가게명</MyBookCardName>
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
        <MyBookCardBookButton>
          <Button bttext="예약변경"></Button>
          <Button bttext="예약취소"></Button>
        </MyBookCardBookButton>
      </MyBookCardContent>
    </MyBookCardWrapper>
  );
};

export default MyBookCard;
