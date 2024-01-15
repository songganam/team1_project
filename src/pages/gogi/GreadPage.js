import React, { useEffect, useState } from "react";
import { MeatMenu } from "../../api/GApi";
import { Map, MapMarker } from "react-kakao-maps-sdk";
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
  NoticeCard,
  NoticeCardContent,
  NoticeCardDate,
  NoticeCardImage,
  NoticeCardItem,
  NoticeCardTitle,
  NoticeCardTitleWrap,
  NoticeCardWrap,
  NoticeTitle,
  NoticeWrap,
  ReivewImageWrap,
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
} from "./styles/GreadPageStyle";

// 고깃집 정보 상세보기 페이지입니다.
const GreadPage = () => {
  const [meatMenu, setMeatMenu] = useState([]);

  useEffect(() => {
    const MenuData = async () => {
      try {
        const data = await MeatMenu();
        setMeatMenu(data);
      } catch (error) {
        console.log(error);
      }
    };
    MenuData();
  }, []);

  return (
    <div>
      {/* 가게 정보 */}
      <InfoWrap>
        {/* 이미지 */}
        <InfoImageWrap>
          <img src="https://picsum.photos/1180/800/?category=meat" alt="" />
        </InfoImageWrap>
        {/* 컨텐츠 */}
        <InfoContentWrap>
          <InfoContent>
            <InfoName>
              <span>목구멍</span>
            </InfoName>
            <InfoDescWrap>
              <InfoDesc>
                <InfoDescItem>주소</InfoDescItem>
                <InfoDescContent>
                  대구 중구 공평로8길 25 미진삼겹살
                </InfoDescContent>
              </InfoDesc>
              <InfoDesc>
                <InfoDescItem>전화번호</InfoDescItem>
                <InfoDescContent>053-215-6969</InfoDescContent>
              </InfoDesc>
              <InfoDesc>
                <InfoDescItem>종류</InfoDescItem>
                <InfoDescContent>돼지고기</InfoDescContent>
              </InfoDesc>
              <InfoDesc>
                <InfoDescItem>서비스</InfoDescItem>
                <InfoDescContent>
                  무선인터넷, 유아의자, 남/녀화장실, 주차장
                </InfoDescContent>
              </InfoDesc>
            </InfoDescWrap>
          </InfoContent>
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
          {/* 
          // TODO Mapper Menu
          */}
          <MenuCardWrap>
            {/* 그림 */}
            <MenuCardImageWrap>
              <img src="https://picsum.photos/370/350/?category=meat" alt="" />
            </MenuCardImageWrap>
            {/* 
      // ! 가게 정보
      */}
            <MenuCardContentWrap>
              <MenuCardContent>
                <MenuCardContentItem>
                  <span>미진삼겹살(600g)</span>
                </MenuCardContentItem>
                <MenuCardContentPrice>
                  <span>47,000원</span>
                </MenuCardContentPrice>
              </MenuCardContent>
            </MenuCardContentWrap>
          </MenuCardWrap>
        </MenuContentWrap>
      </MenuWrap>
      {/* 
      // ! KAKAO MAP API
    */}
      <MapApiWrapper>
        <Map
          center={{ lat: 33.5563, lng: 126.79581 }}
          style={{ width: "1160px", height: "500px" }}
        >
          <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
            <div style={{ color: "#000" }}>Hello World!</div>
          </MapMarker>
        </Map>
      </MapApiWrapper>

      {/* 
      // ! NOTICE AREA
      */}
      <NoticeWrap>
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
      </NoticeWrap>

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
                  퇴근하고 집에 가는데 고기가 너무 먹고싶어서 들렀음!! 요즘에 다
                  구워주긴 하지만 여기는 아예 주방에서 구워서 나옴, 근데 다
                  식으면 어쩌나 했는데, 따뜻하게 먹을 수 있게 그거 뭐라 그러냐
                  고체 연료 같은거 같이 나와서 그릇 계속 ...
                </p>
              </ReviewContent>
            </ReviewContentmWrap>
          </ReviewItemWrap>
        </ReviewContentWrap>
      </ReviewWrap>
    </div>
  );
};

export default GreadPage;
