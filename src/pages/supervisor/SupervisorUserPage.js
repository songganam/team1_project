import React from "react";
import {
  SupervisorUserHeader,
  SupervisorUserMain,
  SupervisorUserWrapper,
} from "./styles/SupervisorUserStyle";
import { useTable } from "react-table";

const SupervisorUserPage = () => {
  const data = [
    {
      name: 1,
      id: "John",
      number: "",
      state: "삭제",
      delete: "버튼",
      cancel: "버튼",
    },
    {
      name: 1,
      id: "최고기",
      number: "123-456766-88",
      state: "삭제",
      delete: "버튼",
      cancel: "버튼",
    },
    {
      name: 1,
      id: "학재son",
      number: "",
      state: "보류",
      delete: "버튼",
      cancel: "버튼",
    },
  ];

  // 컬럼 정의
  const columns = [
    { Header: "이름", accessor: "name" },
    { Header: "아이디", accessor: "id" },
    { Header: "사업자등록번호", accessor: "number" },
    { Header: "상태", accessor: "state" },
    { Header: "계정 잠금", accessor: "delete" },
    { Header: "잠금 해제", accessor: "cancel" },
  ];
  // react-table hook 사용
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <SupervisorUserWrapper>
      <h1>계정 관리</h1>
      <SupervisorUserHeader></SupervisorUserHeader>
      <SupervisorUserMain>
        <span>테이블 테스트</span>
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
      </SupervisorUserMain>
    </SupervisorUserWrapper>
  );
};

export default SupervisorUserPage;
