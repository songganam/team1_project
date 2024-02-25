import React, { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper } from "swiper/react";
import { ContentWrap, SwiperWrap } from "./styles/AdminPageStyle";

interface SwiperStyle extends React.CSSProperties {
  "--swiper-navigation-color"?: string;
  "--swiper-pagination-color"?: string;
}

const AdminReviewPage: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const swiperStyle: SwiperStyle = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
  };

  return (
    <div>
      <div>
        <h1>리뷰 관리</h1>
      </div>
      {/* @AREA */}
      <ContentWrap>
        <SwiperWrap>
          <Swiper
            style={swiperStyle}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {/* ... (이하 동일) */}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {/* ... (이하 동일) */}
          </Swiper>
        </SwiperWrap>
        {/* ... (이하 동일) */}
      </ContentWrap>

      {/* 더보기 버튼 */}
      <div>
        <img
          src={process.env.PUBLIC_URL + "/assets/images/next_btn.png"}
          alt=""
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/images/prev_btn.png"}
          alt=""
        />
      </div>
    </div>
  );
};

export default AdminReviewPage;
