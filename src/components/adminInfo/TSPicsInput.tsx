import { useRecoilState } from "recoil";
import ResultModal from "../common/ResultModal";
import useModal from "../meat/hooks/useModal";
import { ButtonStyleTS } from "./styles/ButtonStyleTS";
import { TSBoxInnerStyle } from "./styles/TSModifyStyle";
import { atomStoreInfoState } from "../../atom/atomStoreInfoState";
import { ChangeEvent, useRef } from "react";

const TSPicsInput = () => {
  // 커스텀 훅
  const { isModal, openModal, closeModal } = useModal();

  const [storeInfo, setStoreInfo] = useRecoilState(atomStoreInfoState);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // 이미지 추가 로직
  const handleClickAdd = () => {
    fileInputRef.current?.click();
  };

  // 이미지 변경 이벤트 핸들러
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // 사용자가 선택한 파일과 현재 pics 배열의 길이를 합산
      const totalImages = storeInfo.pics.length + e.target.files.length;

      // 최대 5장까지만 허용
      const allowedImagesCount = Math.min(
        e.target.files.length,
        5 - storeInfo.pics.length,
      );

      if (totalImages > 5) {
        openModal(
          "사진 등록",
          "사진은 최대 5장까지 등록 가능합니다.",
          closeModal,
        );
      }

      // files 배열에서 allowedImagesCount만큼의 파일만 처리
      const fileArray = Array.from(e.target.files)
        .slice(0, allowedImagesCount)
        .map(file => URL.createObjectURL(file));

      // storeState pics 배열 업데이트
      setStoreInfo({ ...storeInfo, pics: [...storeInfo.pics, ...fileArray] });
    }
  };

  // 이미지 삭제 로직
  const deleteImage = (index: number) => {
    // pics 배열에서 선택된 이미지 삭제
    const updatedPics = storeInfo.pics.filter((_, i) => i !== index);
    setStoreInfo({
      ...storeInfo,
      pics: updatedPics,
    });
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
        <ButtonStyleTS type="button" onClick={handleClickAdd}>
          사진등록
        </ButtonStyleTS>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          multiple
          onChange={handleChange}
        />
        <div className="pics-thumb">
          {storeInfo.pics.map((image, index) => (
            <img
              key={index}
              src={image}
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
