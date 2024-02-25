import styled from "@emotion/styled";

export const TSAdminInfoWrapStyle = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 17px;
  font-family: Pretendard;
`;
export const TSNavStyle = styled.div`
  position: fixed;
  top: 114px;
  left: 210px;
  display: flex;
  width: calc(100% - 210px);
  padding: 11px 36px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  z-index: 999;
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
export const TSWrapInnerStyle = styled.div`
  display: flex;
  align-items: flex-start;
  padding-left: 20px;
  // topNavBar 고정 시 적용
  margin-top: 85px;
  margin-bottom: 50px;
  margin-left: 210px;
  /* z-index: -999; */
  gap: 20px;
`;
export const TSPreviewWrapStyle = styled.div`
  position: fixed;
  left: 810px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const TSShopStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
export const TSBackgroundBoxStyle = styled.div`
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

export const TSBoxInnerStyle = styled.div`
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
  .check-box-wrap {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }
  .radio-wrap {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }

  .preview-img {
    width: 500px;
    height: 340px;
    object-fit: cover;
    /* overflow: hidden; */
  }
  .shop-info-box {
    display: flex;
    width: 500px;
    height: 109px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    position: absolute;
    bottom: 20px;
    background: rgba(17, 17, 17, 0.35);
  }
  .shop-info {
    display: flex;
    height: 109px;
    padding: 10px 30px;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    flex-shrink: 0;
  }
  .shop-name {
    width: 50px;
    height: 18px;
    flex-shrink: 0;
    color: #fff;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 20px */
  }
  .shop-info-detail-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
  .shop-info-text-wrap {
    display: flex;
    align-items: flex-start;
  }
  .shop-info-cate {
    width: 45px;
    color: var(--gray-scale-100, #f5f5f5);
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 12.5px */
  }
  .shop-info-detail {
    color: var(--gray-scale-100, #f5f5f5);
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 12.5px */
  }
`;
export const TSMenuAddPicInnerStyle = styled(TSBoxInnerStyle)`
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
