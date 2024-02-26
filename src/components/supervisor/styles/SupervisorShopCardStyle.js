import styled from "@emotion/styled";

export const SupervisorShopWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 56px;
  width: 690px;
  height: 400px;
  border-radius: 8px;
  padding-left: 30px;
  background: #fff;
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.1),
    0px 2px 3px 0px rgba(0, 0, 0, 0.1);
`;

export const SupervisorShopVisual = styled.div`
  position: relative;
  display: block;
  margin: auto 0;
  width: 348px;
  height: 330px;
  background-color: blue;
  border-radius: 5px;
`;

export const SupervisorShopInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 330px;
  gap: 100px;
`;

export const SupervisorShopInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
`;

export const ShopTitle = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`;

export const ShopContent = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const SupervisorShopButton = styled.div`
  display: flex;
  width: 214px;
  align-items: flex-start;
  gap: 30px;
`;
