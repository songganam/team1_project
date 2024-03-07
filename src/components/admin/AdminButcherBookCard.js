import { useEffect, useState } from "react";
import {
  getAdminButcherBook,
  patchPickUpConfirm,
  patchRejectBook,
} from "../../api/adminBookApi";
import useModal from "../../hooks/useModal";
import Button from "../button/Button";
import SelectedModal from "../common/SelectedModal";
import useCustomMy from "../my/hooks/useCustomMy";
import {
  AdiminButBookCardContent,
  AdminButBookCardBookButton,
  AdminButBookCardInfo,
  AdminButBookCardTitle,
  AdminButBookCardWrapper,
} from "./styles/AdminButcherBookCardStyle";
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
    checkShop: 1,
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

  // 픽업 확정 (PATCH)
  const handleConfirmBook = ireser => {
    const patchPickUpConfirmForm = {
      checkShop: adminButcherBookData.checkShop,
      ireser: ireser,
    };
    // 확정 전 확인 모달창
    setBookToConfirm(patchPickUpConfirmForm);
    setPopType(2);
    openModal();
    console.log("뭐냐", patchPickUpConfirmForm);
  };

  const handleConfirmNewBook = async () => {
    if (bookToConfirm) {
      const { checkShop, ireser } = bookToConfirm;
      patchPickUpConfirm({
        patchPickUpConfirmForm: bookToConfirm,
        successPupConfirmPatch,
        failPupConfrimPatch,
        errorPupConfrimPatch,
      });
      console.log(bookToConfirm);
      closeModal();

      // 확정 성공 시 페이지 새로고침
      window.location.reload();
    }
  };

  const successPupConfirmPatch = patchResult => {
    console.log("픽업 확정 성공", patchResult);
  };

  const failPupConfrimPatch = patchResult => {
    console.log("픽업 확정 실패", patchResult);
  };

  const errorPupConfrimPatch = patchResult => {
    console.log("서버 오류", patchResult);
  };

  // 픽업 거부 (PATCH)
  const handleRejectBook = ireser => {
    const patchBookForm = {
      checkShop: adminButcherBookData.checkShop,
      ireser: ireser,
    };

    // 삭제 전 확인 모달창
    setBookToReject(patchBookForm);
    setPopType(1);
    openModal();
    console.log("뭐냐", patchBookForm);
  };

  const handleConfirmReject = async () => {
    if (bookToReject) {
      const { checkShop, ireser } = bookToReject;
      await patchRejectBook({
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
    console.log("픽업 거부 성공", patchResult);
  };

  const failPatch = patchResult => {
    console.log("픽업 거부 실패", patchResult);
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
                  <li>메뉴</li>
                  <li>총 픽업 개수</li>
                </AdminButBookCardTitle>
                <AdiminButBookCardContent>
                  <li>{adminButcherBookData.name}</li>
                  <li>{formatDate(adminButcherBookData.date)}</li>
                  <li>
                    {adminButcherBookData.pickupList.map((menu, index) => (
                      <span key={index}>
                        {menu.menu} ({menu.menuCount}개)
                        {index < adminButcherBookData.pickupList.length - 1 &&
                          ", "}
                      </span>
                    ))}
                  </li>
                  <li>
                    {adminButcherBookData.pickupList.reduce(
                      (totalCount, menu) => totalCount + menu.menuCount,
                      0,
                    )}
                  </li>
                </AdiminButBookCardContent>
              </AdminButBookCardInfo>
              <AdminButBookCardBookButton>
                <div
                  onClick={e => handleRejectBook(adminButcherBookData.ireser)}
                >
                  <Button bttext="픽업거부"></Button>
                </div>
                <div>
                  <div
                    onClick={e =>
                      handleConfirmBook(adminButcherBookData.ireser)
                    }
                  >
                    <Button bttext="픽업확정"></Button>
                  </div>
                  {useResultModal && (
                    <SelectedModal
                      title={popType == 1 ? "픽업 거부" : "픽업 확정"}
                      content={
                        popType == 1
                          ? "픽업을 거부하시겠습니까?"
                          : "픽업을 확정하시겠습니까?"
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
