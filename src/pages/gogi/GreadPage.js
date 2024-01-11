import React, { useEffect, useState } from "react";
import { MeatMenu } from "../../api/meatApi";
import { } from "./styles/GlistPageStyle";

import {
  QuickReser,
  QuickReserWrap,
  ReserCountBox,
  ReserCountBtn,
  ReserCountText,
  ReserCounting,
  ReserLeft,
  ReserRight,
  ReserText,
  ReserTimeBox,
  ReserTimeBtn,
  SelectBtn,
  StoreInfo,
  StoreInfoContent,
  StoreInfoContentItem,
  StoreInfoContentItemBox,
  StoreInfoContentItemDetail,
  StoreInfoTitle,
  StoreInfoWrap,
  StoreMenuCard,
  StoreMenuCardImage,
  StoreMenuCardMenuName,
  StoreMenuCardMenuPrice,
  StoreMenuCardTextBox,
  StoreMenuTitle,
  StoreMenuWrap,
  StoreNoticeCardContent,
  StoreNoticeCardDate,
  StoreNoticeCardImage,
  StoreNoticeCardTitle,
  StoreNoticeCardTitleBox,
  StoreNoticeCardWrap,
  StoreNoticeTitle,
  StoreNoticeWrap,
  StoreReviewContet,
  StoreReviewImageWrap,
  StoreReviewMainImage,
  StoreReviewSubImage,
  StoreReviewTitle
} from "./styles/GreadPageStyle";

