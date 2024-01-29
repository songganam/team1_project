import React, { useEffect, useState } from "react";
import { getAbout } from "../../api/aboutApi";
import { DefaultBt } from "../../components/button/styles/ButtonStyle";
import Layout from "../../layouts/Layout";
import {
  AboutCardButton,
  AboutCardWrap,
  AboutEventCards,
  AboutPageCommunity,
  AboutPageEvent,
  AboutPageMain,
  AboutPageShops,
  AboutPageTop,
  AboutPageWrap,
  ButcherCards,
  CommunityImages,
  GogishopCard,
  MainBand,
  MainButcher,
  MainGogiShop,
} from "./styles/AboutPageStyle";

const AboutPage = () => {
  const [aboutData, setAboutData] = useState({});
  // const [commuData, setCommuData] = useState({});

  useEffect(() => {
    getAbout({ aboutData, successFn, failFn, errorFn });
  }, []);

  const successFn = result => {
    setAboutData(result);
    // setCommuData(result);
    console.log("성공", result);
  };
  console.log("투두", aboutData);
  const failFn = result => {
    // setLoading(false);
    console.log(result);
  };
  const errorFn = result => {
    // setLoading(false);
    console.log(result);
  };

  return (
    <Layout>
      <AboutPageWrap>
        {/* Top사진 */}
        <AboutPageTop>
          <img className="TopImage" src="/assets/images/aboutimages/main.png" />
          <img
            className="TopText"
            src="/assets/images/aboutimages/toptext.png"
          />
        </AboutPageTop>
        {/* 중앙(메인) */}
        <AboutPageMain>
          <MainGogiShop>
            <div className="GogiShopTitle">오직 고기-로에서만</div>
            <GogishopCard>
              {/* 고깃집 첫번째 카드 */}
              <AboutCardWrap>
                <img
                  className="AboutCardImg"
                  src="/assets/images/aboutimages/gogishop_1.svg"
                >
                  {aboutData.gogi[0].pic}
                </img>
                <div className="AboutCardTitle">{aboutData.gogi[0].name}</div>
                <div className="AboutCardPrice">
                  {aboutData.gogi[0].menu}. {aboutData.gogi[0].price}
                </div>
                <AboutCardButton>
                  <DefaultBt className="InfoButton">상세보기</DefaultBt>
                  <DefaultBt className="BookButton">예약하기</DefaultBt>
                </AboutCardButton>
              </AboutCardWrap>
              {/* 고깃집 두번쨰 카드 */}
              <AboutCardWrap>
                <img
                  className="AboutCardImg"
                  src="/assets/images/aboutimages/gogishop_1.svg"
                />
                <div className="AboutCardTitle">{aboutData.gogi[1].name}</div>
                <div className="AboutCardPrice">
                  {aboutData.gogi[1].menu}. {aboutData.gogi[1].price}
                </div>
                <AboutCardButton>
                  <DefaultBt className="InfoButton">상세보기</DefaultBt>
                  <DefaultBt className="BookButton">예약하기</DefaultBt>
                </AboutCardButton>
              </AboutCardWrap>
            </GogishopCard>
          </MainGogiShop>

          {/* 정육점  */}
          <MainButcher>
            <div className="ButcherTitle">캠핑도 고기-로와 함께</div>
            <ButcherCards>
              {/* 정육점 첫번째 카드 */}
              <AboutCardWrap>
                <img
                  className="AboutCardImg"
                  src="/assets/images/aboutimages/butcher_1.svg"
                />
                <div className="AboutCardTitle">{aboutData.gogi[2].name}</div>
                <div className="AboutCardPrice">
                  {aboutData.gogi[2].menu}.{aboutData.gogi[2].price}
                </div>
                <AboutCardButton>
                  <DefaultBt className="InfoButton">상세보기</DefaultBt>
                  <DefaultBt className="BookButton">픽업하기</DefaultBt>
                </AboutCardButton>
              </AboutCardWrap>
              {/* 정육점 두번째 카드 */}
              <AboutCardWrap>
                <img
                  className="AboutCardImg"
                  src="/assets/images/aboutimages/butcher_2.svg"
                />
                <div className="AboutCardTitle">{aboutData.gogi[3].name}</div>
                <div className="AboutCardPrice">
                  {aboutData.gogi[3].menu}. {aboutData.gogi[3].price}
                </div>
                <AboutCardButton>
                  <DefaultBt className="InfoButton">상세보기</DefaultBt>
                  <DefaultBt className="BookButton">픽업하기</DefaultBt>
                </AboutCardButton>
              </AboutCardWrap>
            </ButcherCards>
          </MainButcher>

          <MainBand>
            <img src="/assets/images/aboutimages/gogiro_band.svg" alt="image" />
            <span className="MainBandText">고기-로</span>
          </MainBand>

          {/* 고깃집 홍보 */}
          <AboutPageShops>
            <div className="ShopTexts">
              <span className="ShopTexts-one">미친 가성비 고깃집</span>

              <span className="ShopTexts-two">:쎈밤</span>

              <span className="ShopTexts-three">
                삼겹살/목살/막창 1인분(150g)
              </span>

              <span className="ShopTexts-four">7,900원</span>
            </div>
            <img src="/assets/images/aboutimages/shoppic.svg" />
          </AboutPageShops>
          {/* 오늘의 행사 */}
          <AboutPageEvent>
            <div className="EventTitle">오늘의 행사</div>
            {/* 이벤트 첫번째 카드 */}
            <AboutEventCards>
              <AboutCardWrap>
                <img
                  className="EventImage"
                  src="/assets/images/aboutimages/butcher_3.svg"
                />
                <div className="AboutCardTitle">신미식육점</div>
                <div className="AboutCardPrice">최대 30% 할인 행사</div>
                <div className="EventButton-wrap">
                  <DefaultBt className="EventButton">방문하기</DefaultBt>
                </div>
              </AboutCardWrap>
              {/* 이벤트 두번째 카드 */}
              <AboutCardWrap>
                <img
                  className="EventImage"
                  src="/assets/images/aboutimages/butcher_3.svg"
                />
                <div className="AboutCardTitle">신미식육점</div>
                <div className="AboutCardPrice">최대 30% 할인 행사</div>
                <div className="EventButton-wrap">
                  <DefaultBt className="EventButton">방문하기</DefaultBt>
                </div>
              </AboutCardWrap>
            </AboutEventCards>
          </AboutPageEvent>

          <AboutPageCommunity>
            <span className="CommunityTitle">고기 잡담</span>
            <CommunityImages>
              <div className="BigImage">
                <img src="/assets/images/aboutimages/community_1.svg">
                  {aboutData.commu[0].pic}
                </img>
              </div>
              <div className="smallone">
                <img src="/assets/images/aboutimages/community_2.svg">
                  {aboutData.commu[1].pic}
                </img>
              </div>
              <div className="smalltwo">
                <img src="/assets/images/aboutimages/community_3.svg">
                  {aboutData.commu[2].pic}
                </img>
              </div>
              <div className="smallthree">
                <img src="/assets/images/aboutimages/community_4.svg">
                  {aboutData.commu[3].pic}
                </img>
              </div>
              <div className="smallfour">
                <img src="/assets/images/aboutimages/community_5.svg">
                  {aboutData.commu[4].pic}
                </img>
              </div>
            </CommunityImages>
          </AboutPageCommunity>
        </AboutPageMain>
      </AboutPageWrap>
    </Layout>
  );
};

export default AboutPage;
