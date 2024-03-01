import { useRecoilState } from "recoil";
import { atomStoreInfoState } from "../../atom/atomStoreInfoState";
import TSAddressField from "../../components/adminInfo/TSAddressField";
import TSCheckBoxInput from "../../components/adminInfo/TSCheckBoxInput";
import TSDepositField from "../../components/adminInfo/TSDepositField";
import TSPicsInput from "../../components/adminInfo/TSPicsInput";
import TSRadioInput from "../../components/adminInfo/TSRadioInput";
import TSTextField from "../../components/adminInfo/TSTextField";
import TSTextarea from "../../components/adminInfo/TSTextarea";
import { ButtonStyleTS } from "../../components/adminInfo/styles/ButtonStyleTS";
import {
  TSAdminInfoWrapStyle,
  TSBackgroundBoxStyle,
  TSBoxInnerStyle,
  TSNavStyle,
  TSPreviewWrapStyle,
  TSShopStyle,
  TSWrapInnerStyle,
} from "../../components/adminInfo/styles/TSModifyStyle";
import { useEffect } from "react";
import { getShopInfo, putShopInfo } from "../../api/shopInfoApi";
import { FacilitiesTypes, MeatTypes } from "../../components/adminInfo/class";

const meatTypes = new MeatTypes();
const facilitiesTypes = new FacilitiesTypes();

const TSAdminInfoPage = () => {
  const [storeInfo, setStoreInfo] = useRecoilState(atomStoreInfoState);

  // 매장정보를 DB에서 가져와 상태에 저장
  useEffect(() => {
    const fetchShopInfo = async () => {
      const data = await getShopInfo({ ishop: storeInfo.ishop });
      if (data) {
        setStoreInfo(prev => ({ ...prev, ...data }));
      }
    };
    fetchShopInfo();
  }, [setStoreInfo]);

  // 정보 변경 후 서버에 업데이트 실행
  const handleSave = async () => {
    const formData = new FormData();
    storeInfo.pics.forEach(file => {
      formData.append("pics", file);
    });

    const dto = new Blob(
      [
        JSON.stringify({
          // pics: storeInfo.pics,
          imeat: storeInfo.imeat,
          name: storeInfo.name,
          location: storeInfo.location,
          ishopPics: storeInfo.ishopPics,
          open: storeInfo.open,
          tel: storeInfo.tel,
          x: storeInfo.x,
          y: storeInfo.y,
          deposit: storeInfo.deposit,
          facilities: storeInfo.facilities,
          checkShop: storeInfo.checkShop,
          ishop: storeInfo.ishop,
        }),
      ],
      { type: "application/json" },
    );
    formData.append("dto", dto);

    try {
      await putShopInfo({ shopInfoData: formData });
      console.log("매장 정보 수정 성공");
      console.log("매장정보", storeInfo);
    } catch (error) {
      console.log("매장 정보 수정 안됨");
    }
  };

  return (
    <TSAdminInfoWrapStyle>
      {/* {isFetching && <Fetching />} */}
      <TSNavStyle>
        <div className="page-title">매장 정보 관리</div>
        <ButtonStyleTS type="button" onClick={handleSave}>
          저장
        </ButtonStyleTS>
      </TSNavStyle>
      <TSWrapInnerStyle>
        <TSShopStyle>
          <TSBackgroundBoxStyle>
            <TSPicsInput />
          </TSBackgroundBoxStyle>
          {storeInfo?.imeat !== 0 ? (
            <TSBackgroundBoxStyle>
              <TSCheckBoxInput />
            </TSBackgroundBoxStyle>
          ) : null}
          <TSBackgroundBoxStyle>
            <TSRadioInput />
          </TSBackgroundBoxStyle>
          <TSBackgroundBoxStyle>
            <TSBoxInnerStyle>
              <div className="title">
                <div>상호명</div>
                <div className="essential">*</div>
              </div>
              <TSTextField placeholder={"상호명을 입력하세요"} name="name" />

              <div className="name-guide">
                <div className="text-guide">
                  숫자, 한글, 영문, 특수문자 사용가능
                </div>
                <div className="text-length">{storeInfo.name?.length}/30</div>
              </div>
            </TSBoxInnerStyle>
          </TSBackgroundBoxStyle>
          <TSBackgroundBoxStyle>
            <TSBoxInnerStyle>
              <div className="title">
                <div>전화번호</div>
                <div className="essential">*</div>
              </div>
              <TSTextField placeholder="전화번호를 입력하세요" name="tel" />
              <div className="open">
                <div className="title">
                  <div>운영시간</div>
                  {/* <div className="essential">*</div> */}
                </div>
                <TSTextarea
                  placeholder="
                [평 일] 06:00 ~ 23:00 
                [주 말] 10:00 ~ 19:00 
                [휴무일] 매월 둘째주 화요일"
                  name="open"
                />
                <div className="name-guide">
                  <div className="text-guide">
                    숫자, 한글, 영문, 특수문자 사용가능
                  </div>
                  <div className="text-length">
                    {storeInfo.open?.length}/100
                  </div>
                </div>
              </div>
            </TSBoxInnerStyle>
          </TSBackgroundBoxStyle>
          <TSBackgroundBoxStyle>
            <TSAddressField />
          </TSBackgroundBoxStyle>
          {storeInfo?.imeat !== 0 ? (
            <TSBackgroundBoxStyle>
              <TSBoxInnerStyle>
                <div className="title">
                  <div>예약금</div>
                  <div className="essential">*</div>
                </div>
                <TSDepositField placeholder="예약금을 입력해주세요" />
                <div className="text-guide">숫자만 사용가능, 단위: 원</div>
              </TSBoxInnerStyle>
            </TSBackgroundBoxStyle>
          ) : null}
        </TSShopStyle>
        <TSPreviewWrapStyle>
          <TSBackgroundBoxStyle>
            <TSBoxInnerStyle>
              <div className="title">
                <div>미리보기</div>
                {/* <div className="essential">*</div> */}
              </div>
              <div className="text-guide">
                고깃집 상세보기 보여지는 예시입니다.
              </div>
              {storeInfo?.pics[0] ? (
                <div className="preview-inner">
                  <img className="preview-img" src={storeInfo?.pics[0]} />
                  <div className="shop-info-box">
                    <div className="shop-info">
                      <div className="shop-name">{storeInfo?.name}</div>
                      <div className="shop-info-detail-box">
                        <div className="shop-info-text-wrap">
                          <div className="shop-info-cate">주소</div>
                          <div className="shop-info-detail">
                            {storeInfo?.location}
                          </div>
                        </div>
                        <div className="shop-info-text-wrap">
                          <div className="shop-info-cate">전화번호</div>
                          <div className="shop-info-detail">
                            {storeInfo?.tel}
                          </div>
                        </div>
                        <div className="shop-info-text-wrap">
                          <div className="shop-info-cate">고기종류</div>
                          <div className="shop-info-detail">
                            {/* storeInfo.imeat의 id에 따른 label*/}
                            {meatTypes.getLabel(storeInfo.imeat)}
                          </div>
                        </div>
                        <div className="shop-info-text-wrap">
                          <div className="shop-info-cate">편의시설</div>
                          <div className="shop-info-detail">
                            {/* storeInfo.facilities의 id에 따른 label 모두 */}
                            {facilitiesTypes.getLabel(storeInfo.facilities)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </TSBoxInnerStyle>
          </TSBackgroundBoxStyle>
        </TSPreviewWrapStyle>
      </TSWrapInnerStyle>
    </TSAdminInfoWrapStyle>
  );
};

export default TSAdminInfoPage;
