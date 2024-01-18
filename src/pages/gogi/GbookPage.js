import React, { useState } from "react";
import {
  ReviewCommentInput,
  ReviewCommentItem,
  ReviewCommentItemWrap,
  ReviewCommentSubItem,
  ReviewCommentWrap,
  ReviewContent,
  ReviewContentWrap,
  ReviewFormWrap,
  ReviewImageDeleteBtn,
  ReviewImageWrap,
  ReviewInput,
  ReviewInputLabel,
  ReviewInputWrap,
  ReviewItem,
  ReviewItemWrap,
  ReviewMainImageWrap,
  ReviewRating,
  ReviewRatingStar,
  ReviewSubImageItem,
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
  // * Rating Count (초기값 : 1점)
  const [rating, setRating] = useState(1);
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

  const deleteBtn = process.env.PUBLIC_URL + `/assets/images/delete_button.svg`;
  // * Image upload
  const [mainImage, setMainImage] = useState(null);
  const [subImages, setSubImages] = useState([]);

  const handleImageChange = e => {
    const files = e.target.files;
    const fileCount = mainImage ? files.length + 1 : files.length; // 메인 이미지가 이미 있다면 +1을 해준다.

    if (fileCount + subImages.length > 5) {
      alert("최대 5개의 이미지만 업로드 가능합니다.");
      return; // 함수를 여기서 종료시켜 더 이상 진행하지 않음
    }

    let updatedMainImage = mainImage;
    const updatedSubImages = [...subImages];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const imageUrl = URL.createObjectURL(file);

      if (!updatedMainImage) {
        updatedMainImage = imageUrl;
      } else if (updatedSubImages.length < 4) {
        // 서브 이미지가 4개 미만일 때만 추가
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

  const handleDeleteSubImage = index => {
    if (index === 0 && !mainImage) {
      // 첫 번째 서브 이미지를 메인 이미지로 설정
      setMainImage(subImages[1] || null);
    }
    setSubImages(subImages.filter((_, i) => i !== index));
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
            {/* 
            // TODO 첫 input state 줘서 투명도 없애고 보여주고 그다음부터는
            // TODO 이미지가 들어오면? 투명하게 보이도록
            */}
            <ReviewImageWrap>
              <ReviewInputLabel
                htmlFor="main-page"
                mainImageSelect={mainImageSelect}
              >
                <ReviewInput
                  type="file"
                  multiple
                  onChange={handleImageChange}
                  id="main-page"
                />
              </ReviewInputLabel>
              <div>
                {mainImage && (
                  <ReviewMainImageWrap>
                    <img src={mainImage} alt="Main" />
                    <ReviewImageDeleteBtn
                      onClick={handleDeleteMainImage}
                      bgImg={deleteBtn}
                    />
                  </ReviewMainImageWrap>
                )}
                <ReviewSubImageWrap>
                  {subImages.map((image, index) => (
                    <ReviewSubImageItem key={index}>
                      <img src={image} alt={`Sub ${index}`} />
                      <ReviewImageDeleteBtn
                        onClick={() => handleDeleteSubImage(index)}
                        bgImg={deleteBtn}
                      />
                    </ReviewSubImageItem>
                  ))}
                </ReviewSubImageWrap>
              </div>
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
