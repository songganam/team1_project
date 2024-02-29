import { ChangeEvent, useRef, useState } from "react";
import useModal from "../meat/hooks/useModal";
import { ButtonStyleTS } from "./styles/ButtonStyleTS";
import { TSBoxInnerStyle } from "./styles/TSModifyStyle";
import ResultModal from "../common/ResultModal";

// 컴포넌트 props 타입 정의
interface PicsInputProps {
  multiple?: boolean;
  onChange: (files: File[]) => void;
  onDelete?: (index: number) => void;
  initPics?: ImagePreview[];
}

// 미리보기 이미지 타입 정의
interface ImagePreview {
  url: string;
  file: File;
}

const TSPicsInput: React.FC<PicsInputProps> = ({
  multiple = true,
  onChange,
  onDelete,
  initPics = [],
}) => {
  // 커스텀 훅
  const { isModal, openModal, closeModal } = useModal();

  const uploadRef = useRef<HTMLInputElement>(null);

  const handleClickAddImg = () => {
    uploadRef.current?.click();
  };

  // 업로드 할 이미지 미리보기 상태 업데이트
  const [images, setImages] = useState<ImagePreview[]>(initPics);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const newFilesArray = selectedFiles.map(file => ({
        url: URL.createObjectURL(file),
        file,
      }));

      // 기존 이미지 배열에 새로운 이미지 파일들 추가
      // 이전상태(prevImages)를 사용하여 현재 상태에 새로운 이미지 배열을 추가
      setImages(prevImages => {
        const totalImagesCount = prevImages.length + newFilesArray.length;
        if (totalImagesCount > 5) {
          openModal(
            "사진 등록",
            "사진은 최대 5장까지 등록 가능합니다.",
            closeModal,
          );
          return prevImages;
        } else {
          // 이미지 5개 이하인 경우 모든 새로운 이미지를 추가
          const updateImages = [...prevImages, ...newFilesArray];
          // 변경된 이미지 배열로 상태 업데이트
          onChange(updateImages.map(image => image.file));
          return updateImages;
        }
      });
    }
  };

  // 이미지 미리보기 삭제 함수
  const deleteImage = (indexToDelete: number) => {
    const imageToDelete = images[indexToDelete];
    if (imageToDelete) {
      // 이미지 배열에서 해당 인덱스를 제거
      const updatedImages = images.filter(
        (_, index) => index !== indexToDelete,
      );
      setImages(updatedImages);
      // 변경된 이미지 배열로 상태 업데이트
      onChange(updatedImages.map(image => image.file));

      // onDelete 함수에 파일 객체 전달
      if (onDelete) onDelete(indexToDelete);
    }
  };

  return (
    <TSBoxInnerStyle>
      <div className="title">
        <div>매장사진</div>
        <div className="essential">*</div>
      </div>
      <div className="pics-container">
        <div className="text-guide">5MB 이하 최대 5장까지 등록 가능합니다.</div>
        {/* 사진등록 버튼 로직 추가해야 함 */}
        <ButtonStyleTS type="button" onClick={handleClickAddImg}>
          사진등록
        </ButtonStyleTS>
        <input
          type="file"
          ref={uploadRef}
          style={{ display: "none" }}
          multiple={multiple}
          onChange={handleFileChange}
        />
        <div className="pics-thumb">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`미리보기${index}`}
              style={{
                maxWidth: "92px",
                cursor: "pointer",
                borderRadius: "4px",
              }}
              onClick={() => deleteImage(index)}
            />
          ))}
        </div>
        <div className="text-guide">썸네일 클릭 시 삭제</div>
      </div>

      {/* 모달창 */}
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

export default TSPicsInput;
