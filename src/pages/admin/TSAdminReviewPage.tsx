import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules

import { getReview } from "../../api/meatApi";
import { TSNavStyle } from "../../components/adminInfo/styles/TSModifyStyle";
import { DefaultBt } from "../../components/button/styles/ButtonStyle";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import "./styles.css";
import { ReviewWrap } from "./styles/AdminReviewStyle";
import ReviewAdminCard from "./styles/TSReviewAdminCard";
// import { Swiper } from "swiper/react";

const initState: ReviewForm[] = [
  {
    checkShop: 0,
    ireview: 0,
    ishop: 0,
    iuser: 0,
    star: 0,
    nickname: "",
    comment: "",
    exist: 0,
    review: "",
    createdAt: "",
    updatedAt: "",
    pics: [""],
  },
];
export interface ReviewForm {
  checkShop: number;
  ireview: number;
  nickname: string;
  ishop: number;
  iuser: number;
  star: number;
  comment: string;
  exist: number;
  review: string;
  createdAt: string;
  updatedAt: string;
  pics: string[];
}

const AdminReviewPage = () => {
  // const { adminState } = useCustomLoginTS();

  const { page, size, moveToSize } = useCustomHook();

  interface ParamForm {
    page: number;
    size: number;
  }
  const params: ParamForm = { page, size };
  const [refresh, setRefresh] = useState<boolean>(false);
  const { data } = useQuery({
    queryKey: ["reviewData", params, refresh],
    queryFn: () => getReview({ params }),
  });
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const reviewData = data || initState;
  console.log("데이터", reviewData);

  const handleMoreView = () => {
    moveToSize({ size: size + 3 });
  };
  return (
    <ReviewWrap>
      <TSNavStyle>
        <div className="page-title">매장 리뷰 관리</div>
      </TSNavStyle>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: "30px",
          // margin: "50px",
          // marginTop: "50px",
        }}
      >
        {reviewData?.map((item: ReviewForm, index: number) => (
          <div
            key={item?.ireview}
            style={{
              // width: "100%",
              flex: "1 0 30%",
              maxWidth: "30%",
            }}
          >
            <ReviewAdminCard reviewData={reviewData[index]} />
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          paddingBottom: "30px",
          paddingTop: "80px",
        }}
      >
        <DefaultBt onClick={handleMoreView}>
          <span>더보기</span>
        </DefaultBt>
      </div>
    </ReviewWrap>
  );
};

export default AdminReviewPage;
