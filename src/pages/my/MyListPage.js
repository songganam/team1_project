import React from "react";
import { MyListPageTitle, MyListPageWrapper } from "./styles/MyListPageStyle";
import MyListCard from "../../components/my/MyListCard";

// 북마크 보기 페이지
const MyListPage = () => {
  return (
    <MyListPageWrapper>
      <MyListPageTitle>
        <span>내 북마크 보기</span>
      </MyListPageTitle>
      <MyListCard storeimg="https://picsum.photos/331/228/?category=meat"></MyListCard>
      <div>
        <button>페이지이동버튼</button>
      </div>
    </MyListPageWrapper>
  );
};

export default MyListPage;
