import { useState } from "react";
import CountingStar from "../../components/common/CountingStar";
import {
  ContentWrap,
  ReviewContentWrap,
  ReviewDateWrap,
  ReviewInfoWrap,
  ReviewProfileItem,
  ReviewUserInfoWrap,
  SwiperWrap,
} from "./styles/AdminPageStyle";

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
} from "./styles/AdminReviewStyle";

const ReviewCard = ({ reviewData }) => {
  console.log("value", reviewData);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleClickReply = () => {
    console.log("작성이 완료되었습니다.");
  };

  return (
    <ReviewCardWrap>
      <div style={{ width: "100%", display: "flex" }}>
        <div>
          <ContentWrap>
            <SwiperWrap>
              <Swiper
                style={{
                  "--swiper-navigation-color": "transparent",
                  "--swiper-pagination-color": "transparent",
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
                    <span>{reviewData?.nickname}</span>
                  </div>
                </ReviewProfileItem>
                <ReviewDateWrap>
                  <span>2024.02.19</span>
                </ReviewDateWrap>
                <div>
                  <CountingStar star={reviewData?.star} />
                </div>
              </ReviewUserInfoWrap>
              <ReviewContentWrap>
                <span>{reviewData?.review}</span>
              </ReviewContentWrap>
            </ReviewInfoWrap>
          </ContentWrap>
        </div>
      </div>
      {/* 제스쳐를 취하지 않았을 경우 */}
      <div></div>
      {/* 답글 입력이 완료되었다면 */}
      {reviewData?.flag === 2 ? (
        <div>
          <ReviewShowWrap>
            <ReviewShowTop>
              <ReviewWrtier>
                <span>사장님</span>
              </ReviewWrtier>
              <ReviewDate>
                <span>2024.02.26</span>
              </ReviewDate>
            </ReviewShowTop>
            <ReviewContent>
              <span>
                비건왕님 안녕하세요! 정성스러운 리뷰 감사합니다! 비건왕님의
                따뜻한 리뷰에 힘입어 더 열심히 하겠습니다!
              </span>
            </ReviewContent>
          </ReviewShowWrap>
        </div>
      ) : (
        <div>
          <ReviewInput
            type="text"
            placeholder="답글을 남겨주세요."
            maxLength={30}
          />

          <ReviewReplyBtnWrap>
            <MiniBtn onClick={handleClickReply}>
              <span>작성완료</span>
            </MiniBtn>
          </ReviewReplyBtnWrap>
        </div>
      )}
      <SelectBtnWrap>
        <SelectBtnItem>
          {/* <MiniBtn>
            <span>신고하기</span>
          </MiniBtn> */}
          {/* <MiniBtn>
            <span>답글입력</span>
          </MiniBtn> */}
        </SelectBtnItem>
      </SelectBtnWrap>
    </ReviewCardWrap>
  );
};

export default ReviewCard;
