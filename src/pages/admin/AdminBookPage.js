import React from "react";
import AdminBookCard from "../../components/admin/AdminBookCard";
import AdminNoShowCard from "../../components/admin/AdminNoShowCard";
import { AdminBookPageContent } from "./styles/AdminBookpageStyle";

const AdminBookPage = () => {
  return (
    <div>
      <h1>매장 예약 관리 페이지</h1>
      <AdminBookPageContent>
        <p>신규 예약 목록</p>
        <AdminBookCard></AdminBookCard>
        <p>노쇼 목록</p>
        <AdminNoShowCard></AdminNoShowCard>
      </AdminBookPageContent>
    </div>
  );
};

export default AdminBookPage;
