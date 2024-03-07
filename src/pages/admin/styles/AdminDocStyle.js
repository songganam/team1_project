import styled from "@emotion/styled";

export const AdminDocMain = styled.div`
  position: relative;
  width: 100%;
  margin-top: 150px;
  margin-bottom: 200px;
  margin-left: 250px;
  display: flex;
  flex-direction: row;
  /* align-items: center;  */
  font-size: 14px;

  .title {
    position: relative;
    font-size: 33px;
    padding-bottom: 90px;
  }
`;
export const DocHeader = styled.div`
  position: fixed;
  display: flex;
  top: 114px;
  left: 210px;
  width: calc(100% - 210px);
  height: 68px;
  padding: 11px 36px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  /* Shadow */
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1),
    0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  z-index: 997;
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

export const AdminDocBoard = styled.div`
  position: relative;
  width: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px; /* 각 박스 사이의 간격 조절 */
  padding-right: 10px;
`;

export const AdminDocBox = styled.div`
  position: relative;
  display: flex;
  /* display: flex; */
  width: 250px;
  height: 250px;
  padding: 20px 20px;
  /* flex-direction: column;
  align-items: flex-start; */
  cursor: pointer;
  border-radius: 8px;
  background: #fff;
  font-size: 19px;
  /* font-style: bold; */
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

export const BoxChart = styled.div`
  position: relative;
  display: flex;
  /* display: flex; */
  width: 695px;
  height: 510px;
  padding: 206px 30px;
  /* margin-left: 10px; */

  /* flex-direction: column;
  align-items: flex-start; */

  border-radius: 8px;
  background: #fff;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  /* shadow */
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1),
    0px 1px 3px 0px rgba(0, 0, 0, 0.1);


  h2 {
    width: 600px;
    padding-bottom: 60px;
  }
`;
