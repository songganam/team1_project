import React from "react";
import {
  AdiminBookCardContent,
  AdminBookCardBookButton,
  AdminBookCardInfo,
  AdminBookCardTitle,
  AdminBookCardWrapper,
} from "./styles/AdminBookCardStyle";
import Button from "../button/Button";

const AdminBookCard = () => {
  return (
    <AdminBookCardWrapper>
      <AdminBookCardInfo>
        <AdminBookCardTitle>
          <li>예약자명</li>
          <li>예약일시</li>
          <li>인원 수</li>
          <li>요청사항</li>
        </AdminBookCardTitle>
        <AdiminBookCardContent>
          <li>내용</li>
          <li>내용</li>
          <li>내용</li>
          <li>내용</li>
        </AdiminBookCardContent>
      </AdminBookCardInfo>
      <AdminBookCardBookButton>
        <Button bttext="예약거부"></Button>
        <Button bttext="예약확정"></Button>
      </AdminBookCardBookButton>
    </AdminBookCardWrapper>
  );
};

export default AdminBookCard;
