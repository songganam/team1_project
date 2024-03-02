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
import {
  getSvisorNewShop,
  patchShopConfirm,
} from "../../api/supervisorShopApi";
import useModal from "../../hooks/useModal";

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

const initConfim = {
  checkShop: 0,
  ishop: 0,
  confirm: 0,
};

const SupervisorNewShopCard = () => {
  const { page } = useCustomMy();
  const [svisorNewShopData, setSvisorNewShopData] = useState(initState);
  const [shopConfirm, setShopConfirm] = useState(initConfim);

  // 모달창
  const { useResultModal, openModal, closeModal } = useModal();

  // 신규 매장 정보 불러오기 (GET)
  useEffect(() => {
    const param = { page };
    getSvisorNewShop({ param, successFn, failFn, errorFn });
  }, [page]);

  const successFn = result => {
    setSvisorNewShopData([...svisorNewShopData, ...result]);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  // 가게 승인 여부 변경 (PATCH)
  const handleConfirmShop = (checkShop, ishop, confirm) => {
    const patchShopConfirm = {
      checkShop: checkShop,
      ishop: ishop,
      confirm: confirm,
    };
    // 승인 전 확인 모달창
    setShopConfirm(patchShopConfirm);
    openModal();
    console.log(patchShopConfirm);
  };

  const handleConfirmDone = confirmValue => {
    if (shopConfirm) {
      const { checkShop, ishop, confirm } = shopConfirm;
      patchShopConfirm({
        param: { checkShop, ishop, confirm },
        successPatch,
        failPatch,
        errorPatch,
      });
      console.log(shopConfirm);
      closeModal();
    }
  };

  const successPatch = patchResult => {
    console.log("승인 여부 변경 성공", patchResult);
    const updatedMyShopList = svisorNewShopData.filter(
      shop => shop.ishop !== shopConfirm.ishop,
    );
    setSvisorNewShopData(updatedMyShopList);
  };

  const failPatch = patchResult => {
    console.log("승인 여부 변경 실패", patchResult);
  };

  const errorPatch = patchResult => {
    console.log("서버 오류", patchResult);
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
                <SwiperSlide>{svisorNewShopData.pic}</SwiperSlide>
                <SwiperSlide>{svisorNewShopData.pic}</SwiperSlide>
                <SwiperSlide>{svisorNewShopData.pic}</SwiperSlide>
                <SwiperSlide>{svisorNewShopData.pic}</SwiperSlide>
                <SwiperSlide>{svisorNewShopData.pic}</SwiperSlide>
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
                <li>{svisorNewShopData.name}</li>
                <li>{svisorNewShopData.shopName}</li>
                <li>{svisorNewShopData.location}</li>
                <li>{svisorNewShopData.tel}</li>
              </NewShopContent>
            </SupervisorNewShopInfo>
            <SupervisorNewShopButton>
              <div
                onClick={() =>
                  handleConfirmShop(
                    svisorNewShopData.checkShop,
                    svisorNewShopData.ishop,
                  )
                }
              >
                <Button bttext="승인" />
              </div>
              <div onClick={() => handleConfirmDone(2)}>
                <Button bttext="거부" />
              </div>
            </SupervisorNewShopButton>
          </SupervisorNewShopInner>
        </SupervisorNewShopWrapper>
      ))}
    </>
  );
};

export default SupervisorNewShopCard;
