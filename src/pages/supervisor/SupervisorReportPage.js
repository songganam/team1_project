import React from "react";
import {
  SupervisorReportHeader,
  SupervisorReportMain,
  SupervisorReportWrapper,
} from "./styles/SupervisorReportStyle";
import { useTable } from "react-table";

const SupervisorReportPage = () => {
  const data = [
    { id: 1, name: "John", age: 28 },
    { id: 2, name: "Jane", age: 35 },
    { id: 3, name: "Doe", age: 22 },
  ];

  // 컬럼 정의
  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Name", accessor: "name" },
    { Header: "Age", accessor: "age" },
  ];

  // react-table hook 사용
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <SupervisorReportWrapper>
      <SupervisorReportHeader></SupervisorReportHeader>
      <SupervisorReportMain>
        <span>테이블 테스트 </span>
        <table
          {...getTableProps()}
          style={{ borderCollapse: "collapse", width: "100%" }}
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
        );
      </SupervisorReportMain>
    </SupervisorReportWrapper>
  );
};

export default SupervisorReportPage;
