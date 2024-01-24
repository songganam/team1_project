import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { getNum, getSearch } from "../../../util/utils";
import useModal from "./useModal";
import { useState } from "react";
const useCustomHook = () => {
  const navigate = useNavigate();
  const [urlSearchParams, setUrlSearchPrams] = useSearchParams();
  const { isModal, openModal, closeModal, moveToLogin } = useModal();
  const page = urlSearchParams.get("page")
    ? parseInt(urlSearchParams.get("page"))
    : 1;
  const search = urlSearchParams.get("search")
    ? parseInt(urlSearchParams.get("search"))
    : "";
  const category = urlSearchParams.get("category")
    ? parseInt(urlSearchParams.get("category"))
    : 0;
  const defaultQueryString = createSearchParams({
    page,
    search,
    category,
  }).toString();

  const MoveToList = CategoryParam => {
    let queryStr = "";
    if (CategoryParam) {
      const categoryNum = getNum(CategoryParam.category, category);
      queryStr = createSearchParams({
        category: categoryNum,
      }).toString();
    } else {
      queryStr = defaultQueryString;
    }
    // ! category
    navigate({ pathname: "../list", search: queryStr });
  };
  // ! Read Page hook
  const moveToRead = ishop => {
    navigate({ pathname: `../detail/${ishop}`, search: defaultQueryString });
  };
  // ! Read Page hook
  const moveToReser = ishop => {
    navigate({
      pathname: `../reservation/${ishop}`,
      search: defaultQueryString,
    });
  };

  const [refresh, setRefresh] = useState(false);

  const moveToSearch = SearchParam => {
    let queryStr = "";
    if (SearchParam) {
      const SearchStr = getNum(SearchParam.search, search);
      queryStr = createSearchParams({
        search: SearchStr,
      }).toString();
      console.log("queryStr:", queryStr);
      setRefresh(!refresh);
    } else {
      queryStr = defaultQueryString;
    }
    navigate({ pathname: "../list", search: queryStr });
  };

  return {
    page,
    search,
    category,
    MoveToList,
    moveToRead,
    moveToSearch,
    refresh,
    isModal,
    openModal,
    closeModal,
    moveToLogin,
    moveToReser,
  };
};
export default useCustomHook;
