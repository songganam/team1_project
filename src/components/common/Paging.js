import React, { useState } from "react";
import { PagingBoxStyle } from "../community/styles/ListStyle";
import useCustomMove from "../hooks/useCustomMove";

const Paging = ({ totalItem, itemPerPage, paginate }) => {
  // 커스텀 훅
  const { moveToList } = useCustomMove();

  const [currentPage, setCurrentPage] = useState(1);
  const [minPageNumLimit, setMinPageNumLimit] = useState(0);
  const [maxPageNumLimit, setMaxPageNumLimit] = useState(10);

  const totalPages = Math.ceil(totalItem / itemPerPage);
  const pageNum = [];

  for (let i = 1; i <= totalPages; i++) {
    if (i > minPageNumLimit && i <= maxPageNumLimit) {
      pageNum.push(i);
    }
  }

  return (
    <PagingBoxStyle>
      {/* 이전 버튼 */}
      <button>이전</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>10</button>
      <button>다음</button>
    </PagingBoxStyle>
  );
};

export default Paging;
