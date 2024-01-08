import React from "react";
import {
  MeatSotreCardImg,
  MeatStoreCard,
  MeatStoreCardName,
  MeatStoreInfo,
  MeatstoreTag,
  ReservationBtn,
} from "../../styles/common/CommonComponentStyle";

const StoreCard = ({ data }) => {
  console.log("데이터임 :", data);
  return (
    <div>
      {data &&
        data.map(item => (
          <MeatStoreCard key={item.idx}>
            <MeatStoreCardName>{item.storeName}</MeatStoreCardName>
            <MeatStoreInfo>
              <MeatSotreCardImg>
                <img src={item.image} />
              </MeatSotreCardImg>

              <MeatstoreTag>
                {item.tags.map((tag, index) => (
                  <div key={index}>{tag}</div>
                ))}
              </MeatstoreTag>
              <ReservationBtn>예약하기</ReservationBtn>
            </MeatStoreInfo>
          </MeatStoreCard>
        ))}
    </div>
  );
};

export default StoreCard;
