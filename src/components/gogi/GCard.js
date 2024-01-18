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
          <MeatStoreCard key={item.ishop}>
            <MeatStoreInfo>
              <MeatStoreBox>
                <MeatStoreTitle>{item.name}</MeatStoreTitle>
                <InfoTagWrap>
                  {/* {item.tags.map((tag, index) => (
                    <button key={index}>
                      <span>{tag}</span>
                    </button>
                  ))} */}
                </InfoTagWrap>
                {/* 예약하기 */}
                <reserveBtn>
                  <span>예약하기</span>
                </reserveBtn>
              </MeatStoreBox>
            </MeatStoreInfo>
            <MeatSotreCardImg>
              <img src={item.pics} alt="고기 더미 이미지" />
            </MeatSotreCardImg>
          </MeatStoreCard>
        ))}
      ;
    </div>
  );
};

export default GCard;
