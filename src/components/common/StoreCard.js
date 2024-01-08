import React from "react";
import {
  Container,
  MeatSotreCardImg,
  MeatStoreCard,
  MeatStoreCardName,
  MeatStoreInfo,
  MeatstoreTag,
  ReservationBtn,
} from "../../styles/common/CommonComponentStyle";

const StoreCard = () => {
  return (
    <>
      <MeatStoreCard>
        <MeatStoreCardName>가게이름</MeatStoreCardName>
        <MeatStoreInfo>
          <MeatSotreCardImg>이미지 AREA</MeatSotreCardImg>
          <MeatstoreTag>태그들</MeatstoreTag>
          <ReservationBtn>예약하기</ReservationBtn>
        </MeatStoreInfo>
      </MeatStoreCard>
    </>
  );
};

export default StoreCard;
