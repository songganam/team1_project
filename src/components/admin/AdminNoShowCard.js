import React from "react";
import {
  AdminNoshowCardWrapper,
  AdminNoshowContent,
} from "./styles/AdminNoshowCardStyle";

const AdminNoShowCard = () => {
  return (
    <AdminNoshowCardWrapper>
      <AdminNoshowContent>
        <b>예약자명</b>
        <span>내용</span>
        <b>에약일시</b>
        <span>내용</span>
        <b>인원 수</b>
        <span>내용</span>
      </AdminNoshowContent>
    </AdminNoshowCardWrapper>
  );
};

export default AdminNoShowCard;
