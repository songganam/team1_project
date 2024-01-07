import React from "react";
import Layout from "../../layouts/Layout";
import { Outlet, useNavigate } from "react-router-dom";

// 마이페이지 메인페이지입니다.
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
      <div>
        <h1>MyPage</h1>
        <button
          onClick={() => {
            handleClickMyBook();
          }}
        >
          나의 예약내역 보기
        </button>
        <button
          onClick={() => {
            handleClickMyList();
          }}
        >
          나의 즐겨찾기 보기
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
          내정보 수정하기
        </button>
        <div>
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
