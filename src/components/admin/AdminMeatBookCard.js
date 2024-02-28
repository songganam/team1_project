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
import { useQuery } from "@tanstack/react-query";

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
  const params = { page };

  // const { data } = useQuery({
  //   queryKey: ["admin/book", params],
  //   queryFn: () => getAdminMeatBook({ params }),
  // });

  // ! 리엑트 쿼리 방법
  // const { data } = useQuery({
  //   queryKey: ["admin/book", params],
  //   queryFn: () => getAdminMeatBook({ params }),
  //   // staleTime: 1000 * 60,
  //   // cacheTime: 1500 * 60,
  // });

  // const adminMeatBookData = data || initState;

  // console.log("input data ", adminMeatBookData);

  // console.log(
  //   "headCount",
  //   adminMeatBookData?.ownerReservationList[0].headCount,
  // );

  const [adminMeatBookData, setAdminMeatBookData] = useState(initState);

  // 예약 관리 정보 불러오기 (GET)
  useEffect(() => {
    const params = { page };
    getAdminMeatBook({ params, successFn, failFn, errorFn });
    console.log("호출된 데이터UE ", adminMeatBookData);
  }, [page]);

  const successFn = result => {
    setAdminMeatBookData(adminMeatBookData);
    console.log("호출된 데이터SF ", adminMeatBookData);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  // 예약 관리 정보 페이지 이동
  const handleChangeAdminBook = e => {
    moveToAdminBookChange(e);
  };

  return (
    <>
      <AdminMeatBookCardWrapper>
        <AdminMeatBookCardInfo>
          <AdminMeatBookCardTitle>
            <li>예약자명</li>
            <li>예약일시</li>
            <li>인원 수</li>
            <li>요청사항</li>
          </AdminMeatBookCardTitle>
          <AdiminMeatBookCardContent>
            <li>{adminMeatBookData?.ownerReservationList[0].name}</li>
            <li>{adminMeatBookData?.ownerReservationList[0].date}</li>
            <li>{adminMeatBookData?.ownerReservationList[0].headCount}</li>
            <li>{adminMeatBookData?.ownerReservationList[0].request}</li>
          </AdiminMeatBookCardContent>
        </AdminMeatBookCardInfo>
        <AdminMeatBookCardBookButton>
          <Button bttext="예약거부"></Button>
          <Button bttext="예약확정"></Button>
        </AdminMeatBookCardBookButton>
      </AdminMeatBookCardWrapper>
      <AdminMoreViewButton onClick={handleChangeAdminBook}>
        <span>더보기</span>
      </AdminMoreViewButton>
    </>
  );
};

export default AdminMeatBookCard;
