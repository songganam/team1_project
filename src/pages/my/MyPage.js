import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import TitleHeader from "../../components/titleheader/TitleHeader";
import Layout from "../../layouts/Layout";
import { ColorStyle } from "../../styles/common/CommonStyle";
import {
  MyPageContent,
  MyPageData,
  MyPageMenu,
  MyPageMenuBar,
  MyPageWrapper,
} from "./styles/MyPageStyle";

// 마이페이지 메인 페이지
const MyPage = () => {
  // 패스 이동
  const navigate = useNavigate();
  // 메뉴 버튼 활성화
  const [activeButton, setActiveButton] = useState("/my/book");

  const handleClickMyBook = () => {
    navigate("/my/book");
    setActiveButton("/my/book");
  };
  const handleClickMyList = () => {
    navigate("/my/list");
    setActiveButton("/my/list");
  };
  const handleClickMyReview = () => {
    navigate("/my/review");
    setActiveButton("/my/review");
  };
  const handleClickMyModify = () => {
    navigate("/my/modify");
    setActiveButton("/my/modify");
  };

  return (
    <Layout>
      <TitleHeader
        timg={`${process.env.PUBLIC_URL}/assets/images/mypage_header.jpg`}
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
                style={{
                  color:
                    activeButton === "/my/book"
                      ? `${ColorStyle.g1000}`
                      : `${ColorStyle.g600}`,
                }}
              >
                내 예약/픽업 내역 보기
                {activeButton === "/my/book" && (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/my_arrow.svg`}
                    alt=""
                  ></img>
                )}
              </button>
              <button
                onClick={() => {
                  handleClickMyList();
                }}
                style={{
                  color:
                    activeButton === "/my/list"
                      ? `${ColorStyle.g1000}`
                      : `${ColorStyle.g600}`,
                }}
              >
                내 북마크 보기
                {activeButton === "/my/list" && (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/my_arrow.svg`}
                    alt=""
                  ></img>
                )}
              </button>
              <button
                onClick={() => {
                  handleClickMyReview();
                }}
                style={{
                  color:
                    activeButton === "/my/review"
                      ? `${ColorStyle.g1000}`
                      : `${ColorStyle.g600}`,
                }}
              >
                내가 쓴 리뷰 보기
                {activeButton === "/my/review" && (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/my_arrow.svg`}
                    alt=""
                  ></img>
                )}
              </button>
              <button
                onClick={() => {
                  handleClickMyModify();
                }}
                style={{
                  color:
                    activeButton === "/my/modify"
                      ? `${ColorStyle.g1000}`
                      : `${ColorStyle.g600}`,
                }}
              >
                프로필 수정
                {activeButton === "/my/modify" && (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/my_arrow.svg`}
                    alt=""
                  ></img>
                )}
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
