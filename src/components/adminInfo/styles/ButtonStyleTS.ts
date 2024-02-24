import styled from "@emotion/styled";
import { ColorStyle } from "../../../styles/common/CommonStyle";

export const ButtonStyleTS = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  background: #fff;
  border: 2px solid #066e52;
  border-radius: 10px;
  cursor: pointer;

  font-family: DAEAM_LEE_TAE_JOON;
  font-size: 19px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  color: ${ColorStyle.primary};
`;
