import React from "react";
import Layout from "../../layouts/Layout";
import { Outlet, createSearchParams, useNavigate } from "react-router-dom";

// 회원가입 메인 페이지입니다.
const JoinPage = () => {
  return (
    <Layout>
      <div>
        <h1>회원가입</h1>
        <div>
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default JoinPage;
