import styled from "@emotion/styled";

export const AboutPageWrap = styled.div`
  font-family: "DAEAM_LEE_TAE_JOON";
  position: relative;
  display: block;
`;

export const AboutPageTop = styled.div`
  position: relative;
  display: block;
  background-color: grey;
  width: 100%;
  height: 964px;
`;

export const AboutPageMain = styled.div`
  position: relative;
  display: block;
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

export const AboutCardWrap = styled.div`
  display: inline-flex;
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

export const MainButcher = styled.div`
  position: relative;
  display: block;

  .ButcherTitle {
    position: relative;
    padding-top: 177px;
    font-size: 33px;
  }
`;
export const MainBand = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 354px;

  .MainBandText {
    position: relative;

    font-size: 44px;
  }
`;

export const AboutPageShops = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 805px;
  justify-content: center;

  .ShopTexts {
  }
  .ShopImg {
    display: flex;
    align-items: center;
    width: 875px;
    height: 678px;
    flex-shrink: 0;
  }
`;

export const AboutPageEvent = styled.div``;
export const AboutPageCommunity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .CommunityTitle {
    font-size: 33px;
  }
  .BigImage {
    width: 853px;
    height: 853px;
  }
`;
