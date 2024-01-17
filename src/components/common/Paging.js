import React, { useState } from "react";
import { PagingBoxStyle, PagingNumStyle } from "../community/styles/ListStyle";
import useCustomMove from "../hooks/useCustomMove";

const Paging = ({ totalItem, itemPerPage }) => {
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

  const handlePrev = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage - 1);
    if ((currentPage - 1) % maxPageNumLimit === 0) {
      setMaxPageNumLimit(prevMaxPageNumLimit => prevMaxPageNumLimit - 10);
      setMinPageNumLimit(prevMinPageNumLimit => prevMinPageNumLimit - 10);
    }
  };
  const handleNext = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
    if (currentPage + 1 > maxPageNumLimit) {
      setMaxPageNumLimit(prevMaxPageNumLimit => prevMaxPageNumLimit + 10);
      setMinPageNumLimit(prevMinPageNumLimit => prevMinPageNumLimit + 10);
    }
  };

  return (
    <PagingBoxStyle>
      {/* 이전 버튼 */}
      {minPageNumLimit >= 1 && (
        <PagingNumStyle onClick={handlePrev}>이전</PagingNumStyle>
      )}

      {/* 페이지 번호 */}
      {pageNum.map(num => (
        <PagingNumStyle
          key={num}
          onClick={() => {
            moveToList({ page: num });
          }}
          active={currentPage === num}
        >
          {num}
        </PagingNumStyle>
      ))}

      {/* 다음 버튼 */}
      {totalItem > maxPageNumLimit && (
        <PagingNumStyle onClick={handleNext}>다음</PagingNumStyle>
      )}
    </PagingBoxStyle>
  );
};

export default Paging;
