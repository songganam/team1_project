import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";

// 고깃집 메인 페이지입니다.
const GogiPage = () => {
  // 패스 이동
  const navigate = useNavigate();

  const handleClickGbook = () => {
    navigate("/gogi/gbook");
  };
  const handleClickGlist = () => {
    navigate("/gogi/glist");
  };
  const handleClickGread = () => {
    navigate("/gogi/gread");
  };
  const handleClickGadd = () => {
    navigate("/gogi/gadd");
  };
  const handleClickGmodify = () => {
    navigate("/gogi/gmodify");
  };

  return (
    <Layout>
      <div>
        <h1>고깃집찾기</h1>
        <button
          onClick={() => {
            handleClickGbook();
          }}
        >
          고깃집 예약하기
        </button>
        <button
          onClick={() => {
            handleClickGlist();
          }}
        >
          고깃집 목록
        </button>
        <button
          onClick={() => {
            handleClickGread();
          }}
        >
          고깃집 정보 상세보기
        </button>
        <button
          onClick={() => {
            handleClickGadd();
          }}
        >
          고깃집 리뷰 쓰기
        </button>
        <button
          onClick={() => {
            handleClickGmodify();
          }}
        >
          고깃집 리뷰 수정하기
        </button>
        <div>
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default GogiPage;
