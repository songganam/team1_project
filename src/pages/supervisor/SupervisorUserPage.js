import { useTable } from "react-table";
import Button from "../../components/button/Button";
import {
  SupervisorReportHeader,
  SvisorReportMain,
  SvisorReportOption,
  SvisorReportWrap,
  SvisorTable,
} from "./styles/SupervisorReportStyle";
import { useState } from "react";

const SupervisorReportPage = () => {
  // 옵션 셀렉트
  // 선택된 값을 관리할 상태
  const [selectedValue, setSelectedValue] = useState("");

  // 선택지 목록 데이터
  const options = [
    { value: "option1", label: "정지" },
    { value: "option2", label: "해제" },

    // 추가적인 옵션들
  ];

  // select 요소의 변경 이벤트 핸들러
  const handleSelectChange = e => {
    setSelectedValue(e.target.value);
  };

  // 테이블
  const data = [
    {
      name: "송가람",
      id: "ganam",
      number: "506-12237-123",
      state: "정지",
      lock: "잠금",
      unlock: "해제",
    },
    {
      name: "김솔",
      id: "xxol",
      number: "111-11111-111",
      state: "정지",
      lock: "잠금",
      unlock: "해제",
    },
    {
      name: "손재학",
      id: "학재son",
      number: "123-44444-44",
      state: "정지",
      lock: "잠금",
      unlock: "해제",
    },
  ];

  // 컬럼 정의
  const columns = [
    { Header: "이름", accessor: "name" },
    { Header: "ID", accessor: "id" },
    { Header: "사업자등록번호", accessor: "number" },
    { Header: "상태", accessor: "state" },
    { Header: "잠금", accessor: "lock" },
    { Header: "해제", accessor: "unlock" },
  ];
  // react-table hook 사용
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  // 삭제 버튼 클릭 시 실행되는 함수
  const handleLockClick = rowData => {
    // 여기에 삭제 버튼을 눌렀을 때의 동작을 추가
    console.log("Delete button clicked for row:", rowData);
  };
  // 삭제 버튼 클릭 시 실행되는 함수
  const handleUnlockClick = rowData => {
    // 여기에 삭제 버튼을 눌렀을 때의 동작을 추가
    console.log("Delete button clicked for row:", rowData);
  };

  return (
    // <SupervisorReportWrapper>
    <SvisorReportWrap>
      <SupervisorReportHeader>
        <div className="page-title">유저 관리</div>
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
                <th>이름</th>
                <th>ID</th>
                <th>사업자등록번호</th>
                <th>상태</th>
                <th>계정 잠금</th>
                <th>잠금 해제</th>
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
                  <td>{row.name}</td>
                  <td>{row.id}</td>
                  <td>{row.number}</td>
                  <td>{row.state}</td>

                  {/* 삭제 버튼을 클릭할 때 handleDeleteClick 함수 호출 */}
                  <td>
                    <button
                      onClick={() => handleLockClick(row)}
                      className="delete-bt"
                    >
                      {row.lock}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleUnlockClick(row)}
                      className="cancel-bt"
                    >
                      {row.unlock}
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
