import React, { useEffect, useState } from "react";

import Button from "../button/Button";
import {
  AdiminMeatBookCardContent,
  AdminMeatBookCardBookButton,
  AdminMeatBookCardInfo,
  AdminMeatBookCardTitle,
  AdminMeatBookCardWrapper,
} from "./styles/AdminMeatBookCardStyle";
import { getAdminMeatBook } from "../../api/adminBookApi";

// 예약 관리 카드 (고깃집) 초기값
const initialAdminMeatBook = {
  checkShop: "",
  ireser: "",
  iuser: "",
  name: "",
  date: "",
  headCount: "",
  request: "",
};

// 고깃집 예약 관리 카드
const AdminMeatBookCard = () => {
  const [adminMeatBookData, setAdminMeatBookData] =
    useState(initialAdminMeatBook);

  // 예약 정보 불러오기 (GET)
  useEffect(() => {
    const param = {};
    getAdminMeatBook({ param, successFn, failFn, errorFn });
  }, []);

  const successFn = result => {
    setAdminMeatBookData(result);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  return (
    <AdminMeatBookCardWrapper>
      <AdminMeatBookCardInfo>
        <AdminMeatBookCardTitle>
          <li>예약자명</li>
          <li>예약일시</li>
          <li>인원 수</li>
          <li>요청사항</li>
        </AdminMeatBookCardTitle>
        <AdiminMeatBookCardContent>
          <li>내용</li>
          <li>내용</li>
          <li>내용</li>
          <li>내용</li>
        </AdiminMeatBookCardContent>
      </AdminMeatBookCardInfo>
      <AdminMeatBookCardBookButton>
        <Button bttext="예약거부"></Button>
        <Button bttext="예약확정"></Button>
      </AdminMeatBookCardBookButton>
    </AdminMeatBookCardWrapper>
  );
};

export default AdminMeatBookCard;
