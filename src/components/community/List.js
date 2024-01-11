import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { TableStyle, WrapStyle } from "./styles/ListStyle";
import { ColorStyle } from "../../styles/common/CommonStyle";

// 서버데이터 초기값 객체
const initState = {
  current: 0,
  dtoList: [],
  next: false,
  nextpage: 0,
  pageNumlist: [],
  pageRequestDTO: null,
  prev: false,
  prevPage: 0,
  totalCount: 0,
  totalPage: 0,
};

const List = () => {
  // 패스 이동
  const navigate = useNavigate();

  // 쿼리스트링 생성
  const queryStr = createSearchParams({ page: 1, size: 10 }).toString();

  const handleClickList = () => {
    navigate({ pathname: "list", search: queryStr });
  };
  const handleClickLAdd = () => {
    navigate({ pathname: "add", search: queryStr });
  };
  const handleClickModify = () => {
    navigate({ pathname: "modify", search: queryStr });
  };
  const handleClickRead = () => {
    navigate({ pathname: "read", search: queryStr });
  };

  return (
    <WrapStyle>
      <div>
        <div>번호</div>
        <div>제목</div>
        <div>
          <div>작성자</div>
          <div>작성일</div>
          <div>조회수</div>
        </div>
      </div>
      <div>
        <div>공지</div>
        <div>이메일로 회원가입 안되는 경우 읽어주세요.</div>
        <div>
          <div>고기로</div>
          <div>2024.01.11</div>
          <div>3573</div>
        </div>
      </div>
      <div className="page">페이징 처리</div>
      <div className="serch">
        <select>
          <option>전체</option>
          <option>제목</option>
          <option>내용</option>
        </select>
        <input />
        <div>돋보기아이콘</div>
      </div>
      <div className="tfoot">
        <button>글쓰기</button>
      </div>
    </WrapStyle>
  );
};

export default List;
