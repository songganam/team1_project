import { ChangeEvent, useRef, useState } from "react";
import useModal from "../meat/hooks/useModal";
import { ButtonStyleTS } from "./styles/ButtonStyleTS";
import { TSBoxInnerStyle } from "./styles/TSModifyStyle";
import ResultModal from "../common/ResultModal";

// 컴포넌트 props 타입 정의
interface PicInputProps {
  onChange: (file: File | null) => void; // 단일 파일 처리로 변경
}

const TSMenuPicInput: React.FC<PicInputProps> = ({ onChange }) => {
  const { isModal, openModal, closeModal } = useModal();
  const uploadRef = useRef<HTMLInputElement>(null);

  // 단일 이미지 상태로 변경
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleClickAddImg = () => {
    uploadRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (file.size > 5242880) {
        // 5MB 제한 체크
        openModal(
          "파일 크기 초과",
          "파일 크기는 5MB 이하만 가능합니다.",
          closeModal,
        );
        return;
      }

      setImage(file); // 상태 업데이트
      setPreviewUrl(URL.createObjectURL(file)); // 미리보기 URL 설정
      onChange(file); // 부모 컴포넌트로 변경된 파일 전달
    }
  };

  const deleteImage = () => {
    setImage(null);
    setPreviewUrl("");
    onChange(null); // 부모 컴포넌트로 null 전달하여 이미지 제거 알림
  };

  return (
    <TSBoxInnerStyle>
      <div className="title">
        <div>매장사진</div>
        <div className="essential">*</div>
      </div>
      <div className="pics-container">
        <div className="text-guide">5MB 이하의 사진만 등록 가능합니다.</div>
        <ButtonStyleTS type="button" onClick={handleClickAddImg}>
          사진등록
        </ButtonStyleTS>
        <input
          type="file"
          ref={uploadRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        {previewUrl && (
          <img
            src={previewUrl}
            alt="미리보기"
            style={{ maxWidth: "92px", cursor: "pointer", borderRadius: "4px" }}
            onClick={deleteImage}
          />
        )}
        <div className="text-guide">썸네일 클릭 시 삭제</div>
      </div>

      {isModal.isOpen && (
        <ResultModal
          title={isModal.title}
          content={isModal.content}
          callFn={isModal.callFn}
        />
      )}
    </TSBoxInnerStyle>
  );
};

export default TSMenuPicInput;
