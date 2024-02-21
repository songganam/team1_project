import { useQuery, useQueryClient } from "@tanstack/react-query";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router";
import { getGListTS } from "../../api/typeApi";
import Fetching from "../../components/common/Fetching";
import ResultModal from "../../components/common/ResultModal";
import ListCard from "../../components/meat/TSCardComponent";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import { List, ListQuery } from "./Meat";
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

const initState: List[] = [
  {
    ishop: 0,
    name: "",
    location: "",
    count: 0,
    pics: [""],
    facilities: [""],
  },
];
const MeatListPage = () => {
  const {
    page,
    search,
    category,
    filter,
    MoveToList,
    MoveToPage,
    MoveToFilter,
    moveToSearch,
    refresh,
    isModal,
    openModal,
    closeModal,
  } = useCustomHook();
  // const [GlistData, setGlistData] = useState(initState);
  //   const { ishop }: PropsIshop = useParams();

  const [fetching, setFetching] = useState(false);
  // const [selectFilter, setSelectFilter] = useState("lastest");
  const [cateSearch, setCateSearch] = useState("");

  const params: ListQuery = { page, search, category, filter };

  // @COMMENT React-query
  const { data, isFetching } = useQuery({
    queryKey: ["meat/list", params, refresh],
    queryFn: () => getGListTS({ params }),
    staleTime: 1000 * 60,
  });
  const serverData = data || initState;
  console.log("serverData", serverData);
  const clinet = useQueryClient();

  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const handleFilterClick = (category: MouseEvent<HTMLDivElement> | number) => {
    if (typeof category === "number")
      if (category !== selectedCategory) {
        if (category == 6) {
          openModal("해산물", "해산물 메뉴는 준비중입니다.", () => {
            navigate(-1), closeModal();
          });
        }
        MoveToList({ page: 1, search: "", category });
        setSelectedCategory(category);
      }
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCateSearch(e.target.value);
  };
  const handleSearchSubmit = (e: MouseEvent<HTMLDivElement>) => {
    // setGlistData([]);
    // serverData([]);
    moveToSearch({ page: 1, search: cateSearch });
    e.preventDefault();
  };
  const handleMoreView = () => {
    MoveToPage({ page: page + 1 });
  };

  // @COMMENT FIlter
  const handleClickFilter = (
    filter: MouseEvent<HTMLButtonElement> | number,
  ) => {
    MoveToFilter({ filter });
  };
  return (
    <ListWrap>
      {fetching ? <Fetching /> : null}
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
        <KindOfMeat onClick={() => handleFilterClick(0)}>
          <span>전체</span>
        </KindOfMeat>
        <KindOfMeat onClick={() => handleFilterClick(1)}>
          <span>돼지</span>
        </KindOfMeat>
        <KindOfMeat onClick={() => handleFilterClick(2)}>
          <span>소</span>
        </KindOfMeat>
        <KindOfMeat onClick={() => handleFilterClick(3)}>
          <span>닭</span>
        </KindOfMeat>
        <KindOfMeat onClick={() => handleFilterClick(4)}>
          <span>오리</span>
        </KindOfMeat>
        <KindOfMeat onClick={() => handleFilterClick(5)}>
          <span>양</span>
        </KindOfMeat>
        <KindOfMeat onClick={() => handleFilterClick(6)}>
          <span>해산물</span>
        </KindOfMeat>
      </KindOfMeatWrap>
      {/* @COMMENT Filter Test */}
      <div>
        <button onClick={() => handleClickFilter(0)}>등록순</button>
        <button onClick={() => handleClickFilter(1)}>별점순</button>
        <button onClick={() => handleClickFilter(2)}>북마크순</button>
      </div>
      <form>
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
      </form>

      <ListCard serverData={serverData} />

      <ListMoreViewBtnWrap>
        <ListMoreViewBtn onClick={handleMoreView}>
          <span>더보기</span>
        </ListMoreViewBtn>
      </ListMoreViewBtnWrap>
    </ListWrap>
  );
};

export default MeatListPage;
