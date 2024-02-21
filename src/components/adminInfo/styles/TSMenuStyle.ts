import styled from "@emotion/styled";

export const TSMenuStyle = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  .menu-img {
    width: 160px;
    height: 160px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat, #f3f4f6;
  }
  .menu-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    width: 160px;
    height: 60px;
    position: absolute;
    right: 0px;
    top: 100px;
    opacity: 0.5;
    background: var(--gray-scale-1000, #000);
    color: #fff;
    padding: 10px 83px 9px 6px;
    /* 12/regular */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
  }
`;
