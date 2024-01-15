import React from "react";
import Layout from "../../layouts/Layout";
import {
  AboutCardButton,
  AboutCardWrap,
  AboutPageCommunity,
  AboutPageEvent,
  AboutPageMain,
  AboutPageShops,
  AboutPageTop,
  AboutPageWrap,
  MainBand,
  MainButcher,
  MainGogiShop,
} from "./styles/AboutPageStyle";
import { DefaultBt } from "../../components/button/styles/ButtonStyle";

const AboutPage = () => {
  return (
    <Layout>
      <AboutPageWrap>
        <AboutPageTop>메인사진</AboutPageTop>
        <AboutPageMain>
          <MainGogiShop>
            <div className="GogiShopTitle">오직 고기-로에서만</div>
            <AboutCardWrap>
              <img className="AboutCardImg" />
              <div className="AboutCardTitle">남문한우백화점 부림축산</div>
              <div className="AboutCardPrice">돼지양념갈비 10,000원~</div>
              <AboutCardButton>
                <DefaultBt className="InfoButton">상세보기</DefaultBt>
                <DefaultBt className="BookButton">예약하기</DefaultBt>
              </AboutCardButton>
            </AboutCardWrap>
          </MainGogiShop>
          <MainButcher>
            <div className="ButcherTitle">캠핑도 고기-로와 함께</div>
          </MainButcher>
          <MainBand>
            <span className="MainBandText">고기-로</span>
          </MainBand>
          <AboutPageShops>
            <div className="ShopTexts">
              <span className="">미친 가성비 고깃집</span>
              <br />
              <span className="">:쎈밤</span>
              <br />
              <span className="">삼겹살/목살/막창 1인분(150g)</span>
              <br />
              <span className="">7,900원</span>
            </div>
            <img className="ShopImg" />
          </AboutPageShops>
          <AboutPageEvent>오늘의 행사</AboutPageEvent>
          <AboutPageCommunity>
            <span className="CommunityTitle">고기 잡담</span>
            <br />
            <img className="BigImage" />
          </AboutPageCommunity>
        </AboutPageMain>
      </AboutPageWrap>
    </Layout>
  );
};

export default AboutPage;
