import React, { useEffect, useState } from "react";

import Button from "../button/Button";
import {
  AdiminMeatBookCardContent,
  AdminMeatBookCardBookButton,
  AdminMeatBookCardInfo,
  AdminMeatBookCardTitle,
  AdminMeatBookCardWrapper,
  AdminMoreViewButton,
} from "./styles/AdminMeatBookCardStyle";
import { getAdminMeatBook } from "../../api/adminBookApi";
import useCustomMy from "../my/hooks/useCustomMy";

// 예약 관리 카드 (고깃집) 초기값
const initState = {
  checkShop: 0,
  count: 0,
  ownerReservationList: [
    {
      ireser: 0,
      iuser: 0,
      name: "",
      date: "",
      headCount: 0,
      request: "",
    },
  ],
};

// 고깃집 예약 관리 카드
const AdminMeatBookCard = () => {
  const { page, moveToAdminBookChange } = useCustomMy();
  const [adminMeatBookData, setAdminMeatBookData] = useState(initState);

  // 예약 관리 정보 불러오기 (GET)
  useEffect(() => {
    const param = { page };
    getAdminMeatBook({ param, successFn, failFn, errorFn });
  }, [page]);

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

  // 날짜 형태 변환 함수
  const formatDate = dateString => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formattedDate = new Date(dateString).toLocaleString("ko-KR", options);
    return formattedDate;
  };

  // 예약 관리 카드 더보기 (페이지)
  const handleChangeAdminBook = e => {
    moveToAdminBookChange(e);
  };

  return (
    <>
      {adminMeatBookData?.ownerReservationList.map(
        (adminMeatBookData, index) => (
          <AdminMeatBookCardWrapper key={index}>
            <AdminMeatBookCardInfo>
              <AdminMeatBookCardTitle>
                <li>예약자명</li>
                <li>예약일시</li>
                <li>인원 수</li>
                <li>요청사항</li>
              </AdminMeatBookCardTitle>
              <AdiminMeatBookCardContent>
                <li>{adminMeatBookData.name}</li>
                <li>{formatDate(adminMeatBookData.date)}</li>
                <li>{adminMeatBookData.headCount}</li>
                <li>{adminMeatBookData.request}</li>
              </AdiminMeatBookCardContent>
            </AdminMeatBookCardInfo>
            <AdminMeatBookCardBookButton>
              <Button bttext="예약거부"></Button>
              <Button bttext="예약확정"></Button>
            </AdminMeatBookCardBookButton>
          </AdminMeatBookCardWrapper>
        ),
      )}
      <AdminMoreViewButton onClick={handleChangeAdminBook}>
        <span>더보기</span>
      </AdminMoreViewButton>
    </>
  );
};

export default AdminMeatBookCard;
