import styled from "@emotion/styled";
import TextareaAutosize from "react-textarea-autosize";
export const ReviewWrap = styled.div`
  width: 1080px;
  padding-left: 210px;
`;
export const ReviewItem = styled.div`
  display: flex;
`;
export const ReviewReplyBtnWrap = styled.div`
  float: right;
  padding: 20px 35px;
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
  display: flex;
  /* width: 64px; */
  /* height: 35px; */
  padding: 5px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  padding: 80px 10px;
`;
