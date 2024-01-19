import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useParams } from "react-router";
import { getGInfo } from "../../api/GApi";
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
  ReadWrap,
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
import Loading from "../../components/loading/Loading";

// 고깃집 정보 상세보기 페이지입니다.
// TODO https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample/map/addMapDragendEvent
const GreadPage = () => {
  const { ishop } = useParams();
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
  console.log("받아온거임 : ", storeInfo);
  console.log("받아온거임2 : ", storeInfo.menu);
  console.log("x : ", storeInfo.x);
  console.log("y : ", storeInfo.y);
  let toX = storeInfo.x;
  let toY = storeInfo.y;
  console.log("x : ", toX);
  console.log("y : ", toY);

  return (
    <div>
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
                <span>{storeInfo.name}</span>
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

        <MapApiWrapper>
          <Map
            center={{ lat: 126.57271612931089, lng: 33.45057261929441 }}
            style={{ width: "1160px", height: "500px" }}
          >
            <MapMarker
              position={{ lat: 126.57271612931089, lng: 33.45057261929441 }}
            >
              <div style={{ color: "#000" }}>Hello World!</div>
            </MapMarker>
          </Map>
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

export default GreadPage;
