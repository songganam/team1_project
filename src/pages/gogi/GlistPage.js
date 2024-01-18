import React, { useEffect, useState } from "react";
import { getGList } from "../../api/GApi";
import useCustomMove from "../../components/hooks/useCustomMove";
import {
  KindOfMeat,
  KindOfMeatWrap,
  ListFilter,
  ListFilterItem,
  ListMoreViewBtn,
  ListMoreViewBtnWrap,
  SearchBar,
  SearchIconWrap,
  SearchInput,
  SearchWrap,
} from "./styles/GlistPageStyle";

// 고깃집 목록보기 페이지입니다.
const GlistPage = () => {
  // ! InitState (초기 상태)
  const initState = {
    ishop: 0,
    name: "",
    location: "",
    pics: [""],
  };
  const [selectFilter, setSelectFilter] = useState("lastest");
  const [GlistData, setGlistData] = useState(initState);
  const { page } = useCustomMove();
  useEffect(() => {
    const param = { page };
    getGList({ param, successFn, failFn, errorFn });
  }, [page]);

  const successFn = result => {
    setGlistData(result);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  return (
    <div>
      <KindOfMeatWrap>
        <KindOfMeat>
          <span>전체</span>
        </KindOfMeat>
        <KindOfMeat>
          <span>돼지</span>
        </KindOfMeat>
        <KindOfMeat>
          <span>소</span>
        </KindOfMeat>
        <KindOfMeat>
          <span>닭</span>
        </KindOfMeat>
        <KindOfMeat>
          <span>오리</span>
        </KindOfMeat>
        <KindOfMeat>
          <span>양</span>
        </KindOfMeat>
        <KindOfMeat>
          <span>해산물</span>
        </KindOfMeat>
      </KindOfMeatWrap>
      <SearchWrap>
        <SearchBar>
          <SearchInput placeholder="고깃집을 검색해보세요" />
        </SearchBar>
        <SearchIconWrap>
          <img
            src={process.env.PUBLIC_URL + `/assets/images/search.svg`}
            alt=""
          />
        </SearchIconWrap>
      </SearchWrap>

      <ListFilter>
        <ListFilterItem
          onClick={() => setSelectFilter("lastest")}
          active={selectFilter === "lastest"}
        >
          <span>최신순</span>
        </ListFilterItem>
        <ListFilterItem
          onClick={() => setSelectFilter("popularity")}
          active={selectFilter === "popularity"}
        >
          <span>인기순</span>
        </ListFilterItem>
      </ListFilter>
      {/* <GCard data={GlistData} /> */}
      {/* 공사중 지도 페이지 입니다. */}
      <ListMoreViewBtnWrap>
        <ListMoreViewBtn>
          <span>작성완료</span>
        </ListMoreViewBtn>
      </ListMoreViewBtnWrap>
    </div>
  );
};

export default GlistPage;
