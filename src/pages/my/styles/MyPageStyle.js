import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const MyPageWrapper = styled.div`
  position: relative;
`;

export const MyPageData = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 160px;
  margin-top: 60px;
`;

export const MyPageMenuBar = styled.div`
  position: relative;
  height: 1530px;
`;

export const MyPageMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  button {
    font-family: Pretendard;
    font-size: ${FontSize.strong};
    color: ${ColorStyle.g600};
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    border: none;
    background: none;
    cursor: pointer;
  }
  button:hover,
  button:focus,
  button:active {
    color: ${ColorStyle.g1000};
  }
`;

export const MyPageContent = styled.div`
  position: relative;
  width: 730px;
  height: 1530px;
`;
