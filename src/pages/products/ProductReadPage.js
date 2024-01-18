import React from "react";
import ProductReadComponent from "../../components/product/ProductReadComponent";
import { useParams } from "react-router";

const ProductReadPage = () => {
  const { pno } = useParams();
  return (
    <div>
      <h1>제품상세페이지</h1>
      <ProductReadComponent pno={pno} />
    </div>
  );
};

export default ProductReadPage;
