import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../../styles/common/CommonStyle";

export const ReadWrap = styled.div`
  width: 1180px;
  margin: 0 auto;
`;
// *  Info Area
export const InfoWrap = styled.div`
  display: flex;
  padding: 30px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
export const InfoImageWrap = styled.div`
  width: 1180px;
  height: 800px;
  img {
    width: 1180px;
    height: 800px;
  }
`;
export const InfoContentWrap = styled.div`
  display: flex;
  width: 1180px;
  height: 258px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: absolute;
  top: 470px;
  background: rgba(17, 17, 17, 0.35);
`;
export const InfoContent = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;
export const InfoName = styled.div`
  display: flex;
  height: 36px;
  gap: 10px;
  align-items: center;
  span {
    color: ${props => props.color || ColorStyle.grayScale};
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 41.25px */
  }
  img {
    cursor: pointer;
    width: 21px;
    height: 30px;
  }
`;
export const InfoDescWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
export const InfoDesc = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
`;

// Content description Item + Content
export const InfoDescItem = styled.span`
  /* width: 50px; */
  color: ${ColorStyle.g100};
  /* Bold 14 */
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%; /* 17.5px */
`;
export const InfoDescContent = styled.span`
  color: ${ColorStyle.g100};
  /* Rugular 14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 17.5px */
`;
export const ReserBtn = styled.div`
  margin-top: -50px;
  margin-left: auto;
  padding-right: 30px;
  span {
    cursor: pointer;
    font-family: "DAEAM_LEE_TAE_JOON";
    font-size: ${FontSize.sub_title};
    color: ${ColorStyle.grayScale};
  }
`;

// ! Menu Layout
export const MenuWrap = styled.div`
  display: flex;
  padding-bottom: 30px;
  flex-direction: column;
  align-items: center;
`;
export const MenuTitle = styled.div`
  display: flex;
  width: 434px;
  height: 95px;
  flex-direction: column;
  justify-content: center;
  span {
    color: #000;
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 44px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 55px */
  }
`;
// ! Card
export const MenuContentWrap = styled.div`
  display: flex;
  width: 1180px;
  /* justify-content: center;
  align-items: center;
  align-content: center; */
  /* flex-wrap: wrap;  */
`;

export const MenuCardWrap = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
export const MenuCardImageWrap = styled.div`
  width: 370px;
  height: 350px;
  img {
    width: 370px;
    height: 350px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat, #fff;
  }
`;
export const MenuCardContentWrap = styled.div`
  /* position: absolute; */
  /* top: 100px; */
  margin-top: -130px;
  z-index: 2;
  display: flex;
  width: 370px;
  padding: 23px 29px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: rgba(0, 0, 0, 0.35);
`;
export const MenuCardContent = styled.div`
  /* display: flex; */
  height: 75px;
  align-items: flex-start;
  gap: 10px;
`;
export const MenuCardContentItem = styled.div`
  width: 185px;
  height: 33px;
  margin-bottom: 20px;
  span {
    color: #fff;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
  }
`;
export const MenuCardContentPrice = styled.div`
  width: 72px;
  height: 25px;
  /* position: absolute; */
  /* bottom: -0.087px; */
  span {
    color: #fff;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 23.75px */
  }
`;

// ! KAKAO MAP AREA
export const MapApiWrapper = styled.div`
  display: flex;
  width: 1180px;
  padding: 30px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const NoticeWrap = styled.div`
  display: flex;
  width: 1180px;
  padding: 30px 10px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
export const NoticeTitle = styled.div`
  display: flex;
  width: 164px;
  height: 60px;
  flex-direction: column;
  justify-content: center;
  span {
    color: #000;
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 44px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 55px */
  }
`;
export const NoticeCardWrap = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
`;
export const NoticeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  border: 2px solid var(--sub, #066e52);
`;
export const NoticeCardImage = styled.div`
  width: 370px;
  height: 300px;
  border-radius: 10px 10px 0px 0px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat, #d9d9d9;
  img {
    width: 370px;
    height: 300px;
    border-radius: 10px 10px 0px 0px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat, #d9d9d9;
  }
`;
export const NoticeCardContent = styled.div`
  display: flex;
  height: 100px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 0px 0px 10px 10px;
  background: var(--gray-scale-100, #f5f5f5);
`;
export const NoticeCardTitleWrap = styled.div`
  display: flex;
  width: 350px;
  height: 20px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;
export const NoticeCardTitle = styled.div`
  display: flex;
  width: 173px;
  height: 20px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  span {
    color: var(--gray-scale-1000, #000);
    /* Bold 19 */
    font-family: Pretendard;
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 23.75px */
  }
`;
export const NoticeCardDate = styled.div`
  display: flex;
  width: 90px;
  height: 14px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  span {
    color: var(--gray-scale-600, #757575);
    /* Rugular 11 */
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 13.75px */
  }
`;
export const NoticeCardItem = styled.div`
  width: 350px;
  height: 58px;
  flex-shrink: 0;
  span {
    color: var(--sub-200, #010d0a);
    /* Rugular 14 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 17.5px */
  }
`;
// ! REVIEW AREA
export const ReviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
`;
export const ReviewTitle = styled.div`
  margin-top: 150px;
  position: relative;
  display: flex;
  width: 157px;
  height: 60px;
  flex-direction: column;
  justify-content: center;
  span {
    color: #000;
    text-align: center;
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 44px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 55px */
  }
`;
export const ReviewContentWrap = styled.div`
  display: flex;
  width: 1180px;
  /* height: 360px; */
  padding: 0px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;
export const ReviewItemWrap = styled.div`
  display: flex;
  width: 1051px;
  align-items: center;
  gap: 30px;
`;
export const ReivewImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
export const ReviewMainImage = styled.div`
  width: 300px;
  height: 180px;
  img {
    width: 300px;
    height: 180px;
    border-radius: 5px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  }
`;
export const ReviewSubImage = styled.div`
  width: 60px;
  height: 50px;
  img {
    width: 60px;
    height: 50px;
    border-radius: 5px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat, #fff;
  }
`;
export const ReviewContentmWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 34px;
`;
export const ReviewProfileWrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  /* gap: 17px; */
  span {
    color: var(--gray-scale-900, #292929);

    /* Rugular 19 */
    font-family: Pretendard;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 23.75px */
  }
`;
export const ReviewProfileImage = styled.div`
  width: 56px;
  height: 56px;
  img {
    width: 56px;
    height: 56px;
    border-radius: 56px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat, #d9d9d9;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
export const ReviewContent = styled.div`
  width: 660px;
  height: 72px;
  p {
    color: var(--gray-scale-600, #757575);

    /* Rugular 19 */
    font-family: Pretendard;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 23.75px */
  }
`;

// ! KAKAOMAP OVER_RAY

export const OverlayWrap = styled.div`
  margin-top: -450px;
  margin-left: -750px;
  width: 350px;
  height: 300px;
  background-color: white;
  z-index: 100;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const OverlayItem = styled.span`
  /* width: 50px; */
  color: ${ColorStyle.g1000};
  /* Bold 14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%; /* 17.5px */
`;
export const OverlayContent = styled.span`
  color: ${ColorStyle.g500};
  /* Rugular 14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 17.5px */
`;

export const ReviewUserProfile = styled.div`
  gap: 5px;
`;
