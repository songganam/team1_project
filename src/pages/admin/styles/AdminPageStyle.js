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
`;

export const AdiminPageMenuBar = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-start;
  width: 210px;
  height: 1530px;
  padding: 16px 40px;
  gap: 10px;
  background-color: #202734;
  z-index: 996;
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




export const ReviewProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;


export const CateWrap = styled.div`
  display: flex;
  img {
    width: 20px;
    height: 20px;
  }
`;
