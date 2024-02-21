import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../button/Button";
import TSAdminHeader from "./TSAdminHeader";
import TSCheckBoxInput from "./TSCheckBoxInput";
import TSRadioInput from "./TSRadioInput";
import TSTextField from "./TSTextField";
import TSTextareaField from "./TSTextareaField";
import TextField from "./TextField";
import TextFieldAdress from "./TextFieldAdress";
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

const TSModify = () => {
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

  return (
    <TSAdminInfoWrapStyle>
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
                {options.map((option, index) => (
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
                <TextField
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
                    <TextFieldAdress
                      placeholder="주소 검색을 이용해주세요"
                      readonly={true}
                    />
                  </form>
                </div>
                <div>
                  <form>
                    <TextFieldAdress placeholder="상세 주소를 입력해주세요" />
                  </form>
                </div>
              </div>
              <div>
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
