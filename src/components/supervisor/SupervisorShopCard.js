import React, { useEffect, useState } from "react";
import {
  ShopContent,
  ShopSwiperWrap,
  ShopTitle,
  SupervisorShopButton,
  SupervisorShopInfo,
  SupervisorShopInner,
  SupervisorShopVisual,
  SupervisorShopWrapper,
} from "./styles/SupervisorShopCardStyle";
import Button from "../button/Button";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useCustomMy from "../my/hooks/useCustomMy";
import { getSvisorShop } from "../../api/supervisorShopApi";

const initState = [
  {
    checkShop: 0,
    ishop: 0,
    name: "",
    shopName: "",
    location: "",
    x: "",
    y: "",
    tel: "",
    confirm: 0,
    pic: "",
  },
];

const SupervisorShopCard = () => {
  const { page } = useCustomMy();
  const [svisorShopData, setSvisorShopData] = useState(initState);

  // 기존 매장 정보 불러오기 (GET)
  useEffect(() => {
    const param = { page };
    getSvisorShop({ param, successFn, failFn, errorFn });
  }, [page]);

  const successFn = result => {
    setSvisorShopData(result);
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
      {svisorShopData.map((SvisorShopData, index) => (
        <SupervisorShopWrapper key={index}>
          <SupervisorShopVisual>
            <ShopSwiperWrap>
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
              </Swiper>
            </ShopSwiperWrap>
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
                <li>{SvisorShopData.name}</li>
                <li>{SvisorShopData.shopName}</li>
                <li>{SvisorShopData.location}</li>
                <li>{SvisorShopData.tel}</li>
              </ShopContent>
            </SupervisorShopInfo>
            <SupervisorShopButton>
              <Button bttext="매장 퇴출"></Button>
            </SupervisorShopButton>
          </SupervisorShopInner>
        </SupervisorShopWrapper>
      ))}
    </>
  );
};

export default SupervisorShopCard;
