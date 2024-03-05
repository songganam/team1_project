import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import AdminLayout from "../../layouts/AdminLayout";
import { ColorStyle } from "../../styles/common/CommonStyle";
import {
  SupervisorPageContent,
  SupervisorPageData,
  SupervisorPageMenu,
  SupervisorPageMenuBar,
  SupervisorPageWrapper,
} from "./styles/SupervisorPageStyle";

const SupervisorPage = () => {
  // 패스 이동
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("/svisor/shop");

  //
  const handleClickSvShop = () => {
    navigate("/svisor/shop");
    setActiveButton("/svisor/shop");
  };

  // 매장 메뉴 관리 페이지
  const handleClickSvUser = () => {
    navigate("/svisor/user");
    setActiveButton("/svisor/user");
  };

  // 매장 예약 관리 페이지
  const handleClickSvReport = () => {
    navigate("/svisor/report");
    setActiveButton("/svisor/report");
  };

  // 매장 리뷰 관리 페이지
  const handleClickSvNotice = () => {
    navigate("/svisor/notice");
    setActiveButton("/svisor/notice");
  };

  return (
    <AdminLayout>
      <SupervisorPageWrapper>
        <SupervisorPageData>
          <SupervisorPageMenuBar>
            <SupervisorPageMenu>
              <button
                onClick={handleClickSvShop}
                style={{
                  color:
                    activeButton === "/svisor/shop"
                      ? `${ColorStyle.grayScale}`
                      : `${ColorStyle.g600}`,
                }}
              >
                매장 관리
              </button>
              <button
                onClick={handleClickSvUser}
                style={{
                  color:
                    activeButton === "/svisor/user"
                      ? `${ColorStyle.grayScale}`
                      : `${ColorStyle.g600}`,
                }}
              >
                유저 관리
              </button>
              <button
                onClick={handleClickSvReport}
                style={{
                  color:
                    activeButton === "/svisor/report"
                      ? `${ColorStyle.grayScale}`
                      : `${ColorStyle.g600}`,
                }}
              >
                신고 관리
              </button>
              {/* <button
                onClick={handleClickSvNotice}
                style={{
                  color:
                    activeButton === "/svisor/notice"
                      ? `${ColorStyle.grayScale}`
                      : `${ColorStyle.g600}`,
                }}
              >
                공지사항 등록
              </button> */}
            </SupervisorPageMenu>
          </SupervisorPageMenuBar>
          <SupervisorPageContent>
            <Outlet />
          </SupervisorPageContent>
        </SupervisorPageData>
      </SupervisorPageWrapper>
    </AdminLayout>
  );
};

export default SupervisorPage;
