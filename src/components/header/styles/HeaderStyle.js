import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const LogoStyle = styled.div`
  position: relative;
  img {
    width: 150px;
  }
`;

export const JoinStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  font-size: ${FontSize.default};
  color: ${ColorStyle.g700};
  a {
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }
`;

export const NavStyle = styled.div`
  position: relative;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  font-family: "DAEAM_LEE_TAE_JOON";
  font-size: ${FontSize.strong};
  color: ${ColorStyle.g700};
  a {
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }
`;

export const BarStyle = styled.div`
  position: relative;
  display: block;
`;

export const HeaderStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 21px 20px;
  border-bottom: 1px solid ${ColorStyle.g700};
  align-items: center;
`;
