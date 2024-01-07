import React from "react";
import { useSearchParams } from "react-router-dom";

// 글 목록 페이지입니다.
const ListPage = () => {
  // 쿼리 알아내기
  const [urlSerchParams, setUrlSearchParams] = useSearchParams();

  // 현재 목록 페이지 번호
  const page = urlSerchParams.get("page")
    ? parseInt(urlSerchParams.get("page"))
    : 1;

  // 페이지당 보여줄 글 목록 수
  const size = urlSerchParams.get("size")
    ? parseInt(urlSerchParams.get("size"))
    : 10;

  return (
    <div>
      <h2>글 목록</h2>
      <h3>
        현재페이지: {page}, Size: {size}
      </h3>
    </div>
  );
};

export default ListPage;
