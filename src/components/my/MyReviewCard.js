import React from "react";
import Button from "../../components/button/Button";
import {
  MyBookCardBookButton,
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
import useModal from "../../hooks/useModal";
import ResultModal from "../common/ResultModal";
import Bookmark from "../bookmark/Bookmark";

const MyReviewCard = props => {
  const { storeimg, storeplace, storename, reviewdate, reviewcont } = props;
  const { useResultModal, openModal, closeModal } = useModal();
  const handleDeleteReview = () => {
    openModal();
  };

  return (
    <MyReviewCardWrapper>
      <MyReviewCardVisual>
        <img src={storeimg} alt="가게 이미지"></img>
      </MyReviewCardVisual>
      <MyReviewCardContent>
        <MyReviewCardTitle>
          <MyReviewCardSubTitle>
            <Bookmark></Bookmark>
            <MyReviewCardPlace>지점명{storeplace}</MyReviewCardPlace>
          </MyReviewCardSubTitle>
          <MyReviewCardName>가게명{storename}</MyReviewCardName>
        </MyReviewCardTitle>
        <MyReviewCardInfo>
          <div>별점</div>
          <MyReviewCardInfoTitle>
            <li>날짜</li>
            <li>리뷰</li>
          </MyReviewCardInfoTitle>
          <MyReviewCardDateContent>
            <li>날짜내용{reviewdate}</li>
            <li>리뷰내용{reviewcont}</li>
          </MyReviewCardDateContent>
        </MyReviewCardInfo>
        <MyBookCardBookButton>
          <div
            onClick={() => {
              console.log("리뷰삭제 버튼 클릭");
              handleDeleteReview();
            }}
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
  );
};

export default MyReviewCard;
