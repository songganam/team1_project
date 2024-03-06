import React, { useEffect, useState } from "react";
import {
  AdminNoshowCardWrapper,
  AdminNoshowContent,
} from "./styles/AdminNoshowCardStyle";
import { getNoShow } from "../../api/adminBookApi";
import useCustomMy from "../my/hooks/useCustomMy";

// 노쇼 관리 카드 (고깃집) 초기값
const initState = {
  count: 0,
  ownerNoShowList: [
    {
      iuser: 0,
      name: "",
      date: "",
      ireser: 0,
      count: 0,
      headCount: 0,
    },
  ],
};

// 노쇼 관리 카드
const AdminNoShowCard = () => {
  const { page } = useCustomMy();
  const [noShowData, setNoShowData] = useState(initState);

  // 노쇼 관리 정보 불러오기 (GET)
  useEffect(() => {
    const param = { page };
    getNoShow({ param, successFn, failFn, errorFn });
  }, [page]);
  const successFn = result => {
    setNoShowData(result);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };
  console.log(noShowData);

  // 날짜 형태 변환 함수
  const formatDate = dateString => {
    if (!dateString || isNaN(new Date(dateString))) {
      return "날짜 없음";
    }

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

  return (
    <>
      {noShowData &&
      noShowData?.ownerNoShowList &&
      noShowData?.ownerNoShowList.length > 0 ? (
        noShowData?.ownerNoShowList.map((noShowItem, index) => (
          <AdminNoshowCardWrapper key={index}>
            <AdminNoshowContent>
              <b>예약자명</b>
              <span>{noShowItem.name}</span>
              <b>에약일시</b>
              <span>{formatDate(noShowItem.date)}</span>
              <b>인원 수</b>
              <span>{noShowItem.headCount}</span>
            </AdminNoshowContent>
          </AdminNoshowCardWrapper>
        ))
      ) : (
        <p></p>
      )}
    </>
  );
};

export default AdminNoShowCard;
