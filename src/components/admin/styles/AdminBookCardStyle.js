import styled from "@emotion/styled";

export const AdminBookCardWrapper = styled.div`
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

export const AdminBookCardInfo = styled.div`
  position: relative;
  display: flex;
  gap: 30px;
  margin-left: 30px;
`;

export const AdminBookCardTitle = styled.div`
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

export const AdiminBookCardContent = styled.div`
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

export const AdminBookCardBookButton = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-right: 30px;
`;
