import styled from "@emotion/styled";
import TextareaAutosize from "react-textarea-autosize";
import { ColorStyle } from "../../../styles/common/CommonStyle";

export const ReviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 0px 0px 30px 0px;
`;
export const ReviewItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ReviewTitle = styled.div`
  display: flex;
  padding: 30px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  span {
    color: #000;
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 41.25px */
  }
`;
export const ReviewContentWrap = styled.div`
  display: flex;
  padding: 30px 0px;
  align-items: flex-start;
  gap: 30px;
`;
export const ReviewWrapper = styled.div`
  display: flex;
  width: 530px;
  height: 450px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 30px 40px;
  flex-wrap: wrap;
`;
// export const
export const ReviewFormWrap = styled.div`
  display: flex;
  width: 530px;
  align-items: center;
  flex-shrink: 0;
`;
// ! 가게명
export const ReviewItem = styled.div`
  display: flex;
  width: 164px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  span {
    color: #000;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
  }
`;
// ? Reser Form Item (ex : 목구멍, 미진삼겹살)
export const ReviewContent = styled.div`
  display: flex;
  width: 366px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  span {
    color: #000;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
  }
`;

export const ReviewRating = styled.div`
  display: flex;
  width: 364px;
  align-items: center;
  gap: 10px;
  background-image: ${({ Rating, rating }) =>
    Rating <= rating ? "red" : "blue"};
`;
export const ReviewRatingStar = styled.img`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
`;

// ! 코멘트
export const ReviewCommentItemWrap = styled.div`
  display: flex;
  align-items: flex-start;
  width: 530px;
  flex-shrink: 0;
`;
export const ReviewCommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const ReviewCommentItem = styled.div`
  display: flex;
  width: 164px;
  height: 30px;
  flex-direction: column;
  justify-content: center;
  span {
    color: #000;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
  }
`;
export const ReviewCommentSubItem = styled.div`
  display: flex;
  width: 164px;
  height: auto;
  flex-direction: column;
  justify-content: center;
  span {
    color: var(--gray-scale-500, #8f8f8f);
    /* Rugular 11 */
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 13.75px */
  }
`;
// ! Textarea
export const ReviewInputWrap = styled.div`
  padding-top: 10px;
  width: 366px;
`;
export const ReviewCommentInput = styled(TextareaAutosize)`
  width: 366px;
  resize: none;
  font-size: 14px;
  font-family: "Pretendard";
  border: none;
  border-bottom: 1px solid ${ColorStyle.g700};
  padding-bottom: "5px";
  overflow: hidden;
`;

// ! UPLOAD IMAGE
export const ReviewImageWrap = styled.div`
  position: relative;
  display: flex;
  width: 370px;
  height: 450px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
export const ReviewInputLabel = styled.label`
  background-image: url(${({ mainImageSelect }) => mainImageSelect});
  position: absolute;
  top: 0;
  left: 10px;
  z-index: 10;
  width: 350px;
  height: 350px;
  aspect-ratio: 1/1;
  border: none;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const ReviewInput = styled.input`
  display: none;
`;
export const ReviewMainImageWrap = styled.div`
  position: relative;
  width: 350px;
  aspect-ratio: 1/1;
  background-color: #000;
  img {
    width: 350px;
    height: 350px;
    aspect-ratio: 1/1;
  }
`;
export const ReviewSubImageWrap = styled.div`
  /* position: relative; */
  padding-top: 10px;
  display: flex;
  gap: 10px;
`;
export const ReviewSubImageItem = styled.div`
  /* display: flex;  */
  border: 1px solid ${ColorStyle.g500};
  border-radius: 5px;
  width: 60px;
  height: 60px;
  /* background: blue; */
  /* background-image: url("../public/sub_image_select.png"); */
  background-repeat: no-repeat;
  background-size: cover;
  img {
    width: 100%;
    height: auto;
    /* border-radius: 10px; */
  }
`;
export const ReviewImageDeleteBtn = styled.button`
  position: absolute;
  margin-left: -20px;
  z-index: 100000000;
  width: 20px;
  height: 20px;
  background: none;
  background-image: url(${({ bgImg }) => bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
`;
// export const ReviewImageWrap = styled.div`
//   display: flex;
//   height: 450px;
//   flex-direction: column;
//   align-items: center;
//   gap: 30px;
// `;

// export const ReivewMainImageWrap = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
// `;
// export const ReviewMainImage = styled.label`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 300px;
//   height: 300px;
//   background-image: ${({ Rating, rating }) =>
//     Rating <= rating ? "red" : "blue"};
//   background-image: url(${({ bcImage }) => bcImage});
//   background-size: cover;
//   background-repeat: no-repeat;
//   border: none;
// `;

// export const ReviewSubImage = styled.div`
//   display: flex;
//   align-items: flex-start;
//   gap: 10px;
//   img {
//     width: 60px;
//     height: 60px;
//   }
// `;

export const ReviewRefText = styled.div`
  display: flex;
  width: 216px;
  height: 33px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  span {
    color: #000;
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 17.5px */
  }
`;

export const ReviewSubmitBtn = styled.button`
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 2px solid var(--sub, #066e52);
  background: #fff;
  span {
    color: var(--primary, #d60117);
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 23.75px */
  }
`;
