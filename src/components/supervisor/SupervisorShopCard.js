import React from "react";
import {
  ShopContent,
  ShopTitle,
  SupervisorShopButton,
  SupervisorShopInfo,
  SupervisorShopInner,
  SupervisorShopVisual,
  SupervisorShopWrapper,
} from "./styles/SupervisorShopCardStyle";
import Button from "../button/Button";

const SupervisorShopCard = () => {
  return (
    <SupervisorShopWrapper>
      <SupervisorShopVisual>
        <img></img>
      </SupervisorShopVisual>
      <SupervisorShopInner>
        <SupervisorShopInfo>
          <ShopTitle>
            <li>대표자명</li>
            <li>상호명</li>
            <li>상세 주소</li>
            <li>연락처</li>
          </ShopTitle>
          <ShopContent>
            <li>내용</li>
            <li>내용</li>
            <li>내용</li>
            <li>내용</li>
          </ShopContent>
        </SupervisorShopInfo>
        <SupervisorShopButton>
          <Button bttext="매장 퇴출"></Button>
        </SupervisorShopButton>
      </SupervisorShopInner>
    </SupervisorShopWrapper>
  );
};

export default SupervisorShopCard;
