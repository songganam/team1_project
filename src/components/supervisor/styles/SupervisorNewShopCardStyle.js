import styled from "@emotion/styled";

export const SupervisorNewShopTop = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 900px;
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

export const SupervisorNewShopWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 56px;
  width: 900px;
  height: 400px;
  border-radius: 8px;
  padding-left: 30px;
  background: #fff;
  border: 2px solid var(--sub, #066e52);
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.1),
    0px 2px 3px 0px rgba(0, 0, 0, 0.1);
`;

export const SupervisorNewShopVisual = styled.div`
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

export const NewShopSwiperWrap = styled.div`
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

export const SupervisorNewShopInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 330px;
  gap: 100px;
`;

export const SupervisorNewShopInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
`;

export const NewShopTitle = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  li {
    margin-bottom: 24px;
  }
`;

export const NewShopContent = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  li {
    margin-bottom: 24px;
  }
`;

export const SupervisorNewShopButton = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 30px;
  margin-left: 254px;
`;

export const SvMoreViewButton = styled.div`
  position: relative;
  display: flex;
  gap: 30px;
`;

export const SupervisorMoreViewButton = styled.button`
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 2px solid var(--sub, #066e52);
  background: #fff;
  margin-bottom: 50px;
  cursor: pointer;
  span {
    color: var(--primary, #d60117);
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }
`;
