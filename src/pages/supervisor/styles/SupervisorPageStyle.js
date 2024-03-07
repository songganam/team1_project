import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const SupervisorPageWrapper = styled.div`
  position: relative;
  margin-top: 114px;
`;

export const SupervisorPageData = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
`;

export const SupervisorPageMenuBar = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-start;
  width: 210px;
  height: 1530px;
  padding: 16px;
  gap: 10px;
  background-color: #202734;
  z-index: 996;
`;

export const SupervisorPageMenu = styled.div`
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
    /* margin-bottom: 10px; */
    cursor: pointer;
  }
`;

export const SupervisorPageContent = styled.div`
  position: relative;
  width: 730px;
  width: calc(100% - 210px);
`;
