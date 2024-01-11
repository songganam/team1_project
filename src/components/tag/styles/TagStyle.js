import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const TagStyle = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 3px 5px;
  background: #fff;
  border: 1px solid ${ColorStyle.secondary};
  border-radius: 10px;
  span {
    color: ${ColorStyle.primary};
    font-size: ${FontSize.tag};
  }
`;
