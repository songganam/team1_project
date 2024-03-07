import styled from "@emotion/styled";

export const SupervisorUserWrapper = styled.div`
  position: relative;
`;

export const SupervisorUserContents = styled.div`
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
    /* margin-right: 20px; */
    padding-left: 10px;
    option {
      /* margin-left: 10px; */
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
    padding: 17px 20px 17px 20px; /* 셀 안의 여백 설정 */
    //padding: 17px;
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
    cursor: pointer;
  }
`;
