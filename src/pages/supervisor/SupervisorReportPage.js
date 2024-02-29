import { useEffect, useState } from "react";
import { useTable } from "react-table";
import { API_SERVER_HOST } from "../../api/config";
import { getReport } from "../../api/reportApi";
import Button from "../../components/button/Button";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import {
  SupervisorReportHeader,
  SvisorReportMain,
  SvisorReportOption,
  SvisorReportWrap,
  SvisorTable,
} from "./styles/SupervisorReportStyle";

const svisorhost = API_SERVER_HOST;

const initState = [
  {
    pk: 0,
    writerNm: "string",
    contents: "string",
    state: 0,
    count: 0,
  },
];

const SupervisorReportPage = () => {
  const [reportData, setReportData] = useState([initState]);
  const [selectedValue, setSelectedValue] = useState("");
  const { page } = useCustomHook;
  const params = { page };

  useEffect(() => {
    const result = getReport({ reportData, successFn, failFn, errorFn }); // 데이터를 가져오는 함수 호출
    // setUserData(result);
    console.log("useEffect 사용");
  }, [page]);

  const successFn = result => {
    setReportData(result);
  };
  const failFn = result => {
    setReportData(result);
  };
  const errorFn = result => {
    setReportData(result);
  };

  const options = [
    { value: "option1", label: "고기잡담 글" },
    { value: "option2", label: "고기잡담 댓글" },
    { value: "option3", label: "고기집 후기" },
    { value: "option4", label: "정육점 후기" },
  ];

  const handleSelectChange = e => {
    setSelectedValue(e.target.value);
  };

  const TableData = [
    {
      check: "고기집 후기",
      writerNm: "John",
      contents: "줘도 안 먹을 맛임",
      state: "삭제",
      count: 3,
    },
    {
      check: "고기잠담 댓글",
      writerNm: "최고기",
      contents: "바보똥개야",
      state: "삭제",
      count: 3,
    },
    {
      check: "고기잡담 댓글",
      writerNm: "학재son",
      contents: "ㅇㅇ",
      state: "보류",
      count: 1,
    },
  ];

  const columns = [
    { Header: "카테고리", accessor: "pk" },
    { Header: "작성자", accessor: "writerNm" },
    { Header: "내용", accessor: "contents" },
    { Header: "상태", accessor: "state" },
    { Header: "신고 수", accessor: "count" },
    // { Header: "삭제", accessor: "delete" },
    // { Header: "취소", accessor: "cancel" },
  ];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: TableData });

  const handleDeleteClick = rowData => {
    console.log("Delete button clicked for row:", rowData);
  };

  const handleCancelClick = rowData => {
    console.log("Cancel button clicked for row:", rowData);
  };

  return (
    <SvisorReportWrap>
      <SupervisorReportHeader>
        <div className="page-title">신고 관리</div>
        <div>
          <Button bttext="저장" />
        </div>
      </SupervisorReportHeader>
      <SvisorReportMain>
        {/* 데이터 매핑 및 표시 */}
        {reportData.map(user => (
          <div key={user}>
            <p>pk: {user.pk}</p>
            <p>contents: {user.contents}</p>
            <p>writerNm: {user.writerNm}</p>
            <p>state: {user.state}</p>
            <p>count: {user.count}</p>
            {/* 나머지 사용자 정보 표시 */}
          </div>
        ))}
        <SvisorReportOption>
          <select
            className="selectoption"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option value="" disabled>
              카테고리
            </option>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p>{selectedValue}</p>
        </SvisorReportOption>

        <SvisorTable>
          <table
            {...getTableProps()}
            style={{
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <thead>
              <tr
                style={{
                  border: "1px solid #DBDBDB",
                  padding: "8px",
                  borderBottom: "1px solid #DBDBDB",
                  borderLeft: "0px solid #DBDBDB",
                  borderRight: "0px solid #DBDBDB",
                  textAlign: "center",
                }}
                className="tableHeader"
              >
                <th>카테고리</th>
                <th>작성자</th>
                <th>내용</th>
                <th>상태</th>
                <th>신고 수</th>
                {/* <th>삭제</th>
                <th>취소</th> */}
              </tr>
            </thead>
            <tbody>
              {TableData?.map(row => (
                <tr
                  key={row}
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
                  <td>{row?.pk}</td>
                  <td>{row?.contents}</td>
                  <td>{row?.writerNm}</td>
                  <td>{row?.state}</td>
                  <td>{row?.count}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteClick(row)}
                      // onClick={handleLockClick}
                      className="delete-bt"
                    >
                      {row?.delete}
                      삭제
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleCancelClick(row)}
                      className="cancel-bt"
                    >
                      {row?.cancel}
                      취소
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </SvisorTable>
      </SvisorReportMain>
    </SvisorReportWrap>
  );
};

export default SupervisorReportPage;
