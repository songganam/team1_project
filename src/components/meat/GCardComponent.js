import React from "react";
import { useParams } from "react-router";
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
import ResultModal from "../common/ResultModal";
import useCustomHook from "./hooks/useCustomHook";
import useCustomLogin from "./hooks/useCustomLogin";

const GCardComponent = ({ data }) => {
  console.log(data);
  const { ishop } = useParams();
  const { moveToRead, moveToReser } = useCustomHook();
  const { isModal, openModal, moveToLogin } = useCustomHook();
  const { isLogin } = useCustomLogin();
  const handleReserClick = (e, ishop) => {
    e.stopPropagation();
    if (isLogin) {
      moveToReser(ishop);
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
                  {item.facilities.map((tag, index) => (
                    <button key={index}>
                      <span>{tag}</span>
                    </button>
                  ))}
                </InfoTagWrap>
                {/* 예약하기 */}
                <ReserveBtn onClick={e => handleReserClick(e, item.ishop)}>
                  <span>예약하기</span>
                </ReserveBtn>
              </MeatStoreBox>
            </MeatStoreInfo>
            <MeatSotreCardImg>
              <img src={item.pics} alt="고기 더미 이미지" />
            </MeatSotreCardImg>
          </MeatStoreCard>
        ))}
    </CardWrapper>
  );
};
export default GCardComponent;
