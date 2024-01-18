import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { getNum } from "../util/utils";

const useCustomMove = () => {
  // navigate (패스이동 hook)
  const navigate = useNavigate();
  // 쿼리 알아내기
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();

  // 현재 목록의 페이지 번호
  const page = urlSearchParams.get("page")
    ? parseInt(urlSearchParams.get("page"))
    : 1;

  // 페이지당 보여줄 개수
  const size = urlSearchParams.get("size")
    ? parseInt(urlSearchParams.get("size"))
    : 10;

  // 쿼리스트링 만들기
  const queryStrDefault = createSearchParams({ page, size }).toString();

  // 목록으로 가기 기능 만들기
  // pageParam 이 있으면 pageParam 으로 이동
  // pageParam 이 없으면 1 페이지로 이동

  const moveToList = pageParam => {
    let queryStr = "";

    if (pageParam) {
      // page 와  size 가 있다면
      const pageNum = getNum(pageParam.page, page);
      const sizeNum = getNum(pageParam.size, size);
      // 쿼리만들기
      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
    } else {
      queryStr = queryStrDefault;
    }

    navigate({ pathname: "../list", search: queryStr });
  };

  // 수정창 이동하기
  const moveToModify = num => {
    navigate({ pathname: `../modify/${num}`, search: queryStrDefault });
  };

  // 상세 내용 보기
  const moveToRead = num => {
    navigate({ pathname: `../read/${num}`, search: queryStrDefault });
  };

  return { moveToList, moveToModify, page, size, moveToRead };
};
export default useCustomMove;
