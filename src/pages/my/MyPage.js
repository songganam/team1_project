import React from "react";
import Layout from "../../layouts/Layout";
import { Outlet, useNavigate } from "react-router-dom";
import TitleHeader from "../../components/titleheader/TitleHeader";
import {
  MyPageContent,
  MyPageData,
  MyPageMenu,
  MyPageMenuBar,
  MyPageWrapper,
} from "./styles/MyPageStyle";

// 마이페이지 메인페이지
const MyPage = () => {
  // 패스 이동
  const navigate = useNavigate();

  const handleClickMyBook = () => {
    navigate("/my/mybook");
  };
  const handleClickMyList = () => {
    navigate("/my/mylist");
  };
  const handleClickMyReview = () => {
    navigate("/my/myreview");
  };
  const handleClickMyModify = () => {
    navigate("/my/mymodify");
  };

  return (
    <Layout>
      <TitleHeader
        timg="https://picsum.photos/1920/215/?category=meat"
        tname="마이페이지"
        tcontent="님, 오늘도 맛있는 고기와 함께하세요."
      ></TitleHeader>
      <MyPageWrapper>
        <MyPageData>
          <MyPageMenuBar>
            <MyPageMenu>
              <button
                onClick={() => {
                  handleClickMyBook();
                }}
              >
                내 예약/픽업 내역 보기
              </button>
              <button
                onClick={() => {
                  handleClickMyList();
                }}
              >
                내 북마크 보기
              </button>
              <button
                onClick={() => {
                  handleClickMyReview();
                }}
              >
                내가 쓴 리뷰 보기
              </button>
              <button
                onClick={() => {
                  handleClickMyModify();
                }}
              >
                프로필 수정
              </button>
            </MyPageMenu>
          </MyPageMenuBar>
          <MyPageContent>
            <Outlet />
          </MyPageContent>
        </MyPageData>
      </MyPageWrapper>
    </Layout>
  );
};

export default MyPage;
