import React, { useRef, useState } from "react";
import {
  ReivewMainImageWrap,
  ReviewCommentInput,
  ReviewCommentItem,
  ReviewCommentItemWrap,
  ReviewCommentSubItem,
  ReviewCommentWrap,
  ReviewContent,
  ReviewContentWrap,
  ReviewFormWrap,
  ReviewImageWrap,
  ReviewInputWrap,
  ReviewItem,
  ReviewItemWrap,
  ReviewMainImage,
  ReviewRating,
  ReviewRatingStar,
  ReviewRefText,
  ReviewSubImage,
  ReviewSubImageWrap,
  ReviewSubmitBtn,
  ReviewTitle,
  ReviewWrap,
  ReviewWrapper,
} from "./styles/GbookPageStyle";

// 고깃집 예약 페이지입니다.
const GbookPage = () => {
  /* 
   ? 의사코드
   ? map으로 5개의 별이 있다.
   ? 예를들어 3개를 누르면 count가 3개가 되어야하고 3개는 불이 들어오고, 2개는 불이 안들어와야함
   ? 별이 누르면
  */
  // * Rating Count
  const [rating, setRating] = useState(0);
  const handleStarClick = e => {
    setRating(e);
    console.log(e);
  };
  const noCountStar =
    process.env.PUBLIC_URL + `/assets/images/star_no_count.svg`;
  const countStar = process.env.PUBLIC_URL + `/assets/images/star_count.svg`;

  // * Text-field
  const mainImageSelect =
    process.env.PUBLIC_URL + `/assets/images/main_image_select.png`;

  // * Image upload
  const [mainImage, setMainImage] = useState(null);
  const [subImages, setSubImages] = useState([]);

  const handleImageChange = e => {
    const files = e.target.files;
    let updatedMainImage = mainImage;
    const updatedSubImages = [...subImages];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const imageUrl = URL.createObjectURL(file);

      if (!updatedMainImage) {
        updatedMainImage = imageUrl;
      } else {
        updatedSubImages.push(imageUrl);
      }
    }

    setMainImage(updatedMainImage);
    setSubImages(updatedSubImages);
  };

  const handleDeleteMainImage = () => {
    if (subImages.length > 0) {
      const newMainImage = subImages[0];
      const updatedSubImages = subImages.slice(1);
      setMainImage(newMainImage);
      setSubImages(updatedSubImages);
    } else {
      setMainImage(null);
    }
  };
  return (
    <div>
      {/* <h2>고깃집 예약하기</h2> */}
      {/* Wrapper */}
      <ReviewWrap>
        <ReviewItemWrap>
          <ReviewTitle>
            <span>리뷰쓰기</span>
          </ReviewTitle>
          {/* items */}
          <ReviewContentWrap>
            <ReviewWrapper>
              {/* 
            // * 가게명 
            */}
              <ReviewFormWrap>
                <ReviewItem>
                  <span>가게명</span>
                </ReviewItem>
                <ReviewContent>
                  <span>목구멍</span>
                </ReviewContent>
              </ReviewFormWrap>
              {/* 
              // * 날짜
              */}
              <ReviewFormWrap>
                <ReviewItem>
                  <span>날짜</span>
                </ReviewItem>
                <ReviewContent>
                  <span>2024.01.11</span>
                </ReviewContent>
              </ReviewFormWrap>
              {/* 
              // * 별점
              */}
              <ReviewFormWrap>
                <ReviewItem>
                  <span>별점</span>
                </ReviewItem>
                <ReviewRating>
                  {[1, 2, 3, 4, 5].map(star => (
                    <ReviewRatingStar
                      key={star}
                      src={star <= rating ? countStar : noCountStar}
                      alt=""
                      onClick={() => handleStarClick(star)}
                    />
                  ))}
                </ReviewRating>
              </ReviewFormWrap>
              {/* 
              // * 코멘트
              */}
              <ReviewCommentItemWrap>
                <ReviewCommentWrap>
                  <ReviewCommentItem>
                    <span>코멘트</span>
                  </ReviewCommentItem>
                  <ReviewCommentSubItem>
                    <span>(300자 제한)</span>
                  </ReviewCommentSubItem>
                </ReviewCommentWrap>

                <ReviewInputWrap>
                  <ReviewCommentInput
                    maxRows={15}
                    minRows={1}
                    placeholder="리뷰를 작성해주세요."
                    height={375}
                  />
                </ReviewInputWrap>
              </ReviewCommentItemWrap>
            </ReviewWrapper>
            {/* 이미지 첨부 */}
            {/* process.env.PUBLIC_URL +
                    `/assets/images/main_image_select.png` */}
            <ReviewImageWrap>
              <ReivewMainImageWrap>
                <ReviewMainImage htmlFor="mainImage" bcImage={mainImageSelect}>
                  <input
                    type="file"
                    id="mainImage"
                    style={{ display: "none" }}
                  />
                </ReviewMainImage>
              </ReivewMainImageWrap>
              {/* sub images */}
              <ReviewSubImageWrap>
                <ReviewSubImage>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/images/sub_image_select.png`
                    }
                    alt=""
                  />
                </ReviewSubImage>
              </ReviewSubImageWrap>
              {/* notice */}
              <ReviewRefText>
                <span>(첫 번째 사진이 대표사진이 됩니다.)</span>
              </ReviewRefText>
            </ReviewImageWrap>
          </ReviewContentWrap>
        </ReviewItemWrap>
        {/* submit button */}
        <ReviewSubmitBtn>
          <span>작성완료</span>
        </ReviewSubmitBtn>
      </ReviewWrap>
    </div>
  );
};

export default GbookPage;
