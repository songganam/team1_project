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
          <MeatStoreBox>
            <MeatStoreTitle>목구멍</MeatStoreTitle>
            <InfoTagWrap>
              <button>
                <span>소</span>
              </button>
              <button>
                <span>돼지</span>
              </button>
              <button>
                <span>단체석완비</span>
              </button>
              <button>
                <span>무선인터넷</span>
              </button>
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
    </div>
  );
};

export default GCard;
