import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

// 고깃집 가게 카드 컴포넌트
export const CardWrapper = styled.div`
  width: 1180px;
  padding-top: 80px;
`;
export const ButcherStoreCard = styled.div`
  font-family: "DAEAM_LEE_TAE_JOON";
  display: inline-flex;
  padding: 30px 0px;
  align-items: flex-start;
  /* margin-right: 50px; */
  /* background: red; */
`;
export const ButcherStoreCardName = styled.div`
  margin-left: 10px;
  position: relative;
  font-size: ${FontSize.title};
  font-weight: 400;

  /* margin-bottom: 20px; */
`;
export const ButcherStoreInfo = styled.div`
  display: flex;
  width: 200px;
  height: 230px;
  padding: 10px;
  align-items: flex-start;
  justify-content: center;
  align-content: flex-start;
  gap: 5px;
  flex-wrap: wrap;
`;
export const ButcherStoreBox = styled.div`
  display: flex;
  width: 150px;
  height: 210px;
  align-items: flex-start;
  align-content: flex-start;
  flex-shrink: 0;
  flex-wrap: wrap;
`;

export const ButcherSotreCardImg = styled.div`
  width: 380px;
  height: 210px;
  display: flex;
  align-items: center;
  /* background-color: blue; */
  img {
    width: 380px;
    height: 210px;
  }
`;

export const ButcherstoreTag = styled.div``;

export const ButcherStoreTitle = styled.div`
  cursor: pointer;
  color: #111;
  height: 64px;
  /* font-family: DAEAM_LEE_TAE_JOON; */
  font-size: ${FontSize.sub_title};
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 41.25px */
`;
export const SubTitle = styled.span`
  font-size: ${FontSize.sub_title};
  font-weight: 400;
  color: ${ColorStyle.g500};
`;

export const ReserveBtn = styled.div`
  cursor: pointer;
  padding-top: 30px;
  width: 73px;
  height: 25px;
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
  width: 150px;
  height: 60px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;
  button {
    display: flex;
    width: 70px;
    height: 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 2px solid var(--sub, #066e52);
    background: #fff;

    span {
      width: 70px;
      flex-shrink: 0;
      color: var(--primary, #d60117);
      text-align: center;
      font-family: DAEAM_LEE_TAE_JOON;
      font-size: 11px;
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
