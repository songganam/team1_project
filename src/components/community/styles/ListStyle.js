import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const WrapStyle = styled.div`
  position: relative;
  margin: 0 18vw 50px 18vw;
  flex-wrap: wrap;
  gap: auto;
  @media (max-width: 1680px) {
    margin: 0 50px 50px 50px;
  }
`;

export const TableStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  padding-bottom: 0.3rem;
  font-family: "DAEAM_LEE_TAE_JOON";
  font-size: ${FontSize.strong};
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const TtableStyle = styled(TableStyle)`
  padding: 10px 0;
  border-top: 1px solid ${ColorStyle.g500};
  background: ${props => props.background};
  @media (max-width: 1000px) {
    display: block;
  }
`;
export const TnoStyle = styled.div`
  position: relative;
  display: flex;
  width: 132px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
`;
export const TitleStyle = styled.div`
  position: relative;
  display: flex;
  width: 688px;
  padding: 10px;
  justify-content: ${props => props.justifyContent};
  align-items: center;
`;
export const InfoStyle = styled.div`
  position: relative;
  display: flex;
  /* flex-wrap: wrap; */
  width: 360px;
  padding: 10px 0;
  justify-content: space-between;
  @media (max-width: 1000px) {
    display: none;
  }

  div {
    width: 120px;
    display: flex;
    justify-content: center;
    color: ${props => props.color};
  }
`;

export const TopenStyle = styled.div`
  position: relative;
  padding: 30px 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
`;
