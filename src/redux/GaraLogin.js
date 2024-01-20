import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { MapApiWrapper } from "../pages/meat/styles/MeatDetailStyle";

const GaraLogin = () => {
  const [draggable, setDraggable] = useState(false);
  const [zoomable, setZoomable] = useState(true);
  return (
    <div>
      <MapApiWrapper>
        <Map
          center={{ lat: 33.450701, lng: 126.570667 }}
          style={{ width: "100%", height: "360px" }}
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
              src: process.env.PUBLIC_URL + `/assets/images/favicon.png`, // 마커이미지의 주소입니다
              size: {
                width: 64,
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
      </MapApiWrapper>
    </div>
  );
};

export default GaraLogin;
