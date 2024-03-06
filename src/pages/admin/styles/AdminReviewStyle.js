import styled from "@emotion/styled";
import TextareaAutosize from "react-textarea-autosize";
import { ColorStyle } from "../../../styles/common/CommonStyle";
export const ReviewWrap = styled.div`
  width: 1080px;
  padding-left: 20px;
  margin-top: 85px;
  margin-bottom: 50px;
  margin-left: 210px;
`;
export const ReviewItem = styled.div`
  display: flex;
`;
export const ReviewReplyBtnWrap = styled.div`
  float: right;
  padding: 20px 0px;
`;
export const ReviewInput = styled(TextareaAutosize)`
  display: flex;
  width: 306px;
  height: 44px;
  padding: 10px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  overflow: hidden;
  resize: none;

  border-radius: 10px;
  border: 1px solid var(--gray-scale-500, #8f8f8f);
  background: #fff;

  font-size: 14px;
  font-family: "Pretendard";
`;

export const ReviewShowWrap = styled.div`
  width: 306px;
  /* height: 108px; */
  flex-shrink: 0;
  /* gap: 20px; */

  border-radius: 10px;
  border: 1px solid var(--gray-scale-500, #8f8f8f);
  background: #fff;

  display: flex;
  width: 306px;
  padding: 15px 20px;
  gap: 10px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
export const ReviewShowTop = styled.div`
  width: 306px;
  /* height: 44px; */
  /* padding: 10px 20px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* flex-shrink: 0; */
`;

export const ReviewContent = styled.div`
  display: flex;
  width: 259px;
  height: 60px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  span {
    color: #000;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 13.75px */
  }
`;
export const ReviewWrtier = styled.div`
  span {
    color: #000;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 17.5px */
  }
`;
export const ReviewDate = styled.div`
  span {
    color: var(--gray-scale-500, #8f8f8f);
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 13.75px */
  }
`;
export const MiniBtn = styled.button`
  cursor: pointer;
  display: flex;
  /* width: 64px; */
  /* height: 35px; */
  padding: 5px 10px;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 10px;
  flex-shrink: 0;

  border-radius: 10px;
  border: 2px solid var(--sub, #066e52);
  background: #fff;
  span {
    color: var(--primary, #d60117);
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 23.75px */
  }
`;

export const SelectBtnWrap = styled.div`
  position: relative;
  padding: 20px 35px;
`;
export const SelectBtnItem = styled.div`
  float: right;
  display: flex;
  gap: 10px;
`;
export const ReviewCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  justify-content: center;
  align-items: center;
  /* padding: 80px 0px; */
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1),
    0px 1px 3px 0px rgba(0, 0, 0, 0.1);
`;
export const ReviewProfileItem = styled.div`
  display: flex;
  width: 132px;
  align-items: center;
  gap: 10px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
  span {
    font-size: 14px;
    font-family: "DAEAM_LEE_TAE_JOON";
  }
`;
export const ReviewUserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const ReviewContentWrap = styled.div`
  width: 300px;
  height: 40px;
  span {
    color: #000;

    /* Rugular 14 */
    font-family: "DAEAM_LEE_TAE_JOON";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 17.5px */
  }
`;
export const ReviewDateWrap = styled.div`
  display: flex;
  width: 100px;
  height: 18px;
  flex-direction: column;
  justify-content: center;

  span {
    color: ${ColorStyle.g500};
    /* Rugular 14 */
    font-family: "DAEAM_LEE_TAE_JOON";
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 17.5px */
  }
`;
export const ReviewInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin: 10px;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 20px; */
  margin: 10px;
`;
export const SwiperWrap = styled.div`
  /* img {
    width: 320px;
  } */
  /* height: 3; */
  /* color: transparent; */
`;
