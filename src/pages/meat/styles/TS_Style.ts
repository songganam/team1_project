import styled from "@emotion/styled";
import { ColorStyle } from "../../../styles/common/CommonStyle";
import { ReserTimeBtnProps, StyledComponentProps } from "../Meat";

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

export const SelectedCate = styled.div<StyledComponentProps>`
  font-family: DAEAM_LEE_TAE_JOON;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 50px;

  cursor: pointer;
  background: ${({ selected }) =>
    selected ? "var(--gray-scale-0, #fff)" : "var(--gray-scale-100, #f5f5f5)"};
  border-top: ${({ selected }) =>
    selected ? "5px solid var(--sub, #066e52)" : "none"};
  border-right: ${({ selected }) =>
    selected ? "1px solid var(--sub, #066e52)" : "none"};
  border-left: ${({ selected }) =>
    selected ? "1px solid var(--sub, #066e52)" : "none"};

  border-bottom: ${({ selected }) =>
    selected ? "none" : "1px solid var(--sub, #066e52)"};
  color: ${({ selected }) => (selected ? "black" : "rgba(0,0,0,0.5)")};
  transition: color 0.3s ease;

  &:hover {
    background: ${({ selected }) =>
      selected
        ? "var(--gray-scale-0, #fff)"
        : "var(--gray-scale-100, #f5f5f5)"};
  }
`;
