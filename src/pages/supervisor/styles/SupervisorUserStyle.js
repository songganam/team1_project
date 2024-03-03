import styled from "@emotion/styled";

export const SvisorUserWrap = styled.div`
  position: relative;
  height: 1000px;
  /* display: block; */
  background-color: #ffffff;
  margin-left: 210px;
`;
// 유저페이지 헤더 영역
export const SvisorUserHeader = styled.div`
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

// 유저페이지 메인 영역
export const SvisorUserMain = styled.div`
  position: relative;
  display: block;
  /* background-color: aqua; */
  padding-top: 200px;
  width: 100%;
`;

// 표 테이블
export const SvisorTable = styled.div`
  position: relative;
  /* border-collapse: collapse; */
  /* padding-top: 100px; */
  /* background-color: #fff; */
  width: 100%;
`;
export const SvisorThead = styled.div`
  position: relative;

  .th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    /* background-color: #fff; */
  }
`;
export const SvisorTbody = styled.div`
  position: relative;
  .td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
`;
