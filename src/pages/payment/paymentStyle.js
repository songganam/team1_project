import styled from "@emotion/styled";
import { ColorStyle } from "../../styles/common/CommonStyle";

export const PaymentWrap = styled.div`
  padding: 30px;
  margin-top: 100px;
`;

export const HyperTextOne = styled.div`
  font-size: 19px;
`;

export const PriceWrap = styled.div`
  /* font-size: ; */
  margin-bottom: 20px;

  span {
    font-family: "Pretendard";
    font-size: 19px;
  }
`;

export const SuccessWrap = styled.div`
  width: 100%;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
  .box_section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 500px;
    height: 500px;
    border-radius: 10px;
    /* border: 2px solid ${ColorStyle.primary}; */
    box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1),
      0px 1px 3px 0px rgba(0, 0, 0, 0.1);
    /* background-color: ${ColorStyle.g100}; */
    h2 {
      font-family: "DAEAM_LEE_TAE_JOON";
      font-size: 44px;
      padding: 30px;
    }
    p {
      font-family: "DAEAM_LEE_TAE_JOON";
      font-size: 19px;
      padding: 30px;
    }
    span {
      font-family: "DAEAM_LEE_TAE_JOON";
      font-size: 14px;
    }
  }
`;
