import React from "react";
import BasicLayout from "../../layouts/BasicLayout";
import { Outlet, createSearchParams, useNavigate } from "react-router-dom";

const TodoPage = () => {
  // 패스 변경하기 2번째 방법
  const navigate = useNavigate();

  // 쿼리(?)스트링을 만들기
  const queryStr = createSearchParams({ page: 1, size: 10 }).toString();

  const handleClickList = () => {
    navigate({ pathname: "list", search: queryStr });
  };
  const handleClickAdd = () => {
    navigate("add");
  };
  const handleClickModify = () => {
    navigate({ pathname: "modify", search: queryStr });
  };
  const handleClickRead = () => {
    navigate({ pathname: "read", search: queryStr });
  };
  return (
    <BasicLayout>
      <div className="todo-wrap">
        <div>
          <h1>오늘할일 페이지 </h1>
          <button
            onClick={() => {
              handleClickList();
            }}
          >
            목록
          </button>
          <button
            onClick={() => {
              handleClickAdd();
            }}
          >
            추가
          </button>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </BasicLayout>
  );
};

export default TodoPage;
