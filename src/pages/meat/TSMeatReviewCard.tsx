import { useMutation } from "@tanstack/react-query";
import { CSSProperties, ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { API_SERVER_HOST } from "../../api/config";
import { postReviewReportTS } from "../../api/typeApi";
import CountingStar from "../../components/common/CountingStar";
import SelectedModal from "../../components/common/SelectedModal";
// import "../admin/styles.css";
import { AxiosError } from "axios";
import ResultModal from "../../components/common/ResultModal";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import "../admin/styles.css";
import {
  ContentWrap,
  MiniBtn,
  ReviewCardWrap,
  ReviewContent,
  ReviewContentWrap,
  ReviewDate,
  ReviewDateWrap,
  ReviewInfoWrap,
  ReviewProfileItem,
  ReviewShowTop,
  ReviewShowWrap,
  ReviewUserInfoWrap,
  ReviewWrtier,
  SwiperWrap,
} from "../admin/styles/AdminReviewStyle";
import "../admin/styles/swiper.css";
import { ReportForm, SwiperStyle, deatailReviewForm } from "./Meat";
import OptiPlaceholder from "../../components/image-optimization/OptiPlaceholder";
import OptiWireframe from "../../components/image-optimization/OptiWireframe";

const TSMeatReviewCard = ({
  reviewData,
}: {
  reviewData: deatailReviewForm;
}) => {
  const { ishop } = useParams();
  console.log("ishop", ishop);
  console.log("value임", reviewData);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const swiperStyle: SwiperStyle = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
  };

  const baseApi = API_SERVER_HOST;
  // const host = `${baseApi}/pic/shop/${ishop}/shop_pic/`;
  // const handleClickReply = () => {
  //   console.log("작성이 완료되었습니다.");
  // };
  interface SwiperStyles extends CSSProperties {
    "--swiper-navigation-color"?: string;
    "--swiper-pagination-color"?: string;
  }

  const swiperStyles: SwiperStyles = {
    "--swiper-navigation-color": "transparent",
    "--swiper-pagination-color": "transparent",
  };

  // const numberIshop = parseInt(ishop);
  const initState: ReportForm = {
    ireview: 0,
    ireport: 1,
    ishop: Number(ishop),
    checkShop: 0,
  };

  const [reportData, setReportData] = useState(initState);
  const ReportMutation = useMutation({
    mutationFn: (reportData: ReportForm) => postReviewReportTS({ reportData }),
    onSuccess: () => {
      console.log("성공");
      openModal("신고성공", "신고가 요청이 처리되었습니다.", shutModal);
    },
    onError: (error: AxiosError) => {
      // if (error.response && error.response.status === 404) {
      //   // openModal("예약 실패", "시간을 기입해주세요.", closeModal);
      //   openModal("신고 오류", "이미 신고한 글입니다.", shutModal);
      // }
      if (error.response) {
        const responseData = error.response.data as { code?: string };
        if (responseData.code === "REPORT_COMMUNITY_MYUSER") {
          openModal(
            "신고 실패",
            "본인 게시글은 신고할 수없습니다. ",
            shutModal,
          );
        } else if (responseData.code === "REPORT_COMMUNITY_ENTITY") {
          openModal("신고 실패", "이미 신고된 게시글입니다.", shutModal);
        }
      }
    },
  });

  console.log("ishop", typeof ishop);
  console.log("ireview", reviewData.ireview);
  console.log("ireview :", reportData.ireview);
  console.log("---------");

  const reviewNum = reviewData.ireview;

  // const [reportData, setReportData] = useState(reportInitState);

  const [showReportForm, setShowReportForm] = useState(false);
  const {
    isModal,
    openModal,
    // closeModal,
    openSelectModal,
    shutModal,
    isSelectModal,
    cancelSelectModal,
  } = useCustomHook();

  const handleClickReport = () => {
    setShowReportForm(true);
  };
  useEffect(() => {
    console.log("리포트 값 업데이트됨:", reportData.ireport);
  }, [reportData?.ireport]);

  const handleChangeReport = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(e.target.value, 10);
    setReportData(prevValue => ({
      ...prevValue,
      ireport: selectedValue,
    }));
    // handleClickBoardReport(selectedValue);
    // console.log("리포트", reportData.ireport);
  };

  const closeModal = () => {
    setShowReportForm(false);
  };

  const handleClickBoardReport = async () => {
    // const numIboard = parseInt(iboard, 10);
    const report = {
      ishop: Number(ishop),
      ireport: reportData.ireport,
      checkShop: 0,
      ireview: reviewNum,
    };
    console.log("report form test ", reportData);
    console.log("reportData ", report);
    await ReportMutation.mutate(report);
  };
  // const handleClickReport = () => {
  //   openModal("테스트", "테스또", shutModal);
  // };

  return (
    <div>
      {isModal.isOpen && (
        <ResultModal
          title={isModal.title}
          content={isModal.content}
          callFn={isModal.callFn}
        />
      )}
      {showReportForm && (
        <SelectedModal
          title={"댓글 신고하기"}
          content={
            <div style={{ padding: "10px" }}>
              <div style={{ marginBottom: "20px" }}>
                <span>신고항목을 선택해주세요.</span>
              </div>
              <div>
                <select onChange={e => handleChangeReport(e)}>
                  <option value={1}>욕설/인신공격</option>
                  <option value={2}>음란물</option>
                  <option value={3}>영리목적/홍보성</option>
                  <option value={4}>개인정보</option>
                  <option value={5}>게시글 도배</option>
                  <option value={6}>기타</option>
                </select>
              </div>
            </div>
          }
          confirmFn={() => {
            handleClickBoardReport(), closeModal();
          }}
          cancelFn={() => closeModal()}
        />
      )}
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
                          {/* <span>{createAtDate}</span> */}
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
                  {reviewData?.pic.map((pic: string, index: number) => (
                    <SwiperSlide key={index}>
                      <OptiPlaceholder
                        alt=""
                        width={300}
                        height={180}
                        placeholder={
                          <div>
                            <OptiWireframe width={300} height={180} />
                          </div>
                        }
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
                  {reviewData?.pic.map((pic: string, index: number) => (
                    <SwiperSlide key={index}>
                      <OptiPlaceholder
                        alt=""
                        height={54}
                        width={54}
                        placeholder={
                          <div>
                            <OptiWireframe width={54} height={54} />
                          </div>
                        }
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
                  {/* <span>{formattedDate}</span> */}
                </ReviewDate>
              </ReviewShowTop>
              <ReviewContent>
                <span>{reviewData?.comment}</span>
              </ReviewContent>
            </ReviewShowWrap>
          </div>
        ) : null}
        <div style={{ width: "100%" }}>
          <div
            className="like-box"
            onClick={handleClickReport}
            style={{
              display: "flex",
              float: "right",
              alignContent: "center",
              marginRight: "10px",
              marginTop: "10px",
              gap: "2px",
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/report_fill.svg`}
              alt="like"
            />

            {/* <img
            src={`${process.env.PUBLIC_URL}/assets/images/report.svg`}
            alt="like"
          /> */}

            <button
              className="like-button"
              style={{ border: "none", background: "transparent" }}
            >
              신고하기
            </button>
          </div>
        </div>
        {/* <div style={{ width: "100%" }}>
          <MiniBtn
            onClick={handleClickReport}
            style={{ float: "right", marginTop: "10px", marginRight: "10px" }}
          >
            <span>신고하기</span>
          </MiniBtn>
        </div> */}
      </ReviewCardWrap>
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
                  className="rvcard-swiper"
                >
                  {reviewData?.pic.map((pic, index) => (
                    <SwiperSlide key={index} className="rvcard-swiper-slide">
                      <img
                        src={`${baseApi}/pic/shop/${ishop}/review/${reviewData.ireview}/${reviewData.pic[index]}`}
                      />
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
                  className="rv-sub-swiper"
                >
                  {reviewData?.pic.map((pic, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={`${baseApi}/pic/shop/${ishop}/review/${reviewData.ireview}/${reviewData.pic[index]}`}
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
