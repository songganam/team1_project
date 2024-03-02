import { useRecoilState } from "recoil";
import useModal from "../meat/hooks/useModal";
import { TSBackgroundBoxStyle, TSBoxInnerStyle } from "./styles/TSModifyStyle";
import { atomMenuInfoState } from "../../atom/atomMenuInfo";
import { ButtonStyleTS } from "./styles/ButtonStyleTS";
import ResultModal from "../common/ResultModal";
import { ChangeEvent, useRef } from "react";

const MenuPost = () => {
  // 커스텀 훅
  const { isModal, openModal, closeModal } = useModal();
  // 메뉴정보 상태관리
  const [menuInfo, setMenuInfo] = useRecoilState(atomMenuInfoState);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // 사진등록 버튼
  const handleClickAdd = () => {
    fileInputRef.current?.click();
  };

  // 이미지 변경 이벤트 핸들러
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
  };

  return (
    <TSBackgroundBoxStyle>
      <TSBoxInnerStyle>
        <div className="title">
          <div>매장사진</div>
          <div className="essential">*</div>
        </div>
        <div className="pics-container">
          <div className="text-guide">5MB 이하 1장만 등록 가능합니다.</div>
          <ButtonStyleTS type="button" onClick={handleClickAdd}>
            사진등록
          </ButtonStyleTS>
          <input type="file" ref={fileInputRef} style={{ display: "none" }} />
          <div className="pics-thumb">
            <img
              src=""
              alt={`미리보기`}
              style={{
                maxWidth: "92px",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            />
          </div>
          <ButtonStyleTS type="button">메뉴등록</ButtonStyleTS>
          <div className="text-guide">썸네일 클릭 시 삭제</div>
        </div>
      </TSBoxInnerStyle>
      {/* 모달창 */}
      {isModal.isOpen && (
        <ResultModal
          title={isModal.title}
          content={isModal.content}
          callFn={isModal.callFn}
        />
      )}
    </TSBackgroundBoxStyle>
  );
};

export default MenuPost;
