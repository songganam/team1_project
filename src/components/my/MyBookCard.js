import React, { useEffect, useState } from "react";
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
import { API_SERVER_HOST } from "../../api/config";

// 내 예약/픽업 내역 카드 리스트
const MyBookCard = props => {
  const { page, moveToBookPage, moveToReserChange } = useCustomMy();
  const { moveToReview } = useCustomHook();
  const [myBookList, setMyBookList] = useState([]);

  // 예약 리스트 불러오기 (GET)
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

  // 예약 삭제 (PATCH)
  const handleCancelBook = (checkShop, ireser) => {
    const patchBookForm = {
      checkShop: checkShop,
      ireser: ireser,
    };
    // 예약 삭제 성공 시 리스트 업데이트
    const updatedMyBookList = myBookList.filter(book => book.ireser !== ireser);
    setMyBookList(updatedMyBookList);
    patchMyBook({ patchBookForm, successFn, failFn, errorFn });
    console.log(patchBookForm);
  };

  // 예약 변경 페이지 이동
  const handleChangeBook = e => {
    moveToReserChange(e);
  };

  // 리뷰 작성 페이지 이동
  const handleMoveReview = e => {
    moveToReview(e);
  };

  // 더보기 (페이지)
  const handleMyBookView = () => {
    moveToBookPage({ page: page + 1 });
  };

  // 이미지 데이터 호출 성공시, 추후 삭제
  const { storeimg } = props;

  const baseApi = API_SERVER_HOST;
  const host = `${baseApi}/pic`;

  return (
    <>
      {myBookList.map((myBookList, index) => (
        <MyBookCardWrapper key={index}>
          <MyBookCardVisual>
            <img
              src={
                myBookList.checkShop === 0
                  ? `${host}/shop/${myBookList.ishop}/shop_pic/${myBookList.pic}`
                  : `${host}/butcher/${myBookList.ishop}/butchershop_pic/${myBookList.pic}`
              }
              alt="가게 이미지"
            />
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
                <li>
                  {myBookList.confirm === 0
                    ? "대기"
                    : myBookList.confirm === 2
                    ? "확정"
                    : "불가"}
                </li>
                <li>{myBookList.headCount}</li>
                <li>{myBookList.request}</li>
              </MyBookCardDateContent>
            </MyBookCardInfo>
            <MyBookCardBookButton>
              <div
                onClick={e => moveToReview(myBookList.ishop, myBookList.name)}
                style={{ display: myBookList.confirm === 2 ? "block" : "none" }}
              >
                <Button bttext="리뷰작성"></Button>
              </div>
              <div
                onClick={e =>
                  myBookList.check === 0 ? (
                    moveToReserChange(
                      myBookList.ireser,
                      myBookList.name,
                      myBookList.headCount,
                      myBookList.date,
                      myBookList.request,
                    )
                  ) : (
                    <div></div>
                  )
                }
                style={{ display: myBookList.confirm !== 2 ? "block" : "none" }}
              >
                <Button bttext="예약변경"></Button>
              </div>
              <div
                onClick={e =>
                  handleCancelBook(myBookList.checkShop, myBookList.ireser)
                }
                style={{ display: myBookList.confirm !== 2 ? "block" : "none" }}
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
