import React from "react";
import Button from "../button/Button";
import {
  NewShopContent,
  NewShopTitle,
  SupervisorNewShopButton,
  SupervisorNewShopInfo,
  SupervisorNewShopInner,
  SupervisorNewShopVisual,
  SupervisorNewShopWrapper,
} from "./styles/SupervisorNewShopCardStyle";

const SupervisorNewShopCard = () => {
  return (
    <SupervisorNewShopWrapper>
      <SupervisorNewShopVisual>
        <img></img>
      </SupervisorNewShopVisual>
      <SupervisorNewShopInner>
        <SupervisorNewShopInfo>
          <NewShopTitle>
            <li>대표자명</li>
            <li>상호명</li>
            <li>상세 주소</li>
            <li>연락처</li>
          </NewShopTitle>
          <NewShopContent>
            <li>내용</li>
            <li>내용</li>
            <li>내용</li>
            <li>내용</li>
          </NewShopContent>
        </SupervisorNewShopInfo>
        <SupervisorNewShopButton>
          <Button bttext="입점 승인"></Button>
          <Button bttext="입점 거부"></Button>
        </SupervisorNewShopButton>
      </SupervisorNewShopInner>
    </SupervisorNewShopWrapper>
  );
};

export default SupervisorNewShopCard;
