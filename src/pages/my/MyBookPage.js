import React from "react";
import MyBookCard from "../../components/my/MyBookCard";
import Button from "../../components/button/Button";

// 내 예약내역보기 페이지입니다.
const MyBookPage = () => {
  return (
    <div>
      <h2>나의 예약내역 보기</h2>
      <MyBookCard gogiimg="https://picsum.photos/331/228/?category=meat"></MyBookCard>
    </div>
  );
};

export default MyBookPage;
