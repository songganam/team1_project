import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { getReview } from "../../api/meatApi";
import { TSNavStyle } from "../../components/adminInfo/styles/TSModifyStyle";
import "./styles.css";
import { ReviewWrap } from "./styles/AdminReviewStyle";
import ReviewAdminCard from "./styles/ReviewAdminCard";
import useCustomLoginTS from "../../components/meat/hooks/useCustomLoginTS";

const initState: ReviewForm[] = [
  {
    checkShop: 0,
    ireview: 0,
    ishop: 0,
    iuser: 0,
    star: 0,
    comment: "",
    exist: 0,
    review: "",
    createdAt: "",
    updatedAt: "",
    pics: [""],
  },
];
interface ReviewForm {
  checkShop: number;
  ireview: number;
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

  const { adminState } = useCustomLoginTS();

  const { data } = useQuery({
    queryKey: ["reviewData"],
    queryFn: () => getReview(),
  });
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // console.log("순서확인", thumbsSwiper);
  const reviewData = data || initState;
  console.log("데이터", reviewData);

  return (
    <ReviewWrap>
      <TSNavStyle>
        <div className="page-title">매장 리뷰 관리</div>
        {/* 나중에 type="submit"으로 변경해야함 */}
        {/* <ButtonStyleTS type="button">저장</ButtonStyleTS> */}
      </TSNavStyle>

      <div style={{ width: "100%", display: "flex" }}>
        {reviewData?.map((item: ReviewForm, index: number) => (
          <div key={item?.ireview}>
            <ReviewAdminCard reviewData={reviewData[index]} />
          </div>
        ))}
      </div>
    </ReviewWrap>
  );
};

export default AdminReviewPage;
