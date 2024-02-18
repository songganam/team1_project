import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import { Outlet, useNavigate } from "react-router";
import {
  AdiminPageMenuBar,
  AdminPageContent,
  AdminPageData,
  AdminPageMenu,
  AdminPageWrapper,
} from "./styles/AdminPageStyle";

const AdminPage = () => {
  // 패스 이동
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("/admin/info");

  // 매장 정보 관리 페이지
  const handleClickAdInfo = () => {
    navigate("/admin/info");
    setActiveButton("/admin/info");
  };

  // 매장 메뉴 관리 페이지
  const handleClickAdMenu = () => {
    navigate("/admin/menu");
    setActiveButton("/admin/menu");
  };

  // 매장 예약 관리 페이지
  const handleClickAdBook = () => {
    navigate("/admin/book");
    setActiveButton("/admin/book");
  };

  // 매장 리뷰 관리 페이지
  const handleClickAdReview = () => {
    navigate("/admin/review");
    setActiveButton("/admin/review");
  };

  // 매장 분석 페이지
  const handleClickAdDoc = () => {
    navigate("/admin/doc");
    setActiveButton("/admin/doc");
  };

  return (
    <Layout>
      <AdminPageWrapper>
        <AdminPageData>
          <AdiminPageMenuBar>
            <AdminPageMenu>
              <button onClick={handleClickAdInfo}>매장 정보 관리</button>
              <button onClick={handleClickAdMenu}>메뉴 관리</button>
              <button onClick={handleClickAdBook}>예약 관리</button>
              <button onClick={handleClickAdReview}>리뷰 관리</button>
              <button onClick={handleClickAdDoc}>매장 분석</button>
            </AdminPageMenu>
          </AdiminPageMenuBar>
          <AdminPageContent>
            <Outlet />
          </AdminPageContent>
        </AdminPageData>
      </AdminPageWrapper>
    </Layout>
  );
};

export default AdminPage;
