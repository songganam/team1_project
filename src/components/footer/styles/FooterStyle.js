import styled from "@emotion/styled";
import { ColorStyle } from "../../../styles/common/CommonStyle";

export const FooterStyle = styled.div`
  position: relative;
  padding: 21px 370px;
  background: ${props => props.background};
  color: ${props => props.color};
  ul {
    display: flex;
    gap: auto;
    justify-content: space-between;
    align-items: center;
    font-weight: ${props => props.fontWeight};
  }
`;

export const ContentStyle = styled.div`
  position: relative;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginbottom};
  margin-left: 370px;
  margin-right: 370px;
  padding: 0;
  color: ${props => props.color};

  ul {
    display: flex;
    gap: 2rem;
    justify-content: flex-start;
    font-weight: ${props => props.fontWeight};
    line-height: 1.75rem;
  }
`;

export const LineStyle = styled.div`
  position: relative;
  margin: 0 370px;
  border-top: 1px solid ${ColorStyle.g600};
`;
