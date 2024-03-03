import styled from "@emotion/styled";

// export const SupervisorReportWrapper = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 17px;
//   font-family: Pretendard;
// `;

export const SvisorReportWrap = styled.div`
  position: relative;
  height: 1000px;
  /* display: block; */
  background-color: #ffffff;
  margin-left: 210px;
`;

export const SupervisorReportHeader = styled.div`
  position: fixed;
  display: flex;
  width: calc(100% - 210px);
  padding: 11px 36px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  /* Shadow */
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1),
    0px 1px 3px 0px rgba(0, 0, 0, 0.1);

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
export const SvisorReportMain = styled.div`
  position: relative;
  display: flex;
  /* width: calc(100% 0px); */
  width: 100%;

  /* margin-right: 370px; */
  flex-direction: column;
  /* align-items: flex-end; */
  font-size: 14px;
  padding-left: 210px;
  padding-bottom: 100px;
  justify-content: center;
  align-content: space-around;
  align-items: flex-end;
`;

export const SvisorReportOption = styled.div`
  position: relative;
  padding-top: 180px;
  padding-bottom: 108px;
  /* justify-content: flex-end; */
  margin-right: 50px;

  .selectoption {
    /* align-items: flex-end; */
    padding-left: 10px;
    width: 367px;
    height: 30px;
    color: #a8a8a8;
    border-color: #dbdbdb;
    cursor: pointer;
  }
`;
export const SvisorTable = styled.div`
  display: flex;
  width: 100%;
  color: #5c5c5c;
  justify-content: space-around;
  align-items: end;

  /* align-items: center; */

  .tableHeader {
    width: 100%;
    /* justify-content: space-around;
    align-items: end; */
    height: 55px;
  }
  .tableBody {
    width: 170px;
    /* justify-content: center; */
    height: 60px;
  }
  .delete-bt {
    width: 50px;
    height: 30px;
    border: none;
    color: #ffffff;
    background-color: #099e76;
    cursor: pointer;
  }
  .cancel-bt {
    width: 50px;
    height: 30px;
    border: none;
    color: #ffffff;
    background-color: #099e76;
    cursor: pointer;
  }
`;
