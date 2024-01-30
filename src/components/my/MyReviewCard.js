import React, { useEffect, useState } from "react";
import { deleteMyReview, getMyReview } from "../../api/MyApi";
import Button from "../../components/button/Button";
import useModal from "../../hooks/useModal";
import Bookmark from "../bookmark/Bookmark";
import CountingStar from "../common/CountingStar";
import ResultModal from "../common/ResultModal";
import {
  MyBookCardBookButton,
  MyMoreViewButton,
  MyReviewCardContent,
  MyReviewCardDateContent,
  MyReviewCardInfo,
  MyReviewCardInfoTitle,
  MyReviewCardName,
  MyReviewCardPlace,
  MyReviewCardSubTitle,
  MyReviewCardTitle,
  MyReviewCardVisual,
  MyReviewCardWrapper,
} from "./styles/MyReviewCardStyle";
import useCustomMy from "./hooks/useCustomMy";

const MyReviewCard = props => {
  const [myReviewList, setMyReviewList] = useState([]);
  const [reviewToDelete, setReviewToDelete] = useState(null);
  const { page, moveToReviewPage } = useCustomMy();
  const { useResultModal, openModal, closeModal } = useModal();

  useEffect(() => {
    const param = { page };
    getMyReview({ param, successFn, failFn, errorFn });
  }, [page]);

  const successFn = result => {
    setMyReviewList([...myReviewList, ...result]);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  const { storeimg } = props;

  // 리뷰 삭제 (DELETE)
  const handledeleteClick = (checkShop, ireview) => {
    const deleteForm = {
      checkShop: checkShop,
      ireview: ireview,
    };
    // 예약 삭제 성공 시 리스트 업데이트
    const updatedMyReviewList = myReviewList.filter(
      review => review.ireview !== ireview,
    );
    setMyReviewList(updatedMyReviewList);
    deleteMyReview({ deleteForm, successFn, failFn, errorFn });
    console.log(deleteForm);
  };

  const handleMyReviewView = () => {
    moveToReviewPage({ page: page + 1 });
  };

  return (
    <>
      {myReviewList.map((myReviewList, index) => (
        <MyReviewCardWrapper key={index}>
          <MyReviewCardVisual>
            {/* <img src={myReviewList.pic} alt="가게 이미지"></img> */}
            <img src={storeimg} alt="가게 이미지"></img>
          </MyReviewCardVisual>
          <MyReviewCardContent>
            <MyReviewCardTitle>
              <MyReviewCardSubTitle>
                <Bookmark isBook={myReviewList.isBook}></Bookmark>
                <MyReviewCardPlace>
                  <span>
                    {myReviewList.checkShop === 0 ? "고깃집" : "정육점"}
                  </span>
                </MyReviewCardPlace>
              </MyReviewCardSubTitle>
              <MyReviewCardName>{myReviewList.name}</MyReviewCardName>
            </MyReviewCardTitle>
            <CountingStar star={myReviewList.star}></CountingStar>
            <MyReviewCardInfo>
              <MyReviewCardInfoTitle>
                <li>날짜</li>
                <li>리뷰</li>
              </MyReviewCardInfoTitle>
              <MyReviewCardDateContent>
                <li>{myReviewList.createdAt}</li>
                <li>{myReviewList.review}</li>
              </MyReviewCardDateContent>
            </MyReviewCardInfo>
            <MyBookCardBookButton>
              <div
                onClick={e =>
                  handledeleteClick(
                    myReviewList.checkShop,
                    myReviewList.ireview,
                  )
                }
              >
                <Button bttext="리뷰삭제"></Button>
              </div>
            </MyBookCardBookButton>
            {useResultModal && (
              <ResultModal
                title="리뷰 삭제"
                content="작성한 리뷰를 삭제하시겠습니까?"
                callFn={() => {
                  closeModal();
                }}
              />
            )}
          </MyReviewCardContent>
        </MyReviewCardWrapper>
      ))}
      <MyMoreViewButton onClick={handleMyReviewView}>
        <span>더보기</span>
      </MyMoreViewButton>
    </>
  );
};
export default MyReviewCard;
