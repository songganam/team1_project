import React, { useEffect, useState } from "react";
import { getGList } from "../../api/meatApi";
import GCardComponent from "../../components/meat/GCardComponent";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import Loading from "../../components/loading/Loading";
import {
  KindOfMeat,
  KindOfMeatWrap,
  ListFilter,
  ListFilterItem,
  ListMoreViewBtn,
  ListMoreViewBtnWrap,
  ListWrap,
  SearchBar,
  SearchIconWrap,
  SearchInput,
  SearchWrap,
} from "./styles/MeatListStyle";

// 고깃집 목록보기 페이지입니다.
const MeatListPage = () => {
  const { page, search, category, MoveToList } = useCustomHook();
  const [GlistData, setGlistData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectFilter, setSelectFilter] = useState("lastest");

  useEffect(() => {
    const param = { page, search, category };
    getGList({ param, successFn, failFn, errorFn });
  }, [page, search, category]);

  const successFn = result => {
    setLoading(false);
    setGlistData(result);
    console.log(result);
  };
  const failFn = result => {
    // setLoading(false);
    console.log(result);
  };
  const errorFn = result => {
    // setLoading(false);
    console.log(result);
  };
  const handleFilterClick = category => {
    console.log("필터링클릭댐");
    if (category == 6) {
      alert("해산물은 준비중입니다.");
    }
    MoveToList({ page: 1, search: "", category });
  };

  return (
    <ListWrap>
      {/* 
      // ! 고기 종류별 필터링
      */}
      <KindOfMeatWrap>
        <KindOfMeat onClick={() => handleFilterClick("0")}>
          <span>전체</span>
        </KindOfMeat>
        <KindOfMeat onClick={() => handleFilterClick("1")}>
          <span>돼지</span>
        </KindOfMeat>
        <KindOfMeat onClick={() => handleFilterClick("2")}>
          <span>소</span>
        </KindOfMeat>
        <KindOfMeat onClick={() => handleFilterClick("3")}>
          <span>닭</span>
        </KindOfMeat>
        <KindOfMeat onClick={() => handleFilterClick("4")}>
          <span>오리</span>
        </KindOfMeat>
        <KindOfMeat onClick={() => handleFilterClick("5")}>
          <span>양</span>
        </KindOfMeat>
        <KindOfMeat onClick={() => handleFilterClick("6")}>
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
      {/* 
      // ! 최신순, 인기순(북마크 개수) 순
      */}
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
      {loading ? <Loading /> : <GCardComponent data={GlistData} />}
      <ListMoreViewBtnWrap>
        <ListMoreViewBtn>
          <span>더보기</span>
        </ListMoreViewBtn>
      </ListMoreViewBtnWrap>
    </ListWrap>
  );
};

export default MeatListPage;
