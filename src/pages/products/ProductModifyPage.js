import React from "react";
import { useParams } from "react-router-dom";
import ProductModifyComponent from "../../components/product/ProductModifyComponent";

const ProductModifyPage = () => {
  // 라우터 : modify/:pno
  const { pno } = useParams();
  return (
    <div>
      <h1>제품수정 {pno}</h1>
      <ProductModifyComponent pno={pno} />
    </div>
  );
};

export default ProductModifyPage;
