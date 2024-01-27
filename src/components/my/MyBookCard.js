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

// 내 예약/픽업 내역 카드
const MyBookCard = props => {
  const { page, moveToBookPage } = useCustomMy();
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

  const navigate = useNavigate();

  const handelModifyBook = () => {
    navigate("/meat/reservation");
  };

  const handleMoveReview = e => {
    moveToReview(e);
  };

  // 더보기 (페이지)
  const handleMyBookView = () => {
    moveToBookPage({ page: page + 1 });
  };

  // 이미지 데이터 호출 성공시, 추후 삭제
  const { storeimg } = props;

  // 예약 취소 안됨 ㅎㅎ.....
  const handleCancelBook = async reservationId => {
    try {
      await patchMyBook({
        deleteBook: { reservationId },
        successFn: () => {
          const updatedMyBookList = myBookList.filter(
            item => item.id !== reservationId,
          );
          setMyBookList(updatedMyBookList);
        },
        failFn: () => {
          console.log("예약 내역 삭제 오류");
        },
        errorFn: () => {
          console.log("서버 오류");
        },
      });
    } catch (error) {
      console.log("예약 내역 삭제 중 에러 발생", error);
    }
  };

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
              <div
                onClick={e => moveToReview(myBookList.ishop, myBookList.name)}
              >
                <Button bttext="리뷰작성"></Button>
              </div>
              <Button bttext="예약변경" onClick={handelModifyBook}></Button>
              <div
                onClick={() => {
                  handleCancelBook();
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
