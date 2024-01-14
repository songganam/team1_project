import styled from "@emotion/styled";

export const ReviewWrap = styled.div`
  display: inline-flex;
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
`;
export const ReviewRatingStar = styled.div`
  width: 50px;
  height: 50px;
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
  height: 20px;
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
export const ReviewInput = styled.input`
  width: 360px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ReviewImageWrap = styled.div`
  display: flex;
  height: 450px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const ReivewMainImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const ReviewMainImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  img {
    width: 300px;
    height: 300px;
  }
`;
export const ReviewSubImageWrap = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
`;
export const ReviewSubImage = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  img {
    width: 60px;
    height: 60px;
  }
`;

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
