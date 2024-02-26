import React from "react";
import AdminBookCard from "../../components/admin/AdminBookCard";
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

const AdminBookPage = () => {
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
            <AdminBookCard></AdminBookCard>
            <Button bttext="더보기"></Button>
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
