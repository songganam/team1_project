import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useNavigate, useParams } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { changeBookmark, getGInfo } from "../../api/meatApi";
import CountingStar from "../../components/common/CountingStar";
import ResultModal from "../../components/common/ResultModal";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import useCustomLogin from "../../components/meat/hooks/useCustomLogin";
import {
  InfoContent,
  InfoContentWrap,
  InfoDesc,
  InfoDescContent,
  InfoDescItem,
  InfoDescWrap,
  InfoImageWrap,
  InfoName,
  InfoWrap,
  MapApiWrapper,
  MenuCardContent,
  MenuCardContentItem,
  MenuCardContentPrice,
  MenuCardContentWrap,
  MenuCardImageWrap,
  MenuCardWrap,
  MenuContentWrap,
  MenuTitle,
  MenuWrap,
  OverlayContent,
  OverlayItem,
  OverlayWrap,
  ReadWrap,
  ReivewImageWrap,
  ReserBtn,
  ReviewContent,
  ReviewContentWrap,
  ReviewContentmWrap,
  ReviewItemWrap,
  ReviewMainImage,
  ReviewProfileImage,
  ReviewProfileWrap,
  ReviewSubImage,
  ReviewTitle,
  ReviewUserProfile,
  ReviewWrap,
} from "./styles/ButcherDetailStyle";
import { getBInfo } from "../../api/butcherApi";

