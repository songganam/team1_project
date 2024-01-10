import React from "react";
// import { MapWrapper } from "./styles/GlistPageStyle";
// import { Map, MapMarker } from "react-kakao-maps-sdk";
import {
  QuickReser,
  ReserCountBox,
  ReserCountBtn,
  ReserCountText,
  ReserCounting,
  ReserLeft,
  ReserRight,
  ReserText,
  ReserTime,
  ReserTimeBox,
  SelectBtn,
} from "./styles/GreadPageStyle";

// 고깃집 정보 상세보기 페이지입니다.
const GreadPage = () => {
  return (
    <div>
      <div>
        {/* 가게이름 */}
        <div></div>
        {/* 가게이미지   */}
        <div>
          <img src="https://picsum.photos/1180/800/?category=meat" />
        </div>
      </div>
      {/* 빠른 예약 */}
      <QuickReser>
        <ReserLeft>
          <ReserText>
            <span>예약가능시간</span>
          </ReserText>
          <ReserTimeBox></ReserTimeBox>
        </ReserLeft>
        <ReserRight>
          {/* 인원수 */}
          <ReserCounting>
            <ReserCountText>
              <span>인원수</span>
            </ReserCountText>
            <ReserCountBox>
              <ReserCountBtn>
                <span>-</span>
              </ReserCountBtn>
              <ReserCountBtn>
                <span>0</span>
              </ReserCountBtn>
              <ReserCountBtn>
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

      {/* mapper */}
      {/* <MapWrapper>
        <Map
          center={{ lat: 33.5563, lng: 126.79581 }}
          style={{ width: "1180px", height: "500px" }}
        >
          <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
            <div style={{ color: "#000" }}>Hello World!</div>
          </MapMarker>
        </Map>
      </MapWrapper> */}
    </div>
  );
};

export default GreadPage;
