import React, { useEffect, useState } from "react";
import { getOne } from "../../api/productApi";
import { API_SERVER_HOST } from "../../api/todoApi";
import Fetching from "../common/Fetching";
import useCustomMove from "../../hooks/useCustomMove";
// 이미지 API 주소
const host = API_SERVER_HOST;

// 화면 출력 상태 정보
const initState = {
  pno: 0,
  pname: "",
  price: 0,
  pdesc: "",
  delFlag: false,
  files: [],
  uploadFileNames: [],
};

const ProductReadComponent = ({ pno }) => {
  const [product, setProduct] = useState(initState);
  // 로딩창
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    getOne({ pno, successFn, failFn, errorFn });
  }, []);

  const successFn = result => {
    setFetching(false);
    console.log(result);
    setProduct(result);
  };
  const failFn = result => {
    setFetching(false);
    console.log(result);
  };
  const errorFn = result => {
    setFetching(false);
    console.log(result);
  };

  const { moveToModify, moveToList, page } = useCustomMove();

  return (
    <div>
      {fetching ? <Fetching /> : null}
      <div>
        <div>제품번호: {product.pno}</div>
      </div>
      <div>
        <div>제품이름: {product.pname}</div>
      </div>
      <div>
        <div>제품설명: {product.pdesc}</div>
      </div>
      <div>
        {product.uploadFileNames.map((item, index) => (
          <img key={index} src={`${host}/api/products/view/s_${item}`} />
        ))}
      </div>
      <div>
        <button onClick={() => moveToModify(product.pno)}>수정</button>
        <button onClick={() => moveToList({ page })}>목록가기</button>
      </div>
    </div>
  );
};

export default ProductReadComponent;
