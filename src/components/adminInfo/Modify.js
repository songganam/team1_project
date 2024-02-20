import React, { useState } from "react";
import Button from "../button/Button";
import {
  AdminInfoWrapStyle,
  BackgroundBoxStyle,
  BoxInnerStyle,
  NavStyle,
  ShopStyle,
} from "./styles/ModifyStyle";
import RadioInput from "./RadioInput";
import CheckBoxInput from "./CheckBoxInput";

const Modify = () => {
  // 라디오 버튼 관련
  const [selectedRadioValue, setSelectedRadioValue] = useState("돼지");
  const handleRadioChange = e => {
    setSelectedRadioValue(e.target.value);
    console.log(e.target.value);
  };
  const options = ["돼지", "소", "닭", "오리", "양", "정육점"];

  // 체크박스 관련
  const [checkboxes, setCheckboxes] = useState([
    { id: "checkbox1", label: "주차장", checked: true, value: "parking" },
    { id: "checkbox2", label: "화장실구분", checked: false, value: "restroom" },
    { id: "checkbox3", label: "단체", checked: false, value: "group" },
    { id: "checkbox4", label: "Wi-fi", checked: false, value: "wifi" },
  ]);
  // 체크박스 변경 사항 처리
  const handleCheckboxChange = e => {
    const { name, checked } = e.target;
    setCheckboxes(
      checkboxes.map(checkbox =>
        checkbox.id === name ? { ...checkbox, checked: checked } : checkbox,
      ),
    );
    console.log(e.target.value);
  };
  // 폼 제출 핸들러
  const handleSubmit = e => {
    e.preventDefault(); // 폼의 기본 제출 동작을 방지합니다.
    // 선택된 체크박스들의 value를 모아서 처리합니다. 예: 서버로 전송
    const selectedValues = checkboxes
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
    console.log("Selected values:", selectedValues);
    // 여기에서 selectedValues를 API 호출 등을 통해 서버로 전송할 수 있습니다.
  };

  return (
    <AdminInfoWrapStyle>
      <NavStyle>
        <div className="page-title">매장 정보 관리</div>
        <div>
          <Button bttext="저장" />
        </div>
      </NavStyle>
      <ShopStyle>
        <BackgroundBoxStyle>
          <BoxInnerStyle>
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
          </BoxInnerStyle>
        </BackgroundBoxStyle>
        <BackgroundBoxStyle>
          <BoxInnerStyle>
            <div className="title">
              <div>편의시설</div>
              <div className="essential">*</div>
            </div>
            <div className="check-box-wrap">
              <form onSubmit={handleSubmit}>
                {checkboxes.map(({ id, label, checked, value }) => (
                  <CheckBoxInput
                    key={id}
                    id={id}
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
          </BoxInnerStyle>
        </BackgroundBoxStyle>
        <BackgroundBoxStyle>
          <BoxInnerStyle>
            <div className="title">
              <div>고기종류</div>
              <div className="essential">*</div>
            </div>
            <div className="radio-wrap">
              <form>
                {options.map((option, index) => (
                  <RadioInput
                    key={option}
                    name="imeat"
                    value={option}
                    checked={selectedRadioValue === option}
                    onChange={handleRadioChange}
                  />
                ))}
              </form>
            </div>
            <div className="text-guide">정육점 사장님은 정육점 선택</div>
          </BoxInnerStyle>
        </BackgroundBoxStyle>
        <BackgroundBoxStyle>
          <BoxInnerStyle>
            <div className="title">
              <div>상호명</div>
              <div className="essential">*</div>
            </div>
            <div>
              <form>
                <input type="text" name="name" />
              </form>
            </div>
            <div className="name-guide">
              <div className="text-guide">
                숫자, 한글, 영문, 특수문자 사용가능
              </div>
              <div className="text-length">0/30</div>
            </div>
          </BoxInnerStyle>
        </BackgroundBoxStyle>
        <BackgroundBoxStyle>
          <BoxInnerStyle>
            <div className="tel">
              <div className="title">
                <div>전화번호</div>
                <div className="essential">*</div>
              </div>
              <div>
                <form>
                  <input type="text" name="tel" />
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
                  <textarea />
                </form>
              </div>
              <div className="name-guide">
                <div className="text-guide">
                  숫자, 한글, 영문, 특수문자 사용가능
                </div>
                <div className="text-length">0/50</div>
              </div>
            </div>
          </BoxInnerStyle>
        </BackgroundBoxStyle>
        <BackgroundBoxStyle>
          <BoxInnerStyle>
            <div className="title">
              <div>위치</div>
              <div className="essential">*</div>
            </div>
            <div className="location-box">
              <div className="location-input-box">
                <div>
                  <form>
                    <input type="text" name="adress" />
                  </form>
                </div>
                <div>
                  <form>
                    <input type="text" name="adressDetail" />
                  </form>
                </div>
              </div>
              <div>
                <Button bttext="주소 검색" />
              </div>
            </div>
          </BoxInnerStyle>
        </BackgroundBoxStyle>
        <BackgroundBoxStyle>
          <BoxInnerStyle>
            <div className="title">
              <div>예약금</div>
              <div className="essential">*</div>
            </div>
            <div>
              <form>
                <input type="text" name="deposit" />
              </form>
            </div>
            <div className="text-guide">숫자만 사용가능, 단위: 원</div>
          </BoxInnerStyle>
        </BackgroundBoxStyle>
      </ShopStyle>
    </AdminInfoWrapStyle>
  );
};

export default Modify;
