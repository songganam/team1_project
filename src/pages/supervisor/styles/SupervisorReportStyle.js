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
  background-color: #ffffff;
  width: 1710px;
`;

export const SupervisorReportHeader = styled.div`
  position: relative;
  display: flex;
  width: 100%;
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
  /* display: flex;
  justify-content: center; */
 
`;
export const SvisorTable = styled.div`
  width: 1180px;
`;
