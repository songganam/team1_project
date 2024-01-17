import styled from "@emotion/styled";
import AboutCard from "../../../components/About/AboutCard";

export const AboutPageWrap = styled.div`
  font-family: "DAEAM_LEE_TAE_JOON";
  position: relative;
  display: block;
`;

// 맨 위 사진
export const AboutPageTop = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 800px;

  img {
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .TopText {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 371px;
    height: 265px;

    .TopText .text-one {
      position: absolute;
      font-size: 25px;
      color: #a8a8a8;
    }
    .TopText .text-two {
      position: absolute;
      font-size: 10px;
      color: #a8a8a8;
    }
    .TopText .text-three {
      position: absolute;
      font-size: px;
      color: #c2c2c2;
    }
    .TopText .text-four {
      position: absolute;
      font-size: 44px;
      color: #ffffff;
    }
  }
`;

// 메인
export const AboutPageMain = styled.div`
  position: relative;
  display: block;
`;

export const GogishopCard = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
`;

export const MainGogiShop = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .GogiShopTitle {
    position: relative;
    padding-top: 177px;
    font-size: 33px;
  }
`;

// 고깃집 이미지, 네임, 가격, 버튼
export const AboutCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .AboutCardImg {
    position: relative;
    padding-top: 14px;
    width: 583px;
    height: 360px;
  }
  .AboutCardTitle {
    position: relative;
    font-size: 33px;
    padding-top: 20px;
  }
  .AboutCardPrice {
    font-family: "Pretendard";
    padding-top: 10px;
    display: inline-flex;
    font-size: 19px;
    flex-direction: column;
    align-items: center;
  }
`;
export const AboutCardButton = styled.div`
  display: flex;
  padding-top: 20px;
  .InfoButton {
    font-size: 14px;
    color: #d60117;
    margin-right: 38px;
  }
  .BookButton {
    font-size: 14px;
    color: #d60117;
  }
`;

// 정육점
export const ButcherCards = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
`;

export const MainButcher = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .ButcherTitle {
    position: relative;
    padding-top: 177px;
    font-size: 33px;
  }
`;

// 고기-로
export const MainBand = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 270px;
  padding-top: 300px;
  margin-bottom: 134px;
  /* z-index: 3; */

  img {
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 270px;

    /* z-index: 1; */
  }
  .MainBandText {
    position: absolute;
    font-size: 44px;
    color: #ffffff;
  }
`;

export const AboutPageShops = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 805px;
  justify-content: center;
  padding-top: 63px;
  flex-shrink: 0;
  background-color: #f5f5f5;

  .ShopTexts {
    position: relative;
    height: 354px;
  }
  img {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 875px;
    height: 678px;
  }
`;

// 오늘의 행사
export const AboutPageEvent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 160px;
  .EventTitle {
    position: relative;
    font-size: 33px;
  }
`;
export const AboutEventCards = styled.div`
  position: relative;
  display: flex;

  .EventCards {
    position: relative;
    display: flex;
  }
  .EventImage {
    position: relative;
    width: 583px;
    height: 583px;
    padding-top: 14px;
  }
  .EventButton-wrap {
    padding-top: 21px;
  }
  .EventButton {
    color: #d60117;
    font-size: 14px;
  }
`;

export const AboutPageCommunity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 312px;
  padding-bottom: 135px;

  .CommunityTitle {
    font-size: 33px;
  }
`;
export const CommunityImages = styled.div`
  position: relative;
  display: grid;
  padding-top: 22px;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  .BigImage {
    position: relative;
    grid-area: 1 / 1 / 5 / 5;
    img {
      width: 600px;
      height: 600px;
    }
  }
  .smallone {
    position: relative;
    grid-area: 1 / 5 / 3 / 7;
    img {
      width: 290px;
      height: 290px;
    }
  }
  .smalltwo {
    position: relative;
    grid-area: 1 / 7 / 3 / 9;
    img {
      width: 290px;
      height: 290px;
    }
  }
  .smallthree {
    position: relative;
    grid-area: 3 / 5 / 5 / 7;
    img {
      width: 290px;
      height: 290px;
    }
  }
  .smallfour {
    position: relative;
    grid-area: 3 / 7 / 5 / 9;
    img {
      width: 290px;
      height: 290px;
    }
  }
`;
