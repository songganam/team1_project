import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import { Outlet, useNavigate } from "react-router";

const SupervisorPage = () => {
  // 패스 이동
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("/svisor/shop");

  //
  const handleClickSvShop = () => {
    navigate("/svisor/shop");
    setActiveButton("/svisor/shop");
  };

  // 매장 메뉴 관리 페이지
  const handleClickSvUser = () => {
    navigate("/svisor/user");
    setActiveButton("/svisor/user");
  };

  // 매장 예약 관리 페이지
  const handleClickSvReport = () => {
    navigate("/svisor/report");
    setActiveButton("/svisor/report");
  };

  // 매장 리뷰 관리 페이지
  const handleClickSvNotice = () => {
    navigate("/svisor/notice");
    setActiveButton("/svisor/notice");
  };

  return (
    <Layout>
      <button onClick={handleClickSvShop}>매장 관리</button>
      <button onClick={handleClickSvUser}>유저 관리</button>
      <button onClick={handleClickSvReport}>신고 관리</button>
      <button onClick={handleClickSvNotice}>공지사항 등록</button>
      <Outlet />
    </Layout>
  );
};

export default SupervisorPage;
