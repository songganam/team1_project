import { ChangeEvent, useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { getCoord } from "../../api/meatApi";
import TSAdressField from "../../components/adminInfo/TSAdressField";
import TSCheckBoxInput from "../../components/adminInfo/TSCheckBoxInput";
import TSDepositField from "../../components/adminInfo/TSDepositField";
import TSExtraAdressField from "../../components/adminInfo/TSExtraAdressField";
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
import EmptyModal from "../../components/common/EmptyModal";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import { useQuery } from "@tanstack/react-query";
import useCustomLoginTS from "../../components/meat/hooks/useCustomLoginTS";
import { useParams } from "react-router";
import { getGInfoTS } from "../../api/typeApi";

// 매장정보 초기값
const initState: ShopInfo = {
  pics: [],
  imeat: 0,
  ishop: 0,
  name: "",
  location: "",
  adress: "",
  extraAdress: "",
  open: "",
  tel: "",
  x: "",
  y: "",
  deposit: 0,
  facilities: [],
};

// 매장정보 타입 정의
interface ShopInfo {
  pics: File[];
  imeat: number;
  ishop: number;
  name: string;
  location: string;
  adress: string;
  extraAdress: string;
  open: string;
  tel: string;
  x: string;
  y: string;
  deposit: number;
  facilities: string[];
}

// 다음포스트 관련 타입 정의
// X, Y 좌표 결과 타입 정의
interface CoordResult {
  x: string;
  y: string;
}
// 다음 포스트에서 반환되는 데이터 타입 정의
interface Address {
  zonecode: string;
  address: string;
}

//todo SignApi에서 회원가입 정보로 매장정보 불러와서 수정해야함

const TSAdminInfoPage = () => {
  // 커스텀 훅
  const { isEmptyModal, openEmptyModal, closeEmptyModal } = useCustomHook();
  // const { isAdminLogin } = useCustomLoginTS();
  const { ishop } = useParams();

  const { data, isFetching } = useQuery({
    queryKey: ["storeInfo", ishop],
    queryFn: () => getGInfoTS({ ishop }),
  });
  const storeInfo = data || initState;
  console.log("응답 데이터", storeInfo);
  console.log("가게pk", ishop);

  // 매장정보 상태관리
  const [shopInfo, setShopInfo] = useState<ShopInfo>(storeInfo);

  // 이미지 업로드 관련
  // 자식 컴포넌트로부터 전달받은 이미지 파일 배열 처리
  const handleChangeImage = (files: File[]) => {
    // shopInfo의 pics 상태 업데이트
    setShopInfo(prev => ({ ...prev, pics: files }));
  };

  // 체크박스 관련
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<
    Array<{ id: string; label: string }>
  >([]);
  // 체크박스 컴포넌트로 부터 전달받은 배열 처리
  const handleChangeCheckbox = (
    selectedOptions: Array<{ id: string; label: string }>,
  ) => {
    setSelectedCheckboxes(selectedOptions);
    const facityLabels = selectedOptions.map(option => option.label);
    setShopInfo(prev => ({ ...prev, facilities: facityLabels }));
  };

  // 라디오 버튼 관련
  const [selectedRadios, setSelectedRadios] = useState<number>();
  const [selectedLabel, setSelectedLabel] = useState("");
  // 라디오 컴포넌트로 부터 전달받은 ID 처리
  const handleChangeRadio = (selectedId: number, selectedLabel: string) => {
    setSelectedRadios(selectedId);
    setSelectedLabel(selectedLabel);
    setShopInfo(prev => ({ ...prev, imeat: selectedId }));
  };

  // 텍스트필드 관련
  const [text, setText] = useState("");
  // 텍스트필드 값 변경 이벤트 핸들러
  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setShopInfo({ ...shopInfo, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  // textarea 값 변경 이벤트 핸들러
  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setShopInfo({ ...shopInfo, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  // 다음포스트 관련
  // @COMMENT daum-post (여기는 건들면 안돼용!!!)
  const handleComplete = (adress: Address) => {
    const newAddress = adress.address;
    // 주소와 상세주소 조합
    // const fullLocation = `${newAddress} ${extraAdress}`.trim();

    setShopInfo(prev => ({ ...prev, adress: newAddress }));
    // 이건 X,Y 값을 알아내기 위한 API이기때문에 필요없으시면 사용하실 필요 없습니다.
    getCoord({ fullAddress: newAddress, successCoordFn });
    closeEmptyModal();
  };
  // @COMMENT X, Y Coord Value
  const successCoordFn = (result: CoordResult) => {
    console.log("result value ", result);
    // const xValue = result.x;
    // const yValue = result.y;
    setShopInfo(prev => ({ ...prev, x: result.x, y: result.y }));
  };
  // @COMMENT 다음포스트 호출
  const handleOpenDaumPostSearch = () => {
    console.log("modal on");
    openEmptyModal(
      // 얘가 다음 포스트 입니다. 저는 모달안에다가 띄우기 위해서 이렇게 했지만
      // 다른 방식으로 사용하셔도 무방합니다.
      <DaumPostcodeEmbed onComplete={handleComplete} />,
      closeEmptyModal,
    );
  };

  // 상세주소 입력 + location 업데이트
  const [extraAdress, setExtraAdress] = useState("");
  const handleChangeDetailLocation = (e: ChangeEvent<HTMLInputElement>) => {
    const newExtraAdress = e.target.value;
    setExtraAdress(newExtraAdress);
    setShopInfo(prev => ({
      ...prev,
      location: `${prev.adress} ${newExtraAdress}`.trim(),
      extraAdress: newExtraAdress,
    }));
  };

  //! 여기는 콘솔 확인용================================
  console.log("선택된 고기종류", selectedRadios);
  console.log("선택된 편의시설", selectedCheckboxes);
  console.log(shopInfo);
  //!==================================================

  return (
    <TSAdminInfoWrapStyle>
      <TSNavStyle>
        <div className="page-title">매장 정보 관리</div>
        {/* 나중에 type="submit"으로 변경해야함 */}
        <ButtonStyleTS type="button">저장</ButtonStyleTS>
      </TSNavStyle>
      <TSWrapInnerStyle>
        <TSShopStyle>
          <TSBackgroundBoxStyle>
            <TSPicsInput onChange={handleChangeImage} />
          </TSBackgroundBoxStyle>
          {shopInfo.imeat !== 0 ? (
            <TSBackgroundBoxStyle>
              <TSCheckBoxInput onChange={handleChangeCheckbox} />
            </TSBackgroundBoxStyle>
          ) : null}
          <TSBackgroundBoxStyle>
            <TSRadioInput
              onChange={(selectedId, selectedLabel) =>
                handleChangeRadio(selectedId, selectedLabel)
              }
            />
          </TSBackgroundBoxStyle>
          <TSBackgroundBoxStyle>
            <TSBoxInnerStyle>
              <div className="title">
                <div>상호명</div>
                <div className="essential">*</div>
              </div>
              <TSTextField
                placeholder="상호명을 입력하세요"
                name="name"
                value={shopInfo.name}
                onChange={handleChangeText}
              />
              <div className="name-guide">
                <div className="text-guide">
                  숫자, 한글, 영문, 특수문자 사용가능
                </div>
                <div className="text-length">{text.length}/30</div>
              </div>
            </TSBoxInnerStyle>
          </TSBackgroundBoxStyle>
          <TSBackgroundBoxStyle>
            <TSBoxInnerStyle>
              <div className="title">
                <div>전화번호</div>
                <div className="essential">*</div>
              </div>
              <TSTextField
                placeholder="전화번호를 입력하세요"
                name="tel"
                value={shopInfo.tel}
                onChange={handleChangeText}
              />
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
                  value={shopInfo.open}
                  onChange={handleChangeTextarea}
                />
                <div className="name-guide">
                  <div className="text-guide">
                    숫자, 한글, 영문, 특수문자 사용가능
                  </div>
                  <div className="text-length">{text.length}/100</div>
                </div>
              </div>
            </TSBoxInnerStyle>
          </TSBackgroundBoxStyle>
          <TSBackgroundBoxStyle>
            <TSBoxInnerStyle>
              <div className="title">
                <div>위치</div>
                <div className="essential">*</div>
              </div>
              <div className="location-box">
                <div className="location-input-box">
                  <TSAdressField
                    placeholder="주소검색을 이용해주세요"
                    readonly={true}
                    name="location"
                    value={shopInfo.adress}
                  />
                  <TSExtraAdressField
                    placeholder="상세주소를 입력하세요"
                    readonly={false}
                    name="extraAdress"
                    value={shopInfo.extraAdress}
                    onChange={handleChangeDetailLocation}
                  />
                </div>
                <div>
                  <ButtonStyleTS
                    type="button"
                    onClick={handleOpenDaumPostSearch}
                  >
                    주소 검색
                  </ButtonStyleTS>
                </div>
              </div>
            </TSBoxInnerStyle>
          </TSBackgroundBoxStyle>
          {shopInfo.imeat !== 0 ? (
            <TSBackgroundBoxStyle>
              <TSBoxInnerStyle>
                <div className="title">
                  <div>예약금</div>
                  <div className="essential">*</div>
                </div>
                <TSDepositField
                  placeholder="예약금을 입력해주세요"
                  name="deposit"
                  value={shopInfo.deposit}
                  onChange={handleChangeText}
                />
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
              {shopInfo.pics[0] ? (
                <div className="preview-inner">
                  <img
                    className="preview-img"
                    src={URL.createObjectURL(shopInfo.pics[0])}
                  />
                  <div className="shop-info-box">
                    <div className="shop-info">
                      <div className="shop-name">{shopInfo.name}</div>
                      <div className="shop-info-detail-box">
                        <div className="shop-info-text-wrap">
                          <div className="shop-info-cate">주소</div>
                          <div className="shop-info-detail">
                            {shopInfo.location}
                          </div>
                        </div>
                        <div className="shop-info-text-wrap">
                          <div className="shop-info-cate">전화번호</div>
                          <div className="shop-info-detail">{shopInfo.tel}</div>
                        </div>
                        <div className="shop-info-text-wrap">
                          <div className="shop-info-cate">고기종류</div>
                          <div className="shop-info-detail">
                            {selectedLabel}
                          </div>
                        </div>
                        <div className="shop-info-text-wrap">
                          <div className="shop-info-cate">편의시설</div>
                          <div className="shop-info-detail">
                            {selectedCheckboxes
                              .map(option => option.label)
                              .join(", ")}
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

      {/* 모달창 */}
      {isEmptyModal.isOpen && (
        <EmptyModal
          content={isEmptyModal.content}
          callFn={isEmptyModal.callFn}
        />
      )}
    </TSAdminInfoWrapStyle>
  );
};

export default TSAdminInfoPage;
