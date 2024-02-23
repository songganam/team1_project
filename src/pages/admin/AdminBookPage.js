import React from "react";
import AdminBookCard from "../../components/admin/AdminBookCard";
import AdminNoShowCard from "../../components/admin/AdminNoShowCard";
import {
  AdminBookInner,
  AdminBookPageContent,
  AdminBookPageWrapper,
  AdminNoShowInner,
} from "./styles/AdminBookpageStyle";
import AdminHeader from "../../components/adminInfo/AdminHeader";
import Button from "../../components/button/Button";

const AdminBookPage = () => {
  return (
    <AdminBookPageWrapper>
      <AdminHeader title="예약 관리"></AdminHeader>
      <AdminBookPageContent>
        <AdminBookInner>
          <p>신규 예약 목록</p>
          <AdminBookCard></AdminBookCard>
          <Button bttext="더보기"></Button>
        </AdminBookInner>
        <AdminNoShowInner>
          <p>노쇼 목록</p>
          <AdminNoShowCard></AdminNoShowCard>
          <Button bttext="더보기"></Button>
        </AdminNoShowInner>
      </AdminBookPageContent>
    </AdminBookPageWrapper>
  );
};

export default AdminBookPage;
