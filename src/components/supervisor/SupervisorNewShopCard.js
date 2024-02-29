import React, { useEffect, useState } from "react";
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
import useCustomMy from "../my/hooks/useCustomMy";
import { getSvisorNewShop } from "../../api/supervisorShopApi";

const initState = [
  {
    checkShop: 0,
    ishop: 0,
    name: "",
    x: "",
    y: "",
    tel: "",
    confirm: 0,
    pic: "",
    shop: true,
  },
];

const SupervisorNewShopCard = () => {
  const { page } = useCustomMy();
  const [svisorNewShopData, setSvisorNewShopData] = useState(initState);

  // 예약 관리 정보 불러오기 (GET)
  useEffect(() => {
    const param = { page };
    getSvisorNewShop({ param, successFn, failFn, errorFn });
  }, [page]);

  const successFn = result => {
    setSvisorNewShopData(result);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  return (
    <>
      {svisorNewShopData.map((svisorNewShopData, index) => (
        <SupervisorNewShopWrapper key={index}>
          <SupervisorNewShopVisual>
            <NewShopSwiperWrap>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
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
                <li>{setSvisorNewShopData.name}</li>
                <li>내용</li>
                <li>{setSvisorNewShopData.tel}</li>
              </NewShopContent>
            </SupervisorNewShopInfo>
            <SupervisorNewShopButton>
              <Button bttext="승인"></Button>
              <Button bttext="거부"></Button>
            </SupervisorNewShopButton>
          </SupervisorNewShopInner>
        </SupervisorNewShopWrapper>
      ))}
    </>
  );
};

export default SupervisorNewShopCard;
