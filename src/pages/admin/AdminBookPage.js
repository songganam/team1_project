import React from "react";
import AdminMeatBookCard from "../../components/admin/AdminMeatBookCard";
import AdminNoShowCard from "../../components/admin/AdminNoShowCard";
import {
  AdminBookCardBt,
  AdminBookInner,
  AdminBookPageContent,
  AdminBookPageWrapper,
  AdminNoShowCardBt,
  AdminNoShowInner,
  NavStyle,
} from "./styles/AdminBookpageStyle";
import Button from "../../components/button/Button";
import AdminButcherBookCard from "../../components/admin/AdminButcherBookCard";
import { useRecoilState } from "recoil";
import { atomAdminState } from "../../atom/atomAdminState";

const AdminBookPage = () => {
  const [adminState, setAdminState] = useRecoilState(atomAdminState);

  return (
    <AdminBookPageWrapper>
      <NavStyle>
        <div className="page-title">예약 관리</div>
        <div>
          <Button bttext="저장" />
        </div>
      </NavStyle>
      <AdminBookPageContent>
        <AdminBookInner>
          <p>신규 예약 목록</p>
          <AdminBookCardBt>
            {adminState.checkShop === 0 ? (
              <AdminMeatBookCard />
            ) : (
              <AdminButcherBookCard />
            )}
          </AdminBookCardBt>
        </AdminBookInner>
        <AdminNoShowInner>
          <p>노쇼 목록</p>
          <AdminNoShowCardBt>
            <AdminNoShowCard></AdminNoShowCard>
            <Button bttext="더보기"></Button>
          </AdminNoShowCardBt>
        </AdminNoShowInner>
      </AdminBookPageContent>
    </AdminBookPageWrapper>
  );
};

export default AdminBookPage;
