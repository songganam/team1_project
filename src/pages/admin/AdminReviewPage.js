import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import {
  ContentWrap,
  ReviewContentWrap,
  ReviewDateWrap,
  ReviewInfoWrap,
  ReviewProfileItem,
  ReviewUserInfoWrap,
  SwiperWrap,
} from "./styles/AdminPageStyle";
import CountingStar from "../../components/common/CountingStar";

const AdminReviewPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <div>
        <h1>리뷰 관리</h1>
      </div>
      {/* @AREA */}
      <ContentWrap>
        <SwiperWrap>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
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
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
          </Swiper>
        </SwiperWrap>
        <ReviewInfoWrap>
          <ReviewUserInfoWrap>
            <ReviewProfileItem>
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/favicon.png"}
                  alt=""
                />
              </div>
              <div>
                <span>비건왕</span>
              </div>
            </ReviewProfileItem>
            <ReviewDateWrap>
              <span>2024.02.19</span>
            </ReviewDateWrap>
            <div>
              <CountingStar star={5} />
            </div>
          </ReviewUserInfoWrap>
          <ReviewContentWrap>
            <span>
              맛있는 음식과 아늑한 분위기, 친절한 서비스가 인상적이었어요.
              다음에 또 방문할 의사 있습니다.
            </span>
          </ReviewContentWrap>
        </ReviewInfoWrap>
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
