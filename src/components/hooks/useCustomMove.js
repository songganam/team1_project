import React from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { getNum } from "../util/utils";

const useCustomMove = () => {
  // path hook
  const navigate = useNavigate();
  // query 알아내기, 읽기
  const [urlSearchParams, setUrlSearchPrams] = useSearchParams();
  // 현재 page 번호
  const page = urlSearchParams.get("page")
    ? parseInt(urlSearchParams.get("page"))
    : 1;
  // 현재 search
  const search = urlSearchParams.get("search")
    ? parseInt(urlSearchParams.get("search"))
    : "";
  // querystring 만들기
  const queryStrDefault = createSearchParams({ page, search }).toString();
  // to list
  const moveToList = pageParam => {
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, page);

      // 쿼리 만들기
      queryStr = createSearchParams({
        page: pageNum,
      }).toString();
    } else {
      queryStr = queryStrDefault;
    }
    navigate({ pathname: "../list", search: queryStr });
  };
  // to modify
  const moveToModify = num => {
    navigate({ pathname: `../modify/${num}`, search: queryStrDefault });
  };
  // to read
  const moveToRead = num => {
    navigate({ pathname: `../read/${num}`, search: queryStrDefault });
  };
  return { moveToList, moveToModify, moveToRead, page };
};

export default useCustomMove;
