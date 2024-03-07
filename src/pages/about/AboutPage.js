import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getAbout } from "../../api/aboutApi";
import { API_SERVER_HOST } from "../../api/config";
import { DefaultBt } from "../../components/button/styles/ButtonStyle";
import Fetching from "../../components/common/Fetching";
import ResultModal from "../../components/common/ResultModal";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import useCustomLoginTS from "../../components/meat/hooks/useCustomLoginTS";
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
import OptiPlaceholder from "../../components/image-optimization/OptiPlaceholder";
import OptiWireframe from "../../components/image-optimization/OptiWireframe";

const AboutPage = () => {
  const [aboutData, setAboutData] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    getAbout({ aboutData, successFn, failFn, errorFn });
    setFetching(true);
  }, []);

  const { ishop } = useParams();
  const baseApi = API_SERVER_HOST;
  const host = `${baseApi}/pic/shop/`;
  const comuhost = `${baseApi}/pic/community/`;

  const { isModal, openModal, closeModal, moveToRead, moveToLogin } =
    useCustomHook();
  const { isLogin } = useCustomLoginTS();
  const navigate = useNavigate();

  const successFn = result => {
    setAboutData(result);
    // setCommuData(result);
    setFetching(false);

    console.log("성공", result);
  };
  console.log("투두", aboutData);
  const failFn = result => {
    // setLoading(false);
    console.log(result);
    setFetching(false);
  };
  const errorFn = result => {
    // setLoading(false);
    console.log(result);
    setFetching(false);
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

  const handleInfoClick = ishop => {
    navigate(`/meat/detail/${ishop}`);
  };
  const handleCommuClick = iboard => {
    navigate(`/community/read/${iboard}`);
  };

  console.log("test", aboutData);
  return (
    <Layout>
      {isModal.isOpen && (
        <ResultModal
          title={isModal.title}
          content={isModal.content}
          callFn={isModal.callFn}
        />
      )}
      {fetching ? <Fetching /> : null}
      {aboutData.gogi && aboutData.gogi.length > 0 && (
        <AboutPageWrap>
          {/* Top사진 */}
          <AboutPageTop>
            {/* <img
              className="TopImage"
              src="/assets/images/aboutimages/main.png"
            /> */}
            <OptiPlaceholder
              className="TopImage"
              src="/assets/images/aboutimages/main.png"
              width={1920}
              height={800}
              placeholder={
                <div>
                  <OptiWireframe width={1920} height={800} />
                </div>
              }
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
                  <OptiPlaceholder
                    width={583}
                    height={360}
                    placeholder={
                      <div>
                        <OptiWireframe width={583} height={360} />
                      </div>
                    }
                    className="AboutCardImg"
                    src={`${host}${aboutData.gogi[0]?.ishop}/shop_pic/${aboutData.gogi[0]?.pic}`}
                  ></OptiPlaceholder>
                  <div className="AboutCardTitle">
                    {aboutData.gogi[0]?.name}
                  </div>
                  <div className="AboutCardPrice">
                    {aboutData.gogi[0]?.menu}{" "}
                    {new Intl.NumberFormat("ko-KR").format(
                      aboutData.gogi[0]?.price,
                    )}
                    원
                  </div>
                  <AboutCardButton>
                    <DefaultBt
                      className="InfoButton"
                      onClick={e => handleInfoClick(aboutData.gogi[0]?.ishop)}
                    >
                      상세보기
                    </DefaultBt>
                    <DefaultBt
                      className="BookButton"
                      onClick={e =>
                        handleReserClick(
                          aboutData.gogi[0]?.ishop,
                          aboutData.gogi[0]?.name,
                        )
                      }
                    >
                      예약하기
                    </DefaultBt>
                  </AboutCardButton>
                </AboutCardWrap>
                {/* 고깃집 두번쨰 카드 */}
                <AboutCardWrap>
                  <OptiPlaceholder
                    className="AboutCardImg"
                    src={`${host}${aboutData.gogi[1]?.ishop}/shop_pic/${aboutData.gogi[1]?.pic}`}
                    width={583}
                    height={360}
                    placeholder={
                      <div>
                        <OptiWireframe width={583} height={360} />
                      </div>
                    }
                  />
                  <div className="AboutCardTitle">
                    {aboutData.gogi[1]?.name}
                  </div>
                  <div className="AboutCardPrice">
                    {aboutData.gogi[1]?.menu}{" "}
                    {new Intl.NumberFormat("ko-KR").format(
                      aboutData.gogi[1]?.price,
                    )}
                    원
                  </div>
                  <AboutCardButton>
                    <DefaultBt
                      className="InfoButton"
                      onClick={e => handleInfoClick(aboutData.gogi[1]?.ishop)}
                    >
                      상세보기
                    </DefaultBt>

                    <DefaultBt
                      className="BookButton"
                      onClick={e =>
                        handleReserClick(
                          aboutData.gogi[1]?.ishop,
                          aboutData.gogi[1]?.name,
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
                  <OptiPlaceholder
                    className="AboutCardImg"
                    src={`${host}${aboutData.gogi[2].ishop}/shop_pic/${aboutData.gogi[2].pic}`}
                    width={583}
                    height={360}
                    placeholder={
                      <div>
                        <OptiWireframe width={583} height={360} />
                      </div>
                    }
                  />
                  <div className="AboutCardTitle">{aboutData.gogi[2].name}</div>
                  <div className="AboutCardPrice">
                    {aboutData.gogi[2].menu}{" "}
                    {new Intl.NumberFormat("ko-KR").format(
                      aboutData.gogi[2].price,
                    )}
                    원
                  </div>
                  <AboutCardButton>
                    <DefaultBt
                      className="InfoButton"
                      onClick={e => handleInfoClick(aboutData.gogi[2].ishop)}
                    >
                      상세보기
                    </DefaultBt>
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
                  <OptiPlaceholder
                    className="AboutCardImg"
                    src={`${host}${aboutData.gogi[3].ishop}/shop_pic/${aboutData.gogi[3].pic}`}
                    width={583}
                    height={360}
                    placeholder={
                      <div>
                        <OptiWireframe width={583} height={360} />
                      </div>
                    }
                  />
                  <div className="AboutCardTitle">{aboutData.gogi[3].name}</div>
                  <div className="AboutCardPrice">
                    {aboutData.gogi[3].menu}{" "}
                    {new Intl.NumberFormat("ko-KR").format(
                      aboutData.gogi[3].price,
                    )}
                    원
                  </div>
                  <AboutCardButton>
                    <DefaultBt
                      className="InfoButton"
                      onClick={e => handleInfoClick(aboutData.gogi[3].ishop)}
                    >
                      상세보기
                    </DefaultBt>
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
              <OptiPlaceholder
                src="/assets/images/aboutimages/gogiro_band.svg"
                alt="image"
                width={1920}
                height={324}
                placeholder={
                  <div>
                    <OptiWireframe width={1920} height={324} />
                  </div>
                }
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
              <OptiPlaceholder
                src="/assets/images/aboutimages/shoppic.svg"
                width={875}
                height={648}
                alt={""}
                placeholder={
                  <div>
                    <OptiWireframe width={875} height={648} />
                  </div>
                }
              />
            </AboutPageShops>
            <AboutPageCommunity>
              <span className="CommunityTitle">고기 잡담</span>
              <CommunityImages>
                <div
                  className="BigImage"
                  onClick={e => handleCommuClick(aboutData.commu[0]?.iboard)}
                >
                  <OptiPlaceholder
                    src={`${comuhost}${aboutData.commu[0]?.iboard}/${aboutData.commu[0]?.pic}`}
                    width={600}
                    height={600}
                    placeholder={
                      <div>
                        <OptiWireframe width={600} height={600} />
                      </div>
                    }
                  />
                </div>
                <div
                  className="smallone"
                  onClick={e => handleCommuClick(aboutData.commu[1]?.iboard)}
                >
                  <OptiPlaceholder
                    src={`${comuhost}${aboutData.commu[1]?.iboard}/${aboutData.commu[1]?.pic}`}
                    width={290}
                    height={290}
                    placeholder={
                      <div>
                        <OptiWireframe width={290} height={290} />
                      </div>
                    }
                  />
                </div>
                <div
                  className="smalltwo"
                  onClick={e => handleCommuClick(aboutData.commu[2]?.iboard)}
                >
                  <OptiPlaceholder
                    src={`${comuhost}${aboutData.commu[2]?.iboard}/${aboutData.commu[2]?.pic}`}
                    width={290}
                    height={290}
                    placeholder={
                      <div>
                        <OptiWireframe width={290} height={290} />
                      </div>
                    }
                  />
                </div>
                <div
                  className="smallthree"
                  onClick={e => handleCommuClick(aboutData.commu[3]?.iboard)}
                >
                  <OptiPlaceholder
                    src={`${comuhost}${aboutData.commu[3]?.iboard}/${aboutData.commu[3]?.pic}`}
                    width={290}
                    height={290}
                    placeholder={
                      <div>
                        <OptiWireframe width={290} height={290} />
                      </div>
                    }
                  />
                </div>
                <div
                  className="smallfour"
                  onClick={e => handleCommuClick(aboutData.commu[4]?.iboard)}
                >
                  <OptiPlaceholder
                    src={`${comuhost}${aboutData.commu[4]?.iboard}/${aboutData.commu[4]?.pic}`}
                    width={290}
                    height={290}
                    placeholder={
                      <div>
                        <OptiWireframe width={290} height={290} />
                      </div>
                    }
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
