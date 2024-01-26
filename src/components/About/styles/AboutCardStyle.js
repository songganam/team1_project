import styled from "@emotion/styled";

export const AboutCardWrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  .AboutCardImg {
    position: relative;
    padding-top: 14px;
    width: 583px;
    height: 360px;
  }
  .AboutCardTitle {
    position: relative;
    font-size: 33px;
    padding-top: 20px;
  }
  .AboutCardPrice {
    font-family: "Pretendard";
    padding-top: 10px;
    display: inline-flex;
    font-size: 19px;
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutCardButton = styled.div`
  display: flex;
  padding-top: 20px;
  
  .InfoButton {
    font-size: 14px;
    color: #d60117;
    margin-right: 38px;
  }
  .BookButton {
    font-size: 14px;
    color: #d60117;
  }
`;
