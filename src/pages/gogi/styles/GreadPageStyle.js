import styled from "@emotion/styled";

// * Store Info Area
export const StoreInfoWrap = styled.div`
  display: inline-flex;
  padding: 30px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
export const StoreInfoImageWrap = styled.div`
  width: 1180px;
  height: 800px;
  img {
    width: 1180px;
    height: 800px;
  }
`;
export const StoreInfoContentWrap = styled.div`
  display: flex;
  width: 1180px;
  height: 258px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: absolute;
  top: 470px;
  background: rgba(17, 17, 17, 0.35);
`;
export const StoreInfoContent = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;
export const StoreInfoName = styled.div`
  width: 90px;
  height: 36px;
  span {
    color: #fff;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 41.25px */
  }
`;
export const StoreInfoDescWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
export const StoreInfoDesc = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
`;

// Content description Item + Content
export const StoreInfoDescItem = styled.span`
  /* width: 50px; */
  color: var(--gray-scale-100, #f5f5f5);
  /* Bold 14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%; /* 17.5px */
`;
export const StoreInfoDescContent = styled.span`
  color: var(--gray-scale-100, #f5f5f5);

  /* Rugular 14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 17.5px */
`;

// ! Menu Layout
export const StoreMenuWrap = styled.div`
  display: inline-flex;
  padding-bottom: 30px;
  flex-direction: column;
  align-items: center;
`;
export const StoreMenuTitle = styled.div`
  display: flex;
  width: 434px;
  height: 95px;
  flex-direction: column;
  justify-content: center;
  span {
    color: #000;
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 44px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 55px */
  }
`;
// ! Card
export const StoreMenuContentWrap = styled.div`
  display: flex;
  width: 1180px;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`;

export const StoreMenuCardWrap = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
export const StoreMenuCardImageWrap = styled.div`
  width: 370px;
  height: 350px;
  img {
    width: 370px;
    height: 350px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat, #fff;
  }
`;
export const StoreMenuCardContentWrap = styled.div`
  /* position: absolute; */
  /* top: 100px; */
  margin-top: -130px;
  z-index: 2;
  display: flex;
  width: 370px;
  padding: 23px 29px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: rgba(0, 0, 0, 0.35);
`;
export const StoreMenuCardContent = styled.div`
  /* display: flex; */
  height: 75px;
  align-items: flex-start;
  gap: 10px;
`;
export const StoreMenuCardContentItem = styled.div`
  width: 185px;
  height: 33px;
  margin-bottom: 20px;
  span {
    color: #fff;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
  }
`;
export const StoreMenuCardContentPrice = styled.div`
  width: 72px;
  height: 25px;
  /* position: absolute; */
  /* bottom: -0.087px; */
  span {
    color: #fff;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 23.75px */
  }
`;

// ! KAKAO MAP AREA
export const MapApiWrapper = styled.div`
  display: flex;
  width: 1180px;
  padding: 30px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
