import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

// ! Wrapper
export const ReserWrapper = styled.div`
  display: inline-flex;
  padding: 30px 0px;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

// ! Title
export const ReserTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: DAEAM_LEE_TAE_JOON;
  font-size: 33px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 41.25px */
`;

// ! Wrapper
export const ReserWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

// ! Form Wrapper
export const ReserItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;
// ! Reser Form Wrapper
export const ReserFormWrap = styled.div`
  display: flex;
  width: 530px;
  align-items: flex-start;
`;
// ! Reser Form Item (ex : 가게명, 날짜)
export const ReserItem = styled.div`
  display: flex;
  width: 164px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  span {
    user-select: none;
    color: #000;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
  }
`;
// ? Reser Form Item (ex : 목구멍, 미진삼겹살)
export const ReserContent = styled.div`
  display: flex;
  width: 366px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  span {
    user-select: none;
    color: #000;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
  }
`;
// ! Reser Form (예약가능시간)
export const ReserTimeWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const ReserTimeItem = styled.div`
  display: flex;
  width: 366px;
  height: 93px;
  align-items: center;
  align-content: center;
  gap: 9px 30px;
  flex-wrap: wrap;
`;
// ! 시간 (19:00, 19:30 ...)
export const ReserTimeBtn = styled.button`
  display: flex;
  width: 50px;
  padding: 0px 5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid var(--sub, #066e52);
  background: ${({ clicked }) =>
    clicked ? `${ColorStyle.secondary}` : `${ColorStyle.grayScale}`};
  span {
    color: ${({ clicked }) =>
      clicked ? `${ColorStyle.grayScale}` : `${ColorStyle.primary}`};
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 17.5px */
  }
  &:hover {
    background-color: #dddd;
  }
  &:active {
    background-color: #dddd;
  }
`;
// ! 인원 수
export const ReserCountWrap = styled.div`
  display: flex;
  width: 530px;
  align-items: center;
  gap: 63px;
`;

export const ReserCountBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;
// ! 카운트 버튼 ( +, 인원수, -)
export const ReserCountBtn = styled.div`
  display: flex;
  width: 50px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  /* 
  ! + AND - button
  */
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #000;
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 41.25px */
  }
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
export const ReserCountResetBtn = styled.div`
  display: flex;
  width: 70px;
  height: 25px;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
    line-height: 125%; /* 17.5px */
  }
`;

//  ! 요청사항
export const ReserRequireInput = styled.input`
  width: 360px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 14px;
  font-family: "Pretendard";
  border-bottom: 1px solid ${ColorStyle.g700};
`;
// ! Submit Button
export const ReserSubmitBtn = styled.button`
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
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
