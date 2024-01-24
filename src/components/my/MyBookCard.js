import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
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
import MyPaging from "../common/MyPaging";
import { getMyBook } from "../../api/MyApi";
import useCustomMove from "../../hooks/useCustomMove";

const MyBookCard = props => {
  const { page } = useCustomMove();
  const [myBookList, setMyBookList] = useState([]);

  useEffect(() => {
    const param = { page };
    getMyBook({ param, successFn, failFn, errorFn });
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

  const handelModifyBook = () => {
    navigate("/meat/reservation");
  };

  const { storeimg } = props;

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
                <Bookmark isBook={myBookList.isBook}></Bookmark>
                <MyBookCardPlace>
                  <span>
                    {myBookList.checkShop === 0 ? "고깃집" : "정육점"}
                  </span>
                </MyBookCardPlace>
              </MyBookCardSubTitle>
              <MyBookCardName>{myBookList.name}</MyBookCardName>
            </MyBookCardTitle>
            <MyBookCardInfo>
              <MyBookCardInfoTitle>
                <li>예약일시</li>
                <li>예약상황</li>
                <li>인원 수</li>
                <li>요청사항</li>
              </MyBookCardInfoTitle>
              <MyBookCardDateContent>
                <li>{myBookList.date}</li>
                <li> {myBookList.confirm === 0 ? "대기" : "확정"}</li>
                <li>{myBookList.headCount}</li>
                <li>{myBookList.request}</li>
              </MyBookCardDateContent>
            </MyBookCardInfo>
            <MyBookCardBookButton>
              <Button bttext="예약변경" onClick={handelModifyBook}></Button>
              <Button bttext="예약취소"></Button>
            </MyBookCardBookButton>
          </MyBookCardContent>
        </MyBookCardWrapper>
      ))}
      <MyPaging totalItems={myBookList.count}></MyPaging>
    </>
  );
};

export default MyBookCard;
