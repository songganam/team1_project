import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getAbout } from "../../api/aboutApi";
import { DefaultBt } from "../../components/button/styles/ButtonStyle";
import Fetching from "../../components/common/Fetching";
import Layout from "../../layouts/Layout";
import {
  AboutCardButton,
  AboutCardWrap,
  AboutPageCommunity,
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
import { API_SERVER_HOST } from "../../api/config";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import useCustomLogin from "../../components/meat/hooks/useCustomLogin";

const AboutPage = () => {
  const [aboutData, setAboutData] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    getAbout({ aboutData, successFn, failFn, errorFn });
  }, []);

  const { ishop } = useParams();
  const baseApi = API_SERVER_HOST;
  const host = `${baseApi}/pic/shop/`;
  const comuhost = `${baseApi}/pic/community/`;
  const { isModal, openModal, closeModal, moveToRead, moveToLogin } =
    useCustomHook();
  const { isLogin } = useCustomLogin();
  const navigate = useNavigate()

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

  // 예약 버튼 클릭 시 페이지 이동.
  const handleReserClick = (ishop, name) => {
    if (isLogin) {
      navigate(`/meat/reservation/${ishop}`, {
        state: {
          storeName: name,
        },
      });
    } else {
      openModal("로그인 필요", "로그인이 필요한 서비스입니다.", moveToLogin);
    }
  };

  const handleInfoClick = (ishop) => {
    navigate(`/meat/detail/${ishop}`)
  }
  const handleCommuClick = (iboard) => {
    navigate(`/community/read/${iboard}`)
  }

  return (
    <Layout>
      {fetching ? <Fetching /> : null}
      {aboutData.gogi && aboutData.gogi.length > 0 && (
        <AboutPageWrap>
          {/* Top사진 */}
          <AboutPageTop>
            <img
              className="TopImage"
              src="/assets/images/aboutimages/main.png"
            />
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
                    src={`${host}${aboutData.gogi[0].ishop}/shop_pic/${aboutData.gogi[0].pic}`}
                  ></img>
                  <div className="AboutCardTitle">{aboutData.gogi[0].name}</div>
                  <div className="AboutCardPrice">
                    {aboutData.gogi[0].menu}. {aboutData.gogi[0].price}
                  </div>
                  <AboutCardButton>
                    <DefaultBt className="InfoButton" onClick={e => handleInfoClick(aboutData.gogi[0].ishop) }>상세보기</DefaultBt>
                    <DefaultBt
                      className="BookButton"
                      onClick={e =>
                        handleReserClick(
                          aboutData.gogi[0].ishop,
                          aboutData.gogi[0].name,
                        )
                      }
                    >
                      예약하기
                    </DefaultBt>
                  </AboutCardButton>
                </AboutCardWrap>
                {/* 고깃집 두번쨰 카드 */}
                <AboutCardWrap>
                  <img
                    className="AboutCardImg"
                    src={`${host}${aboutData.gogi[1].ishop}/shop_pic/${aboutData.gogi[1].pic}`}
                  />
                  <div className="AboutCardTitle">{aboutData.gogi[1].name}</div>
                  <div className="AboutCardPrice">
                    {aboutData.gogi[1].menu}. {aboutData.gogi[1].price}
                  </div>
                  <AboutCardButton>
                           <DefaultBt className="InfoButton" onClick={e => handleInfoClick(aboutData.gogi[1].ishop) }>상세보기</DefaultBt>
                    <DefaultBt
                      className="BookButton"
                      onClick={e =>
                        handleReserClick(
                          aboutData.gogi[1].ishop,
                          aboutData.gogi[1].name,
                        )
                      }
                    >
                      예약하기
                    </DefaultBt>
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
                    src={`${host}${aboutData.gogi[2].ishop}/shop_pic/${aboutData.gogi[2].pic}`}
                  />
                  <div className="AboutCardTitle">{aboutData.gogi[2].name}</div>
                  <div className="AboutCardPrice">
                    {aboutData.gogi[2].menu}.{aboutData.gogi[2].price}
                  </div>
                  <AboutCardButton>
                  <DefaultBt className="InfoButton" onClick={e => handleInfoClick(aboutData.gogi[2].ishop) }>상세보기</DefaultBt>
                    <DefaultBt
                      className="BookButton"
                      onClick={e =>
                        handleReserClick(
                          aboutData.gogi[2].ishop,
                          aboutData.gogi[2].name,
                        )
                      }
                    >
                      예약하기
                    </DefaultBt>
                  </AboutCardButton>
                </AboutCardWrap>
                {/* 정육점 두번째 카드 */}
                <AboutCardWrap>
                  <img
                    className="AboutCardImg"
                    src={`${host}${aboutData.gogi[3].ishop}/shop_pic/${aboutData.gogi[3].pic}`}
                  />
                  <div className="AboutCardTitle">{aboutData.gogi[3].name}</div>
                  <div className="AboutCardPrice">
                    {aboutData.gogi[3].menu}. {aboutData.gogi[3].price}
                  </div>
                  <AboutCardButton>
                  <DefaultBt className="InfoButton" onClick={e => handleInfoClick(aboutData.gogi[3].ishop) }>상세보기</DefaultBt>
                    <DefaultBt
                      className="BookButton"
                      onClick={e =>
                        handleReserClick(
                          aboutData.gogi[3].ishop,
                          aboutData.gogi[3].name,
                        )
                      }
                    >
                      예약하기
                    </DefaultBt>
                  </AboutCardButton>
                </AboutCardWrap>
              </ButcherCards>
            </MainButcher>

            <MainBand>
              <img
                src="/assets/images/aboutimages/gogiro_band.svg"
                alt="image"
              />
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
            {/* 이벤트 첫번째 카드 */}
            {/* <AboutPageEvent>
              <div className="EventTitle">오늘의 행사</div>
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
                </AboutCardWrap> */}
            {/* 이벤트 두번째 카드
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
            </AboutPageEvent> */}

            <AboutPageCommunity>
              <span className="CommunityTitle">고기 잡담</span>
              <CommunityImages>
                <div className="BigImage" onClick={e=> handleCommuClick(aboutData.commu[0].iboard)}>
                  <img
                    src={`${comuhost}${aboutData.commu[0].iboard}/${aboutData.commu[0].pic}`}
                  />
                </div>
                <div className="smallone" onClick={e=> handleCommuClick(aboutData.commu[1].iboard)}>
                  <img
                    src={`${comuhost}${aboutData.commu[1].iboard}/${aboutData.commu[1].pic}`}
                  />
                </div>
                <div className="smalltwo" onClick={e=> handleCommuClick(aboutData.commu[2].iboard)}>
                  <img
                    src={`${comuhost}${aboutData.commu[2].iboard}/${aboutData.commu[2].pic}`}
                  />
                </div>
                <div className="smallthree" onClick={e=> handleCommuClick(aboutData.commu[3].iboard)}>
                  <img
                    src={`${comuhost}${aboutData.commu[3].iboard}/${aboutData.commu[3].pic}`}
                  />
                </div>
                <div className="smallfour" onClick={e=> handleCommuClick(aboutData.commu[4].iboard)}>
                  <img
                    src={`${comuhost}${aboutData.commu[4].iboard}/${aboutData.commu[4].pic}`}
                  />
                </div>
              </CommunityImages>
            </AboutPageCommunity>
          </AboutPageMain>
        </AboutPageWrap>
      )}
    </Layout>
  );
};

export default AboutPage;
