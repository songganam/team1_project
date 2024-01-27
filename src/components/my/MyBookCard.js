import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  MyMoreViewButton,
} from "./styles/MyBookCardStyle";
import Bookmark from "../bookmark/Bookmark";
import { patchMyBook, getMyBook } from "../../api/MyApi";
import useCustomMy from "./hooks/useCustomMy";
import useCustomHook from "../meat/hooks/useCustomHook";

const MyBookCard = props => {
  const { ireser } = useParams();
  const { page, MoveToBookPage } = useCustomMy();
  const { moveToReview } = useCustomHook();
  const [myBookList, setMyBookList] = useState([]);

  useEffect(() => {
    const param = { page };
    getMyBook({ param, successFn, failFn, errorFn });
  }, [page]);

  const successFn = result => {
    setMyBookList([...myBookList, ...result]);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  const handleDeleteMyBook = ireser => {
    const deleteBookmark = {
      ireser: ireser,
    };
    // 예약 삭제 함수 호출
    patchMyBook({ deleteBookmark });
    console.log(deleteBookmark);
  };

  const navigate = useNavigate();

  const handelModifyBook = () => {
    navigate("/meat/reservation");
  };

  const handleMyBookView = () => {
    MoveToBookPage({ page: page + 1 });
  };
  const handleMoveReview = e => {
    moveToReview(e);
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
                {/* 아래 코드 수정 필요 */}
                <li> {myBookList.confirm === 0 ? "대기" : "확정"}</li>
                <li>{myBookList.headCount}</li>
                <li>{myBookList.request}</li>
              </MyBookCardDateContent>
            </MyBookCardInfo>
            <MyBookCardBookButton>
              {/* 예약 변경 기능 추가 필요 */}
              <button
                onClick={e => moveToReview(myBookList.ishop, myBookList.name)}
              >
                리뷰쓰기다!
              </button>
              <Button bttext="예약변경" onClick={handelModifyBook}></Button>
              <div
                onClick={() => {
                  handleDeleteMyBook(myBookList.ishop);
                }}
              >
                <Button bttext="예약취소"></Button>
              </div>
            </MyBookCardBookButton>
          </MyBookCardContent>
        </MyBookCardWrapper>
      ))}
      <MyMoreViewButton onClick={handleMyBookView}>
        <span>더보기</span>
      </MyMoreViewButton>
    </>
  );
};

export default MyBookCard;
