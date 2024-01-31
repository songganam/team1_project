import React from "react";
import { Outlet } from "react-router-dom";
import TitleHeader from "../../components/titleheader/TitleHeader";
import Layout from "../../layouts/Layout";

// 고기잡담 메인 페이지입니다.
const CommunityPage = () => {
  return (
    <Layout>
      <div>
        <Outlet />
      </div>
    </Layout>
  );
};

export default CommunityPage;
