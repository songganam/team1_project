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

  .page-title {
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
  gap: 16px;
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
  .text-guide {
    display: flex;
    align-items: flex-start;
    color: var(--gray-500, #6b7280);
    /* 12/regular */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
  }
  .text-length {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex: 1 0 0;
    color: var(--gray-500, #6b7280);
    text-align: right;
    /* 12/regular */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
  }
  .pics-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .pics-thumb {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .name-guide {
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
  .location-box {
    display: flex;
    align-items: flex-start;
    gap: 6px;
  }
  .location-input-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .menu-pics {
    display: flex;
    width: 500px;
    align-items: flex-start;
    align-content: flex-start;
    gap: 10px;
    flex-wrap: wrap;
  }
`;
export const MenuAddPicInnerStyle = styled(BoxInnerStyle)`
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  .menu-add-pic {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .btn-wrap {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 10px;
  }
`;
