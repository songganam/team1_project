import { useEffect, useState } from "react";
import {
  API_SERVER_HOST,
  getSvisorNewShop,
  patchShopConfirm,
  patchShopReject,
  patchShopDelete,
} from "../../api/supervisorShopApi";
import useModal from "../../hooks/useModal";
import Button from "../button/Button";
import SelectedModal from "../common/SelectedModal";
import useCustomHook from "../meat/hooks/useCustomHook";
import useCustomMy from "../my/hooks/useCustomMy";
import {
  NewShopContent,
  NewShopTitle,
  SupervisorMoreViewButton,
  SupervisorNewShopButton,
  SupervisorNewShopInfo,
  SupervisorNewShopInner,
  SupervisorNewShopTop,
  SupervisorNewShopVisual,
  SupervisorNewShopWrapper,
  SvMoreViewButton,
} from "./styles/SupervisorNewShopCardStyle";
import OptiPlaceholder from "../image-optimization/OptiPlaceholder";
import OptiWireframe from "../image-optimization/OptiWireframe";

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

// 매장 정보 카드 컴포넌트
const SupervisorNewShopCard = () => {
  const { page, moveToSvNewShopPage } = useCustomMy();
  const [svisorNewShopData, setSvisorNewShopData] = useState([
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
  ]);
  const [patchData, setPatchData] = useState(PatchInitState);
  const [patchRejectData, setPatchRejectData] = useState(PatchInitState);
  const [patchDeleteData, setPatchDeleteData] = useState(PatchInitState);

  // 모달창
  const { closeModal } = useModal();
  const { isSelectModal, openSelectModal, cancelSelectModal } = useCustomHook();
  const { moveToSVSearch, search } = useCustomHook();
  // 신규 매장 정보 불러오기 (GET)
  useEffect(() => {
    const param = { page, search };
    getSvisorNewShop({ param, successFn, failFn, errorFn });
  }, [page, search]);

  const successFn = result => {
    setSvisorNewShopData(result);
    console.log(result);
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

  // 가게 승인 여부 변경 (PATCH) : 퇴출
  const handleDeleteShop = (checkShop, ishop, confirm) => {
    const patchCheckShop = checkShop;
    const patchIshop = ishop;
    const patchConfirm = confirm;
    console.log(patchCheckShop, patchIshop, patchConfirm);
    setPatchDeleteData({
      ...setPatchDeleteData,
      confirm: 3,
      ishop: patchIshop,
      checkShop: patchCheckShop,
    });

    // 퇴출 확인 모달창
    openSelectModal(
      "매장 퇴출",
      "해당 매장을 퇴출하시겠습니까?",
      () => {
        patchShopDelete({
          patchDeleteData: {
            ...patchDeleteData,
            confirm: 3,
            ishop: patchIshop,
            checkShop: patchCheckShop,
          },
          successDeletePatch,
          failDeletePatch,
          errorDeletePatch,
        }),
          cancelSelectModal();
      },
      cancelSelectModal,
    );

    console.log(patchDeleteData);
  };

  const handleDeleteDone = (checkShop, ishop, confirm) => {
    closeModal();
    console.log(checkShop, ishop, confirm);
  };

  const successDeletePatch = patchResult => {
    console.log("가게 퇴출 성공", patchResult);
    const param = { page };
    getSvisorNewShop({ param, successFn, failFn, errorFn });
  };

  const failDeletePatch = patchResult => {
    console.log("가게 퇴출 오류", patchResult);
  };

  const errorDeletePatch = patchResult => {
    console.log("서버 오류", patchResult);
  };

  // 신규 매장 카드 더보기 (페이지)
  const handleChangeNewShopPrev = () => {
    moveToSvNewShopPage({ page: page - 1 });
  };

  // 신규 매장 카드 더보기 (페이지)
  const handleChangeNewShopNext = () => {
    moveToSvNewShopPage({ page: page + 1 });
  };

  // 검색
  const [cateSearch, setCateSearch] = useState("");
  const handleSearchChange = e => {
    setCateSearch(e.target.value);
  };

  const handleSearchSubmit = e => {
    moveToSVSearch({ page: 1, search: cateSearch });
    e.preventDefault();
  };

  return (
    <>
      <SupervisorNewShopTop>
        <p>기존 입점 매장 목록</p>
        <div>
          <input
            type="text"
            placeholder="검색할 가게 상호명을 입력하세요."
            onChange={handleSearchChange}
          />
          <button
            className="icon"
            style={{ border: "none", background: "none" }}
            onClick={handleSearchSubmit}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/search_b.svg`}
              alt="search"
            />
          </button>
        </div>{" "}
      </SupervisorNewShopTop>
      {isSelectModal.isOpen && (
        <SelectedModal
          title={isSelectModal.title}
          content={isSelectModal.content}
          confirmFn={isSelectModal.confirmFn}
          cancelFn={isSelectModal.cancelFn}
        />
      )}
      {svisorNewShopData && svisorNewShopData?.length > 0
        ? svisorNewShopData
            .filter(
              svisorNewShopData =>
                svisorNewShopData.confirm === 0 ||
                svisorNewShopData.confirm === 1,
            )
            .map((filteredData, index) => (
              <SupervisorNewShopWrapper
                key={index}
                style={{
                  border:
                    filteredData.confirm === 0
                      ? "2px solid var(--sub, #d60117)"
                      : filteredData.confirm === 1
                      ? "2px solid var(--sub, #066e52)"
                      : "none",
                }}
              >
                <SupervisorNewShopVisual>
                  {filteredData.checkShop === 0 ? (
                    <OptiPlaceholder
                      src={`${API_SERVER_HOST}/pic/shop/${filteredData.ishop}/shop_pic/${filteredData.pic}`}
                      alt="매장 이미지"
                      width={348}
                      height={330}
                      placeholder={
                        <div>
                          <OptiWireframe width={348} height={330} />
                        </div>
                      }
                    />
                  ) : (
                    <OptiPlaceholder
                      src={`${API_SERVER_HOST}/pic/butcher/${filteredData.ishop}/butchershop_pic/${filteredData.pic}`}
                      alt="매장 이미지"
                      width={348}
                      height={330}
                      placeholder={
                        <div>
                          <OptiWireframe width={348} height={330} />
                        </div>
                      }
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
                      <li>{filteredData.name}</li>
                      <li>{filteredData.shopName}</li>
                      <li>{filteredData.location}</li>
                      <li>{filteredData.tel}</li>
                    </NewShopContent>
                  </SupervisorNewShopInfo>
                  <SupervisorNewShopButton>
                    {filteredData.confirm === 0 && (
                      <>
                        <div
                          onClick={() =>
                            handleConfirmShop(
                              filteredData.checkShop,
                              filteredData.ishop,
                              filteredData.confirm,
                            )
                          }
                        >
                          <Button bttext="승인" />
                        </div>
                        <div
                          onClick={() =>
                            handleRejectShop(
                              filteredData.checkShop,
                              filteredData.ishop,
                              filteredData.confirm,
                            )
                          }
                        >
                          <Button bttext="거부" />
                        </div>
                      </>
                    )}
                    {filteredData.confirm === 1 && (
                      <div
                        onClick={() =>
                          handleDeleteShop(
                            filteredData.checkShop,
                            filteredData.ishop,
                            filteredData.confirm,
                          )
                        }
                        style={{ padding: "10px 25px" }}
                      >
                        <Button bttext="ㅤ매장 퇴출ㅤ" />
                      </div>
                    )}
                  </SupervisorNewShopButton>
                </SupervisorNewShopInner>
              </SupervisorNewShopWrapper>
            ))
        : null}
      <SvMoreViewButton>
        <SupervisorMoreViewButton onClick={handleChangeNewShopPrev}>
          <span>이전</span>
        </SupervisorMoreViewButton>
        <SupervisorMoreViewButton onClick={handleChangeNewShopNext}>
          <span>다음</span>
        </SupervisorMoreViewButton>
      </SvMoreViewButton>
    </>
  );
};

export default SupervisorNewShopCard;
