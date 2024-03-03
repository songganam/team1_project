import React, { useEffect, useState } from "react";
import {
  AdiminButBookCardContent,
  AdminButBookCardBookButton,
  AdminButBookCardInfo,
  AdminButBookCardTitle,
  AdminButBookCardWrapper,
} from "./styles/AdminButcherBookCardStyle";
import Button from "../button/Button";
import { getAdminButcherBook } from "../../api/adminBookApi";
import useCustomMy from "../my/hooks/useCustomMy";

// 예약 관리 카드 (정육점) 초기값
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
      pickupList: [
        {
          menuCount: 0,
          ibutMenu: 0,
          menu: "",
        },
      ],
    },
  ],
};

// 정육점 예약 관리 카드
const AdminButcherBookCard = () => {
  const { page } = useCustomMy();
  const [adminButcherBookData, setAdminButcherBookData] = useState(initState);

  // 정육점 예약 관리 정보 불러오기 (GET)
  useEffect(() => {
    const param = { page };
    getAdminButcherBook({ param, successFn, failFn, errorFn });
  }, [page]);

  const successFn = result => {
    setAdminButcherBookData(result);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  return (
    <>
      {/* {adminButcherBookData &&
      adminButcherBookData?.ownerReservationList &&
      adminButcherBookData?.ownerReservationList.length > 0 ? (
        adminButcherBookData?.ownerReservationList.map((reservation, index) => (
          <AdminButBookCardWrapper key={index}>
            <AdminButBookCardInfo>
              <AdminButBookCardTitle>
                <li>예약자명</li>
                <li>픽업일시</li>
              </AdminButBookCardTitle>
              <AdiminButBookCardContent>
                <li>{reservation.name}</li>
                <li>{reservation.date}</li>
                <ul>
                  {reservation.pickupList.map((pickupItem, pickupIndex) => (
                    <div key={pickupIndex}>
                      <li>{pickupItem.menu}</li>
                      <li>{pickupItem.menuCount}</li>
                    </div>
                  ))}
                </ul>
              </AdiminButBookCardContent>
            </AdminButBookCardInfo>
            <AdminButBookCardBookButton>
              <Button bttext="예약거부"></Button>
              <Button bttext="예약확정"></Button>
            </AdminButBookCardBookButton>
          </AdminButBookCardWrapper>
        ))
      ) : (
        <p></p>
      )} */}
    </>
  );
};

export default AdminButcherBookCard;
