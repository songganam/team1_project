import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getGList } from "../../api/meatApi";
import ResultModal from "../../components/common/ResultModal";
import Loading from "../../components/loading/Loading";
import GCardComponent from "../../components/meat/GCardComponent";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import {
  KindOfMeat,
  KindOfMeatWrap,
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
  const API_SERVER_HOST = "";
  const {
    page,
    search,
    category,
    MoveToList,
    MoveToPage,
    refresh,
    isModal,
    openModal,
    closeModal,
    moveToSearch,
  } = useCustomHook();
  const [GlistData, setGlistData] = useState([]);
  const { ishop } = useParams();
  const [loading, setLoading] = useState(false);
  // const [selectFilter, setSelectFilter] = useState("lastest");
  const [cateSearch, setCateSearch] = useState("");

  console.log("ref :", refresh);

  useEffect(() => {
    const param = { page, search, category };
    getGList({ param, successFn, failFn, errorFn });
  }, [page, search, category, refresh]);

  const successFn = result => {
    setLoading(false);
    setGlistData([...GlistData, ...result]);
    // setGlistData(result);
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
    if (category == 6) {
      openModal("해산물", "해산물 메뉴는 준비중입니다.", closeModal);
    }
    setGlistData([]);
    MoveToList({ page: 1, search: "", category });
  };
  const handleSearchChange = e => {
    setCateSearch(e.target.value);
  };
  const handleSearchSubmit = e => {
    setGlistData([]);
    moveToSearch({ page: 1, search: cateSearch });
    e.preventDefault();
  };
  const handleMoreView = () => {
    MoveToPage({ page: page + 1 });
  };
  return (
    <ListWrap>
      {isModal.isOpen && (
        <ResultModal
          title={isModal.title}
          content={isModal.content}
          callFn={isModal.callFn}
        />
      )}
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
          <SearchInput
            placeholder="고깃집을 검색해보세요"
            onChange={handleSearchChange}
          />
        </SearchBar>
        <SearchIconWrap onClick={handleSearchSubmit}>
          <img
            src={process.env.PUBLIC_URL + `/assets/images/search.svg`}
            alt=""
          />
        </SearchIconWrap>
      </SearchWrap>
      {/*     
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
      </ListFilter> */}
      {loading ? (
        <Loading />
      ) : (
        <GCardComponent data={GlistData} ishop={ishop} />
      )}
      <ListMoreViewBtnWrap>
        <ListMoreViewBtn onClick={handleMoreView}>
          <span>더보기</span>
        </ListMoreViewBtn>
      </ListMoreViewBtnWrap>
    </ListWrap>
  );
};

export default MeatListPage;