// 고깃집 정보 상세보기 페이지입니다.
const GreadPage = () => {
  const PossibleTime = [
    "17 : 00",
    "17 : 30",
    "18 : 00",
    "18 : 30",
    "19 : 00",
    "19 : 30",
    "20 : 00",
    "20 : 30",
  ];

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
  const [reserCount, setReserCount] = useState(0);
  const handleClickCountPlus = () => {
    setReserCount(reserCount + 1);
  };
  const handleClickCountMinus = () => {
    if (reserCount >= 1) {
      setReserCount(reserCount - 1);
    } else {
      alert("0명 보다 작을 수없습니다.");
    }
  };

  return (
    <div>
      <div>
        {/* 가게이름 */}
        <div>목구멍</div>
        {/* 가게이미지   */}
        <div>
          <img src="https://picsum.photos/1180/800/?category=meat" />
        </div>
      </div>
      {/* 빠른 예약 */}
      <QuickReserWrap>
        <QuickReser>
          <ReserLeft>
            <ReserText>
              <span>예약가능시간</span>
            </ReserText>
            <ReserTimeBox>
              {PossibleTime.map((time, index) => (
                <ReserTimeBtn key={index}>
                  <span>{time}</span>
                </ReserTimeBtn>
              ))}
            </ReserTimeBox>
          </ReserLeft>
          <ReserRight>
            {/* 인원수 */}
            <ReserCounting>
              <ReserCountText>
                <span>인원수</span>
              </ReserCountText>
              <ReserCountBox>
                <ReserCountBtn onClick={handleClickCountMinus}>
                  <span>-</span>
                </ReserCountBtn>
                <ReserCountBtn>
                  <span>{reserCount}</span>
                </ReserCountBtn>
                <ReserCountBtn onClick={handleClickCountPlus}>
                  <span>+</span>
                </ReserCountBtn>
              </ReserCountBox>
            </ReserCounting>
            <SelectBtn>
              <span>다시작성</span>
            </SelectBtn>
            <SelectBtn>
              <span>예약하기</span>
            </SelectBtn>
          </ReserRight>
        </QuickReser>
      </QuickReserWrap>
      {/* 가게정보임 여긴 */}
      <StoreInfoWrap>
        <StoreInfo>
          <StoreInfoTitle>
            <span>가게정보</span>
          </StoreInfoTitle>
          <StoreInfoContent>
            <StoreInfoContentItemBox>
              <div>
                <StoreInfoContentItem>주소</StoreInfoContentItem>
              </div>
              <div>
                <StoreInfoContentItemDetail>
                  대구 중구 공평로 8길 25 미진삼겹살
                </StoreInfoContentItemDetail>
              </div>
            </StoreInfoContentItemBox>
            <StoreInfoContentItemBox>
              <div>
                <StoreInfoContentItem>전화번호</StoreInfoContentItem>
              </div>
              <div>
                <StoreInfoContentItemDetail>
                  053-215-6969
                </StoreInfoContentItemDetail>
              </div>
            </StoreInfoContentItemBox>
            <StoreInfoContentItemBox>
              <div>
                <StoreInfoContentItem>종류</StoreInfoContentItem>
              </div>
              <div>
                <StoreInfoContentItemDetail>
                  돼지고기
                </StoreInfoContentItemDetail>
              </div>
            </StoreInfoContentItemBox>
            <StoreInfoContentItemBox>
              <div>
                <StoreInfoContentItem>서비스</StoreInfoContentItem>
              </div>
              <div>
                <StoreInfoContentItemDetail>
                  단체이용가능, 남녀화장실구분, 유아의자, 대기공간, 무선인터넷
                </StoreInfoContentItemDetail>
              </div>
            </StoreInfoContentItemBox>
          </StoreInfoContent>
        </StoreInfo>
        <StoreMenuWrap>
          <StoreMenuTitle>
            <span>메뉴</span>
          </StoreMenuTitle>
          {meatMenu.map(index => (
            <StoreMenuCard key={index.idx}>
              <StoreMenuCardImage>
                <img src={index.image} alt="" />
              </StoreMenuCardImage>
              <StoreMenuCardTextBox>
                <StoreMenuCardMenuName>
                  <span>{index.name}</span>
                </StoreMenuCardMenuName>
                <StoreMenuCardMenuPrice>
                  <span>{index.price}</span>
                </StoreMenuCardMenuPrice>
              </StoreMenuCardTextBox>
            </StoreMenuCard>
          ))}
        </StoreMenuWrap>
        <StoreNoticeWrap>
          <StoreNoticeTitle>
            <span>가게소식</span>
          </StoreNoticeTitle>
          <StoreNoticeCardWrap>
            <StoreNoticeCardImage>
              <img src="https://picsum.photos/270/240/?category=meat" />
            </StoreNoticeCardImage>
            <StoreNoticeCardTitleBox>
              <StoreNoticeCardTitle>
                2024 행복한 새해맞이 이벤트
              </StoreNoticeCardTitle>
              <StoreNoticeCardDate>2024.01.01</StoreNoticeCardDate>
            </StoreNoticeCardTitleBox>
            <StoreNoticeCardContent>
              <span>
                2024년의 해가 밝았습니다. 여러분들의 바람이 올해에도 이루어지길
                바라며 소소한 이벤트를 하나 공지하고자 합니다.
              </span>
            </StoreNoticeCardContent>
          </StoreNoticeCardWrap>
        </StoreNoticeWrap>
      </StoreInfoWrap>
      {/* mapper */}
      <MapWrapper>
        <Map
          center={{ lat: 35.8668123877152, lng: 128.60146665675214 }}
          style={{ width: "1180px", height: "500px" }}
        >
          <MapMarker
            position={{ lat: 35.8668123877152, lng: 128.60146665675214 }}
          >
            <div style={{ color: "#000" }}>미진삼겹살</div>
          </MapMarker>
        </Map>
      </MapWrapper>
      {/* Review */}
      <StoreReviewTitle>
        <span>리뷰</span>
      </StoreReviewTitle>

      <StoreReviewContet>
        <StoreReviewImageWrap>
          <StoreReviewMainImage>
            <img src="https://picsum.photos/300/272/?category=meat" alt="" />
          </StoreReviewMainImage>
          <StoreReviewSubImage>
            <img src="https://picsum.photos/60/50/?category=meat" alt="" />
          </StoreReviewSubImage>
        </StoreReviewImageWrap>
      </StoreReviewContet>
    </div>
  );
};

export default GreadPage;
