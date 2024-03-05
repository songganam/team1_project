import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  API_SERVER_HOST,
  getSvisorSearchShop,
  getSvisorShop,
} from "../../api/supervisorShopApi";
import { SupervisorShopTop } from "../../pages/supervisor/styles/SupervisorShopPageStyle";
import Button from "../button/Button";
import useCustomMy from "../my/hooks/useCustomMy";
import {
  ShopContent,
  ShopSwiperWrap,
  ShopTitle,
  SupervisorShopButton,
  SupervisorShopInfo,
  SupervisorShopInner,
  SupervisorShopVisual,
  SupervisorShopWrapper,
} from "./styles/SupervisorShopCardStyle";

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

const SupervisorShopCard = () => {
  const { page } = useCustomMy();
  const [svisorShopData, setSvisorShopData] = useState(initState);
  const [searchKeyword, setSearchKeyword] = useState("");

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

  // 검색 매장 정보 불러오기 (GET)
  useEffect(() => {
    const getSvisorSearchShopForm = { shopName: searchKeyword, page };
    getSvisorSearchShop({
      getSvisorSearchShopForm,
      successSearchFn,
      failSearchFn,
      errorSearchFn,
    });
  }, [searchKeyword, page]);

  const successSearchFn = result => {
    console.log(result);
    setSvisorShopData(result);
  };

  const failSearchFn = result => {
    console.log(result);
  };

  const errorSearchFn = result => {
    console.log(result);
  };

  const handleSearchChange = e => {
    setSearchKeyword(e.target.value);
  };

  return (
    <>
      <SupervisorShopTop>
        <p>기존 입점 매장 목록</p>
        <input
          type="text"
          placeholder="검색할 가게 상호명 또는 대표자명을 입력하세요."
          value={searchKeyword}
          onChange={handleSearchChange}
        />
      </SupervisorShopTop>
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
              <Button bttext="매장 퇴출"></Button>
            </SupervisorShopButton>
          </SupervisorShopInner>
        </SupervisorShopWrapper>
      ))}
    </>
  );
};

export default SupervisorShopCard;
