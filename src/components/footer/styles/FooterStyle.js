import styled from "@emotion/styled";
import { ColorStyle } from "../../../styles/common/CommonStyle";

export const FooterStyle = styled.div`
  position: relative;
  padding: 2.1rem 18vw;
  background: ${props => props.background};
  color: ${props => props.color};
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1vw;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    font-weight: ${props => props.fontWeight};
  }
  @media (max-width: 1680px) {
    padding: 2.1rem 5vw;
  }
`;

export const ContentStyle = styled.div`
  position: relative;
  margin-top: ${props => props.marginTop};
  margin-bottom: 0.5rem;
  margin-left: 18vw;
  margin-right: 18vw;
  padding: 0;
  color: ${props => props.color};
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1vw;
    justify-content: flex-start;
    font-weight: ${props => props.fontWeight};
    font-size: 1.4rem;
    line-height: 1.75rem;
  }
  @media (max-width: 1440px) {
    margin-left: 5vw;
    margin-right: 5vw;
  }
`;

export const LineStyle = styled.div`
  position: relative;
  margin: 0 18vw;
  border-top: 1px solid ${ColorStyle.g600};
  @media (max-width: 1440px) {
    margin: 0 5vw;
  }
`;
