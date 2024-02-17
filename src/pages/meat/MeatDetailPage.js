import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useNavigate, useParams } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { API_SERVER_HOST } from "../../api/config";
import { changeBookmark, getGInfo } from "../../api/meatApi";
import Button from "../../components/button/Button";
import CountingStar from "../../components/common/CountingStar";
import Fetching from "../../components/common/Fetching";
import ResultModal from "../../components/common/ResultModal";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import useCustomLogin from "../../components/meat/hooks/useCustomLogin";
import {
  ImgStyle,
  InfoContent,
  InfoContentWrap,
  InfoDesc,
  InfoDescContent,
  InfoDescItem,
  InfoDescWrap,
  InfoImageWrap,
  InfoName,
  InfoWrap,
  LargeImgStyle,
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
  MoreBtnWrap,
  OverlayContent,
  OverlayItem,
  OverlayWrap,
  ReadWrap,
  ReserBtn,
  ReviewContent,
  ReviewContentWrap,
  ReviewContentmWrap,
  ReviewItemWrap,
  ReviewProfileImage,
  ReviewProfileWrap,
  ReviewTitle,
  ReviewUserProfile,
  ReviewWrap,
  ThumbnailStyle,
} from "./styles/MeatDetailStyle";

// @COMMENT use React-Query
import { useQuery } from "@tanstack/react-query";

const initState = {
  ishop: 0,
  name: "",
  location: "",
  open: "",
  tel: "",
  x: "",
  y: "",
  star: 0,
  isBook: 0,
  facilities: [""],
  pics: [""],
  menus: [
    {
      price: 0,
      menu: "",
      pic: "",
    },
  ],
  reviews: [
    {
      iuser: 0,
      writerPic: "",
      ireview: 0,
      nickname: "",
      star: 0,
      review: "",
      pic: [""],
    },
  ],
};

