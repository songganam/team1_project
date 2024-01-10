import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";
import { Wrapper } from "../../styles/common/LayoutStyles";

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
      <Wrapper>
        <div>
          <h1>고깃집찾기</h1>
          <div>
            <Outlet />
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default GogiPage;
