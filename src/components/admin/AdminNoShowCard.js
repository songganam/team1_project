import React, { useEffect, useState } from "react";
import {
  AdminNoshowCardWrapper,
  AdminNoshowContent,
} from "./styles/AdminNoshowCardStyle";
import { getNoShow } from "../../api/adminBookApi";
import useCustomMy from "../my/hooks/useCustomMy";
import { AdminMoreViewButton } from "./styles/AdminMeatBookCardStyle";

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
  const { page, moveToNoShowPage } = useCustomMy();
  const [noShowData, setNoShowData] = useState({
    count: 0,
    ownerNoShowList: [],
  });

  // 노쇼 관리 정보 불러오기 (GET)
  useEffect(() => {
    const param = { page };
    getNoShow({ param, successFn, failFn, errorFn });
  }, [page]);

  // const successFn = result => {
  //   setNoShowData(result);
  //   console.log(result);
  // };

  const successFn = result => {
    const updatedList = noShowData?.ownerNoShowList?.concat(
      result.ownerNoShowList,
    );
    setNoShowData({
      ...noShowData,
      ownerNoShowList: updatedList,
    });
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

  // 예약 관리 카드 더보기 (페이지)
  const handleChangeNoShowBook = () => {
    moveToNoShowPage({ page: page + 1 });
  };

  return (
    <>
      {noShowData &&
      noShowData?.ownerNoShowList &&
      noShowData?.ownerNoShowList.length > 0 ? (
        noShowData?.ownerNoShowList.map((noShowData, index) => (
          <AdminNoshowCardWrapper key={index}>
            <AdminNoshowContent>
              <b>예약자명</b>
              <span>{noShowData?.name}</span>
              <b>에약일시</b>
              <span>{formatDate(noShowData?.date)}</span>
              <b>인원 수</b>
              <span>{noShowData?.headCount}</span>
            </AdminNoshowContent>
          </AdminNoshowCardWrapper>
        ))
      ) : (
        <p></p>
      )}
      <AdminMoreViewButton onClick={handleChangeNoShowBook}>
        <span>더보기</span>
      </AdminMoreViewButton>
    </>
  );
};

export default AdminNoShowCard;
