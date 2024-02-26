import { CSSProperties, useState } from "react";
import CountingStar from "../../components/common/CountingStar";
import {
  ContentWrap,
  ReviewContentWrap,
  ReviewDateWrap,
  ReviewInfoWrap,
  ReviewProfileItem,
  ReviewUserInfoWrap,
  SwiperWrap,
} from "../admin/styles/AdminPageStyle";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  MiniBtn,
  ReviewCardWrap,
  ReviewContent,
  ReviewDate,
  ReviewInput,
  ReviewReplyBtnWrap,
  ReviewShowTop,
  ReviewShowWrap,
  ReviewWrtier,
  SelectBtnItem,
  SelectBtnWrap,
} from "../admin/styles/AdminReviewStyle";
import { ReviewDataForm } from "./Meat";

const TSMeatReviewCard = ({ reviewData }: { reviewData: ReviewDataForm }) => {
  console.log("value", reviewData);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleClickReply = () => {
    console.log("작성이 완료되었습니다.");
  };
  interface SwiperStyles extends CSSProperties {
    "--swiper-navigation-color"?: string;
    "--swiper-pagination-color"?: string;
  }

  const swiperStyles: SwiperStyles = {
    "--swiper-navigation-color": "transparent",
    "--swiper-pagination-color": "transparent",
  };

  return (
    <div>
      {/* <ReviewCardWrap>
        <div style={{ width: "100%", display: "flex" }}>
          <div>
            <ContentWrap>
              <SwiperWrap>
                <Swiper
                  style={swiperStyles}
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
                  onSwiper={swiper => setThumbsSwiper}
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
      </ReviewCardWrap> */}
    </div>
  );
};

export default TSMeatReviewCard;
