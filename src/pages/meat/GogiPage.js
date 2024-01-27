import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";
import { Wrapper } from "../../styles/common/LayoutStyles";
import TitleHeader from "../../components/titleheader/TitleHeader";

// 고깃집 메인 페이지입니다.
const GogiPage = () => {
  // 패스 이동
  const navigate = useNavigate();

  const handleClickGbook = () => {
    navigate("/gogi/book");
  };
  const handleClickGlist = () => {
    navigate("/gogi/list");
  };
  const handleClickGread = () => {
    navigate("/gogi/read");
  };
  const handleClickGadd = () => {
    navigate("/gogi/add");
  };
  const handleClickGmodify = () => {
    navigate("/gogi/modify");
  };

  // ! 페이지별 제어
  let timg, tname, tcontent;
  let showTitleHeader = false;
  switch (location.pathname) {
    case `/gogi/list`:
      timg = "https://picsum.photos/1920/215/?category=meat";
      tname = "고깃집찾기";
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
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Layout>
  );
};

export default GogiPage;
