import { ButtonStyleTS } from "./styles/ButtonStyleTS";
import { TSBoxInnerStyle } from "./styles/TSModifyStyle";

const TSPicsInput = () => {
  return (
    <TSBoxInnerStyle>
      <div className="title">
        <div>매장사진</div>
        <div className="essential">*</div>
      </div>
      <div className="pics-container">
        <div className="text-guide">5MB 이하 최대 5장까지 등록 가능합니다.</div>
        {/* 사진등록 버튼 로직 추가해야 함 */}
        <ButtonStyleTS type="button">사진등록</ButtonStyleTS>
        <div className="pics-thumb">
          <input type="file" />
        </div>
      </div>
    </TSBoxInnerStyle>
  );
};

export default TSPicsInput;
