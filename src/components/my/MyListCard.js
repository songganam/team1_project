import React from "react";
import {
  MyListCardContent,
  MyListCardDateContent,
  MyListCardInfo,
  MyListCardInfoTitle,
  MyListCardName,
  MyListCardPlace,
  MyListCardSubTitle,
  MyListCardTitle,
  MyListCardVisual,
  MyListCardWrapper,
} from "./styles/MyListCardStyle";
import { MyBookmark } from "./styles/MyBookCardStyle";

const MyListCard = props => {
  const {
    storeimg,
    storeplace,
    storename,
    listplace,
    listnum,
    listmeat,
    listservice,
  } = props;
  return (
    <MyListCardWrapper>
      <MyListCardVisual>
        <img src={storeimg} alt="가게 이미지"></img>
      </MyListCardVisual>
      <MyListCardContent>
        <MyListCardTitle>
          <MyListCardSubTitle>
            <MyBookmark>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/bookmark_null.svg`}
              ></img>
            </MyBookmark>
            <MyListCardPlace>지점명{storeplace}</MyListCardPlace>
          </MyListCardSubTitle>
          <MyListCardName>가게명{storename}</MyListCardName>
        </MyListCardTitle>
        <MyListCardInfo>
          <MyListCardInfoTitle>
            <li>주소</li>
            <li>전화번호</li>
            <li>종류</li>
            <li>서비스</li>
          </MyListCardInfoTitle>
          <MyListCardDateContent>
            <li>주소내용{listplace}</li>
            <li>전화번호내용{listnum}</li>
            <li>종류내용{listmeat}</li>
            <li>서비스내용{listservice}</li>
          </MyListCardDateContent>
        </MyListCardInfo>
      </MyListCardContent>
    </MyListCardWrapper>
  );
};

export default MyListCard;
