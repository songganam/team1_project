import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { getNum } from "../../../util/utils";
import useModal from "../../meat/hooks/useModal";

const useCustomMy = () => {
  const navigate = useNavigate();
  const [urlSearchParams, setUrlSearchPrams] = useSearchParams();
  const { isModal, openModal, closeModal, moveToLogin } = useModal();
  const page = urlSearchParams.get("page")
    ? parseInt(urlSearchParams.get("page"))
    : 1;

  const defaultQueryString = createSearchParams({
    page,
  }).toString();

  // 예약 페이지 더보기
  const moveToBookPage = PageParam => {
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
    navigate({ pathname: "../book", search: queryStr });
  };

  // 북마크 페이지 더보기
  const moveToListPage = PageParam => {
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

  // 리뷰 페이지 더보기
  const moveToReviewPage = PageParam => {
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
    navigate({ pathname: "../review", search: queryStr });
  };

  // 상세 페이지 이동
  const moveToDetail = ishop => {
    navigate({
      pathname: `../../meat/detail/${ishop}`,
      search: `${defaultQueryString}`,
    });
  };

  // 예약 변경 페이지 이동
  const moveToReserChange = (ireser, name, headCount, date, request) => {
    console.log(name);
    navigate({
      pathname: `../../meat/modify/${ireser}`,
      search: `name=${name}&headcount=${headCount}&date=${date}&request=${request}&${defaultQueryString}`,
    });
  };
  const moveToPickupChange = (ibutcher, name, headCount, date, request) => {
    console.log(name);
    navigate({
      pathname: `../../butcher/modify/${ibutcher}`,
      search: `name=${name}&headcount=${headCount}&date=${date}&request=${request}&${defaultQueryString}`,
    });
  };

  return {
    page,
    isModal,
    openModal,
    closeModal,
    moveToLogin,
    moveToBookPage,
    moveToListPage,
    moveToReviewPage,
    moveToDetail,
    moveToReserChange,
    moveToPickupChange,
  };
};
export default useCustomMy;
