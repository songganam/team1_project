import React from "react";
import BasicLayout from "../../layouts/BasicLayout";
import { Outlet } from "react-router-dom";

const MemberPage = () => {
  return (
    <BasicLayout>
      <h1>회원기능</h1>
      <Outlet />
    </BasicLayout>
  );
};

export default MemberPage;
