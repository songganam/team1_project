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
import {
  getAdminMeatBook,
  patchBookConfirm,
  patchRejectBook,
} from "../../api/adminBookApi";
import useCustomMy from "../my/hooks/useCustomMy";
import useModal from "../../hooks/useModal";
import SelectedModal from "../common/SelectedModal";

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
  const [bookToConfrim, setBookToConfrim] = useState(null);
  const [bookToReject, setBookToReject] = useState(null);

  // 모달창
  const { useResultModal, openModal, closeModal } = useModal();

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

  // 예약 확정 (PATCH)
  const handleConfirmBook = ireser => {
    const patchBookConfirmForm = {
      checkShop: adminMeatBookData.checkShop,
      ireser: ireser,
    };
    // 확정 전 확인 모달창
    setBookToConfrim(patchBookConfirmForm);
    openModal();
    console.log(patchBookConfirmForm);
  };

  const handleConfirmNewBook = () => {
    if (bookToConfrim) {
      const { checkShop, ireser } = bookToConfrim;
      // 확정 성공 시 리스트 업데이트
      const updatedMyBookList = adminMeatBookData.ownerReservationList.filter(
        book => book.ireser !== ireser,
      );
      setAdminMeatBookData(updatedMyBookList);
      patchBookConfirm({
        patchBookConfirmForm: bookToConfrim,
        successConfirmPatch,
        failConfrimPatch,
        errorConfrimPatch,
      });
      console.log(bookToConfrim);
      closeModal();
    }
  };

  const successConfirmPatch = patchResult => {
    console.log("예약 확정 성공", patchResult);
  };

  const failConfrimPatch = patchResult => {
    console.log("예약 확정 실패", patchResult);
  };

  const errorConfrimPatch = patchResult => {
    console.log("서버 오류", patchResult);
  };

  // 예약 거부 (PATCH)
  const handleRejectBook = (checkShop, ireser) => {
    const patchBookForm = {
      checkShop: checkShop,
      ireser: ireser,
    };
    // 삭제 전 확인 모달창
    setBookToReject(patchBookForm);
    openModal();
    console.log(patchBookForm);
  };

  const handleConfirmReject = () => {
    if (bookToReject) {
      const { checkShop, ireser } = bookToReject;
      // 삭제 성공 시 리스트 업데이트
      const updatedMyBookList = adminMeatBookData.ownerReservationList.filter(
        book => book.ireser !== ireser,
      );
      setAdminMeatBookData(updatedMyBookList);
      patchRejectBook({
        patchBookForm: bookToReject,
        successPatch,
        failPatch,
        errorPatch,
      });
      console.log(bookToReject);
      closeModal();
    }
  };

  const successPatch = patchResult => {
    console.log("예약 거부 성공", patchResult);
  };

  const failPatch = patchResult => {
    console.log("예약 거부 실패", patchResult);
  };

  const errorPatch = patchResult => {
    console.log("서버 오류", patchResult);
  };

  // 예약 관리 카드 더보기 (페이지)
  const handleChangeAdminBook = () => {
    moveToAdminBookChange({ page: page + 1 });
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

  return (
    <>
      {adminMeatBookData &&
      adminMeatBookData?.ownerReservationList &&
      adminMeatBookData?.ownerReservationList.length > 0 ? (
        adminMeatBookData?.ownerReservationList.map(
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
                <div
                  onClick={e =>
                    handleRejectBook(
                      adminMeatBookData.checkShop,
                      adminMeatBookData.ireser,
                    )
                  }
                >
                  <Button bttext="예약거부"></Button>
                </div>
                {useResultModal && (
                  <SelectedModal
                    title="예약 거부"
                    content="예약을 거부하시겠습니까?"
                    confirmFn={handleConfirmReject}
                    cancelFn={closeModal}
                  />
                )}
                <div>
                  <div
                    onClick={e => handleConfirmBook(adminMeatBookData.ireser)}
                  >
                    <Button bttext="예약확정"></Button>
                  </div>
                  {useResultModal && (
                    <SelectedModal
                      title="예약 확정"
                      content="예약을 확정하시겠습니까?"
                      confirmFn={handleConfirmNewBook}
                      cancelFn={closeModal}
                    />
                  )}
                </div>
              </AdminMeatBookCardBookButton>
            </AdminMeatBookCardWrapper>
          ),
        )
      ) : (
        <p></p>
      )}
      <AdminMoreViewButton onClick={handleChangeAdminBook}>
        <span>더보기</span>
      </AdminMoreViewButton>
    </>
  );
};

export default AdminMeatBookCard;
