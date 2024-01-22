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
} from "./styles/MyBookCardStyle";
import Bookmark from "../bookmark/Bookmark";
import { useNavigate } from "react-router-dom";
import Paging from "../common/Paging";

// const initialMyBook = {
//   checkShop: "",
//   ireser: "",
//   ishop: "",
//   date: "",
//   request: "",
//   cofirm: "",
//   headCount: "",
//   pic: "",
//   isBook: "",
//   createdAt: "",
// };

const MyBookCard = props => {
  const { page } = useCustomMove();
  const [myBookList, setMyBookList] = useState([]);

  const getMyBookData = () => {};

  useEffect(() => {
    const param = { page };
    getMyBook({ param, successFn, failFn, errorFn });
    getMyBookData();
  }, [page]);

  const successFn = result => {
    setMyBookList(result);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  const navigate = useNavigate();

  const { storeimg, storeplace, storename, booktime } = props;

  return (
    <>
      {myBookList.map((myBookList, index) => (
        <MyBookCardWrapper key={index}>
          <MyBookCardVisual>
            <img src={storeimg} alt="가게 이미지"></img>
          </MyBookCardVisual>
          <MyBookCardContent>
            <MyBookCardTitle>
              <MyBookCardSubTitle>
                <Bookmark></Bookmark>
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
                <li>{myBookList.date}</li>
                <li>값</li>
                <li>{myBookList.headCount}</li>
                <li>{myBookList.request}</li>
              </MyBookCardDateContent>
            </MyBookCardInfo>
            <MyBookCardBookButton>
              <Button bttext="예약변경"></Button>
              <Button bttext="예약취소"></Button>
            </MyBookCardBookButton>
          </MyBookCardContent>
        </MyBookCardWrapper>
      ))}
      <Paging totalItems={10} itemPerPage={5}></Paging>
    </>
  );
};

export default MyBookCard;
