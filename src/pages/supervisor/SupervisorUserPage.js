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
import { getUser } from "../../api/userApi";
import { useQuery } from "@tanstack/react-query";
import { API_SERVER_HOST } from "../../api/config";
import useCustomHook from "../../components/meat/hooks/useCustomHook";

const svisorhost = API_SERVER_HOST;

const initState = [
  {
    iuser: 0,
    name: "string",
    id: "string",
    number: "string",
    state: 0,
  },
];

const SupervisorReportPage = () => {
  const [userData, setUserData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const { page } = useCustomHook;
  const params = { page };

  // useEffect를 사용하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정
  useEffect(() => {
    const result = getUser({ userData, successFn, failFn, errorFn }); // 데이터를 가져오는 함수 호출
    // setUserData(result);
    console.log("useEffect 사용");
  }, [page]); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행

  const successFn = result => {
    setUserData(result);
  };
  const failFn = result => {
    setUserData(result);
  };
  const errorFn = result => {
    console.log(result);
  };

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
  const Tabledata = [
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
    useTable({ columns, data: Tabledata });

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
        {/* 데이터 매핑 및 표시 */}
        {userData.map((user, index) => (
          <div key={index}>
            <p>iuser: {user.iuser}</p>
            <p>Name: {user.name}</p>
            <p>id: {user.id}</p>
            <p>number: {user.number}</p>
            <p>state: {user.state}</p>

            {/* 나머지 사용자 정보 표시 */}
          </div>
        ))}
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
              {Tabledata?.map((row, index) => (
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
                  <td>{row?.name}</td>
                  <td>{row?.id}</td>
                  <td>{row?.number}</td>
                  <td>{row?.state}</td>

                  {/* 삭제 버튼을 클릭할 때 handleDeleteClick 함수 호출 */}
                  <td>
                    <button
                      onClick={() => handleLockClick(row)}
                      // onClick={handleLockClick}
                      className="delete-bt"
                    >
                      {row?.lock}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleUnlockClick(row)}
                      // onClick={handleUnlockClick}
                      className="cancel-bt"
                    >
                      {row?.unlock}
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
