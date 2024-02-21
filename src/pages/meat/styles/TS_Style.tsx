import styled from "@emotion/styled";
import { ColorStyle } from "../../../styles/common/CommonStyle";
import { ReserTimeBtnProps } from "../Meat";

export const ReserTimeBtn = styled.button<ReserTimeBtnProps>`
  cursor: pointer;
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
