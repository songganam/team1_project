import React from "react";
import MyBookCard from "../../components/my/MyBookCard";
import { MyBookPageTitle, MyBookPageWrapper } from "./styles/MyBookPageStyle";
import MyPageButton from "../../components/my/MyPageButton";
import Paging from "../../components/common/Paging";

// 내 예약 내역 보기 페이지
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
