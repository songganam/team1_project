import React, { useEffect, useState } from "react";
import StoreCard from "../../components/common/StoreCard";
import { MeatGo } from "../../api/meatApi";

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
      <h2>고깃집 찾기</h2>
      <h3>고기 자체로 행복이 되는 순간</h3>
      <StoreCard data={meatMenu} />
    </div>
  );
};

export default GlistPage;
