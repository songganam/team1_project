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
  ReviewWrap,
} from "./styles/MeatDetailStyle";

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
    console.log("왔다잇! : ", storeInfo);
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
    navigate("/meat/reservation");
  };

  // ! KAKAOMAP API X,Y value
  const [draggable, setDraggable] = useState(false);
  const [zoomable, setZoomable] = useState(false);
  const x = storeInfo.x;
  const y = storeInfo.y;
  let toX = parseFloat(x);
  let toY = parseFloat(y);
  let comX = toX.toFixed(6);
  let comY = toY.toFixed(6);
  // !
  // lat: 33.450701,
  //       lng: 126.570667,

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
                  <span>
                    {/* {storeInfo.name} */}
                    목구멍
                  </span>
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

          {storeInfo.menus &&
            storeInfo.menus.map((item, index) => (
              <MenuContentWrap key={index}>
                {/* 
  // TODO Mapper Menu
*/}
                <MenuCardWrap>
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
              </MenuContentWrap>
            ))}
        </MenuWrap>

        {/* 
// ! KAKAO MAP API
*/}
        {/*
//  ! 가게 
*/}
        <MapApiWrapper>
          <Map
            center={{ lat: 33.450701, lng: 126.570667 }}
            style={{ width: "100%", height: "500px" }}
            draggable={draggable}
            zoomable={zoomable}
          >
            <MapMarker // 마커를 생성합니다
              position={{
                // 마커가 표시될 위치입니다
                lat: 33.450701,
                lng: 126.570667,
              }}
              image={{
                src:
                  process.env.PUBLIC_URL + `/assets/images/kakaomap_marker.png`, // 마커이미지의 주소입니다
                size: {
                  width: 52,
                  height: 69,
                }, // 마커이미지의 크기입니다
                options: {
                  offset: {
                    x: 27,
                    y: 69,
                  }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                },
              }}
            />
          </Map>
          <OverlayWrap>
            <InfoContent>
              <InfoName color="${ColorStyle.g1000}">
                <div>
                  <span>
                    {/* {storeInfo.name} */}
                    목구멍
                  </span>
                </div>
              </InfoName>
              <InfoDescWrap>
                <InfoDesc>
                  <OverlayItem>주소</OverlayItem>
                  <OverlayContent>대구광역시 그린구</OverlayContent>
                </InfoDesc>
                <InfoDesc>
                  <OverlayItem>전화번호</OverlayItem>
                  <OverlayContent>010-111-222</OverlayContent>
                </InfoDesc>
                <InfoDesc>
                  <OverlayItem>영업시간</OverlayItem>
                  <OverlayContent>11:00-12:00</OverlayContent>
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
                  <span>기무소스</span>
                </ReviewProfileWrap>
                <ReviewContent>
                  <p>
                    퇴근하고 집에 가는데 고기가 너무 먹고싶어서 들렀음!! 요즘에
                    다 구워주긴 하지만 여기는 아예 주방에서 구워서 나옴, 근데 다
                    식으면 어쩌나 했는데, 따뜻하게 먹을 수 있게 그거 뭐라 그러냐
                    고체 연료 같은거 같이 나와서 그릇 계속 ...
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
