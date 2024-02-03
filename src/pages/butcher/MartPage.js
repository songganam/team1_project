import React from "react";
import Layout from "../../layouts/Layout";
import { Outlet, useNavigate } from "react-router-dom";
import TitleHeader from "../../components/titleheader/TitleHeader";

// 정육점 메인 페이지입니다.
const MartPage = () => {
  // 패스 이동
  const navigate = useNavigate();

  const hnadleClickMbook = () => {
    navigate("/mart/book");
  };
  const hnadleClickMlist = () => {
    navigate("/mart/list");
  };
  const hnadleClickMread = () => {
    navigate("/mart/read");
  };
  const handleClickMadd = () => {
    navigate("/mart/add");
  };
  const handleClickMmodify = () => {
    navigate("/mart/modify");
  };
  // ! 페이지별 제어
  let timg, tname, tcontent;
  let showTitleHeader = false;
  switch (location.pathname) {
    case `/butcher/list`:
      timg = process.env.PUBLIC_URL + `/assets/images/butcher_header.png`;
      tname = "정육점찾기";
      tcontent = "고기자체로 행복이 되는 공간";
      showTitleHeader = true;
      break;
  }
  // ! Title Header

  return (
    <Layout>
      {showTitleHeader && (
        <TitleHeader
          timg={timg}
          tname={tname}
          tcontent={tcontent}
        ></TitleHeader>
      )}

      <div>
        <Outlet />
      </div>
    </Layout>
  );
};

export default MartPage;
