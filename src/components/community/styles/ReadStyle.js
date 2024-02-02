import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const MoreBoxStyle = styled.div`
  position: relative;
  padding: 30px 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
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
  align-items: center;
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
    cursor: pointer;
  }
`;

export const BtnBoxStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
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

export const ReviewBox = styled.div`
  position: relative;
  display: flex;
  padding: 20px 20px 50px 20px;
  flex-direction: column;
  align-items: flex-start;
  .readReviewBox {
    display: flex;
    padding-bottom: 20px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }
  .readReview {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    flex: 1 0 0;
  }
  .reviewInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
  }
  .reviewCount {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    color: ${ColorStyle.secondary};
    font-size: ${FontSize.default};
  }
  .userInfo {
    display: flex;
    align-items: center;
    gap: 30px;
    align-self: stretch;
  }
  .user {
    display: flex;
    width: 65px;
    align-items: center;
    gap: 2px;
  }
  .nickName {
    align-items: center;
    flex: 1 0 0;
    color: ${ColorStyle.primary};
    font-size: ${FontSize.default};
  }
  .date {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    color: ${ColorStyle.g500};
    font-size: 11px;
  }
  .reviewContentBox {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .reviewContent {
    display: flex;
    padding: 0px 10px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    color: ${ColorStyle.g900};
    font-size: ${FontSize.default};
  }
  .deleteBtn {
    display: flex;
    width: 25px;
    align-items: center;
    gap: 8px;
    font-size: ${FontSize.default};
    color: ${ColorStyle.primary};
    cursor: pointer;
  }
  .inputReviewBox {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0px;
    justify-content: space-between;
    align-items: center;
    gap: 13px;
    align-self: stretch;
    border-top: 1px dashed ${ColorStyle.g500};
  }
  .inputReview {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;
    textarea {
      border: none;
      outline: none;
      resize: none;
      padding: 12px 20px 4px 20px;
      width: 100%;
      min-width: 220px;
      height: 90%;
      border-radius: 10px;
      border: 1px solid ${ColorStyle.g500};
      background: #fff;
      font-size: ${FontSize.default};
      color: ${ColorStyle.g500};
    }
  }
`;
