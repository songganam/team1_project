import styled from "@emotion/styled";
import { FontSize } from "../../../styles/common/CommonStyle";

export const NotFoundWrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 60px 0;

  img {
    width: 500px;
    height: 250px;
  }
`;

export const NotFoundTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
export const NotFoundText = styled.div`
  color: #000;
  text-align: center;
  font-family: DAEAM_LEE_TAE_JOON;
  font-size: ${FontSize.sub_title};
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 55px */
`;
