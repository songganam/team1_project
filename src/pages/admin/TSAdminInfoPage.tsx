import { ChangeEvent, useEffect, useState } from "react";
import TSCheckBoxInput from "../../components/adminInfo/TSCheckBoxInput";
import TSPicsInput from "../../components/adminInfo/TSPicsInput";
import { ButtonStyleTS } from "../../components/adminInfo/styles/ButtonStyleTS";
import {
  TSAdminInfoWrapStyle,
  TSBackgroundBoxStyle,
  TSBoxInnerStyle,
  TSNavStyle,
  TSShopStyle,
} from "../../components/adminInfo/styles/TSModifyStyle";
import TSRadioInput from "../../components/adminInfo/TSRadioInput";
import TSTextField from "../../components/adminInfo/TSTextField";

const TSAdminInfoPage = () => {
  // 체크박스 관련
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
  // 체크박스 컴포넌트로 부터 전달받은 배열 처리
  const handleChangeCheckbox = (selectedIds: string[]) => {
    setSelectedCheckboxes(selectedIds);
  };

  // 라디오 버튼 관련
  const [selectedRadios, setSelectedRadios] = useState<number>();
  // 라디오 컴포넌트로 부터 전달받은 ID 처리
  const handleChangeRadio = (selectedIds: number) => {
    setSelectedRadios(selectedIds);
  };

  // 텍스트필드 관련
  const [text, setText] = useState("");
  // 텍스트필드 값 변경 이벤트 핸들러
  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log("선택된 편의시설", selectedCheckboxes);
    console.log("선택된 고기종류", selectedRadios);
  }, [selectedCheckboxes, selectedRadios]);

  return (
    <TSAdminInfoWrapStyle>
      <TSNavStyle>
        <div className="page-title">매장 정보 관리</div>
        {/* 나중에 type="submit"으로 변경해야함 */}
        <ButtonStyleTS type="button">저장</ButtonStyleTS>
      </TSNavStyle>
      <TSShopStyle>
        <TSBackgroundBoxStyle>
          <TSPicsInput />
        </TSBackgroundBoxStyle>
        <TSBackgroundBoxStyle>
          <TSCheckBoxInput onChange={handleChangeCheckbox} />
        </TSBackgroundBoxStyle>
        <TSBackgroundBoxStyle>
          <TSRadioInput onChange={handleChangeRadio} />
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
                  value={text}
                  onChange={handleChangeText}
                />
              </form>
            </div>
            <div className="name-guide">
              <div className="text-guide">
                숫자, 한글, 영문, 특수문자 사용가능
              </div>
              <div className="text-length">{text.length}/30</div>
            </div>
          </TSBoxInnerStyle>
        </TSBackgroundBoxStyle>
      </TSShopStyle>
    </TSAdminInfoWrapStyle>
  );
};

export default TSAdminInfoPage;
