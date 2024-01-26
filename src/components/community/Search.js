import React from "react";
import { SearchStyle } from "./styles/ListStyle";

const Search = () => {
  return (
    <SearchStyle>
      <select className="select">
        <option value={0}>전체</option>
        <option value={1}>제목</option>
        <option value={2}>내용</option>
      </select>
      <div className="searchBox">
        <input placeholder="제목 또는 내용을 검색해보세요" />
      </div>
      <div className="icon">
        <img src="/assets/images/search.svg" alt="search" />
      </div>
    </SearchStyle>
  );
};

export default Search;
