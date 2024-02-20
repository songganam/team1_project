import React from "react";
import {
  SupervisorReportHeader,
  SupervisorReportMain,
  SupervisorReportWrap,
  SupervisorReportWrapper,
  SvisorReportMain,
  SvisorReportWrap,
  SvisorTable,
  Svisortable,
} from "./styles/SupervisorReportStyle";
import { useTable } from "react-table";
import { NavStyle } from "../../components/adminInfo/styles/ModifyStyle";
import Button from "../../components/button/Button";

const SupervisorReportPage = () => {
  const data = [
    {
      check: 1,
      writerNm: "John",
      contents: "줘도 안 먹을 맛임",
      state: "삭제",
      count: 3,
      delete: "버튼",
      cancel: "버튼",
    },
    {
      check: 1,
      writerNm: "최고기",
      contents: "바보똥개야",
      state: "삭제",
      count: 3,
      delete: "버튼",
      cancel: "버튼",
    },
    {
      check: 1,
      writerNm: "학재son",
      contents: "ㅇㅇ",
      state: "보류",
      count: 1,
      delete: "버튼",
      cancel: "버튼",
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
              {headerGroups.map((headerGroup, index) => (
                <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th
                      key={column.id}
                      {...column.getHeaderProps()}
                      style={{ border: "1px solid black", padding: "8px" }}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr key={row.id} {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td
                        key={cell.id}
                        {...cell.getCellProps()}
                        style={{ border: "1px solid black", padding: "8px" }}
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </SvisorTable>
      </SvisorReportMain>
    </SvisorReportWrap>
    // </SupervisorReportWrapper>
  );
};

export default SupervisorReportPage;
