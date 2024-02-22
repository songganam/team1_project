import styled from "@emotion/styled";

export const AdminDocMain = styled.div`
  /* width: 100%; */
  padding: 90px 163px;

  .title {
    font-size: 44px;
    padding-bottom: 90px;

  }
`;
export const DocMainTop = styled.div``;
export const AdminDocBoard = styled.div`
  width: 700px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px; /* 각 박스 사이의 간격 조절 */
`;

export const AdminDocBox = styled.div`
  position: relative;
  display: flex;
  /* display: flex; */
  width: 340px;
  height: 290px;
  padding: 20px 30px;
  /* flex-direction: column;
  align-items: flex-start; */

  border-radius: 8px;
  background: #fff;
  font-size: 14px;
  /* shadow */
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1),
    0px 1px 3px 0px rgba(0, 0, 0, 0.1);
`;

export const BoxTop = styled.div`
  position: relative;
`;

export const BoxContent = styled.div`
  position: absolute;
  left: 50%; /* display: flex; */
  top: 50%;
  font-size: 59px;
  transform: translate(-50%, -50%);
  
`;
