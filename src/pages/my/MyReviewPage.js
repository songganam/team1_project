import React from "react";
import MyReviewCard from "../../components/my/MyReviewCard";
import {
  MyReviewPageTitle,
  MyReviewPageWrapper,
} from "./styles/MyReviewPageStyle";

// 내가 쓴 리뷰 보기 페이지
const MyReviewPage = () => {
  return (
    <MyReviewPageWrapper>
      <MyReviewPageTitle>
        <span>내가 쓴 리뷰 보기</span>
      </MyReviewPageTitle>
      <MyReviewCard storeimg="https://picsum.photos/331/228/?category=meat"></MyReviewCard>
    </MyReviewPageWrapper>
  );
};

export default MyReviewPage;
