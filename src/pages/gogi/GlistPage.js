import React, { useEffect, useState } from "react";
import { MeatGo, getGList } from "../../api/GApi";
import GCard from "../../components/gogi/GCard";
import useCustomMove from "../../components/hooks/useCustomMove";

// 고깃집 목록보기 페이지입니다.
const GlistPage = () => {
  // ! InitState (초기 상태)
  const initState = {
    ishop: 0,
    name: "",
    location: "",
    pics: [""],
    x: "",
    y: "",
  };
  const [GlistData, setGlistData] = useState(initState);
  const { page } = useCustomMove();
  useEffect(() => {
    const param = { page };
    getGList({ param, successFn, failFn, errorFn });
  }, [page]);

  const successFn = result => {
    setGlistData(result);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  return (
    <div>
      <div>
        <form>
          <input type="text" />
          <button>검색</button>
        </form>
      </div>

      <div>
        <div>
          <button>ALL</button>
          <button>돼지</button>
          <button>소</button>
          <button>닭</button>
          <button>오리</button>
          <button>양</button>
          <button>해산물(준비중)</button>
        </div>
        <div>
          <select>
            <option value={1}>인기순</option>
            <option value={1}>최신순</option>
          </select>
        </div>
      </div>
      {/* <GCard data={GlistData} /> */}
      {/* 공사중 지도 페이지 입니다. */}
    </div>
  );
};

export default GlistPage;
