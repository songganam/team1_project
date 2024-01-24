import React from "react";
import {
  CardWrapper,
  InfoTagWrap,
  MeatSotreCardImg,
  MeatStoreBox,
  MeatStoreCard,
  MeatStoreInfo,
  MeatStoreTitle,
  ReserveBtn,
} from "../../styles/common/GCardStyle";
import useCustomHook from "./hooks/useCustomHook";

const GCardComponent = ({ data, ishop }) => {
  console.log(data);
  const { moveToRead, moveToReser } = useCustomHook();
  return (
    <CardWrapper>
      {data &&
        data.map(item => (
          <MeatStoreCard
            key={item.ishop}
            onClick={() => moveToRead(item.ishop)}
          >
            <MeatStoreInfo>
              <MeatStoreBox>
                <MeatStoreTitle>{item.name}</MeatStoreTitle>
                <InfoTagWrap>
                  {item.facilities.map((tag, index) => (
                    <button key={index}>
                      <span>{tag}</span>
                    </button>
                  ))}
                </InfoTagWrap>
                {/* 예약하기 */}
                <ReserveBtn
                  onClick={e => {
                    e.stopPropagation();
                    moveToReser(item.ishop);
                  }}
                >
                  <span>예약하기</span>
                </ReserveBtn>
              </MeatStoreBox>
            </MeatStoreInfo>
            <MeatSotreCardImg>
              <img src={item.pics} alt="고기 더미 이미지" />
            </MeatSotreCardImg>
          </MeatStoreCard>
        ))}
    </CardWrapper>
  );
};
export default GCardComponent;
