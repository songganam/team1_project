import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useTable } from "react-table";
import { getReport } from "../../api/reportApi";
import Button from "../../components/button/Button";
import {
  SupervisorReportHeader,
  SvisorReportMain,
  SvisorReportOption,
  SvisorReportWrap,
  SvisorTable,
} from "./styles/SupervisorReportStyle";

const initState = [
  {
    pk: 0,
    contents: "string",
    writerNm: "string",
    count: 0,
    state: 0,
  },
];

const SupervisorReportPage = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getReport(),
  });

  const [manageData, setManageData] = useState(initState);

  useEffect(() => {
    if (data && !data.isLoading && !data.isError) {
      // 데이터가 변경된 경우에만 업데이트
      if (JSON.stringify(data.data) !== JSON.stringify(manageData)) {
        setManageData(data.data || initState);
      }
    }
  }, [data, manageData]);

  const [selectedValue, setSelectedValue] = useState("");

  function performAsyncTask() {
    return new Promise(resolve => {
      // 비동기 작업 수행
      setTimeout(() => {
        // 작업 완료 후의 로직
        console.log("Async task completed");
        resolve();
      }, 500);
    });
  }

  // 비동기 작업을 수행하고 모든 작업이 완료될 때까지 대기
  async function executeAsyncTasks() {
    const tasks = [];

    for (let i = 0; i < 1000; i++) {
      tasks.push(performAsyncTask());
    }

    await Promise.all(tasks);
  }

  // 실행
  executeAsyncTasks();

  const options = [
    { value: "option1", label: "고기잡담 글" },
    { value: "option2", label: "고기잡담 댓글" },
    { value: "option3", label: "고기집 후기" },
    { value: "option4", label: "정육점 후기" },
  ];

  const handleSelectChange = e => {
    setSelectedValue(e.target.value);
  };

  const Tabledata = [
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

  const columns = [
    { Header: "카테고리", accessor: "check" },
    { Header: "작성자", accessor: "writerNm" },
    { Header: "내용", accessor: "contents" },
    { Header: "상태", accessor: "state" },
    { Header: "신고 수", accessor: "count" },
    { Header: "삭제", accessor: "delete" },
    { Header: "취소", accessor: "cancel" },
  ];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: manageData });

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
        <SvisorReportOption>
          <select
            className="selectoption"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option value="" disabled>
              카테고리
            </option>
            {options?.map(option => (
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
                <th>삭제</th>
                <th>취소</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr key={row.id} {...row.getRowProps()} className="tableBody">
                    {row.cells.map(cell => (
                      <td key={cell.id} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    ))}
                    <td>
                      <button
                        onClick={() => handleDeleteClick(row.original)}
                        className="delete-bt"
                      >
                        {row.original.delete}
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleCancelClick(row.original)}
                        className="cancel-bt"
                      >
                        {row.original.cancel}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </SvisorTable>
      </SvisorReportMain>
    </SvisorReportWrap>
  );
};

export default SupervisorReportPage;
