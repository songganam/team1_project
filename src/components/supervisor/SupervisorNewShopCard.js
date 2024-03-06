import { useEffect, useState } from "react";
import {
  API_SERVER_HOST,
  getSvisorNewShop,
  patchShopConfirm,
  patchShopReject,
} from "../../api/supervisorShopApi";
import useModal from "../../hooks/useModal";
import Button from "../button/Button";
import SelectedModal from "../common/SelectedModal";
import useCustomHook from "../meat/hooks/useCustomHook";
import useCustomMy from "../my/hooks/useCustomMy";
import {
  NewShopContent,
  NewShopTitle,
  SupervisorNewShopButton,
  SupervisorNewShopInfo,
  SupervisorNewShopInner,
  SupervisorNewShopVisual,
  SupervisorNewShopWrapper,
} from "./styles/SupervisorNewShopCardStyle";

const host = API_SERVER_HOST;

// 매장 정보 초기값
const initState = [
  {
    checkShop: 0,
    ishop: 0,
    name: "",
    shopName: "",
    location: "",
    x: "",
    y: "",
    tel: "",
    confirm: 0,
    pic: "",
  },
];

// 매장 상태 초기값
const PatchInitState = {
  checkShop: 0,
  ishop: 0,
  confirm: 0,
};

// 신규 매장 정보 카드 컴포넌트
const SupervisorNewShopCard = () => {
  const { page } = useCustomMy();
  const [svisorNewShopData, setSvisorNewShopData] = useState(initState);
  const [patchData, setPatchData] = useState(PatchInitState);
  const [patchRejectData, setPatchRejectData] = useState(PatchInitState);

  // 모달창
  const { closeModal } = useModal();
  const { isSelectModal, openSelectModal, cancelSelectModal } = useCustomHook();

  // 신규 매장 정보 불러오기 (GET)
  useEffect(() => {
    const param = { page };
    getSvisorNewShop({ param, successFn, failFn, errorFn });
  }, [page]);

  const successFn = result => {
    const filteredData = result.filter(item => item.confirm === 0);
    setSvisorNewShopData(result);
    console.log(filteredData);
  };

  const failFn = result => {
    console.log(result);
  };

  const errorFn = result => {
    console.log(result);
  };

  // 가게 승인 여부 변경 (PATCH) : 승인
  const handleConfirmShop = (checkShop, ishop, confirm) => {
    const patchCheckShop = checkShop;
    const patchIshop = ishop;
    const patchConfirm = confirm;
    console.log(patchCheckShop, patchIshop, patchConfirm);
    setPatchData({
      ...setPatchData,
      confirm: 1,
      ishop: patchIshop,
      checkShop: patchCheckShop,
    });

    // 승인 확인 모달창
    openSelectModal(
      "입점 승인",
      "입점을 승인하시겠습니까?",
      () => {
        patchShopConfirm({
          patchData: {
            ...patchData,
            confirm: 1,
            ishop: patchIshop,
            checkShop: patchCheckShop,
          },
          successConfirmPatch,
          failConfirmPatch,
          errorConfirmPatch,
        }),
          cancelSelectModal();
      },
      cancelSelectModal,
    );

    console.log(patchData);
  };

  const handleConfirmDone = (checkShop, ishop, confirm) => {
    closeModal();
    console.log(checkShop, ishop, confirm);
  };

  const successConfirmPatch = patchResult => {
    console.log("가게 입점 승인 성공", patchResult);
    const param = { page };
    getSvisorNewShop({ param, successFn, failFn, errorFn });
  };

  const failConfirmPatch = patchResult => {
    console.log("가게 입점 승인 오류", patchResult);
  };

  const errorConfirmPatch = patchResult => {
    console.log("서버 오류", patchResult);
  };

  // 가게 승인 여부 변경 (PATCH) : 거부
  const handleRejectShop = (checkShop, ishop, confirm) => {
    const patchCheckShop = checkShop;
    const patchIshop = ishop;
    const patchConfirm = confirm;
    console.log(patchCheckShop, patchIshop, patchConfirm);
    setPatchRejectData({
      ...setPatchData,
      confirm: 2,
      ishop: patchIshop,
      checkShop: patchCheckShop,
    });

    // 거부 확인 모달창
    openSelectModal(
      "입점 거부",
      "입점을 거부하시겠습니까?",
      () => {
        patchShopReject({
          patchRejectData: {
            ...patchRejectData,
            confirm: 2,
            ishop: patchIshop,
            checkShop: patchCheckShop,
          },
          successRejectPatch,
          failRejectPatch,
          errorRejectPatch,
        }),
          cancelSelectModal();
      },
      cancelSelectModal,
    );

    console.log(patchData);
  };

  const handleRejectDone = (checkShop, ishop, confirm) => {
    closeModal();
    console.log(checkShop, ishop, confirm);
  };

  const successRejectPatch = patchResult => {
    console.log("가게 입점 거부 성공", patchResult);
    const param = { page };
    getSvisorNewShop({ param, successFn, failFn, errorFn });
  };

  const failRejectPatch = patchResult => {
    console.log("가게 입점 거부 오류", patchResult);
  };

  const errorRejectPatch = patchResult => {
    console.log("서버 오류", patchResult);
  };

  return (
    <>
      {isSelectModal.isOpen && (
        <SelectedModal
          title={isSelectModal.title}
          content={isSelectModal.content}
          confirmFn={isSelectModal.confirmFn}
          cancelFn={isSelectModal.cancelFn}
        />
      )}
      {svisorNewShopData.map(
        (svisorNewShopData, index) =>
          svisorNewShopData.confirm === 0 && (
            <SupervisorNewShopWrapper key={index}>
              <SupervisorNewShopVisual>
                {svisorNewShopData.checkShop === 0 ? (
                  <img
                    src={`${API_SERVER_HOST}/pic/shop/${svisorNewShopData.ishop}/shop_pic/${svisorNewShopData.pic}`}
                    alt="매장 이미지"
                  />
                ) : (
                  <img
                    src={`${API_SERVER_HOST}/pic/butcher/${svisorNewShopData.ishop}/butchershop_pic/${svisorNewShopData.pic}`}
                    alt="매장 이미지"
                  />
                )}
              </SupervisorNewShopVisual>
              <SupervisorNewShopInner>
                <SupervisorNewShopInfo>
                  <NewShopTitle>
                    <li>대표자명</li>
                    <li>상호명</li>
                    <li>상세 주소</li>
                    <li>연락처</li>
                  </NewShopTitle>
                  <NewShopContent>
                    <li>{svisorNewShopData.name}</li>
                    <li>{svisorNewShopData.shopName}</li>
                    <li>{svisorNewShopData.location}</li>
                    <li>{svisorNewShopData.tel}</li>
                  </NewShopContent>
                </SupervisorNewShopInfo>
                <SupervisorNewShopButton>
                  <div
                    onClick={() =>
                      handleConfirmShop(
                        svisorNewShopData.checkShop,
                        svisorNewShopData.ishop,
                        svisorNewShopData.confirm,
                      )
                    }
                  >
                    <Button bttext="승인" />
                  </div>
                  <div
                    onClick={() =>
                      handleRejectShop(
                        svisorNewShopData.checkShop,
                        svisorNewShopData.ishop,
                        svisorNewShopData.confirm,
                      )
                    }
                  >
                    <Button bttext="거부" />
                  </div>
                </SupervisorNewShopButton>
              </SupervisorNewShopInner>
            </SupervisorNewShopWrapper>
          ),
      )}
    </>
  );
};

export default SupervisorNewShopCard;
