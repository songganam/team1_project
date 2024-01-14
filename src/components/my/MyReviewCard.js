import React from "react";
import Button from "../../components/button/Button";
import {
  MyBookCardBookButton,
  MyBookmark,
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

const MyReviewCard = props => {
  const { storeimg, storeplace, storename, reviewdate, reviewcont } = props;
  return (
    <MyReviewCardWrapper>
      <MyReviewCardVisual>
        <img src={storeimg} alt="가게 이미지"></img>
      </MyReviewCardVisual>
      <MyReviewCardContent>
        <MyReviewCardTitle>
          <MyReviewCardSubTitle>
            <MyBookmark>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/bookmark_null.svg`}
              ></img>
            </MyBookmark>
            <MyReviewCardPlace>지점명{storeplace}</MyReviewCardPlace>
          </MyReviewCardSubTitle>
          <MyReviewCardName>가게명{storename}</MyReviewCardName>
        </MyReviewCardTitle>
        <MyReviewCardInfo>
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
          <Button bttext="리뷰삭제"></Button>
        </MyBookCardBookButton>
      </MyReviewCardContent>
    </MyReviewCardWrapper>
  );
};

export default MyReviewCard;
