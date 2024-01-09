import React from "react";
import {
  DivTag,
  InfoTag,
  InfoTagWrap,
  MeatSotreCardImg,
  MeatStoreCard,
  MeatStoreCardName,
  MeatStoreInfo,
  MeatStoreTitle,
  MeatstoreTag,
  ReservationBtn,
} from "../../styles/common/CommonComponentStyle";

const StoreCard = ({ data }) => {
  console.log("데이터임 :", data);
  return (
    <div>
      {/* {data &&
        data.map(item => (
          <MeatStoreCard key={item.idx}>
            <MeatStoreCardName>{item.storeName}</MeatStoreCardName>
            <MeatStoreInfo>
              <MeatSotreCardImg>
                <img src={item.image} />
              </MeatSotreCardImg>

              <MeatstoreTag>
                {item.tags.map((tag, index) => (
                  <DivTag key={index}>{tag}</DivTag>
                ))}
              </MeatstoreTag>
              <ReservationBtn>예약하기</ReservationBtn>
            </MeatStoreInfo>
          </MeatStoreCard>
        ))} */}

      <MeatStoreCard>
        <MeatStoreInfo>
          <MeatStoreTitle>목구멍</MeatStoreTitle>
          <InfoTagWrap>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </InfoTagWrap>
          {/* 예약하기 */}
          <reserveBtn>
            <span>예약하기</span>
          </reserveBtn>
        </MeatStoreInfo>
        <MeatSotreCardImg>
          <img
            src="https://picsum.photos/380/210/?category=meat"
            alt="고기 더미 이미지"
          />
        </MeatSotreCardImg>
      </MeatStoreCard>
    </div>
  );
};

export default StoreCard;
