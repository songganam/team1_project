import React from "react";
import {
  AdiminButBookCardContent,
  AdminButBookCardBookButton,
  AdminButBookCardInfo,
  AdminButBookCardTitle,
  AdminButBookCardWrapper,
} from "./styles/AdminButcherBookCardStyle";
import Button from "../button/Button";

// 정육점 예약 관리 카드
const AdminButcherBookCard = () => {
  return (
    <AdminButBookCardWrapper>
      <AdminButBookCardInfo>
        <AdminButBookCardTitle>
          <li>예약자명</li>
          <li>예약일시</li>
          <li>인원 수</li>
          <li>요청사항</li>
        </AdminButBookCardTitle>
        <AdiminButBookCardContent>
          <li>내용</li>
          <li>내용</li>
          <li>내용</li>
          <li>내용</li>
        </AdiminButBookCardContent>
      </AdminButBookCardInfo>
      <AdminButBookCardBookButton>
        <Button bttext="예약거부"></Button>
        <Button bttext="예약확정"></Button>
      </AdminButBookCardBookButton>
    </AdminButBookCardWrapper>
  );
};

export default AdminButcherBookCard;
