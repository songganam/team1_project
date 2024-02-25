import { useState } from "react";
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

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ReviewCard = ({ reviewData }) => {
  console.log("value", reviewData);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <div style={{ width: "100%", display: "flex" }}>
        <div>
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
                {reviewData?.pic.map((pic, index) => (
                  <SwiperSlide key={index}>
                    <img src={pic} />
                  </SwiperSlide>
                ))}
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
                {reviewData?.pic.map((pic, index) => (
                  <SwiperSlide key={index}>
                    <img src={pic} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperWrap>
            <ReviewInfoWrap>
              <ReviewUserInfoWrap>
                <ReviewProfileItem>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/favicon.png"
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <span>{reviewData.nickname}</span>
                  </div>
                </ReviewProfileItem>
                <ReviewDateWrap>
                  <span>2024.02.19</span>
                </ReviewDateWrap>
                <div>
                  <CountingStar star={reviewData.star} />
                </div>
              </ReviewUserInfoWrap>
              <ReviewContentWrap>
                <span>{reviewData.review}</span>
              </ReviewContentWrap>
            </ReviewInfoWrap>
          </ContentWrap>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
