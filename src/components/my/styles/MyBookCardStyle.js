import styled from "@emotion/styled";

export const MyBookCardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 707px;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const MyBookCardVisual = styled.div`
  margin-right: 10px;
  img {
    width: 331px;
    height: 228px;
    border-radius: 5px;
    object-fit: cover;
    overflow: hidden;
  }
`;

export const MyBookCardContent = styled.div``;

export const MyBookCardTitle = styled.div``;

export const MyBookmark = styled.button``;

export const MyBookCardPlace = styled.p`
  font-family: DAEAM_LEE_TAE_JOON;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
`;

export const MyBookCardSubTitle = styled.p`
  font-family: DAEAM_LEE_TAE_JOON;
  font-size: 33px;
  font-style: normal;
  font-weight: 400;
`;

export const MyBookCardBookButton = styled.div`
  button {
  }
`;

export const MyBookCardInfo = styled.div`
  position: relative;
  display: flex;
`;

export const MyBookCardDateTitle = styled.ul`
  margin-right: 10px;
  li {
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;

export const MyBookCardDateContent = styled.ul`
  li {
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;
