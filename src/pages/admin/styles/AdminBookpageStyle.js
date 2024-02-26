import styled from "@emotion/styled";

export const AdminBookPageWrapper = styled.div`
  position: relative;
  padding-left: 38px;
`;

export const NavStyle = styled.div`
  position: fixed;
  top: 114px;
  left: 210px;
  display: flex;
  width: calc(100% - 210px);
  padding: 11px 36px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1),
    0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  z-index: 999;

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

export const AdminBookPageContent = styled.div`
  position: relative;
  display: flex;
  gap: 50px;
  margin-top: 85px;
  margin-bottom: 50px;
  margin-left: 210px;
`;

export const AdminBookInner = styled.div`
  position: relative;
  display: block;
  p {
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 25px;
  }
`;

export const AdminBookCardBt = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
`;

export const AdminNoShowInner = styled.div`
  position: relative;
  display: block;
  p {
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 25px;
  }
`;

export const AdminNoShowCardBt = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
`;
