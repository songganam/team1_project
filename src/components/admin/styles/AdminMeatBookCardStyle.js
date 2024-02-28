import styled from "@emotion/styled";

export const AdminMeatBookCardWrapper = styled.div`
  position: relative;
  width: 535px;
  height: 262px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.1),
    0px 2px 3px 0px rgba(0, 0, 0, 0.1);
  margin-top: 25px;
  margin-bottom: 20px;
`;

export const AdminMeatBookCardInfo = styled.div`
  position: relative;
  display: flex;
  gap: 30px;
  margin-left: 30px;
`;

export const AdminMeatBookCardTitle = styled.div`
  position: relative;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 15px;
  li {
    margin-bottom: 20px;
  }
`;

export const AdiminMeatBookCardContent = styled.div`
  position: relative;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 15px;
  li {
    margin-bottom: 20px;
  }
`;

export const AdminMeatBookCardBookButton = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-right: 30px;
`;

export const AdminMoreViewButton = styled.button`
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
