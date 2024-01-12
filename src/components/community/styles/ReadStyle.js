import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const MoreBoxStyle = styled.div`
  position: relative;
  padding: 30px 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
`;

export const TitleBoxStyle = styled.div`
  position: relative;
  padding: 30px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  font-family: "DAEAM_LEE_TAE_JOON";
  font-size: ${FontSize.strong};
  border-bottom: 1px solid ${ColorStyle.g500};
  @media (max-width: 980px) {
    display: none;
  }
`;
export const MoreTitleStyle = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const MoreStyle = styled.div`
  position: relative;
  color: ${ColorStyle.g600};
`;

export const WriterBoxStyle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  color: ${ColorStyle.g700};
  font-size: ${FontSize.default};
  .viewBox {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const PrnvContentStyle = styled.div`
  position: relative;
  display: flex;
  padding: 20px;
  align-items: flex-start;
  gap: 60px;
  align-self: stretch;
  border-top: 1px solid ${ColorStyle.g500};
  font-family: "DAEAM_LEE_TAE_JOON";
  font-size: ${FontSize.strong};
  .prnv {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .prnvTitle {
    display: flex;
    align-items: flex-start;
    color: ${ColorStyle.g700};
  }
`;

export const BtnBoxStyle = styled.div`
  display: flex;
  padding: 30px 0px 50px 0px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  .editBtn {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    flex: 1 0 0;
  }
`;
