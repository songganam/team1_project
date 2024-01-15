import React from "react";
import {
  MyReviewPageTitle,
  MyReviewPageWrapper,
} from "./styles/MyReviewPageStyle";
import MyReviewCard from "../../components/my/MyReviewCard";

// 내가 쓴 리뷰보기 페이지입니다.
const MyReviewPage = () => {
  return (
    <MyReviewPageWrapper>
      <MyReviewPageTitle>
        <span>내가 쓴 리뷰 보기</span>
      </MyReviewPageTitle>
      <MyReviewCard storeimg="https://picsum.photos/331/228/?category=meat"></MyReviewCard>
      <div>
        <button>페이지이동버튼</button>
      </div>
    </MyReviewPageWrapper>
  );
};

export default MyReviewPage;
