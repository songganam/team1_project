import React from "react";
import { Outlet } from "react-router-dom";
import TitleHeader from "../../components/titleheader/TitleHeader";
import Layout from "../../layouts/Layout";

// 고기잡담 메인 페이지입니다.
const CommunityPage = () => {
  return (
    <Layout>
      <TitleHeader
        timg={`${process.env.PUBLIC_URL}/assets/images/community_header.png`}
        tname="고기잡담"
        tcontent='"인생은 고기서 고기다"'
      />
      <div>
        <Outlet />
      </div>
    </Layout>
  );
};

export default CommunityPage;
