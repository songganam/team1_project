import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const AdminPageWrapper = styled.div`
  position: relative;
`;

export const AdminPageData = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  background-color: blue;
`;

export const AdiminPageMenuBar = styled.div`
  position: relative;
  width: 210px;
  height: 1530px;
  background-color: #202734;
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
  /* width: 730px; */
  width: calc(100% - 210px);
  background-color: pink;
`;
