import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { API_SERVER_HOST } from "../../api/config";
import { getMenu } from "../../api/menuInfoApi";
import { atomMenuInfoState, menuRefreshState } from "../../atom/atomMenuInfo";
import { atomStoreInfoState } from "../../atom/atomStoreInfoState";
import ResultModal from "../common/ResultModal";
import OptiPlaceholder from "../image-optimization/OptiPlaceholder";
import OptiWireframe from "../image-optimization/OptiWireframe";
import useModal from "../meat/hooks/useModal";
import { MenuContainerStyle, TSMenuStyle } from "./styles/TSMenuStyle";
import { TSBackgroundBoxStyle, TSBoxInnerStyle } from "./styles/TSModifyStyle";

const host = API_SERVER_HOST;

// 메뉴 타입 정의
interface Menu {
  checkShop: number;
  imenu: number;
  ishop: number;
  price: number;
  menu: string;
  pic: string;
}

const MenuList = () => {
  const { isModal, openModal, closeModal } = useModal();
  const menuInfo = useRecoilValue(atomMenuInfoState);
  const storeInfo = useRecoilValue(atomStoreInfoState);
  const refreshMenu = useRecoilValue(menuRefreshState);
  const [imenu, setImenu] = useRecoilState(atomMenuInfoState);
  const [menus, setMenus] = useState<Menu[]>([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const fetchMenuInfo = async () => {
      setFetching(true);
      try {
        const data = await getMenu({ ishop: menuInfo.ishop });
        if (data) {
          setMenus(data);
        } else {
          openModal("메뉴 정보", "가져오는데 실패하였습니다", closeModal);
          return;
        }
      } catch (error) {
        openModal("서버 오류", "관리자에게 문의하세요", closeModal);
        return;
      } finally {
        setFetching(false);
      }
      console.log("등록된 메뉴리스트", menus);
    };
    fetchMenuInfo();
  }, [refreshMenu]);

  const handleClickMenu = (menu: Menu) => {
    setImenu(menu);
    console.log(menuInfo.imenu);
  };

  return (
    <TSBackgroundBoxStyle>
      {/* 모달창 */}
      {isModal.isOpen && (
        <ResultModal
          title={isModal.title}
          content={isModal.content}
          callFn={isModal.callFn}
        />
      )}
      {/* {fetching ? <Fetching /> : null} */}
      <TSBoxInnerStyle>
        <div className="big-title">메뉴목록</div>
        <div className="title">
          {/* <div>메뉴목록</div> */}
          {/* <div className="essential">*</div> */}
        </div>
        <MenuContainerStyle>
          {menus.map((menu, index) => (
            <TSMenuStyle
              key={index}
              onClick={() => {
                handleClickMenu(menu);
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="menu-img">
                <OptiPlaceholder
                  src={
                    storeInfo.checkShop !== 1
                      ? menu?.pic
                        ? `${host}/pic/shop/${menu.ishop}/menu/${menu.pic}`
                        : `${process.env.PUBLIC_URL}/assets/images/menuImg.png`
                      : menu?.pic
                      ? `${host}/pic/butcher/${menu.ishop}/menu/${menu.pic}`
                      : `${process.env.PUBLIC_URL}/assets/images/menuImg.png`
                  }
                  alt={`미리보기${index}`}
                  width={160}
                  height={160}
                  placeholder={
                    <div>
                      <OptiWireframe width={160} height={160} />
                    </div>
                  }
                />
              </div>
              <div className="menu-info">
                <div className="menu-title">{menu.menu}</div>
                <div>
                  {new Intl.NumberFormat("ko-KR").format(menu.price)} 원
                </div>
              </div>
            </TSMenuStyle>
          ))}
        </MenuContainerStyle>
      </TSBoxInnerStyle>
    </TSBackgroundBoxStyle>
  );
};

export default MenuList;