const MeatDetailPage = () => {
  const navigate = useNavigate();
  const { ibutcher } = useParams();
  const { isModal, openModal, closeModal, moveToLogin } = useCustomHook();
  const [storeInfo, setStoreInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const { isLogin } = useCustomLogin();
  const isBookInfo = storeInfo.isBook;
  const host = `http://192.168.0.144:5221/pic/shop/${ibutcher}/shop_pic/`;

  useEffect(() => {
    setLoading(true);
    getBInfo({ isLogin, ibutcher, successFn, failFn, errorFn });
    setBookmark(isBookInfo);
  }, [isLogin, ibutcher, isBookInfo]);

  const successFn = result => {
    console.log(result);
    setStoreInfo(result);
    setLoading(false);
    // console.log("DPage res : ", storeInfo);
  };
  const failFn = result => {
    console.log(result);
    setLoading(true);
  };
  const errorFn = result => {
    console.log(result);
    setLoading(true);
  };
  // ! BookMark, Go Reservation Btn Logic
  const [bookmark, setBookmark] = useState(isBookInfo || 0);
  console.log("호출 ", host);

  // console.log(ishop);
  const storeNum = ibutcher;

  // ! BookMark 선택
  const handleBookmarkClick = e => {
    e.stopPropagation();
    if (isLogin) {
      if (bookmark == 0) {
        openModal("북마크 등록완료", "북마크에 등록되었습니다.", closeModal);
        setBookmark(1);
        changeBookmark(storeNum);

        // console.log("북마크상태", bookmark);
      } else if (bookmark == 1) {
        openModal("북마크 해제", "북마크가 해제되었습니다.", closeModal);
        setBookmark(0);
        changeBookmark(storeNum);
        // console.log("북마크상태", bookmark);
      }
    } else {
      openModal("로그인 필요", "로그인이 필요한 서비스입니다.", moveToLogin);
    }
  };
  const handleReserClick = e => {
    e.stopPropagation();
    if (isLogin) {
      // PATH랑 같이 보내야함 stireInfo.name
      navigate(`/meat/reservation/${ibutcher}`, {
        state: {
          storeName: storeInfo.name,
        },
      });
    } else {
      openModal("로그인 필요", "로그인이 필요한 서비스입니다.", moveToLogin);
    }
  };

  // ! KAKAOMAP API X,Y value
  const [draggable, setDraggable] = useState(false);
  const [zoomable, setZoomable] = useState(false);
  console.log(storeInfo.pics);
  return (
    <div>
      {isModal.isOpen && (
        <ResultModal
          title={isModal.title}
          content={isModal.content}
          callFn={isModal.callFn}
        />
      )}
      <ReadWrap>
        {/* {loading ? <Loading /> : <div></div>} */}
        <InfoWrap>
          {/* 이미지 */}
          <InfoImageWrap>
            <Swiper
              preventClicks={false}
              preventClicksPropagation={false}
              slidesPerView={1}
              spaceBetween={0}
              pagination={true}
            >
              {storeInfo.pics &&
                storeInfo.pics.map((pic, index) => (
                  <SwiperSlide key={index}>
                    <img src={`${host}${pic}`} alt="" />
                  </SwiperSlide>
                ))}
            </Swiper>
            {/* 비상용 이미지 */}
            {/* <img src="https://picsum.photos/1180/800/?category=meat" alt="" /> */}
          </InfoImageWrap>
          {/* 컨텐츠 */}
          <InfoContentWrap>
            <InfoContent>
              <InfoName>
                <div>
                  <span> {storeInfo.name}</span>
                </div>
                <div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      (bookmark === 0
                        ? "/assets/images/bk_no_check.png"
                        : "/assets/images/bk_check.png")
                    }
                    onClick={handleBookmarkClick}
                  />
                </div>
              </InfoName>
              <InfoDescWrap>
                <InfoDesc>
                  <InfoDescItem>주소</InfoDescItem>
                  <InfoDescContent>{storeInfo.location}</InfoDescContent>
                </InfoDesc>
                <InfoDesc>
                  <InfoDescItem>전화번호</InfoDescItem>
                  <InfoDescContent>{storeInfo.tel}</InfoDescContent>
                </InfoDesc>
                <InfoDesc>
                  <InfoDescItem>영업시간</InfoDescItem>
                  <InfoDescContent>{storeInfo.open}</InfoDescContent>
                </InfoDesc>
                <InfoDesc>
                  <InfoDescItem>서비스</InfoDescItem>
                  <InfoDescContent>{storeInfo.facilities}</InfoDescContent>
                </InfoDesc>
              </InfoDescWrap>
            </InfoContent>
            <ReserBtn onClick={handleReserClick}>
              <span>예약하기</span>
            </ReserBtn>
          </InfoContentWrap>
        </InfoWrap>

        {/* 
    // ! 가게 메뉴
  */}
        <MenuWrap>
          <MenuTitle>
            <span>메 뉴</span>
          </MenuTitle>

          <MenuContentWrap>
            {storeInfo.menus &&
              storeInfo.menus.slice(0, 6).map((item, index) => (
                <MenuCardWrap key={index}>
                  {/* 그림 */}
                  <MenuCardImageWrap>
                    <img
                      src="https://picsum.photos/370/350/?category=meat"
                      alt=""
                    />
                  </MenuCardImageWrap>
                  {/* 
// ! 가게 정보
*/}
                  <MenuCardContentWrap>
                    <MenuCardContent>
                      <MenuCardContentItem>
                        <span>{item.menu}</span>
                      </MenuCardContentItem>
                      <MenuCardContentPrice>
                        <span>{item.price}</span>
                      </MenuCardContentPrice>
                    </MenuCardContent>
                  </MenuCardContentWrap>
                </MenuCardWrap>
              ))}
          </MenuContentWrap>
        </MenuWrap>

        {/* 
// ! KAKAO MAP API
*/}
        {/*
//  ! 가게 
*/}
        {storeInfo.x && storeInfo.y && (
          <MapApiWrapper>
            <Map
              center={{ lat: storeInfo.y, lng: storeInfo.x }}
              style={{ width: "100%", height: "500px" }}
              draggable={draggable}
              zoomable={zoomable}
            >
              <MapMarker
                position={{ lat: storeInfo.y, lng: storeInfo.x }}
                image={{
                  src:
                    process.env.PUBLIC_URL +
                    `/assets/images/kakaomap_marker.png`,
                  size: { width: 52, height: 69 },
                  options: { offset: { x: 27, y: 69 } },
                }}
              />
            </Map>
            <OverlayWrap>
              <InfoContent>
                <InfoName color="${ColorStyle.g1000}">
                  <div>
                    <span>{storeInfo.name}</span>
                  </div>
                </InfoName>
                <InfoDescWrap>
                  <InfoDesc>
                    <OverlayItem>주소</OverlayItem>
                    <OverlayContent> {storeInfo.location} </OverlayContent>
                  </InfoDesc>
                  <InfoDesc>
                    <OverlayItem>전화번호</OverlayItem>
                    <OverlayContent>{storeInfo.tel}</OverlayContent>
                  </InfoDesc>
                  <InfoDesc>
                    <OverlayItem>영업시간</OverlayItem>
                    <OverlayContent>{storeInfo.open}</OverlayContent>
                  </InfoDesc>
                  <InfoDesc>
                    <OverlayItem>서비스</OverlayItem>
                    <OverlayContent>{storeInfo.facilities}</OverlayContent>
                  </InfoDesc>
                </InfoDescWrap>
              </InfoContent>
            </OverlayWrap>
          </MapApiWrapper>
        )}

        <ReviewWrap>
          <ReviewTitle>
            <span>리 뷰</span>
          </ReviewTitle>
          <ReviewContentWrap>
            {storeInfo?.reviews &&
              storeInfo?.reviews.map((review, index) => (
                <ReviewItemWrap key={index}>
                  {/* Image */}
                  <ReivewImageWrap>
                    {/* main image */}
                    <ReviewMainImage>
                      <img
                        src="https://picsum.photos/370/350/?category=meat"
                        alt=""
                      />
                    </ReviewMainImage>
                    {/* sub image */}
                    <ReviewSubImage>
                      <img
                        src="https://picsum.photos/370/350/?category=meat"
                        alt=""
                      />
                    </ReviewSubImage>
                  </ReivewImageWrap>
                  <ReviewContentmWrap>
                    <ReviewProfileWrap>
                      <ReviewProfileImage>
                        <img
                          src="https://picsum.photos/370/350/?category=meat"
                          alt=""
                        />
                      </ReviewProfileImage>
                      <ReviewUserProfile>
                        <div>
                          <span>{review.nickname}</span>
                        </div>
                        <CountingStar star={review.star} />
                      </ReviewUserProfile>
                    </ReviewProfileWrap>
                    <ReviewContent>
                      <p>{review.review}</p>
                    </ReviewContent>
                  </ReviewContentmWrap>
                </ReviewItemWrap>
              ))}
          </ReviewContentWrap>
        </ReviewWrap>
      </ReadWrap>
    </div>
  );
};

export default MeatDetailPage;
