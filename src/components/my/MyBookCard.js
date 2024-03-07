import React, { useEffect, useState } from "react";
import { getMyBook, patchMyBook } from "../../api/MyApi";
import { API_SERVER_HOST } from "../../api/config";
import Button from "../../components/button/Button";
import useModal from "../../hooks/useModal";
import Bookmark from "../bookmark/Bookmark";
import SelectedModal from "../common/SelectedModal";
import useCustomHook from "../meat/hooks/useCustomHook";
import useCustomMy from "./hooks/useCustomMy";
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
import OptiPlaceholder from "../image-optimization/OptiPlaceholder";
import OptiWireframe from "../image-optimization/OptiWireframe";

// 내 예약/픽업 카드 리스트
const MyBookCard = props => {
  const { page, moveToBookPage, moveToReserChange, moveToPickupChange } =
    useCustomMy();
  const { moveToReview } = useCustomHook();
  const [myBookList, setMyBookList] = useState([]);
  const [bookToCancle, setBookToCancle] = useState(null);

  // 모달창
  const { useResultModal, openModal, closeModal } = useModal();

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
    // 삭제 전 확인 모달창
    setBookToCancle(patchBookForm);
    openModal();
    console.log(patchBookForm);
  };

  const handleConfirmCancle = () => {
    if (bookToCancle) {
      const { checkShop, ireser } = bookToCancle;
      // 예약 삭제 성공 시 리스트 업데이트
      const updatedMyBookList = myBookList.filter(
        book => book.ireser !== ireser,
      );
      setMyBookList(updatedMyBookList);
      patchMyBook({
        patchBookForm: bookToCancle,
        successPatch,
        failPatch,
        errorPatch,
      });
      console.log(bookToCancle);
      closeModal();
    }
  };

  const successPatch = patchResult => {
    console.log("예약 취소 성공", patchResult);
  };

  const failPatch = patchResult => {
    console.log("예약 취소 실패", patchResult);
  };

  const errorPatch = patchResult => {
    console.log("서버 오류", patchResult);
  };

  // 날짜 형태 변환 함수
  const formatDate = dateString => {
    if (!dateString || isNaN(new Date(dateString))) {
      return "날짜 없음";
    }

    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formattedDate = new Date(dateString).toLocaleString("ko-KR", options);
    return formattedDate;
  };

  // 예약 변경 페이지 이동
  const handleChangeBook = e => {
    moveToReserChange(e);
  };

  // 픽업 변경 페이지 이동
  const handleChangePickUp = e => {
    moveToPickupChange(e);
  };

  // 리뷰 작성 페이지 이동
  const handleMoveReview = e => {
    moveToReview(e);
  };

  // 더보기 (페이지)
  const handleMyBookView = () => {
    moveToBookPage({ page: page + 1 });
  };

  const baseApi = API_SERVER_HOST;
  const host = `${baseApi}/pic`;

  return (
    <>
      {myBookList.map((myBookList, index) => (
        <MyBookCardWrapper key={index}>
          <MyBookCardVisual>
            <OptiPlaceholder
              src={
                myBookList.checkShop === 0
                  ? `${host}/shop/${myBookList.ishop}/shop_pic/${myBookList.pic}`
                  : `${host}/butcher/${myBookList.ishop}/butchershop_pic/${myBookList.pic}`
              }
              alt="가게 이미지"
              width={331}
              height={228}
              placeholder={
                <div>
                  <OptiWireframe width={331} height={228} />
                </div>
              }
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
                <li>{myBookList.checkShop === 0 ? "인원수" : null}</li>
                <li>요청사항</li>
              </MyBookCardInfoTitle>
              <MyBookCardDateContent>
                <li>{formatDate(myBookList.date)}</li>
                <li>
                  {myBookList.confirm === 0
                    ? "대기"
                    : myBookList.confirm === 2
                    ? "확정"
                    : "불가"}
                </li>
                <li>
                  {myBookList.checkShop === 0 ? myBookList.headCount : null}
                </li>
                <li>{myBookList.request}</li>
              </MyBookCardDateContent>
            </MyBookCardInfo>
            <MyBookCardBookButton>
              <div
                onClick={e =>
                  moveToReview(
                    myBookList.ireser,
                    myBookList.checkShop,
                    myBookList.name,
                    myBookList.ishop,
                  )
                }
                style={{ display: myBookList.confirm === 2 ? "block" : "none" }}
              >
                <Button bttext="리뷰작성"></Button>
              </div>
              <div
                onClick={e =>
                  myBookList.checkShop === 0
                    ? moveToReserChange(
                        myBookList.ireser,
                        myBookList.name,
                        myBookList.headCount,
                        myBookList.date,
                        myBookList.request,
                      )
                    : myBookList.checkShop === 1
                    ? moveToPickupChange(
                        myBookList.ireser,
                        myBookList.name,
                        myBookList.date,
                        myBookList.request,
                      )
                    : null
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
                <Button bttext="예약삭제"></Button>
              </div>
              {useResultModal && (
                <SelectedModal
                  title="예약 삭제"
                  content="예약을 삭제하시겠습니까?"
                  confirmFn={handleConfirmCancle}
                  cancelFn={closeModal}
                />
              )}
            </MyBookCardBookButton>
          </MyBookCardContent>
        </MyBookCardWrapper>
      ))}
      {myBookList.length === 0 ? (
        <div></div>
      ) : (
        <MyMoreViewButton onClick={handleMyBookView}>
          <span>더보기</span>
        </MyMoreViewButton>
      )}
    </>
  );
};

export default MyBookCard;
