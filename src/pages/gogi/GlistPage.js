import React, { useEffect, useState } from "react";
import { MeatGo } from "../../api/meatApi";
import GCard from "../../components/common/GCard";
import { SubTitle } from "../../styles/common/GCardStyle";
// import { Map, MapMarker } from "react-kakao-maps-sdk";
// import { MapWrapper } from "./styles/GlistPageStyle";

// 고깃집 목록보기 페이지입니다.
const GlistPage = () => {
  const [meatMenu, setMeatMenu] = useState([]);

  useEffect(() => {
    const MeatData = async () => {
      try {
        const data = await MeatGo();
        setMeatMenu(data);
      } catch (error) {
        console.log(error);
      }
    };
    MeatData();
  }, []);
  return (
    <div>
      <div>
        {/* <Title>고깃집 찾기</Title> */}
        <SubTitle>고기 자체로 행복이 되는 순간</SubTitle>
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
      <GCard data={meatMenu} />
      {/* 공사중 지도 페이지 입니다. */}
    </div>
  );
};

export default GlistPage;
