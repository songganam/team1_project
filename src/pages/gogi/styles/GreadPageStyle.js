import styled from "@emotion/styled";

// 빠른예약 CSS
export const QuickReserWrap = styled.div`
  display: flex;
  width: 1180px;
  padding: 20px 30px;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const QuickReser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const ReserLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;
export const ReserRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;
export const ReserText = styled.div`
  display: flex;
  width: 183px;
  height: 46px;
  flex-direction: column;
  justify-content: center;
  span {
    color: #000;
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 41.25px */
  }
`;
export const ReserTimeBox = styled.div`
  display: flex;
  width: 359px;
  height: 93px;
  align-items: center;
  align-content: center;
  gap: 9px 25px;
  flex-wrap: wrap;
  /* background-color: red; */
`;
export const ReserTimeBtn = styled.button`
  display: flex;
  align-items: flex-start;
  display: flex;
  width: 70px;
  height: 25px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 2px solid var(--sub, #066e52);
  background: #fff;
  span {
    color: var(--primary, #d60117);
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 23.75px */
  }
`;
export const ReserCounting = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 31px;
`;
export const ReserCountText = styled.div`
  display: flex;
  width: 122px;
  height: 38px;
  flex-direction: column;
  justify-content: center;
  span {
    color: #000;
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 41.25px */
  }
`;
export const ReserCountBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;
export const ReserCountBtn = styled.div`
  display: flex;
  width: 50px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  span {
    color: #000;
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 41.25px */
  }
`;
export const SelectBtn = styled.button`
  display: flex;
  width: 70px;
  height: 25px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 2px solid var(--sub, #066e52);
  background: #fff;
  span {
    color: var(--primary, #d60117);
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 17.5px */
  }
`;

// 가게정보 CSS
export const StoreInfoWrap = styled.div`
  display: flex;
  width: 1180px;
  padding: 30px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0px 233px;
  flex-wrap: wrap;
`;

export const StoreInfo = styled.div`
  display: flex;
  width: 400px;
  height: 190px;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  flex-shrink: 0;
`;

export const StoreInfoTitle = styled.div`
  width: 115px;
  height: 35px;
  flex-shrink: 0;
  span {
    color: #000;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 41.25px */
  }
`;
export const StoreInfoContent = styled.div`
  display: flex;
  height: 126px;
  padding: 0px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
`;
export const StoreMenuWrap = styled.div`
  display: flex;
  width: 313px;
  height: 573px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  flex-shrink: 0;
`;
export const StoreInfoContentItemBox = styled.div`
  display: flex;
  width: 400px;
  align-items: flex-start;
  gap: 10px;
`;
export const StoreInfoContentItem = styled.span`
  color: var(--gray-scale-800, #424242);
  /* Rugular 14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 17.5px */
`;
export const StoreInfoContentItemDetail = styled.span`
  color: var(--gray-scale-500, #8f8f8f);
  /* Rugular 14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 17.5px */
`;

export const StoreNoticeWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;
export const StoreNoticeTitle = styled.div`
  width: 115px;
  height: 30px;
  span {
    color: #000;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 41.25px */
  }
`;
export const StoreNoticeCardWrap = styled.div`
  display: flex;
  padding: 2px;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  border-radius: 10px;
  border: 2px solid var(--sub, #066e52);
`;
export const StoreNoticeCardImage = styled.div`
  width: 270px;
  height: 240px;

  img {
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat, #d9d9d9;
  }
`;
export const StoreNoticeCardTitleBox = styled.div`
  width: 200px;
  height: 44px;
`;
export const StoreNoticeCardTitle = styled.div`
  color: var(--sub-200, #010d0a);
  /* Bold 14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%; /* 17.5px */
`;
export const StoreNoticeCardDate = styled.div`
  color: var(--gray-scale-700, #5c5c5c);
  /* Rugular 11 */
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
`;
export const StoreNoticeCardContent = styled.div`
  width: 254px;
  height: 54px;
  color: var(--sub-200, #010d0a);
  span {
    /* Rugular 14 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 17.5px */
  }
`;
export const StoreMenuTitle = styled.div`
  width: 63px;
  height: 35px;
  margin-bottom: 28px;
  span {
    color: #000;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 41.25px */
  }
`;
export const StoreMenuCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 9px;
`;
export const StoreMenuCardImage = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 9px;
  img {
    width: 50px;
    height: 50px;
  }
`;
export const StoreMenuCardTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;
export const StoreMenuCardMenuName = styled.div`
  width: 106px;
  height: 19px;
  span {
    color: #111;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 17.5px */
  }
`;
export const StoreMenuCardMenuPrice = styled.div`
  display: flex;
  width: 50px;
  height: 16px;
  flex-direction: column;
  justify-content: center;
  span {
    color: #000;
    text-align: center;
    /* Bold 14 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 17.5px */
  }
`;

// 카카오 API Wrapper
export const MapWrapper = styled.div`
  position: relative;
  width: 1180px;
  height: 500px;
  display: inline-flex;
  padding: 30px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  /* background-color: red; */
`;

// Review
export const StoreReviewTitle = styled.div`
  display: flex;
  width: 157px;
  height: 105px;
  flex-direction: column;
  justify-content: center;
  span {
    color: #000;
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 59px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 73.75px */
  }
`;
export const StoreReviewContet = styled.div`
  display: inline-flex;
  padding: 30px;
  align-items: flex-start;
  gap: 100px;
`;
export const StoreReviewImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 17px;
`;
export const StoreReviewMainImage = styled.div`
  width: 300px;
  height: 272px;
  img {
    border-radius: 5px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  }
`;
export const StoreReviewSubImage = styled.div`
  width: 60px;
  height: 50px;
  flex-shrink: 0;
  img {
    border-radius: 5px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  }
`;
