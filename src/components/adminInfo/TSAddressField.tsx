import { ChangeEvent, useEffect, useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { getCoord } from "../../api/meatApi";
import useCustomHook from "../meat/hooks/useCustomHook";
import { TSBackgroundBoxStyle, TSBoxInnerStyle } from "./styles/TSModifyStyle";
import {
  TSInputStyle,
  TSTextFieldAdressStyle,
} from "./styles/TSTextFieldStyle";
import { useRecoilState } from "recoil";
import { atomStoreInfoState } from "../../atom/atomStoreInfoState";
import EmptyModal from "../common/EmptyModal";
import { ButtonStyleTS } from "./styles/ButtonStyleTS";

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

// 텍스트필드 스타일 props 타입 정의
type AdressFieldStateProps = "default" | "focus" | "error" | "filled";

const TSAddressField = () => {
  const [storeInfo, setStoreInfo] = useRecoilState(atomStoreInfoState);

  const [extraAddress, setExtraAddress] = useState("");

  const { isEmptyModal, openEmptyModal, closeEmptyModal } = useCustomHook();

  // 스타일컴포넌트 props 상태 관리
  const [state, setState] = useState<AdressFieldStateProps>("default");
  const handleFocus = () => setState("focus");
  const handleBlur = () => {
    if (extraAddress === undefined || extraAddress.trim().length === 0) {
      setState("error");
    } else {
      setState(extraAddress ? "filled" : "default");
    }
  };

  // 상세 주소 입력 처리 함수
  const handleChangeDetailLocation = (e: ChangeEvent<HTMLInputElement>) => {
    setExtraAddress(e.target.value);
    // 상세 주소 입력 시 바로 전역 상태 업데이트를 하지 않고,
    // 사용자가 다음 포스트 API를 통해 기본 주소를 선택한 이후에 결합하여 저장
  };

  // 다음포스트 관련
  // @COMMENT daum-post (여기는 건들면 안돼용!!!)
  const handleComplete = (data: Address) => {
    // 주소와 상세주소 조합
    const fullAddress = `${data.address} ${extraAddress}`.trim();

    setStoreInfo(prev => ({ ...prev, location: fullAddress }));
    // 이건 X,Y 값을 알아내기 위한 API이기때문에 필요없으시면 사용하실 필요 없습니다.
    getCoord({ fullAddress: data.address, successCoordFn });
    closeEmptyModal();
  };
  // @COMMENT X, Y Coord Value
  const successCoordFn = (result: CoordResult) => {
    console.log("result value ", result);
    // const xValue = result.x;
    // const yValue = result.y;
    setStoreInfo(prev => ({ ...prev, x: result.x, y: result.y }));
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

  return (
    <TSBoxInnerStyle>
      <div className="title">
        <div>위치</div>
        <div className="essential">*</div>
      </div>
      <div className="location-box">
        <div className="location-input-box">
          <TSTextFieldAdressStyle state={state}>
            <TSInputStyle
              type="text"
              placeholder="기본 주소"
              value={storeInfo.location} // 기본 주소만 입력
              readOnly={true}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </TSTextFieldAdressStyle>
          {/* <TSTextFieldAdressStyle state={state}>
            <TSInputStyle
              type="text"
              placeholder="상세 주소를 입력하세요"
              value={extraAddress}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChangeDetailLocation}
            />
          </TSTextFieldAdressStyle> */}
        </div>
        <div>
          <ButtonStyleTS type="button" onClick={handleOpenDaumPostSearch}>
            주소 검색
          </ButtonStyleTS>
        </div>
      </div>
      {/* 모달창 */}
      {isEmptyModal.isOpen && (
        <EmptyModal
          content={isEmptyModal.content}
          callFn={isEmptyModal.callFn}
        />
      )}
    </TSBoxInnerStyle>
  );
};

export default TSAddressField;
