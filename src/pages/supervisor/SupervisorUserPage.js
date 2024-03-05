import { useEffect, useState } from "react";
import { getUser, patchUser } from "../../api/userApi";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import {
  SupervisorHeader,
  SupervisorReportHeader,
} from "./styles/SupervisorReportStyle";
import {
  SupervisorOption,
  SupervisorTable,
  SupervisorUserContents,
  SupervisorUserWrapper,
} from "./styles/SupervisorUserStyle";
import Button from "../../components/button/Button";

const SupervisorUserPage = () => {
  // GET API
  const [data, setData] = useState([]);
  // const [refresh, setRefresh] = useState(false);
  const { page, moveToCheck } = useCustomHook();
  useEffect(() => {
    const params = { page };
    getUser({ params, successFn, failFn, errorFn });
  }, [page]);

  const successFn = response => {
    setData(response);
  };

  const failFn = response => {
    setData(response);
  };

  const errorFn = response => {
    setData(response);
  };

  // PATCH API
  const handleClickLock = result => {
    // alert("클릭됨");
    // iuser  필요
    // alert(result);
    patchUser({ result, successLockFn, failLockFn, errorLockFn });
  };

  const successLockFn = response => {
    console.log(response);
    // setRefresh(true);
    // setData(response);
  };

  const failLockFn = response => {
    console.log(response);
    // setData(response);
  };

  const errorLockFn = response => {
    console.log(response);
    // setData(response);
  };

  // const handleClickUnlock = result => {
  //   alert("클릭됨");
  //   alert(result);
  // };

  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryChange = event => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    console.log("카테", selectedValue);
    moveToCheck({ check: selectedValue });
  };

  return (
    <SupervisorUserWrapper>
      <SupervisorHeader>
        <div className="page-title">유저 분석</div>
        <div>
          <Button bttext="저장" />
        </div>
      </SupervisorHeader>
      <SupervisorUserContents>
        {/* <h1>테이블 예시입니다 맵포함</h1> */}
        <SupervisorOption>
          {/* <select  */}
          <label htmlFor="category"> </label>
          <select
            id="category"
            name="category"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option value="0">고기잡담 글</option>
            <option value="1">고기잡담 댓글</option>
            <option value="2">고기집 후기</option>
            <option value="3">정육점 후기</option>
          </select>
        </SupervisorOption>
        <SupervisorTable>
          <table>
            <thead style={{ marginBottom: "20px" }}>
              <th>순번</th>
              <th>작성자</th>
              <th>ID</th>
              <th>사업자등록번호</th>
              <th>상태</th>
              <th>계정잠금</th>
            </thead>
            <tbody>
              {/* 여기다가 맵을 돌리는거죠! */}
              {/* 왜 data머시긴가요? useState 다시 설명읽기! */}
              {/*
               데이터(data)를 반복할꺼야(map)
               data를 앞으로 item이라 부를꺼야
               순서를 index라 할꺼야
               */}
              {data?.map((item, index) => (
                // ? Key? 기준값!
                // ? 기준값? 절대 중복될 수없는 유니크한 값! (a.k.a 주민등록번호)
                // ? iuser 고유한 값이네?
                <tr key={item?.iuser}>
                  {/* data 안에 있는 name, id , number, state */}
                  <td>{index}</td>
                  <td>{item?.name}</td>
                  <td>{item?.id}</td>
                  <td>{item?.number}</td>
                  <td>{item?.state}</td>
                  {item?.state === 0 ? (
                    <td>
                      <button onClick={() => handleClickLock(item.iuser)}>
                        잠금
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button onClick={() => handleClickLock(item.iuser)}>
                        해제
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </SupervisorTable>
      </SupervisorUserContents>
    </SupervisorUserWrapper>
  );
};

export default SupervisorUserPage;
