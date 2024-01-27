import React from "react";
import MyBookCard from "../../components/my/MyBookCard";
import { MyBookPageTitle, MyBookPageWrapper } from "./styles/MyBookPageStyle";

// 내 예약/픽업 내역 보기 페이지
const MyBookPage = () => {
  return (
    <MyBookPageWrapper>
      <MyBookPageTitle>
        <span>내 예약/픽업 내역 보기</span>
      </MyBookPageTitle>
      <MyBookCard storeimg="https://picsum.photos/331/228/?category=meat"></MyBookCard>
    </MyBookPageWrapper>
  );
};

export default MyBookPage;
