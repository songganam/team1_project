import React from "react";
import Layout from "../../layouts/Layout";
import { Outlet, useNavigate } from "react-router-dom";

// 마감세일 페이지입니다.
const SalePage = () => {
  const navigate = useNavigate();

  const handleClickSlist = () => {
    navigate("/sale/slist");
  };
  const handleClickSread = () => {
    navigate("/sale/sread");
  };

  return (
    <Layout>
      <div>
        <h1>마감세일</h1>
        <button
          onClick={() => {
            handleClickSlist();
          }}
        >
          마감세일 목록
        </button>
        <button
          onClick={() => {
            handleClickSread();
          }}
        >
          마감세일 정보 상세보기
        </button>
        <div>
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default SalePage;
