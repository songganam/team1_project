import { FontSizeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { ColorStyle } from "../../../styles/common/CommonStyle";

export const SupervisorPageWrapper = styled.div`
  position: relative;
`;

export const SupervisorPageData = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  background-color: blue;
`;

export const SupervisorPageMenuBar = styled.div`
  position: relative;
  width: 210px;
  height: 1530px;
  background-color: #202734;
`;

export const SupervisorPageMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  button {
    display: flex;
    align-items: center;
    font-family: Pretendard;
    font-size: ${FontSizeOutlined.strong};
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

export const SupervisorPageContent = styled.div`
  position: relative;
  width: 730px;
  background-color: pink;
`;
