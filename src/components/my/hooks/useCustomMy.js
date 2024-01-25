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
  const MoveToBookPage = PageParam => {
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
  const MoveToListPage = PageParam => {
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
  const MoveToReviewPage = PageParam => {
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

  return {
    page,
    isModal,
    openModal,
    closeModal,
    moveToLogin,
    MoveToBookPage,
    MoveToListPage,
    MoveToReviewPage,
  };
};
export default useCustomMy;
