import { ChangeEvent, FormEvent, useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { getCoord } from "../../api/meatApi";
import Button from "../button/Button";
import EmptyModal from "../common/EmptyModal";
import useCustomHook from "../meat/hooks/useCustomHook";
import TSAdminHeader from "./TSAdminHeader";
import TSCheckBoxInput from "./TSCheckBoxInput";
import TSRadioInput from "./TSRadioInput";
import TSTextField from "./TSTextField";
import TSTextFieldAdress from "./TSTextFieldAdress";
import TSTextareaField from "./TSTextareaField";
import {
  TSAdminInfoWrapStyle,
  TSBackgroundBoxStyle,
  TSBoxInnerStyle,
  TSShopStyle,
} from "./styles/TSModifyStyle";

interface CheckBox {
  id: string;
  label: string;
  checked: boolean;
  value: string;
}

interface ShopInfo {
  id: string;
  upw: string;
  checkUpw: string;
  num: string;
  name: string;
  shopName: string;
  x?: string;
  y?: string;
  location: string;
  imeat: number;
}

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

// 초기값 세팅
const initState = {
  id: "",
  upw: "",
  checkUpw: "",
  num: "",
  name: "",
  shopName: "",
  x: "",
  y: "",
  location: "",
  imeat: 0,
};

const TSModify = () => {
  // 커스텀 훅
  const { isEmptyModal, openEmptyModal, closeEmptyModal } = useCustomHook();

  // 라디오 버튼 관련
  const [selectedRadioValue, setSelectedRadioValue] = useState<string>("돼지");
  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioValue(e.target.value);
    console.log(e.target.value);
  };
  const options: string[] = ["돼지", "소", "닭", "오리", "양", "정육점"];

  // 체크박스 관련
  const [checkboxes, setCheckboxes] = useState<CheckBox[]>([
    { id: "checkbox1", label: "주차장", checked: true, value: "parking" },
    { id: "checkbox2", label: "화장실구분", checked: false, value: "restroom" },
    { id: "checkbox3", label: "단체", checked: false, value: "group" },
    { id: "checkbox4", label: "Wi-fi", checked: false, value: "wifi" },
  ]);
  // 체크박스 변경 사항 처리
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCheckboxes(
      checkboxes.map(checkbox =>
        checkbox.id === name ? { ...checkbox, checked: checked } : checkbox,
      ),
    );
    console.log(e.target.value);
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 폼의 기본 제출 동작을 방지합니다.
    // 선택된 체크박스들의 value를 모아서 처리합니다. 예: 서버로 전송
    const selectedValues = checkboxes
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
    console.log("Selected values:", selectedValues);
    // 여기에서 selectedValues를 API 호출 등을 통해 서버로 전송할 수 있습니다.
  };

  // 텍스트 길이 관련
  const [textLength, setTextLength] = useState<number>(0);
  const handleInputChange = (length: number) => {
    setTextLength(length); // 입력된 텍스트의 길이를 업데이트
  };

  // 상세주소 상태
  const [extraAdress, setExtraAdress] = useState("");
  const handleChnageExtraAdress = (e: ChangeEvent<HTMLInputElement>) => {
    setExtraAdress(e.target.value);
  };

  // 다음포스트 관련
  const [signUpData, setSignUpData] = useState<ShopInfo>(initState);

  // @COMMENT daum-post (여기는 건들면 안돼용!!!)
  const handleComplete = (adress: Address) => {
    const fullAddress = adress.address;
    setSignUpData({ ...signUpData, location: fullAddress });
    // 이건 X,Y 값을 알아내기 위한 API이기때문에 필요없으시면 사용하실 필요 없습니다.
    getCoord({ fullAddress, successCoordFn });
    closeEmptyModal();
  };
  // @COMMENT X, Y Coord Value
  const successCoordFn = (result: CoordResult) => {
    console.log("result value ", result);
    // const xValue = result.x;
    // const yValue = result.y;
    setSignUpData(prev => ({ ...prev, x: result.x, y: result.y }));
  };
  // @COMMENT 다음포스트 호출
  const handleTest = () => {
    console.log("modal on");
    openEmptyModal(
      // 얘가 다음 포스트 입니다. 저는 모달안에다가 띄우기 위해서 이렇게 했지만
      // 다른 방식으로 사용하셔도 무방합니다.
      <DaumPostcodeEmbed onComplete={handleComplete} />,
      closeEmptyModal,
    );
  };

  return (
    <TSAdminInfoWrapStyle>
      {isEmptyModal.isOpen && (
        <EmptyModal
          content={isEmptyModal.content}
          callFn={isEmptyModal.callFn}
        />
      )}

      <TSAdminHeader title="매장 정보 관리" />
      <TSShopStyle>
        <TSBackgroundBoxStyle>
          <TSBoxInnerStyle>
            <div className="title">
              <div>매장사진</div>
              <div className="essential">*</div>
            </div>
            <div className="pics-container">
              <div className="text-guide">
                5MB 이하 최대 5장까지 등록 가능합니다.
              </div>
              <div>
                <Button bttext="사진등록" />
              </div>
              <div className="pics-thumb">
                <input type="file" />
              </div>
            </div>
          </TSBoxInnerStyle>
        </TSBackgroundBoxStyle>
        <TSBackgroundBoxStyle>
          <TSBoxInnerStyle>
            <div className="title">
              <div>편의시설</div>
              <div className="essential">*</div>
            </div>
            <div className="check-box-wrap">
              <form onSubmit={handleSubmit}>
                {checkboxes.map(({ id, label, checked, value }) => (
                  <TSCheckBoxInput
                    key={id}
                    label={label}
                    checked={checked}
                    onChange={handleCheckboxChange}
                    name={id} // 체크박스를 구분하기 위해 id를 name으로 사용합니다.
                    value={value} // 체크박스의 실제 값을 설정합니다.
                  />
                ))}
                {/* <button type="submit">Submit</button> */}
              </form>
            </div>
          </TSBoxInnerStyle>
        </TSBackgroundBoxStyle>
        <TSBackgroundBoxStyle>
          <TSBoxInnerStyle>
            <div className="title">
              <div>고기종류</div>
              <div className="essential">*</div>
            </div>
            <div className="radio-wrap">
              <form>
                {options.map(option => (
                  <TSRadioInput
                    key={option}
                    name={option}
                    value={option}
                    checked={selectedRadioValue === option}
                    onChange={handleRadioChange}
                  />
                ))}
              </form>
            </div>
            <div className="text-guide">정육점 사장님은 정육점 선택</div>
          </TSBoxInnerStyle>
        </TSBackgroundBoxStyle>
        <TSBackgroundBoxStyle>
          <TSBoxInnerStyle>
            <div className="title">
              <div>상호명</div>
              <div className="essential">*</div>
            </div>
            <div>
              <form>
                <TSTextField
                  placeholder="상호명을 입력하세요"
                  onInputChange={handleInputChange}
                />
              </form>
            </div>
            <div className="name-guide">
              <div className="text-guide">
                숫자, 한글, 영문, 특수문자 사용가능
              </div>
              <div className="text-length">{textLength}/30</div>
            </div>
          </TSBoxInnerStyle>
        </TSBackgroundBoxStyle>
        <TSBackgroundBoxStyle>
          <TSBoxInnerStyle>
            <div className="tel">
              <div className="title">
                <div>전화번호</div>
                <div className="essential">*</div>
              </div>
              <div>
                <form>
                  <TSTextField placeholder="전화번호를 입력하세요" />
                </form>
              </div>
            </div>
            <div className="open">
              <div className="title">
                <div>운영시간</div>
                {/* <div className="essential">*</div> */}
              </div>
              <div>
                <form>
                  <TSTextareaField
                    placeholder="
                    [평 일] 06:00 ~ 23:00
                    [주 말] 10:00 ~ 19:00
                    [휴무일] 매월 둘째주 화요일"
                    onInputChange={handleInputChange}
                  />
                </form>
              </div>
              <div className="name-guide">
                <div className="text-guide">
                  숫자, 한글, 영문, 특수문자 사용가능
                </div>
                <div className="text-length">{textLength}/100</div>
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
                <div>
                  <form>
                    <TSTextFieldAdress
                      placeholder="주소 검색을 이용해주세요"
                      value={signUpData.location}
                      readonly={true}
                    />
                  </form>
                </div>
                <div>
                  <form>
                    <TSTextFieldAdress
                      placeholder="상세 주소를 입력해주세요"
                      value={extraAdress}
                      onChange={handleChnageExtraAdress}
                    />
                  </form>
                </div>
              </div>
              <div onClick={handleTest}>
                <Button bttext="주소 검색" />
              </div>
            </div>
          </TSBoxInnerStyle>
        </TSBackgroundBoxStyle>
        <TSBackgroundBoxStyle>
          <TSBoxInnerStyle>
            <div className="title">
              <div>예약금</div>
              <div className="essential">*</div>
            </div>
            <div>
              <form>
                <TSTextField placeholder="예약금을 입력해주세요" />
              </form>
            </div>
            <div className="text-guide">숫자만 사용가능, 단위: 원</div>
          </TSBoxInnerStyle>
        </TSBackgroundBoxStyle>
      </TSShopStyle>
    </TSAdminInfoWrapStyle>
  );
};

export default TSModify;
