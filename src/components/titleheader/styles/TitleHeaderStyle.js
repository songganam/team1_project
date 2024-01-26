import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const TitleHeaderWrapper = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 215px;
    object-fit: cover;
    overflow: hidden;
  }
`;

export const TitleHeaderInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleName = styled.span`
  position: relative;
  font-family: "DAEAM_LEE_TAE_JOON";
  font-size: ${FontSize.main_title};
  color: ${ColorStyle.grayScale};
  margin-bottom: 20px;
`;

export const TitleContent = styled.span`
  position: relative;
  font-family: "DAEAM_LEE_TAE_JOON";
  font-size: ${FontSize.sub_title};
  color: ${ColorStyle.grayScale};
`;
