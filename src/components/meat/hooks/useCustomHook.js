import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { getNum } from "../../util/utils";
const useCustomHook = () => {
  const navigate = useNavigate();
  const [urlSearchParams, setUrlSearchPrams] = useSearchParams();
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

    // ! Read Page hook
  };
  const moveToRead = ishop => {
    navigate({ pathname: `../read/${ishop}`, search: defaultQueryString });
  };
  return { page, search, category, MoveToList, moveToRead };
};
export default useCustomHook;
