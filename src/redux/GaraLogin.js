import React, { useMemo } from "react";
import { useTable, useSortBy, useFilters } from "react-table";

// 사용자 정의 필터 컴포넌트
const SelectColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  // 필터링을 위한 유니크한 값 추출
  const options = useMemo(() => {
    const uniqueValues = new Set(column.data.map(item => item[column.id]));
    return [...uniqueValues];
  }, [column]);

  return (
    <select
      value={filterValue}
      onChange={e => setFilter(e.target.value || undefined)}
    >
      <option value="">전체</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const TableWithSelectFilter = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useFilters, // 필터 사용
      useSortBy, // 정렬 사용
    );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr key={index} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                key={column.id}
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render("Header")}
                {/* 컬럼별로 사용자 정의 필터 렌더링 */}
                {column.canFilter && <SelectColumnFilter column={column} />}
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
                <td key={row.id} {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// 사용할 컬럼 및 데이터 정의
const columns = [
  {
    Header: "이름",
    accessor: "name",
  },
  {
    Header: "나이",
    accessor: "age",
    Filter: SelectColumnFilter, // 전체 테이블에 일괄적으로 사용하려면 여기에 추가 가능
  },
  {
    Header: "성별",
    accessor: "gender",
    Filter: SelectColumnFilter, // 전체 테이블에 일괄적으로 사용하려면 여기에 추가 가능
  },
];

const data = [
  { name: "John", age: 25, gender: "Male" },
  { name: "Jane", age: 30, gender: "Female" },
  // 데이터 계속 추가...
];

// TableWithSelectFilter 컴포넌트 사용
function App() {
  return <TableWithSelectFilter columns={columns} data={data} />;
}

export default App;
