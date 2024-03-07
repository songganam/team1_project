import styled from "@emotion/styled";

export const SupervisorReportWrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const SupervisorHeader = styled.div`
  position: fixed;
  display: flex;
  top: 114px;
  left: 210px;
  width: calc(100% - 210px);
  padding: 11px 36px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  /* Shadow */
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1),
    0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  z-index: 995;
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
  margin-top: 200px;
  margin-bottom: 200px;
  margin-left: 400px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;
export const SupervisorOption = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  /* justify-content: center; */
  /* align-items: center; */
  select {
    width: 300px;
    height: 30px;
    border-color: #dbdbdb;
    color: #424242;
    padding-left: 10px;
    /* margin-right: 20px; */
    option {
      margin-left: 10px;
    }
  }
`;
export const SupervisorTable = styled.div`
  position: relative;
  display: flex;
  padding-top: 40px;
  flex-direction: column;
  text-align: center;

  table {
    width: 100%; /* 테이블 100% 폭 설정 */
    border-collapse: collapse; /* 셀 간의 경계를 병합함 */
    color: #424242;
  }

  th,
  td {
    padding: 17px; /* 셀 안의 여백 설정 */
    text-align: center; /* 셀 안의 텍스트 가운데 정렬 */
    border: 1px solid #dbdbdb; /* 테이블 테두리 스타일 */
    border-left: none;
    border-right: none;
    font-style: bold;
  }

  th {
    background-color: #f5f5f5; /* 헤더 배경색 설정 */
    //background-color: #066e52; /* 헤더 배경색 설정 */
  }

  button {
    width: 40px;
    height: 30px;
    border: none;
    background-color: #066e52;
    color: #fff;
  }
`;
