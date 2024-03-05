import { useState } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import CountingStar from "../../../components/common/CountingStar";
import {
  ContentWrap,
  ReviewContentWrap,
  ReviewDateWrap,
  ReviewInfoWrap,
  ReviewProfileItem,
  ReviewUserInfoWrap,
  SwiperWrap,
} from "./AdminPageStyle";
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
} from "./AdminReviewStyle";
import "./swiper.css";

import { API_SERVER_HOST } from "../../../api/config";
import useCustomLoginTS from "../../../components/meat/hooks/useCustomLoginTS";

const baseApi = API_SERVER_HOST;

const ReviewAdminCard = ({ reviewData }) => {
  const { adminState } = useCustomLoginTS();
  console.log("value", reviewData);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const ishop = adminState.ishop;
  // const checkshop = adminState.checkshop;

  const [inputVisual, setInpuVisual] = useState(false);
  const handleClickInput = () => {
    setInpuVisual(true);
  };

  const replayInitData = {
    ireview: 0,
    checkShop: 0,
    comment: "",
  };

  const [replyData, setReplyData] = useState(replayInitData);
  const handleClickReply = (ireview, checkShop) => {
    console.log(ireview, checkShop);
    console.log("작성이 완료되었습니다.");
    setReplyData({ ...replyData, ireview: ireview, checkShop: checkShop });
    console.log("총 데이터 ", replyData);
  };
  const handleChange = e => {
    setReplyData({ ...replyData, [e.target.name]: e.target.value });
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
                {reviewData?.pics.map((pic, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={`${baseApi}/pic/shop/${ishop}/review/${reviewData.ireview}/${pic}`}
                    />
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
                {reviewData?.pics.map((pic, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={`${baseApi}/pic/shop/${ishop}/review/${reviewData.ireview}/${pic}`}
                    />
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
      {reviewData?.exist === 1 ? (
        <div>
          <ReviewShowWrap>
            <ReviewShowTop>
              <ReviewWrtier>
                <span>사장님</span>
              </ReviewWrtier>
              <ReviewDate>
                <span>{reviewData?.updatedAt}</span>
              </ReviewDate>
            </ReviewShowTop>
            <ReviewContent>
              <span>{reviewData?.comment}</span>
            </ReviewContent>
          </ReviewShowWrap>
        </div>
      ) : (
        <div>
          <MiniBtn onClick={handleClickInput}>
            <span>답글작성</span>
          </MiniBtn>
        </div>
      )}
      {inputVisual ? (
        <div style={{ marginTop: "30px" }}>
          <ReviewInput
            type="text"
            placeholder="답글을 남겨주세요."
            maxLength={30}
            onChange={e => handleChange(e)}
          />

          <ReviewReplyBtnWrap>
            <MiniBtn
              onClick={handleClickReply(
                reviewData?.ireview,
                reviewData?.checkShop,
              )}
            >
              <span>작성완료</span>
            </MiniBtn>
          </ReviewReplyBtnWrap>
        </div>
      ) : (
        <div></div>
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

export default ReviewAdminCard;
