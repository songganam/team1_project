import React from "react";
import SupervisorNewShopCard from "../../components/supervisor/SupervisorNewShopCard";
import AdminHeader from "../../components/adminInfo/AdminHeader";
import {
  SupervisorNewShopBt,
  SupervisorNewShopInner,
  SupervisorShopBt,
  SupervisorShopInner,
  SupervisorShopPageContent,
  SupervisorShopPageWrapper,
} from "./styles/SupervisorShopPageStyle";
import Button from "../../components/button/Button";

const SupervisorShopPage = () => {
  return (
    <SupervisorShopPageWrapper>
      <AdminHeader title="매장 관리"></AdminHeader>
      <SupervisorShopPageContent>
        <SupervisorNewShopInner>
          <p>신규 입점 매장 목록</p>
          <SupervisorNewShopBt>
            <SupervisorNewShopCard></SupervisorNewShopCard>
            <Button bttext="더보기"></Button>
          </SupervisorNewShopBt>
        </SupervisorNewShopInner>
        <SupervisorShopInner>
          <SupervisorShopBt>
            <Button bttext="더보기"></Button>
          </SupervisorShopBt>
        </SupervisorShopInner>
      </SupervisorShopPageContent>
    </SupervisorShopPageWrapper>
  );
};

export default SupervisorShopPage;
