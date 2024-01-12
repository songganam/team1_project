import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const MoreBoxStyle = styled.div`
  position: relative;
  padding: 30px 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
`;

export const TitleBoxStyle = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  padding: 30px 20px 20px 20px;
  font-family: "DAEAM_LEE_TAE_JOON";
  font-size: ${FontSize.strong};
  @media (max-width: 980px) {
    display: none;
  }
`;
export const MoreTitleStyle = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const MoreStyle = styled.div`
  position: relative;
  color: ${ColorStyle.g600};
`;
