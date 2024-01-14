import React from "react";
import {
  ReivewMainImageWrap,
  ReviewCommentItem,
  ReviewCommentSubItem,
  ReviewCommentWrap,
  ReviewContent,
  ReviewContentWrap,
  ReviewFormWrap,
  ReviewImageWrap,
  ReviewInput,
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
                  <ReviewRatingStar>
                    <img
                      src={
                        process.env.PUBLIC_URL + `/assets/images/star_count.svg`
                      }
                      alt=""
                    />
                  </ReviewRatingStar>
                  <ReviewRatingStar>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/assets/images/star_no_count.svg`
                      }
                      alt=""
                    />
                  </ReviewRatingStar>
                </ReviewRating>
              </ReviewFormWrap>
              {/* 
              // * 코멘트
              */}
              <ReviewFormWrap>
                <ReviewCommentWrap>
                  <ReviewCommentItem>
                    <span>코멘트</span>
                  </ReviewCommentItem>
                  <ReviewCommentSubItem>
                    <span>(300자 제한)</span>
                  </ReviewCommentSubItem>
                </ReviewCommentWrap>
                <ReviewContent>
                  <ReviewInput />
                </ReviewContent>
              </ReviewFormWrap>
            </ReviewWrapper>
            {/* 이미지 첨부 */}
            <ReviewImageWrap>
              <ReivewMainImageWrap>
                <ReviewMainImage>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/images/main_image_select.png`
                    }
                    alt=""
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
