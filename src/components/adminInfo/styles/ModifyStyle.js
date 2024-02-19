import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const AdminInfoWrapStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 17px;
  font-family: Pretendard;
`;
export const NavStyle = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 11px 36px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  /* Shadow */
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1),
    0px 1px 3px 0px rgba(0, 0, 0, 0.1);

  .pageTitle {
    display: flex;
    width: 136px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    color: var(--grayscale-90, #1c1c1e);

    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const ShopStyle = styled.div`
  position: relative;
  display: flex;
  padding-left: 80px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
export const BackgroundBoxStyle = styled.div`
  position: relative;
  display: flex;
  width: 560px;
  padding: 20px 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: #fff;

  /* shadow */
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1),
    0px 1px 3px 0px rgba(0, 0, 0, 0.1);
`;
export const BoxInnerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  form {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }
  label {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--gray-900, #111827);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }
  .title {
    display: flex;
    align-items: flex-start;
    gap: 2px;
    color: var(--gray-900, #111827);
    /* 16/semibold */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
  }
  .essential {
    color: var(--red-500, #ef4444);
    /* 16/semibold */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
  }
  .textGuide {
    display: flex;
    align-items: flex-start;
    color: var(--gray-800, #1f2937);
    /* 12/regular */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
  }
  .textLength {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex: 1 0 0;
    color: var(--gray-800, #1f2937);
    text-align: right;
    /* 12/regular */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
  }
  .picsContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .picsThumb {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .nameGuide {
    display: flex;
    width: 500px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
  }
  .tel {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
  }
  .open {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
  }
  .locationBox {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    .locationInputBox {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }
  }
`;
