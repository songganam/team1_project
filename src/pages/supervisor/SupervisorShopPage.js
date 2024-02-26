import React from "react";
import SupervisorNewShopCard from "../../components/supervisor/SupervisorNewShopCard";
import {
  NavStyle,
  SupervisorNewShopBt,
  SupervisorNewShopInner,
  SupervisorShopBt,
  SupervisorShopInner,
  SupervisorShopPageContent,
  SupervisorShopPageWrapper,
  SupervisorShopTop,
} from "./styles/SupervisorShopPageStyle";
import Button from "../../components/button/Button";
import SupervisorShopCard from "../../components/supervisor/SupervisorShopCard";

const SupervisorShopPage = () => {
  return (
    <SupervisorShopPageWrapper>
      <NavStyle>
        <div className="page-title">매장 관리</div>
        <div>
          <Button bttext="저장" />
        </div>
      </NavStyle>
      <SupervisorShopPageContent>
        <SupervisorNewShopInner>
          <p>신규 입점 매장 목록</p>
          <SupervisorNewShopBt>
            <SupervisorNewShopCard></SupervisorNewShopCard>
            <Button bttext="더보기"></Button>
          </SupervisorNewShopBt>
        </SupervisorNewShopInner>
        <SupervisorShopInner>
          <SupervisorShopTop>
            <p>기존 입점 매장 목록</p>
            <input
              type="text"
              placeholder="검색할 가게 상호명 또는 대표자명을 입력하세요."
            ></input>
          </SupervisorShopTop>
          <SupervisorShopBt>
            <SupervisorShopCard></SupervisorShopCard>
            <Button bttext="더보기"></Button>
          </SupervisorShopBt>
        </SupervisorShopInner>
      </SupervisorShopPageContent>
    </SupervisorShopPageWrapper>
  );
};

export default SupervisorShopPage;
