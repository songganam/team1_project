import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../../layouts/Layout";

// 회원가입 메인 페이지입니다.
const JoinPage = () => {
  return (
    <Layout>
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default JoinPage;
