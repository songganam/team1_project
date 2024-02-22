import React from "react";
import {
  AdminNoshowCardWrapper,
  AdminNoshowContent,
} from "./styles/AdminNoshowCardStyle";

const AdminNoShowCard = () => {
  return (
    <AdminNoshowCardWrapper>
      <AdminNoshowContent>
        <p>예약자명</p>
        <span>내용</span>
        <p>에약일시</p>
        <span>내용</span>
        <p>인원 수</p>
        <span>내용</span>
      </AdminNoshowContent>
    </AdminNoshowCardWrapper>
  );
};

export default AdminNoShowCard;
