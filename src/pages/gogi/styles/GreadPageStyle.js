import styled from "@emotion/styled";

export const QuickReser = styled.div`
  display: flex;
  width: 1180px;
  padding: 20px 20px;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;
export const ReserLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;
export const ReserRight = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 31px;
`;
export const ReserText = styled.div`
  display: flex;
  width: 183px;
  height: 46px;
  flex-direction: column;
  justify-content: center;
  span {
    color: #000;
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 41.25px */
  }
`;
export const ReserTimeBox = styled.div`
  display: flex;
  width: 359px;
  height: 93px;
  align-items: center;
  align-content: center;
  gap: 9px 25px;
  flex-wrap: wrap;
  background-color: red;
`;
export const ReserCounting = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 31px;
`;
export const ReserCountText = styled.div`
  display: flex;
  width: 122px;
  height: 38px;
  flex-direction: column;
  justify-content: center;
  span {
    color: #000;
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 41.25px */
  }
`;
export const ReserCountBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;
export const ReserCountBtn = styled.div`
  display: flex;
  width: 50px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  span {
    color: #000;
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 41.25px */
  }
`;
export const SelectBtn = styled.button`
  display: flex;
  width: 70px;
  height: 25px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 2px solid var(--sub, #066e52);
  background: #fff;
  span {
    color: var(--primary, #d60117);
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 17.5px */
  }
`;
