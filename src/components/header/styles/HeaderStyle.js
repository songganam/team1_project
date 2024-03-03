import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const LogoStyle = styled.div`
  position: relative;
  img {
    width: 150px;
  }
  @media (max-width: 670px) {
    img {
      display: none;
    }
  }
`;

export const JoinStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 2vw;
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
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 4vw;
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
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 998;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2.1rem 2%;
  border-bottom: 1px solid ${ColorStyle.g700};
  align-items: center;
`;
export const LoginProfile = styled.div`
  span {
    white-space: nowrap;
    /* width: 200px; */
  }
  p {
    display: inline;
    color: red;
  }
`;
