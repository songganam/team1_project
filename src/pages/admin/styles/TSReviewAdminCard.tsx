import { ChangeEvent, useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import CountingStar from "../../../components/common/CountingStar";
import {} from "./AdminPageStyle";
import {
  ContentWrap,
  MiniBtn,
  ReviewCardWrap,
  ReviewContent,
  ReviewContentWrap,
  ReviewDate,
  ReviewDateWrap,
  ReviewInfoWrap,
  ReviewInput,
  ReviewProfileItem,
  ReviewReplyBtnWrap,
  ReviewShowTop,
  ReviewShowWrap,
  ReviewUserInfoWrap,
  ReviewWrtier,
  SwiperWrap,
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

const ReviewAdminCard = ({ reviewData }: { reviewData: ReviewForm }) => {
  const { adminState } = useCustomLoginTS();
  console.log("value", reviewData);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const ishop = adminState.ishop;
  // const checkshop = adminState.checkshop;

  const swiperStyle: SwiperStyle = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
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
          closeModal(),
            // window.location.reload(),
            setReplyData(replayInitData);
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

  const [inputVisual, setInpuVisual] = useState(false);
  const handleClickInput = () => {
    setInpuVisual(true);
  };
  const handleClickInputCancel = () => {
    setInpuVisual(false);
  };

  const dateTime = reviewData?.updatedAt;
  const date = new Date(dateTime);
  const formattedDate =
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2) +
    " " +
    ("0" + date.getHours()).slice(-2) +
    ":" +
    ("0" + date.getMinutes()).slice(-2);

  const createAt = reviewData?.createdAt;
  const createDate = new Date(createAt);
  const createAtDate =
    createDate.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2) +
    " " +
    ("0" + date.getHours()).slice(-2) +
    ":" +
    ("0" + date.getMinutes()).slice(-2);

  // console.log(formattedDate);

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
                  <div className="nickname-star-wrap">
                    <div className="user-date">
                      <div>
                        <span>{reviewData?.nickname}</span>
                      </div>
                      <ReviewDateWrap>
                        {/* <span>{reviewData.createdAt}</span> */}
                        <span>{createAtDate}</span>
                      </ReviewDateWrap>
                    </div>
                    <div>
                      <CountingStar star={reviewData?.star} />
                    </div>
                  </div>
                </ReviewProfileItem>
              </ReviewUserInfoWrap>
              <ReviewContentWrap>
                <span>{reviewData?.review}</span>
              </ReviewContentWrap>
            </ReviewInfoWrap>
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
                spaceBetween={8}
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
          </ContentWrap>
        </div>
      </div>
      {/* 제스쳐를 취하지 않았을 경우 */}
      <div></div>
      {/* 답글 입력이 완료되었다면 */}
      {reviewData?.exist === 1 ? (
        <div style={{ marginBottom: "5px", marginTop: "15px" }}>
          <ReviewShowWrap>
            <ReviewShowTop>
              <ReviewWrtier>
                <span>사장님</span>
              </ReviewWrtier>
              <ReviewDate>
                {/* <span>{reviewData?.updatedAt}</span> */}
                <span>{formattedDate}</span>
              </ReviewDate>
            </ReviewShowTop>
            <ReviewContent>
              <span>{reviewData?.comment}</span>
            </ReviewContent>
          </ReviewShowWrap>
        </div>
      ) : (
        <div style={{ marginTop: "30px", marginBottom: "30px" }}>
          <div style={{ float: "right", marginBottom: "20px" }}>
            <MiniBtn
              onClick={inputVisual ? handleClickInputCancel : handleClickInput}
            >
              <span>{inputVisual ? "작성취소" : "답글작성"}</span>
            </MiniBtn>
          </div>

          {inputVisual ? (
            <div>
              <div>
                <ReviewInput
                  placeholder="답글을 남겨주세요."
                  name="comment"
                  value={replyData.comment}
                  maxLength={30}
                  onChange={e => handleChange(e)}
                />
              </div>

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
          ) : null}
        </div>
      )}
    </ReviewCardWrap>
  );
};

export default ReviewAdminCard;
