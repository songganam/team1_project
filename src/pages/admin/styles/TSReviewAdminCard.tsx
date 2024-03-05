import { ChangeEvent, useEffect, useState } from "react";

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
} from "./AdminReviewStyle";
import "./swiper.css";

import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { API_SERVER_HOST } from "../../../api/config";
import { putReplyTS } from "../../../api/typeApi";
import useCustomHook from "../../../components/meat/hooks/useCustomHook";
import useCustomLoginTS from "../../../components/meat/hooks/useCustomLoginTS";
import { SwiperStyle, replayForm } from "../../meat/Meat";
import { ReviewForm } from "../TSAdminReviewPage";
import ResultModal from "../../../components/common/ResultModal";

const baseApi = API_SERVER_HOST;

const ReviewAdminCard = (
  { reviewData }: { reviewData: ReviewForm },
  { refresh }: { refresh: boolean },
) => {
  const { adminState } = useCustomLoginTS();
  console.log("value", reviewData);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const ishop = adminState.ishop;
  // const checkshop = adminState.checkshop;

  const swiperStyle: SwiperStyle = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
  };

  const [inputVisual, setInpuVisual] = useState(false);
  const handleClickInput = () => {
    setInpuVisual(true);
  };

  const replayInitData: replayForm = {
    ireview: 0,
    checkShop: 0,
    comment: "",
  };

  const { isModal, openModal, closeModal } = useCustomHook();
  const replyMutation = useMutation({
    mutationFn: (replyData: replayForm) => putReplyTS({ replyData }),
    onSuccess: (result: AxiosResponse) => {
      if (result) {
        openModal("등록 성공", "답글 등록을 성공하였습니다.", () => {
          closeModal(), window.location.reload();
        });
      }
    },
    onError: () => {},
  });

  const [replyData, setReplyData] = useState(replayInitData);
  const handleClickReply = async (ireview: number, checkShop: number) => {
    // console.log(ireview, checkShop);
    // console.log("작성이 완료되었습니다.");
    setReplyData(prevData => ({ ...prevData, ireview, checkShop }));
    // console.log("총 데이터 ", replyData);
    await replyMutation.mutate({ ...replyData, ireview, checkShop });
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReplyData({ ...replyData, [e.target.name]: e.target.value });
    console.log("change", replyData);
  };

  return (
    <ReviewCardWrap>
      {isModal.isOpen && (
        <ResultModal
          title={isModal.title}
          content={isModal.content}
          callFn={isModal.callFn}
        />
      )}
      <div style={{ width: "100%", display: "flex" }}>
        <div>
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
                {reviewData?.pics.map((pic: string, index: number) => (
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
                {reviewData?.pics.map((pic: string, index: number) => (
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
        // <div>
        //   <MiniBtn onClick={handleClickInput}>
        //     <span>답글작성</span>
        //   </MiniBtn>
        // </div>
        <div style={{ marginTop: "30px" }}>
          <ReviewInput
            placeholder="답글을 남겨주세요."
            name="comment"
            value={replyData.comment}
            maxLength={30}
            onChange={e => handleChange(e)}
          />

          <ReviewReplyBtnWrap>
            <MiniBtn
              onClick={() =>
                handleClickReply(reviewData?.ireview, reviewData?.checkShop)
              }
            >
              <span>작성완료</span>
            </MiniBtn>
          </ReviewReplyBtnWrap>
        </div>
      )}
    </ReviewCardWrap>
  );
};

export default ReviewAdminCard;
