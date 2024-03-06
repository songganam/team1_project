import styled from "@emotion/styled";
import { ColorStyle } from "../../../styles/common/CommonStyle";

export const SupervisorShopTop = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 690px;
  input {
    width: 317px;
    height: 28px;
    padding: 12px 16px;
    border: 1px solid var(--gray-200, #e5e7eb);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    margin-top: 10px;
  }
  p {
    margin-top: 10px;
  }
  img {
    width: 30px;
    height: 25px;
    margin-left: 5px;
    cursor: pointer;
  }
`;

export const SupervisorShopWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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
  border-radius: 5px;
  img {
    width: 348px;
    height: 330px;
  }
`;

export const ShopSwiperWrap = styled.div`
  height: 100%;
  position: relative;
  height: 100%;
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SupervisorShopInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  li {
    margin-bottom: 24px;
  }
`;

export const ShopContent = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  li {
    margin-bottom: 24px;
  }
`;

export const SupervisorShopButton = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 107px;
`;
