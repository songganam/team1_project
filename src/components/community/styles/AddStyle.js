import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const AddBoxStyle = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  .titleBox {
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    color: ${ColorStyle.g900};
    font-size: ${FontSize.strong};
    font-family: "DAEAM_LEE_TAE_JOON";
  }
  .inputBox {
    display: flex;
    width: 1036px;
    align-items: flex-start;
    align-self: stretch;
    input {
      appearance: none;
      padding: 10px;
      width: 100%;
      /* min-width: 220px; */
      height: 100%;
      border: 1px solid ${ColorStyle.g500};
      background: #fff;
      font-size: ${FontSize.default};
      /* color: ${ColorStyle.g500}; */
    }
  }
`;
export const UserBoxStyle = styled(AddBoxStyle)`
  border-top: 1px solid ${ColorStyle.g500};
  .writerBox {
    display: flex;
    width: 1036px;
    height: 44px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: ${FontSize.default};
    color: ${ColorStyle.g500};
    /* font-family: "DAEAM_LEE_TAE_JOON"; */
  }
`;
export const ContentBoxStyle = styled(AddBoxStyle)`
  border-top: 1px solid ${ColorStyle.g500};
  .inputBox {
    display: flex;
    width: 1036px;
    align-items: flex-start;
    align-self: stretch;
    textarea {
      padding: 10px;
      width: 100%;
      min-height: 100px;
      resize: vertical;
      font-size: ${FontSize.default};
      border-top: 1px solid ${ColorStyle.g500};
    }
  }
`;

export const ImageBoxStyle = styled(AddBoxStyle)`
  border-top: 1px solid ${ColorStyle.g500};
  .inputBox {
    display: flex;
    width: 930px;
    align-items: flex-start;
    align-self: stretch;
    input {
      appearance: none;
      padding: 10px;
      width: 100%;
      min-width: 220px;
      height: 100%;
      border: 0px solid ${ColorStyle.g500};
    }
  }
`;

export const FootStyle = styled.div`
  position: relative;
  display: flex;
  padding: 50px 0px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  border-top: 1px solid ${ColorStyle.g500};
  .btnBox {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex: 1 0 0;
  }
`;
