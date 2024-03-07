import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { API_SERVER_HOST } from "../../api/config";
import { getShopInfo, putShopInfo } from "../../api/shopInfoApi";
import { atomStoreInfoState } from "../../atom/atomStoreInfoState";
import TSAddressField from "../../components/adminInfo/TSAddressField";
import TSCheckBoxInput from "../../components/adminInfo/TSCheckBoxInput";
import TSDepositField from "../../components/adminInfo/TSDepositField";
import TSPicsInput from "../../components/adminInfo/TSPicsInput";
import TSRadioInput from "../../components/adminInfo/TSRadioInput";
import TSTextField from "../../components/adminInfo/TSTextField";
import TSTextarea from "../../components/adminInfo/TSTextarea";
import { FacilitiesTypes, MeatTypes } from "../../components/adminInfo/class";
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
import AdminShopImageWireframe from "../../components/common/AdminShopImageWireframe";
import Fetching from "../../components/common/Fetching";
import ResultModal from "../../components/common/ResultModal";
import useModal from "../../components/meat/hooks/useModal";
import ImagePlaceholder from "../../components/community/ImagePlaceholder";

const host = API_SERVER_HOST;

const meatTypes = new MeatTypes();
const facilitiesTypes = new FacilitiesTypes();

const TSAdminInfoPage = () => {
  const { isModal, openModal, closeModal } = useModal();
  const [storeInfo, setStoreInfo] = useRecoilState(atomStoreInfoState);
  const [fetching, setFetching] = useState(false);

  // 매장정보를 DB에서 가져와 상태에 저장
  useEffect(() => {
    const fetchShopInfo = async () => {
      setFetching(true);
      try {
        const data = await getShopInfo({ ishop: storeInfo.ishop });
        if (data) {
          setStoreInfo(prev => ({ ...prev, ...data }));
        } else {
          openModal("매장 정보", "가져오는데 실패하였습니다", closeModal);
          return;
        }
      } catch (error) {
        openModal("서버 오류", "관리자에게 문의하세요", closeModal);
        return;
      } finally {
        setFetching(false);
      }
      console.log("등록된 매장 정보", storeInfo);
    };
    fetchShopInfo();
  }, [setStoreInfo]);

  // 정보 변경 후 서버에 업데이트 실행
  const handleSave = async () => {
    setFetching(true);

    const formData = new FormData();

    // 실제 파일 객체를 formData에 추가합니다.
    storeInfo.pics.forEach(image => {
      if (image.file) {
        formData.append("pics", image.file); // 실제 파일 객체를 formData에 추가
      }
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
      const result = await putShopInfo({ shopInfoData: formData });
      if (result) {
        console.log("매장 정보 수정 성공");
        openModal("매장 정보", "매장정보가 저장되었습니다", closeModal);
        return;
      } else {
        console.log("매장정보", storeInfo);
        openModal("매장 정보", "저장에 실패하였습니다", closeModal);
        return;
      }
    } catch (error) {
      console.log("매장 정보 수정 안됨");
      openModal("서버 오류", "관리자에게 문의하세요", closeModal);
      return;
    } finally {
      setFetching(false);
    }
  };

  return (
    <TSAdminInfoWrapStyle>
      {/* 모달창 */}
      {isModal.isOpen && (
        <ResultModal
          title={isModal.title}
          content={isModal.content}
          callFn={isModal.callFn}
        />
      )}
      {/* {fetching ? <Fetching /> : null} */}
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
          {storeInfo?.checkShop !== 1 && (
            <TSBackgroundBoxStyle>
              <TSCheckBoxInput />
            </TSBackgroundBoxStyle>
          )}
          {storeInfo?.checkShop !== 1 && (
            <TSBackgroundBoxStyle>
              <TSRadioInput />
            </TSBackgroundBoxStyle>
          )}
          <TSBackgroundBoxStyle>
            <TSBoxInnerStyle>
              <div className="title">
                <div>상호명</div>
                <div className="essential">*</div>
              </div>
              <TSTextField placeholder="상호명을 입력하세요" name="name" />
              <div className="name-guide">
                <div className="text-guide">
                  숫자, 한글, 영문, 특수문자 사용가능
                </div>
                <div className="text-length">{storeInfo?.name.length}/30</div>
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
                [평 일] 16:30 ~ 23:00 
                [주 말] 16:30 ~ 01:00 
                [휴무일] 매월 둘째주 화요일"
                  name="open"
                />
                <div className="name-guide">
                  <div className="text-guide">
                    숫자, 한글, 영문, 특수문자 사용가능
                  </div>
                  <div className="text-length">
                    {storeInfo?.open.length}/100
                  </div>
                </div>
              </div>
            </TSBoxInnerStyle>
          </TSBackgroundBoxStyle>
          <TSBackgroundBoxStyle>
            <TSAddressField />
          </TSBackgroundBoxStyle>
          {storeInfo?.checkShop !== 1 && (
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
          )}
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
                  <ImagePlaceholder
                    className="preview-img"
                    alt="대표 가게이미지"
                    src={
                      storeInfo?.checkShop !== 1
                        ? `${host}/pic/shop/${storeInfo.ishop}/shop_pic/${storeInfo.pics[0].pic}`
                        : `${host}/pic/butcher/${storeInfo.ishop}/butchershop_pic/${storeInfo.pics[0].pic}`
                    }
                    placeholder={
                      <div>
                        <AdminShopImageWireframe />
                      </div>
                    }
                  />
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
                        {storeInfo?.checkShop !== 1 && (
                          <div className="shop-info-text-wrap">
                            <div className="shop-info-cate">고기종류</div>
                            <div className="shop-info-detail">
                              {/* storeInfo.imeat의 id에 따른 label*/}
                              {meatTypes.getLabel(storeInfo.imeat)}
                            </div>
                          </div>
                        )}
                        {storeInfo?.checkShop !== 1 && (
                          <div className="shop-info-text-wrap">
                            <div className="shop-info-cate">편의시설</div>
                            <div className="shop-info-detail">
                              {/* storeInfo.facilities의 id에 따른 label 모두 */}
                              {facilitiesTypes.getLabel(storeInfo.facilities)}
                            </div>
                          </div>
                        )}
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
