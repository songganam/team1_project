import React from "react";
import MyBookCard from "../../components/my/MyBookCard";
import Button from "../../components/button/Button";
import { MyBookPageTitle, MyBookPageWrapper } from "./styles/MyBookPageStyle";

// 내 예약 내역 보기 페이지
const MyBookPage = () => {
  return (
    <MyBookPageWrapper>
      <MyBookPageTitle>
        <span>내 예약 내역 보기</span>
      </MyBookPageTitle>
      <MyBookCard storeimg="https://picsum.photos/331/228/?category=meat"></MyBookCard>
      <div>
        <button>페이지이동버튼</button>
      </div>
    </MyBookPageWrapper>
  );
};

export default MyBookPage;
