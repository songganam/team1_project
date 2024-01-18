import React, { useEffect, useState } from "react";
import { getList } from "../../api/productApi";
import useCustomMove from "../../hooks/useCustomMove";
import { API_SERVER_HOST } from "../../api/todoApi";
import PageComponent from "../common/PageComponent";
import Fetching from "../common/Fetching";

// 이미지 서버 API 주소
const host = API_SERVER_HOST;

// 기본 상태 데이터
const initState = {
  current: 0,
  dtoList: [],
  next: false,
  nextPage: 0,
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  prevPage: 0,
  totalCount: 0,
  totalPage: 0,
};
const ProductListComponent = () => {
  const { page, size, moveToRead } = useCustomMove();
  const [serverData, setServerData] = useState(initState);
  // 로딩창
  const [fetching, setFetching] = useState(false);
  // 최초 데이터 가져오기
  useEffect(() => {
    setFetching(true);

    const param = { page, size };
    getList({ param, successFn, failFn, errorFn });
  }, [page, size]);
  // 데이터 연동 처리 결과
  const successFn = result => {
    setFetching(false);
    setServerData(result);
    console.log(result);
  };
  const failFn = result => {
    setFetching(false);
    console.log(result);
  };
  const errorFn = result => {
    setFetching(false);
    console.log(result);
  };

  return (
    <div>
      {fetching ? <Fetching /> : null}

      <div>
        {serverData.dtoList.map(item => (
          <div key={item.pno} onClick={() => moveToRead(item.pno)}>
            {/* 제품번호 */}
            <div>{item.pno}</div>
            {/* 내용 */}
            <div>
              {/* 이미지 */}
              <div>
                {/* 백엔드에서 업로드 된 이미지의 섬네일 만들기를 요청해 보자 */}
                <img
                  src={`${host}/api/products/view/s_${item.uploadFileNames[0]}`}
                  alt={item.pname}
                />
              </div>
              {/* 제품정보 */}
              <div>
                <div>이름 : {item.pname}</div>
                <div>가격 : {item.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <PageComponent serverData={serverData} />
    </div>
  );
};

export default ProductListComponent;
