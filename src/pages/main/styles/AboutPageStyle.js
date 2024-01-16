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
  display: block;
  width: 100%;
  height: 964px;

  img {
    position: absolute;
    width: 100%;
    height: 964px;
  }

  ul {
    position: absolute;
    top: 0; /* 텍스트를 상단에 위치시킴 */
    left: 0; /* 텍스트를 왼쪽에 위치시킴 */

    .text-one {
      color: #ffffff;
    }
    .text-two {
      color: #ffffff;
    }
    .text-three {
      color: #ffffff;
    }
    .text-four {
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
  background-color: red;

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
  .EvenntButton {
    color: #d60117;
    font-size: 14px;
  }
`;

export const AboutPageCommunity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 135px;

  .CommunityTitle {
    font-size: 33px;
  }
`;
export const CommunityImages = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .BigImage {
    width: 853px;
    height: 853px;
  }
  .smallImage {
    width: 417px;
    height: 417px;
  }
`;
