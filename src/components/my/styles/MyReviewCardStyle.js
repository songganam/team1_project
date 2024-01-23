import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const MyReviewCardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 707px;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 30px;
`;

export const MyReviewCardVisual = styled.div`
  margin-right: 15px;
  img {
    width: 331px;
    height: 228px;
    border-radius: 5px;
    object-fit: cover;
    overflow: hidden;
  }
`;

export const MyReviewCardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 344px;
  height: 228px;
`;

export const MyReviewCardTitle = styled.div``;

export const MyReviewCardSubTitle = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 10px;
`;

export const MyReviewCardPlace = styled.p`
  font-family: DAEAM_LEE_TAE_JOON;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
`;

export const MyReviewCardName = styled.p`
  font-family: DAEAM_LEE_TAE_JOON;
  font-size: 33px;
  font-style: normal;
  font-weight: 400;
`;

export const MyReviewCardInfo = styled.div`
  position: relative;
  display: flex;
`;

export const MyReviewCardInfoTitle = styled.ul`
  margin-right: 10px;
  li {
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

export const MyReviewCardDateContent = styled.ul`
  li {
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    color: ${ColorStyle.g500};
  }
`;

export const MyBookCardBookButton = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  button {
    padding: 7px !important;
    margin-left: 10px;
    span {
      font-size: ${FontSize.default} !important;
    }
  }
`;
