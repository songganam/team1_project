import React, { useEffect, useState } from "react";
import useCustomMove from "../hooks/useCustomMove";
import { getList } from "../../api/communityApi";
import { PagingBoxStyle, PagingNumStyle } from "../community/styles/ListStyle";

const initState = [
  {
    iboard: 0,
    boardNum: 0,
    iuser: 0,
    writerName: "",
    title: "",
    contents: "",
    pics: [""],
  },
];

const Paging = ({ totalItems, itemPerPage = 10 }) => {
  const { page, search, moveToList } = useCustomMove();

  // DB에서 boardNum을 받아와서 상태를 변경한다.
  const [boardNum, setBoardNum] = useState(initState[0].boardNum);
  useEffect(() => {
    const param = { page, search };
    getList({ param, successFn, failFn, errorFn });
  }, [page, search]);
  // 데이터 연동 처리 결과
  const successFn = result => {
    setBoardNum(result);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  // 전체 페이지 수 계산
  const [totalPages, setTotalPages] = useState(0);
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  // 표시할 페이지 번호 배열
  const [pageNumbers, setPageNumbers] = useState([]);
  // 최대 보여지는 페이지 번호 범위
  const [pageLimit, setPageLimit] = useState(10);
  const [maxPageLimit, setMaxPageLimit] = useState(10);
  const [minPageLimit, setMinpageLimit] = useState(0);

  useEffect(() => {
    // boardNum을 10으로 나눈다음 Math.ceil 내장객체를 이용하여 정수로 만든다.
    const pages = Math.ceil(boardNum / itemPerPage);
    setTotalPages(pages);
    // 만든 정수를 1부터 시작하여 배열로 만든다. 배열의 개수는 무한대로 설정할 수 있다.
    const numbers = Array.from({ length: pages }, (_, i) => i + 1);
    setPageNumbers(numbers);
  }, [totalItems, itemPerPage]);

  // 이전 페이지 범위로 이동
  const handlePrev = () => {
    setCurrentPage(prev => prev - 1);

    if ((currentPage - 1) % pageLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageLimit);
      setMinpageLimit(minPageLimit - pageLimit);
    }
  };

  // 다음 페이지 범위로 이동
  const handleNext = () => {
    setCurrentPage(prev => prev + 1);

    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageLimit);
      setMinpageLimit(minPageLimit + pageLimit);
    }
  };

  // 현재 페이지네여션을 렌더링할 페이지 번호들
  const renderPageNumbers = pageNumbers.slice(minPageLimit, maxPageLimit);

  return (
    <PagingBoxStyle>
      <PagingNumStyle onClick={handlePrev} disabled={currentPage === 1}>
        이전
      </PagingNumStyle>

      {renderPageNumbers.map(number => (
        <PagingNumStyle
          key={number}
          onClick={() => {
            moveToList;
          }}
          active={currentPage === number}
        >
          {number}
        </PagingNumStyle>
      ))}

      <PagingNumStyle
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        다음
      </PagingNumStyle>
    </PagingBoxStyle>
  );
};

export default Paging;
