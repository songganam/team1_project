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
import SelectedModal from "../common/SelectedModal";

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

const SupervisorNewShopCard = () => {
  const { page } = useCustomMy();
  const [svisorNewShopData, setSvisorNewShopData] = useState(initState);
  const [shopConfirm, setShopConfirm] = useState(null);

  // 모달창
  const { useResultModal, openModal, closeModal } = useModal();

  // 신규 매장 정보 불러오기 (GET)
  useEffect(() => {
    const param = { page };
    getSvisorNewShop({ param, successFn, failFn, errorFn });
  }, [page]);

  const successFn = result => {
    const filteredData = result.filter(item => item.confirm === 0);
    setSvisorNewShopData(result);
    console.log(filteredData);
  };

  const failFn = result => {
    console.log(result);
  };

  const errorFn = result => {
    console.log(result);
  };

  // 가게 승인 여부 변경 (PATCH)
  const handleConfirmShop = (checkShop, ishop, confirm, actionType) => {
    if (confirm === 0) {
      let newConfirmValue;

      if (actionType === "approve") {
        newConfirmValue = 1;
      } else if (actionType === "reject") {
        newConfirmValue = 2;
      } else {
        return;
      }

      const patchShopConfirmData = {
        checkShop: checkShop,
        ishop: ishop,
        confirm: newConfirmValue,
      };

      setShopConfirm(patchShopConfirmData);

      setSvisorNewShopData(prevData =>
        prevData.map(shop =>
          shop.ishop === ishop ? { ...shop, confirm: newConfirmValue } : shop,
        ),
      );

      openModal();
    } else {
      return;
    }
  };

  const handleConfirmDone = confirmValue => {
    if (shopConfirm) {
      const { checkShop, ishop, confirm } = shopConfirm;
      const newConfirmValue = confirmValue === 2 ? 2 : 0;
      patchShopConfirm({
        patchShopForm: { checkShop, ishop, confirm: newConfirmValue },
        successPatch,
        failPatch,
        errorPatch,
      });
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
      {svisorNewShopData.map(
        (svisorNewShopData, index) =>
          svisorNewShopData.confirm === 0 && (
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
                        svisorNewShopData.confirm,
                        "approve",
                      )
                    }
                  >
                    <Button bttext="승인" />
                  </div>
                  {useResultModal && (
                    <SelectedModal
                      title="입점 승인"
                      content="입점을 승인하시겠습니까?"
                      confirmFn={handleConfirmDone}
                      cancelFn={closeModal}
                    />
                  )}
                  <div>
                    <div
                      onClick={() =>
                        handleConfirmShop(
                          svisorNewShopData.checkShop,
                          svisorNewShopData.ishop,
                          svisorNewShopData.confirm,
                          "reject",
                        )
                      }
                    >
                      <Button bttext="거부" />
                    </div>
                    {useResultModal && (
                      <SelectedModal
                        title="입점 거부"
                        content="입점을 거부하시겠습니까?"
                        confirmFn={handleConfirmDone}
                        cancelFn={closeModal}
                      />
                    )}
                  </div>
                </SupervisorNewShopButton>
              </SupervisorNewShopInner>
            </SupervisorNewShopWrapper>
          ),
      )}
    </>
  );
};

export default SupervisorNewShopCard;
