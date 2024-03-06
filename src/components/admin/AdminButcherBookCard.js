import React, { useEffect, useState } from "react";
import {
  AdiminButBookCardContent,
  AdminButBookCardBookButton,
  AdminButBookCardInfo,
  AdminButBookCardTitle,
  AdminButBookCardWrapper,
} from "./styles/AdminButcherBookCardStyle";
import Button from "../button/Button";
import {
  getAdminButcherBook,
  patchBookConfirm,
  patchRejectBook,
} from "../../api/adminBookApi";
import useCustomMy from "../my/hooks/useCustomMy";
import useModal from "../../hooks/useModal";
import SelectedModal from "../common/SelectedModal";
import { AdminMoreViewButton } from "./styles/AdminMeatBookCardStyle";

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
  const { page, moveToAdminBookPage } = useCustomMy();
  const [adminButcherBookData, setAdminButcherBookData] = useState({
    checkShop: 0,
    count: 0,
    ownerReservationList: [],
  });
  const [bookToConfirm, setBookToConfirm] = useState(null);
  const [bookToReject, setBookToReject] = useState(null);

  // 모달창
  const { useResultModal, openModal, closeModal } = useModal();
  const [popType, setPopType] = useState(0);

  // 정육점 예약 관리 정보 불러오기 (GET)
  useEffect(() => {
    const param = { page };
    getAdminButcherBook({ param, successFn, failFn, errorFn });
  }, [page]);

  const successFn = result => {
    const updatedList = adminButcherBookData.ownerReservationList.concat(
      result.ownerReservationList,
    );
    setAdminButcherBookData({
      ...adminButcherBookData,
      ownerReservationList: updatedList,
    });
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
      checkShop: adminButcherBookData.checkShop,
      ireser: ireser,
    };
    // 확정 전 확인 모달창
    setBookToConfirm(patchBookConfirmForm);
    setPopType(2);
    openModal();
    console.log(patchBookConfirmForm);
  };

  const handleConfirmNewBook = () => {
    if (bookToConfirm) {
      const { checkShop, ireser } = bookToConfirm;
      patchBookConfirm({
        patchBookConfirmForm: bookToConfirm,
        successConfirmPatch,
        failConfrimPatch,
        errorConfrimPatch,
      });
      console.log(bookToConfirm);
      closeModal();

      // 확정 성공 시 페이지 새로고침
      window.location.reload();
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
  const handleRejectBook = ireser => {
    const patchBookForm = {
      checkShop: adminButcherBookData.checkShop,
      ireser: ireser,
    };

    // 삭제 전 확인 모달창
    setBookToReject(patchBookForm);
    setPopType(1);
    openModal();
    console.log("form : ", patchBookForm);
  };

  const handleConfirmReject = () => {
    if (bookToReject) {
      const { checkShop, ireser } = bookToReject;
      patchRejectBook({
        patchBookForm: bookToReject,
        successPatch,
        failPatch,
        errorPatch,
      });
      console.log(bookToReject);
      closeModal();

      // 거부 성공 시 페이지 새로고침
      window.location.reload();
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
    moveToAdminBookPage({ page: page + 1 });
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

  return (
    <>
      {adminButcherBookData &&
      adminButcherBookData?.ownerReservationList &&
      adminButcherBookData?.ownerReservationList.length > 0 ? (
        adminButcherBookData?.ownerReservationList.map(
          (adminButcherBookData, index) => (
            <AdminButBookCardWrapper key={index}>
              <AdminButBookCardInfo>
                <AdminButBookCardTitle>
                  <li>예약자명</li>
                  <li>예약일시</li>
                  <li>인원 수</li>
                  <li>요청사항</li>
                </AdminButBookCardTitle>
                <AdiminButBookCardContent>
                  <li>{adminButcherBookData.name}</li>
                  <li>{formatDate(adminButcherBookData.date)}</li>
                  <li>{adminButcherBookData.headCount}</li>
                  <li>{adminButcherBookData.request}</li>
                </AdiminButBookCardContent>
              </AdminButBookCardInfo>
              <AdminButBookCardBookButton>
                <div
                  onClick={e => handleRejectBook(adminButcherBookData.ireser)}
                >
                  <Button bttext="예약거부"></Button>
                </div>
                <div>
                  <div
                    onClick={e =>
                      handleConfirmBook(adminButcherBookData.ireser)
                    }
                  >
                    <Button bttext="예약확정"></Button>
                  </div>
                  {useResultModal && (
                    <SelectedModal
                      title={popType == 1 ? "예약 거부" : "예약 확정"}
                      content={
                        popType == 1
                          ? "예약을 거부하시겠습니까?"
                          : "예약을 확정하시겠습니까?"
                      }
                      confirmFn={
                        popType == 1
                          ? handleConfirmReject
                          : handleConfirmNewBook
                      }
                      cancelFn={closeModal}
                    />
                  )}
                </div>
              </AdminButBookCardBookButton>
            </AdminButBookCardWrapper>
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

export default AdminButcherBookCard;
