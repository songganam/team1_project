import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import AdminLayout from "../../layouts/AdminLayout";
import { ColorStyle } from "../../styles/common/CommonStyle";
import {
  AdiminPageMenuBar,
  AdminPageContent,
  AdminPageData,
  AdminPageMenu,
  AdminPageWrapper,
} from "./styles/AdminPageStyle";

const AdminPage = () => {
  // 패스 이동
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("/admin/info");

  // 매장 정보 관리 페이지
  const handleClickAdInfo = () => {
    navigate("/admin/info");
    setActiveButton("/admin/info");
  };

  // 매장 메뉴 관리 페이지
  const handleClickAdMenu = () => {
    navigate("/admin/menu");
    setActiveButton("/admin/menu");
  };

  // 매장 예약 관리 페이지
  const handleClickAdBook = () => {
    navigate("/admin/book");
    setActiveButton("/admin/book");
  };
  const handleClickAdNoshow = () => {
    navigate("/admin/noshow");
    setActiveButton("/admin/noshow");
  };

  // 매장 리뷰 관리 페이지
  const handleClickAdReview = () => {
    navigate("/admin/review");
    setActiveButton("/admin/review");
  };

  // 매장 분석 페이지
  const handleClickAdDoc = () => {
    navigate("/admin/doc");
    setActiveButton("/admin/doc");
  };

  return (
    <AdminLayout>
      <AdminPageWrapper>
        <AdminPageData>
          <AdiminPageMenuBar>
            <AdminPageMenu>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  width: "130px",
                  height: "45px",
                }}
              >
                {activeButton === "/admin/info" ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/nav.svg`}
                  />
                ) : null}
                <button
                  onClick={handleClickAdInfo}
                  style={{
                    color:
                      activeButton === "/admin/info"
                        ? `${ColorStyle.grayScale}`
                        : `${ColorStyle.g600}`,
                  }}
                >
                  매장 정보 관리
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  width: "130px",
                  height: "45px",
                }}
              >
                {activeButton === "/admin/menu" ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/nav.svg`}
                  />
                ) : null}
                <button
                  onClick={handleClickAdMenu}
                  style={{
                    color:
                      activeButton === "/admin/menu"
                        ? `${ColorStyle.grayScale}`
                        : `${ColorStyle.g600}`,
                  }}
                >
                  메뉴 관리
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  width: "130px",
                  height: "45px",
                }}
              >
                {activeButton === "/admin/book" ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/nav.svg`}
                  />
                ) : null}
                <button
                  onClick={handleClickAdBook}
                  style={{
                    color:
                      activeButton === "/admin/book"
                        ? `${ColorStyle.grayScale}`
                        : `${ColorStyle.g600}`,
                  }}
                >
                  예약 관리
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  width: "130px",
                  height: "45px",
                }}
              >
                {activeButton === "/admin/noshow" ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/nav.svg`}
                  />
                ) : null}
                <button
                  onClick={handleClickAdNoshow}
                  style={{
                    color:
                      activeButton === "/admin/noshow"
                        ? `${ColorStyle.grayScale}`
                        : `${ColorStyle.g600}`,
                  }}
                >
                  노쇼 관리
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  width: "130px",
                  height: "45px",
                }}
              >
                {activeButton === "/admin/review" ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/nav.svg`}
                  />
                ) : null}
                <button
                  onClick={handleClickAdReview}
                  style={{
                    color:
                      activeButton === "/admin/review"
                        ? `${ColorStyle.grayScale}`
                        : `${ColorStyle.g600}`,
                  }}
                >
                  리뷰 관리
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  width: "130px",
                  height: "45px",
                }}
              >
                {activeButton === "/admin/doc" ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/nav.svg`}
                  />
                ) : null}
                <button
                  onClick={handleClickAdDoc}
                  style={{
                    color:
                      activeButton === "/admin/doc"
                        ? `${ColorStyle.grayScale}`
                        : `${ColorStyle.g600}`,
                  }}
                >
                  매장 분석
                </button>
              </div>
            </AdminPageMenu>
          </AdiminPageMenuBar>
          <AdminPageContent>
            <Outlet />
          </AdminPageContent>
        </AdminPageData>
      </AdminPageWrapper>
    </AdminLayout>
  );
};

export default AdminPage;
