import { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { getNum } from "../../../util/utils";
import useModal from "./useModal";
import useSelectModal from "./useSelectModal";
import useCustomLogin from "./useCustomLogin";
import useEmptyModal from "./useEmptyModal";
const useCustomHook = () => {
  const navigate = useNavigate();
  const [urlSearchParams, setUrlSearchPrams] = useSearchParams();
  const { isModal, openModal, closeModal, moveToLogin } = useModal();
  const { isLogin } = useCustomLogin();
  const {
    isSelectModal,
    openSelectModal,
    confirmSelectModal,
    cancelSelectModal,
  } = useSelectModal();
  const { isEmptyModal, openEmptyModal, closeEmptyModal } = useEmptyModal();

  const page = urlSearchParams.get("page")
    ? parseInt(urlSearchParams.get("page"))
    : 1;
  const search = urlSearchParams.get("search") || "";
  const category = urlSearchParams.get("category")
    ? parseInt(urlSearchParams.get("category"))
    : 0;
  const defaultQueryString = createSearchParams({
    page,
    search,
    category,
  }).toString();

  const MoveToPage = PageParam => {
    let queryStr = "";
    if (PageParam) {
      const PageNum = getNum(PageParam.page, page);
      queryStr = createSearchParams({
        page: PageNum,
      }).toString();
    } else {
      queryStr = defaultQueryString;
    }
    // ! category
    navigate({ pathname: "../list", search: queryStr });
  };

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
  // ! GO B ReserPage
  const moveToBReser = (e, ibutcher, name) => {
    e.stopPropagation();
    if (isLogin) {
      navigate({
        pathname: `../../butcher/pickup/${ibutcher}`,
        search: `name=${name}&${defaultQueryString}`,
      });
      // console.log("넘어간드아", menuList, name, ibutcher);
    } else {
      openModal("로그인 필요", "로그인이 필요한 서비스입니다.", moveToLogin);
    }
    console.log(name);
  };

  const moveToReview = (ireser, checkShop, name, ishop) => {
    console.log(name);
    navigate({
      pathname: `../../meat/review/${ireser}`,
      search: `name=${name}&checkShop=${checkShop}&ishop=${ishop}&${defaultQueryString}`,
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
    MoveToPage,
    moveToReview,
    isSelectModal,
    openSelectModal,
    confirmSelectModal,
    cancelSelectModal,
    moveToBReser,
    openEmptyModal,
    isEmptyModal,
    closeEmptyModal,
  };
};
export default useCustomHook;
