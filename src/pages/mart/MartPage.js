import React from "react";
import Layout from "../../layouts/Layout";
import { Outlet, useNavigate } from "react-router-dom";

// 정육점 메인 페이지입니다.
const MartPage = () => {
  // 패스 이동
  const navigate = useNavigate();

  const hnadleClickMbook = () => {
    navigate("/mart/mbook");
  };
  const hnadleClickMlist = () => {
    navigate("/mart/mlist");
  };
  const hnadleClickMread = () => {
    navigate("/mart/mread");
  };
  const handleClickMadd = () => {
    navigate("/mart/madd");
  };
  const handleClickMmodify = () => {
    navigate("/mart/mmodify");
  };

  return (
    <Layout>
      <div>
        <h1>정육점찾기</h1>
        <button
          onClick={() => {
            hnadleClickMbook();
          }}
        >
          정육점 예약하기
        </button>
        <button
          onClick={() => {
            hnadleClickMlist();
          }}
        >
          정육점 목록
        </button>
        <button
          onClick={() => {
            hnadleClickMread();
          }}
        >
          정육점 정보 상세보기
        </button>
        <button
          onClick={() => {
            handleClickMadd();
          }}
        >
          고깃집 리뷰 쓰기
        </button>
        <button
          onClick={() => {
            handleClickMmodify();
          }}
        >
          고깃집 리뷰 수정하기
        </button>
        <div>
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default MartPage;
