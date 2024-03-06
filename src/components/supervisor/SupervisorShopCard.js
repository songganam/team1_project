import { useEffect, useState } from "react";
import {
  API_SERVER_HOST,
  getSvisorShop,
  patchShopDelete,
} from "../../api/supervisorShopApi";
import Button from "../button/Button";
import useCustomMy from "../my/hooks/useCustomMy";
import {
  ShopContent,
  ShopTitle,
  SupervisorShopButton,
  SupervisorShopInfo,
  SupervisorShopInner,
  SupervisorShopTop,
  SupervisorShopVisual,
  SupervisorShopWrapper,
} from "./styles/SupervisorShopCardStyle";
import useModal from "../../hooks/useModal";
import useCustomHook from "../meat/hooks/useCustomHook";
import SelectedModal from "../common/SelectedModal";
import { SupervisorMoreViewButton } from "./styles/SupervisorNewShopCardStyle";

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

// 기존 매장 정보 카드 컴포넌트
const SupervisorShopCard = () => {
  const { page, moveToSvShopPage } = useCustomMy();
  const [svisorShopData, setSvisorShopData] = useState(initState);
  const [patchDeleteData, setPatchDeleteData] = useState(PatchInitState);
  const [searchKeyword, setSearchKeyword] = useState("");

  // 모달창
  const { closeModal } = useModal();
  const { isSelectModal, openSelectModal, cancelSelectModal } = useCustomHook();

  // 기존 매장 정보 불러오기 (GET)
  useEffect(() => {
    const param = { page };
    getSvisorShop({ param, successFn, failFn, errorFn });
  }, [page]);

  const successFn = result => {
    const filteredData = result.filter(item => item.confirm === 1);
    setSvisorShopData(filteredData);
    console.log(filteredData);
  };

  const failFn = result => {
    console.log(result);
  };

  const errorFn = result => {
    console.log(result);
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
    getSvisorShop({ param, successFn, failFn, errorFn });
  };

  const failDeletePatch = patchResult => {
    console.log("가게 퇴출 오류", patchResult);
  };

  const errorDeletePatch = patchResult => {
    console.log("서버 오류", patchResult);
  };

  // 신규 매장 카드 더보기 (페이지)
  const handleChangeShop = () => {
    moveToSvShopPage({ page: page + 1 });
  };

  return (
    <>
      <SupervisorShopTop>
        <p>기존 입점 매장 목록</p>
        <div>
          <input
            type="text"
            placeholder="검색할 가게 상호명 또는 대표자명을 입력하세요."
            value={searchKeyword}
          />
          <button
            className="icon"
            style={{ border: "none", background: "none" }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/search_b.svg`}
              alt="search"
            />
          </button>
        </div>
      </SupervisorShopTop>
      {isSelectModal.isOpen && (
        <SelectedModal
          title={isSelectModal.title}
          content={isSelectModal.content}
          confirmFn={isSelectModal.confirmFn}
          cancelFn={isSelectModal.cancelFn}
        />
      )}
      {svisorShopData.map((SvisorShopData, index) => (
        <SupervisorShopWrapper key={index}>
          <SupervisorShopVisual>
            {SvisorShopData.checkShop === 0 ? (
              <img
                src={`${API_SERVER_HOST}/pic/shop/${SvisorShopData.ishop}/shop_pic/${SvisorShopData.pic}`}
                alt="매장 이미지"
              />
            ) : (
              <img
                src={`${API_SERVER_HOST}/pic/butcher/${SvisorShopData.ishop}/butchershop_pic/${SvisorShopData.pic}`}
                alt="매장 이미지"
              />
            )}
          </SupervisorShopVisual>
          <SupervisorShopInner>
            <SupervisorShopInfo>
              <ShopTitle>
                <li>대표자명</li>
                <li>상호명</li>
                <li>상세 주소</li>
                <li>연락처</li>
              </ShopTitle>
              <ShopContent>
                <li>{SvisorShopData.name}</li>
                <li>{SvisorShopData.shopName}</li>
                <li>{SvisorShopData.location}</li>
                <li>{SvisorShopData.tel}</li>
              </ShopContent>
            </SupervisorShopInfo>
            <SupervisorShopButton>
              <div
                onClick={() =>
                  handleDeleteShop(
                    SvisorShopData.checkShop,
                    SvisorShopData.ishop,
                    SvisorShopData.confirm,
                  )
                }
              >
                <Button bttext="매장 퇴출"></Button>
              </div>
            </SupervisorShopButton>
          </SupervisorShopInner>
        </SupervisorShopWrapper>
      ))}
      <SupervisorMoreViewButton onClick={handleChangeShop}>
        <span>더보기</span>
      </SupervisorMoreViewButton>
    </>
  );
};

export default SupervisorShopCard;
