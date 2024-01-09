import React, { useEffect, useState } from "react";
import StoreCard from "../../components/common/StoreCard";
import { MeatGo } from "../../api/meatApi";
import { SubTitle, Title } from "../../styles/common/CommonComponentStyle";

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
          <button>모두보기</button>
          <button>주차</button>
          <button>키즈존</button>
          <button>단체석</button>
          <button>데이트</button>
          <button>가족모임</button>
          <button>소개팅</button>
        </div>
      </div>
      <StoreCard data={meatMenu} />
    </div>
  );
};

export default GlistPage;
