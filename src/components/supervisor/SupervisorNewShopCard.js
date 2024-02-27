import React, { useState } from "react";
import Button from "../button/Button";
import {
  NewShopContent,
  NewShopSwiperWrap,
  NewShopTitle,
  SupervisorNewShopButton,
  SupervisorNewShopInfo,
  SupervisorNewShopInner,
  SupervisorNewShopVisual,
  SupervisorNewShopWrapper,
} from "./styles/SupervisorNewShopCardStyle";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SupervisorNewShopCard = () => {
  return (
    <SupervisorNewShopWrapper>
      <SupervisorNewShopVisual>
        <NewShopSwiperWrap>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </NewShopSwiperWrap>
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
          <Button bttext="승인"></Button>
          <Button bttext="거부"></Button>
        </SupervisorNewShopButton>
      </SupervisorNewShopInner>
    </SupervisorNewShopWrapper>
  );
};

export default SupervisorNewShopCard;
