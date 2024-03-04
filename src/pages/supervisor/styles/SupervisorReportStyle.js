import styled from "@emotion/styled";

export const SupervisorReportWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SupervisorReportHeader = styled.div`
  position: fixed;
  display: flex;
  top: 114px;
  left: 210px;
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
export const SupervisorReportContents = styled.div`
  position: relative;
  text-align: center;
  top: 114px;
  left: 210px;
  
  /* padding-left: 100px; */
  /* display: block;
  width: 1180px; */
`;
export const SupervisorTable = styled.div`
  position: relative;
  display: block;
  /* margin: 0 auto; */
  width: 1180px;

  .table {
  }
`;
