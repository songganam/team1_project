import React, { useEffect, useState } from "react";
import { getMyBook } from "../../api/myApi/MyBookApi";
import Button from "../../components/button/Button";
import useCustomMove from "../../hooks/useCustomMove";
import {
  MyBookCardBookButton,
  MyBookCardContent,
  MyBookCardDateContent,
  MyBookCardInfo,
  MyBookCardInfoTitle,
  MyBookCardName,
  MyBookCardPlace,
  MyBookCardSubTitle,
  MyBookCardTitle,
  MyBookCardVisual,
  MyBookCardWrapper,
  MyBookmark,
} from "./styles/MyBookCardStyle";

const initialMyBook = {
  checkShop: "",
  ireser: "",
  ishop: "",
  date: "",
  request: "",
  cofirm: "",
};

const MyBookCard = props => {
  const { page } = useCustomMove();
  const [myBookData, setMyBookData] = useState(initialMyBook);

  const getMyBookData = () => {};

  useEffect(() => {
    const param = { page };
    getMyBook({ param, successFn, failFn, errorFn });
    getMyBookData();
  }, [page]);

  const successFn = result => {
    setMyBookData(result);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  const {
    storeimg,
    storeplace,
    storename,
    bookdate,
    booktime,
    bookpeople,
    bookmemo,
  } = props;

  return (
    <MyBookCardWrapper>
      <MyBookCardVisual>
        <img src={storeimg} alt="가게 이미지"></img>
      </MyBookCardVisual>
      <MyBookCardContent>
        <MyBookCardTitle>
          <MyBookCardSubTitle>
            <MyBookmark>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/bookmark_null.svg`}
              ></img>
            </MyBookmark>
            <MyBookCardPlace>지점명{storeplace}</MyBookCardPlace>
          </MyBookCardSubTitle>
          <MyBookCardName>가게명{storename}</MyBookCardName>
        </MyBookCardTitle>
        <MyBookCardInfo>
          <MyBookCardInfoTitle>
            <li>날짜</li>
            <li>시간</li>
            <li>인원 수</li>
            <li>요청사항</li>
          </MyBookCardInfoTitle>
          <MyBookCardDateContent>
            <li>날짜내용{myBookData.date}</li>
            <li>시간내용{booktime}</li>
            <li>인원내용{bookpeople}</li>
            <li>요청내용{bookmemo}</li>
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
