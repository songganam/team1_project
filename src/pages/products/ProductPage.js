import React from "react";
import BasicLayout from "../../layouts/BasicLayout";
import { Outlet, useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const handClickList = () => {
    navigate({ pathname: "list" });
  };
  const handClickAdd = () => {
    navigate({ pathname: "add" });
  };
  // 라우터 테스트 후 제거
  const handClickRead = () => {
    navigate({ pathname: "read/1" });
  };
  const handClickModify = () => {
    navigate({ pathname: "modify/1" });
  };
  return (
    <BasicLayout>
      <div>
        <h1>ProductPage</h1>
        <div>
          <button type="button" onClick={() => handClickList()}>
            상품목록
          </button>
          <button type="button" onClick={() => handClickAdd()}>
            상품추가
          </button>
          <button type="button" onClick={() => handClickRead()}>
            상품보기
          </button>
          <button type="button" onClick={() => handClickModify()}>
            상품수정
          </button>
        </div>
        <Outlet />
      </div>
    </BasicLayout>
  );
};

export default ProductPage;