const MeatDetailPage = () => {
  const navigate = useNavigate();
  const { ishop } = useParams();
  const { isModal, openModal, closeModal, moveToLogin } = useCustomHook();
  const { isLogin } = useCustomLogin();
  const baseApi = API_SERVER_HOST;
  // const host = `${baseApi}/pic`;
  const host = `${baseApi}/pic/shop/${ishop}/shop_pic/`;
  const [fetching, setFetching] = useState(false);

  // @COMMENT use React-query
  const { data, isFetching } = useQuery({
    queryKey: ["storeInfo", isLogin, ishop],
    queryFn: () => getGInfo({ ishop }),
    staleTime: 1000 * 60,
  });
  const storeInfo = data || initState;
  // console.log("R-Query Response : ", storeInfo);
  // console.log("R-Query Params ", ishop);

  const isBookInfo = storeInfo.isBook;

  // const [storeInfo, setStoreInfo] = useState({});
  // useEffect(() => {
  //   setFetching(true);
  //   getGInfo({ isLogin, ishop, successFn, failFn, errorFn });
  //   setBookmark(isBookInfo);
  // }, [isLogin, ishop, isBookInfo]);

  // const successFn = result => {
  //   console.log(result);
  //   setStoreInfo(result);
  //   setFetching(false);
  //   // console.log("DPage res : ", storeInfo);
  // };
  // const failFn = result => {
  //   console.log(result);
  //   setFetching(true);
  // };
  // const errorFn = result => {
  //   console.log(result);
  //   setFetching(true);
  // };

  // ! BookMark, Go Reservation Btn Logic
  const [bookmark, setBookmark] = useState(isBookInfo || 0);
  console.log("호출 ", host);

  // console.log(ishop);
  const storeNum = ishop;

  const [visualReview, setVisualReview] = useState(3);
  const handleMoreReview = e => {
    console.log("더보기임");
    setVisualReview(prevCount => prevCount + 3);
  };

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
      navigate(`/meat/reservation/${ishop}`, {
        state: {
          storeName: storeInfo.name,
        },
      });
    } else {
      openModal("로그인 필요", "로그인이 필요한 서비스입니다.", moveToLogin);
    }
  };

  // ! KAKAOMAP API X,Y value
  const [draggable, setDraggable] = useState(true);
  const [zoomable, setZoomable] = useState(true);
  const defaultMenuImage =
    process.env.PUBLIC_URL + `/assets/images/favicon.png`;
  return (
    <div>
      {fetching ? <Fetching /> : null}
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
          {storeInfo?.menus?.length === 0 ? (
            <div></div>
          ) : (
            <MenuTitle>
              <span>메 뉴</span>
            </MenuTitle>
          )}

          <MenuContentWrap>
            {storeInfo.menus &&
              storeInfo.menus.slice(0, 6).map((item, index) => (
                <MenuCardWrap key={index}>
                  {/* 그림 */}
                  <MenuCardImageWrap>
                    {item.pic === null ? (
                      <img src={defaultMenuImage} alt="defaultImage" />
                    ) : (
                      <img
                        src={`${baseApi}/pic/shop/${storeInfo.ishop}/menu/${item.pic}`}
                        alt=""
                      />
                    )}
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

        {/*
// ! NOTICE AREA
*/}
        {/* <NoticeWrap>
<NoticeTitle>
<span>가게소식</span>
</NoticeTitle>
<NoticeCardWrap>
<NoticeCard>
<NoticeCardImage>
<img src="https://picsum.photos/370/300/?category=meat" alt="" />
</NoticeCardImage>
<NoticeCardContent>
<NoticeCardTitleWrap>
<NoticeCardTitle>
<span>2024 새해맞이 이벤트</span>
</NoticeCardTitle>
<NoticeCardDate>
<span>2024.01.01</span>
</NoticeCardDate>
</NoticeCardTitleWrap>
<NoticeCardItem>
<span>
2024년의 해가 밝았습니다. 여러분들의 바람이 올해에도
이루어지길 바라며 소소한 이벤트를 하나 공지하고자 합니다.
</span>
</NoticeCardItem>
</NoticeCardContent>
</NoticeCard>
</NoticeCardWrap>
</NoticeWrap> */}

        {/*
// ! REVIEW AREA
*/}

        {/*
ireview
:
19
nickname
:
"똥퍼아저씨"
pic
:
['e0c9f247-ced5-42ed-9ce2-1e870d8c94eb.jpg']
review
:
"아아아아ㅏ"
star
:
1 */}
        {/* 고기집 리뷰사진: /pic/shop/가게pk/reveiw/리뷰pk/사진이름 */}
        <ReviewWrap>
          {storeInfo?.reviews?.length === 0 ? (
            <div></div>
          ) : (
            <ReviewTitle>
              <span>리 뷰</span>
            </ReviewTitle>
          )}

          <ReviewContentWrap>
            {storeInfo?.reviews &&
              storeInfo?.reviews.slice(0, visualReview).map((review, index) => (
                <ReviewItemWrap key={index}>
                  {/* Image */}
                  <ImgStyle>
                    <LargeImgStyle>
                      {review.pic && review.pic.length == 0 ? (
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            `/assets/images/favicon.png`
                          }
                          alt=""
                        />
                      ) : (
                        <img
                          src={`${baseApi}/pic/shop/${storeInfo.ishop}/review/${review.ireview}/${review.pic[0]}`}
                          alt="Large image"
                        />
                      )}
                    </LargeImgStyle>
                    <ThumbnailStyle>
                      {review.pic.slice(1, 5).map(
                        (pic, index) =>
                          pic && (
                            <div className="thumbnail" key={index}>
                              <img
                                src={`${baseApi}/pic/shop/${
                                  storeInfo.ishop
                                }/review/${review.ireview}/${
                                  review.pic[`${index}`]
                                }`}
                                alt={`img_${index + 1}`}
                              />
                            </div>
                          ),
                      )}
                    </ThumbnailStyle>
                  </ImgStyle>
                  <ReviewContentmWrap>
                    <ReviewProfileWrap>
                      <ReviewProfileImage>
                        {review.writerPic ? (
                          <img
                            src={`${baseApi}/pic/user/${review.iuser}/${review.writerPic}`}
                            alt="프로필사진"
                          />
                        ) : (
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/images/user_profile.png`}
                            alt="기본사진"
                          />
                        )}
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

          {storeInfo?.reviews?.length === 0 ? (
            <div></div>
          ) : (
            <div onClick={handleMoreReview}>
              <Button bttext={"더보기"} />
            </div>
          )}
          <MoreBtnWrap></MoreBtnWrap>
        </ReviewWrap>
      </ReadWrap>
    </div>
  );
};

export default MeatDetailPage;
