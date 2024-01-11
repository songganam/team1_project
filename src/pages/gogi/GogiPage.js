import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";
import { Wrapper } from "../../styles/common/LayoutStyles";
import TitleHeader from "../../components/titleheader/TitleHeader";

// 고깃집 메인 페이지입니다.
const GogiPage = () => {
  // 패스 이동
  const navigate = useNavigate();

  const handleClickGbook = () => {
    navigate("/gogi/gbook");
  };
  const handleClickGlist = () => {
    navigate("/gogi/glist");
  };
  const handleClickGread = () => {
    navigate("/gogi/gread");
  };
  const handleClickGadd = () => {
    navigate("/gogi/gadd");
  };
  const handleClickGmodify = () => {
    navigate("/gogi/gmodify");
  };

  return (
    <Layout>
      <TitleHeader
        timg="https://picsum.photos/1920/215/?category=meat"
        tname="고깃집찾기"
        tcontent="고기자체로 행복이 되는 공간"
      ></TitleHeader>
      <Wrapper>
        <div>
          <div>
            <Outlet />
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default GogiPage;
