import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useNavigate, useParams } from "react-router";
import { getGInfo } from "../../api/meatApi";
import ResultModal from "../../components/common/ResultModal";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
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
} from "./styles/MeatDetailStyle";
import CountingStar from "../../components/common/CountingStar";

const MeatDetailPage = () => {
  const navigate = useNavigate();
  const { ishop } = useParams();
  const { isModal, openModal, closeModal } = useCustomHook();
  const [storeInfo, setStoreInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGInfo({ ishop, successFn, failFn, errorFn });
  }, []);

  const successFn = result => {
    console.log(result);
    setStoreInfo(result);
    setLoading(false);
    console.log("DPage res : ", storeInfo);
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
  const [bookmark, setBookmark] = useState(0);
  const handleBookmarkClick = () => {
    if (bookmark == 0) {
      openModal("북마크 등록완료", "북마크에 등록되었습니다.", closeModal);
      setBookmark(1);
      // console.log("북마크상태", bookmark);
    } else if (bookmark == 1) {
      openModal("북마크 해제", "북마크가 해제되었습니다.", closeModal);
      setBookmark(0);
      // console.log("북마크상태", bookmark);
    }
  };
  const handleReserClick = () => {
    // PATH랑 같이 보내야함 stireInfo.name
    navigate(`/meat/reservation/${ishop}`, {
      state: {
        storeName: storeInfo.name,
      },
    });
  };
  console.log("챱", storeInfo.reviews);

  // ! KAKAOMAP API X,Y value
  const [draggable, setDraggable] = useState(false);
  const [zoomable, setZoomable] = useState(false);

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
            <img src="https://picsum.photos/1180/800/?category=meat" alt="" />
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
                  <InfoDescContent>
                    무선인터넷, 유아의자, 남/녀화장실, 주차장
                  </InfoDescContent>
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
                    <OverlayContent>
                      무선인터넷, 유아의자, 남/녀화장실, 주차장
                    </OverlayContent>
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

        <ReviewWrap>
          <ReviewTitle>
            <span>리 뷰</span>
          </ReviewTitle>
          <ReviewContentWrap>
            <ReviewItemWrap>
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
                      <span>
                        손씨
                        {/* {storeInfo.reviews.nickname} */}
                      </span>
                    </div>
                    <CountingStar star={4} />
                  </ReviewUserProfile>
                </ReviewProfileWrap>
                <ReviewContent>
                  <p>
                    {/* {storeInfo.reviews.review} */}
                    JMT
                  </p>
                </ReviewContent>
              </ReviewContentmWrap>
            </ReviewItemWrap>
          </ReviewContentWrap>
        </ReviewWrap>
      </ReadWrap>
    </div>
  );
};

export default MeatDetailPage;
