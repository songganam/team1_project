import React from "react";
import { Outlet, createSearchParams, useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";

// 고기잡담 메인 페이지입니다.
const CommunityPage = () => {
  // 패스 이동
  const navigate = useNavigate();

  // 쿼리스트링 생성
  const queryStr = createSearchParams({ page: 1, size: 10 }).toString();

  const handleClickList = () => {
    navigate({ pathname: "list", search: queryStr });
  };
  const handleClickLAdd = () => {
    navigate({ pathname: "add", search: queryStr });
  };
  const handleClickModify = () => {
    navigate({ pathname: "modify", search: queryStr });
  };
  const handleClickRead = () => {
    navigate({ pathname: "read", search: queryStr });
  };

  return (
    <Layout>
      <div>
        <h1>고기잡담</h1>
        <button
          onClick={() => {
            handleClickList();
          }}
        >
          글목록
        </button>
        <button
          onClick={() => {
            handleClickLAdd();
          }}
        >
          글쓰기
        </button>
        <button
          onClick={() => {
            handleClickModify();
          }}
        >
          글수정
        </button>
        <button
          onClick={() => {
            handleClickRead();
          }}
        >
          글보기
        </button>
        <div>
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPage;
