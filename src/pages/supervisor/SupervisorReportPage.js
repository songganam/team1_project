import { useTable } from "react-table";
import Button from "../../components/button/Button";
import {
  SupervisorReportHeader,
  SvisorReportMain,
  SvisorReportOption,
  SvisorReportWrap,
  SvisorTable,
} from "./styles/SupervisorReportStyle";
import { useEffect, useState } from "react";

const SupervisorReportPage = () => {


  // 옵션 셀렉트
  // 선택된 값을 관리할 상태
  const [selectedValue, setSelectedValue] = useState("");

  // 선택지 목록 데이터
  const options = [
    { value: "option1", label: "고기잡담 글" },
    { value: "option2", label: "고기잡담 댓글" },
    { value: "option3", label: "고기집 후기" },
    { value: "option4", label: "정육점 후기" },
    // 추가적인 옵션들
  ];

  // select 요소의 변경 이벤트 핸들러
  const handleSelectChange = e => {
    setSelectedValue(e.target.value);
  };

  // 테이블
  const data = [
    {
      check: "고기집 후기",
      writerNm: "John",
      contents: "줘도 안 먹을 맛임",
      state: "삭제",
      count: 3,
      delete: "삭제",
      cancel: "취소",
    },
    {
      check: "고기잠담 댓글",
      writerNm: "최고기",
      contents: "바보똥개야",
      state: "삭제",
      count: 3,
      delete: "삭제",
      cancel: "취소",
    },
    {
      check: "고기잡담 댓글",
      writerNm: "학재son",
      contents: "ㅇㅇ",
      state: "보류",
      count: 1,
      delete: "삭제",
      cancel: "취소",
    },
  ];

  // 컬럼 정의
  const columns = [
    { Header: "카테고리", accessor: "check" },
    { Header: "작성자", accessor: "writerNm" },
    { Header: "내용", accessor: "contents" },
    { Header: "상태", accessor: "state" },
    { Header: "신고 수", accessor: "count" },
    { Header: "삭제", accessor: "delete" },
    { Header: "취소", accessor: "cancel" },
  ];
  // react-table hook 사용
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  // 삭제 버튼 클릭 시 실행되는 함수
  const handleDeleteClick = rowData => {
    // 여기에 삭제 버튼을 눌렀을 때의 동작을 추가
    console.log("Delete button clicked for row:", rowData);
  };

  return (
    // <SupervisorReportWrapper>
    <SvisorReportWrap>
      <SupervisorReportHeader>
        <div className="page-title">신고 관리</div>
        <div>
          <Button bttext="저장" />
        </div>
      </SupervisorReportHeader>
      <SvisorReportMain>
        {/* 옵션 셀렉트 */}
        <SvisorReportOption>
          {/* select 요소 */}
          <select
            className="selectoption"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            {/* 기본 옵션 (선택 안된 상태) */}
            <option value="" disabled>
              카테고리
            </option>
            {/* 옵션 목록 매핑 */}
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {/* 선택된 값 출력 */}
          <p>{selectedValue}</p>
        </SvisorReportOption>

        <SvisorTable>
          {/* <span>테이블 테스트 </span> */}

          <table
            {...getTableProps()}
            style={{
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <thead>
              {/* 테이블 헤더 부분 */}
              <tr
                style={{
                  border: "1px solid #DBDBDB",
                  padding: "8px",
                  borderBottom: "1px solid #DBDBDB", // 행 셀의 아래 테두리 설정
                  borderLeft: "0px solid #DBDBDB", // 행 셀의 왼쪽 테두리 설정
                  borderRight: "0px solid #DBDBDB", // 헤더 셀의 아래 테두리 설정
                  textAlign: "center",
                }}
                className="tableHeader"
              >
                <th>카테고리</th>
                <th>작성자</th>
                <th>내용</th>
                <th>상태</th>
                <th>신고 수</th>
                <th>삭제</th>
                <th>취소</th>
              </tr>
            </thead>
            <tbody>
              {/* 테이블 바디 부분 */}
              {data.map((row, index) => (
                <tr
                  key={index}
                  style={{
                    border: "1px solid #DBDBDB",
                    padding: "8px",
                    borderBottom: "1px solid #DBDBDB", // 행 셀의 아래 테두리 설정
                    borderLeft: "0px solid #DBDBDB", // 행 셀의 왼쪽 테두리 설정
                    borderRight: "0px solid #DBDBDB", // 행 셀의 오른쪽 테두리 설정
                    textAlign: "center",
                  }}
                  className="tableBody"
                >
                  <td>{row.check}</td>
                  <td>{row.writerNm}</td>
                  <td>{row.contents}</td>
                  <td>{row.state}</td>
                  <td>{row.count}</td>
                  {/* 삭제 버튼을 클릭할 때 handleDeleteClick 함수 호출 */}
                  <td>
                    <button
                      onClick={() => handleDeleteClick(row)}
                      className="delete-bt"
                    >
                      {row.delete}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteClick(row)}
                      className="cancel-bt"
                    >
                      {row.cancel}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </SvisorTable>
      </SvisorReportMain>
    </SvisorReportWrap>
    // </SupervisorReportWrapper>
  );
};

export default SupervisorReportPage;
