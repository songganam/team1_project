import React from "react";
import { useNavigate, useParams } from "react-router";
import ResultModal from "../common/ResultModal";
import useCustomHook from "./hooks/useCustomHook";
import useCustomLogin from "./hooks/useCustomLogin";
import {
  CardWrapper,
  InfoTagWrap,
  MeatSotreCardImg,
  MeatStoreBox,
  MeatStoreCard,
  MeatStoreInfo,
  MeatStoreTitle,
  ReserveBtn,
} from "./styles/GCardStyle";
import { API_SERVER_HOST } from "../../api/config";

const GCardComponent = ({ data }) => {
  const navigate = useNavigate();
  console.log(data);
  const { ishop } = useParams();
  const { moveToRead, moveToReser, isModal, openModal, moveToLogin } =
    useCustomHook();

  const { isLogin } = useCustomLogin();
  const baseApi = API_SERVER_HOST;
  const host = `${baseApi}/pic/shop/`;
  const handleReserClick = (e, ishop, name) => {
    e.stopPropagation();
    if (isLogin) {
      // PATH랑 같이 보내야함 stireInfo.name
      // console.log("가게이름 ",   name);
      navigate(`/meat/reservation/${ishop}`, {
        state: {
          storeName: name,
        },
      });
    } else {
      openModal("로그인 필요", "로그인이 필요한 서비스입니다.", moveToLogin);
    }
  };
  return (
    <CardWrapper>
      {isModal.isOpen && (
        <ResultModal
          title={isModal.title}
          content={isModal.content}
          callFn={isModal.callFn}
        />
      )}
      {data &&
        data.map(item => (
          <MeatStoreCard
            key={item.ishop}
            onClick={() => moveToRead(item.ishop)}
          >
            <MeatStoreInfo>
              <MeatStoreBox>
                <MeatStoreTitle>{item.name}</MeatStoreTitle>
                <InfoTagWrap>
                  {item.facilities.slice(0, 4).map((tag, index) => (
                    <button key={index}>
                      <span>{tag}</span>
                    </button>
                  ))}
                </InfoTagWrap>
                {/* 예약하기 */}
                <ReserveBtn
                  onClick={e => handleReserClick(e, item.ishop, item.name)}
                >
                  <span>예약하기</span>
                </ReserveBtn>
              </MeatStoreBox>
            </MeatStoreInfo>
            <MeatSotreCardImg>
              <img
                src={`${host}${item.ishop}/shop_pic/${item.pics[0]}`}
                alt="고기 더미 이미지"
              />
            </MeatSotreCardImg>
          </MeatStoreCard>
        ))}
    </CardWrapper>
  );
};
export default GCardComponent;
