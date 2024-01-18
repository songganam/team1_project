import React, { useEffect, useState } from "react";
import useCustomMove from "../hooks/useCustomMove";
import { getList } from "../../api/communityApi";
import { PagingBoxStyle, PagingNumStyle } from "../community/styles/ListStyle";

const initState = [];

const Paging = () => {
  const { page, moveToList } = useCustomMove();
  const [pageNum, setPageNum] = useState(initState);

  useEffect(() => {
    const param = { page };
    getList({ param, successFn, failFn, errorFn });
  }, [page]);

  // 데이터 연동 처리 결과
  const successFn = result => {
    setPageNum(result);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  return (
    <PagingBoxStyle>
      <PagingNumStyle>이전</PagingNumStyle>
      {pageNum.map((item, index) => (
        <div key={index}>
          <PagingNumStyle
            ac
            onClick={() => {
              moveToList({ page: index + 1 });
            }}
          >
            {index + 1}
          </PagingNumStyle>
        </div>
      ))}
      <PagingNumStyle>다음</PagingNumStyle>
    </PagingBoxStyle>
  );
};

export default Paging;
