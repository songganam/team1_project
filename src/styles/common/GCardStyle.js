import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "./CommonStyle";

// 고깃집 가게 카드 컴포넌트
export const MeatStoreCard = styled.div`
  font-family: "DAEAM_LEE_TAE_JOON";
  display: inline-flex;
  padding: 30px 0px;
  align-items: flex-start;
  /* background: red; */
`;
export const MeatStoreCardName = styled.div`
  margin-left: 10px;
  position: relative;
  font-size: ${FontSize.title};
  font-weight: 400;

  /* margin-bottom: 20px; */
`;
export const MeatStoreInfo = styled.div`
  display: flex;
  width: 158px;
  height: 230px;
  padding: 10px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 5px;
  flex-wrap: wrap;
`;
export const MeatStoreBox = styled.div`
  display: flex;
  width: 138px;
  height: 210px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 28px 10px;
  flex-shrink: 0;
  flex-wrap: wrap;
`;

export const MeatSotreCardImg = styled.div`
  width: 380px;
  height: 210px;
  /* background-color: blue; */
  background: url("<path-to-image>"), lightgray 50% / cover no-repeat, #d9d9d9;
`;

export const MeatstoreTag = styled.div``;

export const MeatStoreTitle = styled.span`
  color: #111;
  /* font-family: DAEAM_LEE_TAE_JOON; */
  font-size: 33px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 41.25px */
`;
export const SubTitle = styled.span`
  font-size: ${FontSize.sub_title};
  font-weight: 400;
  color: ${ColorStyle.g500};
`;

export const reserveBtn = styled.div`
  width: 73px;
  height: 25px;
  flex-shrink: 0;
  span {
    color: #111;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 23.75px */
    text-decoration-line: underline;
  }
`;
export const InfoTagWrap = styled.div`
  display: flex;
  width: 138px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;
  button {
    display: flex;
    width: 64px;
    height: 25px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 2px solid var(--sub, #066e52);
    background: #fff;

    span {
      width: 64px;
      flex-shrink: 0;
      color: var(--primary, #d60117);
      text-align: center;
      font-family: DAEAM_LEE_TAE_JOON;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 17.5px */
    }
  }
  button {
    border-radius: 20px;
    border: 2px solid var(--sub, #066e52);
    background: var(--gray-scale-0, #fff);
  }
`;
