import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { getReview } from "../../api/meatApi";
import ReviewCard from "./ReviewCard";
import "./styles.css";
import { ReviewWrap } from "./styles/AdminReviewStyle";
import { TSNavStyle } from "../../components/adminInfo/styles/TSModifyStyle";

const initState = [
  {
    iuser: 0,
    writerPic: "",
    ireview: 0,
    nickname: "",
    star: 0,
    review: "",
    pic: [""],
  },
];
const AdminReviewPage = () => {
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
        {reviewData?.slice(0, 3).map((item, index) => (
          <div key={item.iuser}>
            <ReviewCard reviewData={reviewData[index]} />
          </div>
        ))}
      </div>
    </ReviewWrap>
  );
};

export default AdminReviewPage;
