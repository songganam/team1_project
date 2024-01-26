import React, { useState } from "react";
import { useParams } from "react-router-dom";
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
  ReviewSubmitBtn,
  ReviewTitle,
  ReviewWrap,
  ReviewWrapper,
} from "./styles/MeatReviewStyle";
import { postReview } from "../../api/meatApi";

// ! 고깃집 예약 페이지입니다.
const MeatReviewPage = () => {
  /* 
   ? 의사코드
   ? map으로 5개의 별이 있다.
   ? 예를들어 3개를 누르면 count가 3개가 되어야하고 3개는 불이 들어오고, 2개는 불이 안들어와야함
   ? 별이 누르면
  */
  const { ishop } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");

  console.log("name : ", name);
  console.log("ishop : ", ishop);
  // * Rating Count (초기값 : 1점)
  const [rating, setRating] = useState(1);
  const handleStarClick = e => {
    setRating(e);
    console.log(e);
  };
  const [requiredMsg, setRequiredMsg] = useState("");
  const handleRequireMsg = e => {
    setRequiredMsg(e.target.value);
  };

  const noCountStar =
    process.env.PUBLIC_URL + `/assets/images/star_no_count.svg`;
  const countStar = process.env.PUBLIC_URL + `/assets/images/star_count.svg`;

  // * Text-field
  const mainImageSelect =
    process.env.PUBLIC_URL + `/assets/images/main_image_select.png`;

  const deleteBtn = process.env.PUBLIC_URL + `/assets/images/delete_button.svg`;
  // * Image upload
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState(null);
  const [subImages, setSubImages] = useState([]);

  const handleImageChange = e => {
    const files = Array.from(e.target.files);

    if (files.length + images.length > 5) {
      alert("최대 5개의 이미지만 업로드 가능합니다.");
      return;
    }

    const updatedImages = [...images, ...files];

    setImages(updatedImages);
    setMainImage(updatedImages[0]);
    setSubImages(updatedImages.slice(1));
  };

  const handleDeleteImage = index => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    setMainImage(updatedImages[0]);
    setSubImages(updatedImages.slice(1));
  };

  const handleSubmitClick = product => {
    const formData = new FormData();

    // dto 객체 생성
    const dto = {
      ishop: ishop,
      star: rating,
      review: requiredMsg,
      pics: subImages.map((subImg, index) => `subImage${index}`), // 상대 경로나 URL을 사용해야 합니다.
    };

    // dto 객체를 FormData에 추가
    formData.append("dto", JSON.stringify(dto));

    // mainImage 추가
    formData.append("pics", mainImage);

    // subImages 배열 추가
    subImages.forEach((subImg, index) => {
      formData.append("pics", subImg);
    });

    postReview(formData);
    console.log("review page ", formData);
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
                  <span>{name}</span>
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
                    onChange={e => handleRequireMsg(e)}
                    value={requiredMsg}
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
                    <div>
                      {mainImage && (
                        <ReviewMainImageWrap key={0}>
                          <img
                            src={URL.createObjectURL(mainImage)}
                            alt={`Main 0`}
                          />
                          <ReviewImageDeleteBtn
                            onClick={() => handleDeleteImage(0)}
                            bgImg={deleteBtn}
                          />
                        </ReviewMainImageWrap>
                      )}
                    </div>
                    <div style={{ display: "flex" }}>
                      {subImages.map((image, index) => (
                        <ReviewSubImageItem key={index + 1}>
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`Sub ${index + 1}`}
                          />
                          <ReviewImageDeleteBtn
                            onClick={() => handleDeleteImage(index + 1)}
                            bgImg={deleteBtn}
                          />
                        </ReviewSubImageItem>
                      ))}
                    </div>
                  </div>
                </ReviewImageWrap>
              </div>
            </ReviewImageWrap>
          </ReviewContentWrap>
        </ReviewItemWrap>
        {/* submit button */}
        <ReviewSubmitBtn onClick={handleSubmitClick}>
          <span>작성완료</span>
        </ReviewSubmitBtn>
      </ReviewWrap>
    </div>
  );
};

export default MeatReviewPage;
