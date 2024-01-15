import React from "react";
import {
  InfoTagWrap,
  MeatSotreCardImg,
  MeatStoreBox,
  MeatStoreCard,
  MeatStoreInfo,
  MeatStoreTitle,
} from "../../styles/common/GCardStyle";

const GCard = ({ data }) => {
  console.log("데이터임 :", data);
  return (
    <div>
      {data &&
        data.map(item => (
          <MeatStoreCard key={item.idx}>
            <MeatStoreInfo>
              <MeatStoreBox>
                <MeatStoreTitle>{item.storeName}</MeatStoreTitle>
                <InfoTagWrap>
                  {item.tags.map((tag, index) => (
                    <button key={index}>
                      <span>{tag}</span>
                    </button>
                  ))}
                </InfoTagWrap>
                {/* 예약하기 */}
                <reserveBtn>
                  <span>예약하기</span>
                </reserveBtn>
              </MeatStoreBox>
            </MeatStoreInfo>
            <MeatSotreCardImg>
              <img
                src="https://picsum.photos/380/210/?category=meat"
                alt="고기 더미 이미지"
              />
            </MeatSotreCardImg>
          </MeatStoreCard>
        ))}
      ;
    </div>
  );
};

export default GCard;
