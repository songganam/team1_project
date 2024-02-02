import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const MyListCardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 707px;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 30px;
  cursor: pointer;
`;

export const MyListCardVisual = styled.div`
  margin-right: 15px;
  img {
    width: 331px;
    height: 228px;
    border-radius: 5px;
    object-fit: cover;
    overflow: hidden;
  }
`;

export const MyListCardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 344px;
  height: 228px;
  gap: 35px;
`;

export const MyListCardTitle = styled.div``;

export const MyListCardSubTitle = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 10px;
`;

export const MyListCardPlace = styled.p`
  font-family: DAEAM_LEE_TAE_JOON;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
`;

export const MyListCardName = styled.p`
  font-family: DAEAM_LEE_TAE_JOON;
  font-size: 33px;
  font-style: normal;
  font-weight: 400;
`;

export const MyListCardInfo = styled.div`
  position: relative;
  display: flex;
`;

export const MyListCardInfoTitle = styled.ul`
  margin-right: 10px;
  li {
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`;

export const MyListCardDateContent = styled.ul`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  li {
    display: block;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: ${ColorStyle.g500};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const MyMoreViewButton = styled.button`
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 2px solid var(--sub, #066e52);
  background: #fff;
  margin-bottom: 50px;
  cursor: pointer;
  span {
    color: var(--primary, #d60117);
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }
`;
