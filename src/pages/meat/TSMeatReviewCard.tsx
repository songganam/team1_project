import { useMutation } from "@tanstack/react-query";
import {
  CSSProperties,
  ChangeEvent,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { API_SERVER_HOST } from "../../api/config";
import { postReportTS, postReviewReportTS } from "../../api/typeApi";
import CountingStar from "../../components/common/CountingStar";
import "../admin/styles.css";
import {
  ContentWrap,
  ReviewContentWrap,
  ReviewDateWrap,
  ReviewInfoWrap,
  ReviewProfileItem,
  ReviewUserInfoWrap,
  SwiperWrap,
} from "../admin/styles/AdminReviewStyle";
import { ReviewCardWrap } from "../admin/styles/AdminReviewStyle";
import { ReportForm, ReviewDataForm } from "./Meat";
import SelectedModal from "../../components/common/SelectedModal";
import useCustomHook from "../../components/meat/hooks/useCustomHook";

const TSMeatReviewCard = ({ reviewData }: { reviewData: ReviewDataForm }) => {
  const { ishop } = useParams();
  console.log("ishop", ishop);
  console.log("value임", reviewData);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const baseApi = API_SERVER_HOST;
  // const host = `${baseApi}/pic/shop/${ishop}/shop_pic/`;
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

  // const numberIshop = parseInt(ishop);
  const initState: ReportForm = {
    ireview: reviewData.ireview,
    ireport: 1,
    ishop: Number(ishop),
    checkShop: 0,
  };

  const [reportData, setReportData] = useState(initState);
  const ReportMutation = useMutation({
    mutationFn: (reportData: ReportForm) => postReviewReportTS({ reportData }),
    onSuccess: () => {
      console.log("성공");
    },
    onError: () => {},
  });

  console.log("ishop", typeof ishop);
  console.log("ireview", reviewData.ireview);
  console.log("ireview :", reportData.ireview);
  console.log("---------");

  const reviewNum = reviewData.ireview;

  // const [reportData, setReportData] = useState(reportInitState);

  const {
    isModal,
    openModal,
    // closeModal,
    openSelectModal,
    shutModal,
    isSelectModal,
    cancelSelectModal,
  } = useCustomHook();

  // const handleClickReport = () => {
  //   openSelectModal(
  //     "댓글 신고하기",
  //     <div style={{ padding: "10px" }}>
  //       <div style={{ marginBottom: "20px" }}>
  //         <span>신고항목을 선택해주세요.</span>
  //       </div>
  //       <div>
  //         <select onChange={e => handleChangeReport(e)}>
  //           <option value={1}>욕설/인신공격</option>
  //           <option value={2}>음란물</option>
  //           <option value={3}>영리목적/홍보성</option>
  //           <option value={4}>개인정보</option>
  //           <option value={5}>게시글 도배</option>
  //           <option value={6}>기타</option>
  //         </select>
  //       </div>
  //     </div>,
  //     () => {
  //       handleClickBoardReport(), cancelSelectModal();
  //     },
  //     () => cancelSelectModal(),
  //   );
  // };
  // useEffect(() => {
  //   console.log("리포트 값 업데이트됨:", reportData.ireport);
  // }, [reportData?.ireport]);

  // const handleChangeReport = (e: ChangeEvent<HTMLSelectElement>) => {
  //   const selectedValue = parseInt(e.target.value, 10);
  //   setReportData(prevValue => ({
  //     ...prevValue,
  //     ireport: selectedValue,
  //   }));
  //   handleClickBoardReport(selectedValue);
  //   // console.log("리포트", reportData.ireport);
  // };

  // const handleClickBoardReport = async (ireport: number) => {
  //   // const numIboard = parseInt(iboard, 10);
  //   const report = {
  //     ishop: Number(ishop),
  //     ireport: ireport,
  //     checkShop: 0,
  //     ireview: reportData.ireview,
  //   };
  //   console.log("report form test ", reportData);
  //   console.log("reportData ", report);
  //   await ReportMutation.mutate(report);
  // };

  return (
    <div>
      {isSelectModal.isOpen && (
        <SelectedModal
          title={isSelectModal.title}
          content={isSelectModal.content}
          confirmFn={isSelectModal.confirmFn}
          cancelFn={isSelectModal.cancelFn}
        />
      )}
      <ReviewCardWrap>
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
              <div>
                {/* <button onClick={handleClickReport}>신고하기</button> */}
              </div>
            </ContentWrap>
          </div>
        </div>
      </ReviewCardWrap>
    </div>
  );
};

export default TSMeatReviewCard;
