import React, { useEffect, useState } from "react";
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
import { API_SERVER_HOST, getUserInfo } from "../../api/MyApi";

const host = API_SERVER_HOST;

// 프로필 정보 초기값
const initialProfile = {
  iuser: "",
  email: "",
  name: "",
  nickname: "",
  birth: "",
  gender: "",
  address: "",
  pic: "",
  tel: "",
};

// 마이페이지 메인 페이지
const MyPage = () => {
  // 패스 이동
  const navigate = useNavigate();
  // 메뉴 버튼 활성화
  const [activeButton, setActiveButton] = useState("/my/book");
  const [myProfileData, setMyProfileData] = useState(initialProfile);

  // 내 예약/픽업 내역 보기
  const handleClickMyBook = () => {
    navigate("/my/book");
    setActiveButton("/my/book");
  };

  // 내 북마크 보기
  const handleClickMyList = () => {
    navigate("/my/list");
    setActiveButton("/my/list");
  };

  // 내가 쓴 리뷰 보기
  const handleClickMyReview = () => {
    navigate("/my/review");
    setActiveButton("/my/review");
  };

  // 프로필 수정
  const handleClickMyModify = () => {
    navigate("/my/modify");
    setActiveButton("/my/modify");
  };

  // 유저 정보 불러오기 (GET)
  useEffect(() => {
    const param = {};
    getUserInfo({ param, successFn, failFn, errorFn });
  }, []);

  const successFn = result => {
    setMyProfileData(result);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  return (
    <Layout>
      <TitleHeader
        timg={`${process.env.PUBLIC_URL}/assets/images/mypage_header.jpg`}
        tname="마이페이지"
        tcontent={`${myProfileData.name} 님, 오늘도 고기로에서 행복하세요.`}
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
                내 예약/픽업 보기
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
