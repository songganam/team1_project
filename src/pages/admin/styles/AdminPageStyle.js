import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const AdminPageWrapper = styled.div`
  position: relative;
  margin-top: 114px;
`;

export const AdminPageData = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  /* background-color: blue; */
`;

export const AdiminPageMenuBar = styled.div`
  position: fixed;
  width: 210px;
  height: 1530px;
  background-color: #202734;
  z-index: 999;
`;

export const AdminPageMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  button {
    display: flex;
    align-items: center;
    font-family: Pretendard;
    font-size: ${FontSize.strong};
    color: ${ColorStyle.g600};
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    border: none;
    background: none;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

export const AdminPageContent = styled.div`
  position: relative;
  width: calc(100% - 210px);
  /* background-color: pink; */
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 20px; */
  margin: 10px;
`;

export const SwiperWrap = styled.div`
  width: 320px;
  /* height: 3; */
`;

export const ReviewInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin: 10px;
`;
export const ReviewUserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;
export const ReviewProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
export const ReviewContentWrap = styled.div`
  width: 300px;
  height: 40px;
  span {
    color: #000;

    /* Rugular 14 */
    font-family: "Pretendard";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 17.5px */
  }
`;
export const ReviewDateWrap = styled.div`
  display: flex;
  width: 88px;
  height: 18px;
  flex-direction: column;
  justify-content: center;
  span {
    color: #000;
    /* Rugular 14 */
    font-family: "Pretendard";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 17.5px */
  }
`;

export const ReviewProfileItem = styled.div`
  display: flex;
  width: 132px;
  align-items: center;
  gap: 10px;

  img {
    width: 54px;
    height: 54px;
    border-radius: 54px;
  }
  span {
    font-size: 19px;
    font-family: "DAEAM_LEE_TAE_JOON";
  }
`;

export const CateWrap = styled.div`
  display: flex;
  img {
    width: 20px;
    height: 20px;
  }
`;
