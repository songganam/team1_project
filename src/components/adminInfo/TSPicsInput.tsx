import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { API_SERVER_HOST } from "../../api/config";
import { atomStoreInfoState } from "../../atom/atomStoreInfoState";
import AdminSmallImageWireframe from "../common/AdminSmallImageWireframe";
import ResultModal from "../common/ResultModal";
import AdminImagePlaceholder from "../community/AdminImagePlaceholder";
import useModal from "../meat/hooks/useModal";
import { ButtonStyleTS } from "./styles/ButtonStyleTS";
import { TSBoxInnerStyle } from "./styles/TSModifyStyle";

const host = API_SERVER_HOST;

interface Image {
  url: string;
  picsPk: number | undefined;
}

const TSPicsInput = () => {
  // 커스텀 훅
  const { isModal, openModal, closeModal } = useModal();

  const [storeInfo, setStoreInfo] = useRecoilState(atomStoreInfoState);

  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    // 페이지 로드 시 ishopPics를 빈 배열로 초기화합니다.
    // setStoreInfo(prevStoreInfo => ({
    //   ...prevStoreInfo,
    //   ishopPics: [],
    // }));

    const initialImages = storeInfo?.pics?.map(pic => ({
      url:
        pic.isNew && pic.file
          ? URL.createObjectURL(pic.file)
          : `${host}/pic/shop/${storeInfo.ishop}/shop_pic/${pic.pic}`,
      picsPk: pic.picsPk,
    }));
    setImages(initialImages);
  }, [setStoreInfo, storeInfo?.pics, storeInfo?.ishop]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // 사진등록 버튼
  const handleClickAdd = () => {
    fileInputRef.current?.click();
  };

  // 이미지 변경 이벤트 핸들러
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const totalImages = storeInfo?.pics.length + e.target.files.length;
      if (totalImages > 5) {
        openModal(
          "사진 등록",
          "사진은 최대 5장까지 등록 가능합니다.",
          closeModal,
        );
        return;
      }

      const files = Array.from(e.target.files).slice(
        0,
        5 - storeInfo?.pics.length,
      );

      // 새로운 이미지 객체들을 기존 pics 배열에 추가합니다.
      const newPics = files?.map(file => ({
        pic: URL.createObjectURL(file),
        isNew: true,
        file,
      }));

      setStoreInfo(prevStoreInfo => ({
        ...prevStoreInfo,
        pics: [...prevStoreInfo.pics, ...newPics],
      }));
      console.log("새로운 이미지가 추가된 후의 pics 상태:", [
        ...storeInfo.pics,
        ...newPics,
      ]);
    }
  };

  // 이미지 삭제 로직
  const deleteImage = (index: number) => {
    // 삭제하려는 이미지의 picsPk를 추출합니다.
    const deletedPicsPk = storeInfo?.pics[index]?.picsPk;

    // pics 배열에서 선택된 이미지를 제거합니다.
    const updatedPics = storeInfo?.pics.filter((_, i) => i !== index);

    // deletedPicsPk가 정의되어 있고, 아직 ishopPics 배열에 추가되지 않은 경우에만 추가합니다.
    const updatedIshopPics = [...storeInfo.ishopPics];
    if (
      deletedPicsPk !== undefined &&
      !storeInfo.ishopPics.includes(deletedPicsPk)
    ) {
      updatedIshopPics?.push(deletedPicsPk);
    }

    // 상태를 업데이트합니다.
    setStoreInfo(prevStoreInfo => ({
      ...prevStoreInfo,
      pics: updatedPics,
      ishopPics: updatedIshopPics,
    }));

    // 업데이트된 상태를 콘솔에 로깅합니다.
    console.log("이미지 삭제 후 pics 배열:", updatedPics);
    console.log("이미지 삭제 후 업데이트된 ishopPics 배열:", updatedIshopPics);
  };

  return (
    <TSBoxInnerStyle>
      <div className="title">
        <div>매장사진</div>
        <div className="essential">*</div>
      </div>
      <div className="pics-container">
        <div className="text-guide">5MB 이하 최대 5장까지 등록 가능합니다</div>
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
          {images?.map((image, index) => (
            <AdminImagePlaceholder
              key={index}
              src={
                image.url
                  ? image.url
                  : `${process.env.PUBLIC_URL}/assets/images/menuImg.png`
              }
              alt={`미리보기${index}`}
              // style={{
              //   maxWidth: "92px",
              //   cursor: "pointer",
              //   borderRadius: "4px",
              // }}
              onClick={() => deleteImage(index)}
              placeholder={
                <div>
                  <AdminSmallImageWireframe />
                </div>
              }
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
