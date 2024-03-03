import styled from "@emotion/styled";

export const MenuContainerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px; // 항목 사이의 간격
  justify-content: flex-start;
`;

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
    padding: 10px;
    /* 12/regular */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
  }
  .menu-title {
    white-space: nowrap; /* 줄바꿈 없이 한 줄로 표시 */
    overflow: hidden; /* 내용이 넘칠 경우 숨김 처리 */
    text-overflow: ellipsis; /* 넘친 텍스트를 말줄임표로 표시 */
    width: 100%; /* 부모 컨테이너의 폭에 맞춤 */
  }
`;
