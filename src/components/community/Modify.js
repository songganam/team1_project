
import React, { useState } from "react";
import { API_SERVER_HOST } from "../../api/config";
import useCustomMove from "../../hooks/useCustomMove";
import { useParams } from "react-router-dom";
import { getOne, putOne } from "../../api/communityApi";
import { useEffect } from "react";
import { getUserInfo } from "../../api/MyApi";
import { useRef } from "react";
import { WrapStyle } from "./styles/ListStyle";
import Fetching from "../common/Fetching";
import {
  AddBoxStyle,
  ContentBoxStyle,
  FootStyle,
  ImageBoxStyle,
  UserBoxStyle,
} from "./styles/AddStyle";
import Button from "../button/Button";
import SelectedModal from "../common/SelectedModal";
import ResultModal from "../common/ResultModal";

const host = API_SERVER_HOST;

// 해당 글 수정을 위한 기존 글 정보 초기값
const initState = {
  iboard: 0,
  iuser: 0,
  name: "",
  writerPic: "",
  title: "",
  contents: "",
  createdAt: "",
  pics: [],
  beAf: [
    {
      iboard: 0,
      title: "",
    },
  ],
  comments: [
    {
      icomment: 0,
      writerPk: 0,
      writerName: "",
      comment: "",
      createdAt: "",
    },
  ],
};

// 유저 정보 초기값
const initProfile = {
  nickname: "",
};

const Modify = () => {
  // 커스텀 훅
  const { moveToRead, moveToList, moveToModify, page } = useCustomMove();
  // 로딩창
  const [fetching, setFetching] = useState(false);
  // 해당 글 pk값 추출 및 할당(get)
  const { iboard } = useParams();
  // 해당 글 기존 내용 상태 가져오기 및 업데이트(get)
  const [product, setProduct] = useState(initState);
  // 해당 글 작성자 닉네임 정보 상태 업데이트
  const [profileData, setProfileData] = useState(initProfile);
  // 업로드 할 이미지 미리보기 상태 업데이트
  const [images, setImages] = useState([]);
  // 교체할 이미지 상태 업데이트
  const [replaceImg, setReplaceImg] = useState(null);
  // 이미지 삭제 정보를 담을 상태
  const [deletedImageIds, setDeletedImageIds] = useState([]);
  // useRef(DOM 요소를 참조한다.)
  // useRef를 만든 후 반드 시 태그랑 연결
  const uploadRef = useRef(null);

  // selectedModal 띄우기 위한 상태 업데이트
  const [showModal, setShowModal] = useState(false);

  // API 통신 결과 상태 업데이트
  const [result, setResult] = useState(false);
  // resultModal props 값 업데이트
  const [popTitle, setPopTitle] = useState("");
  const [popContent, setPopContent] = useState("");
  // Modal 닫기 이후 화면 전환 상태 업데이트
  const [popRedirect, setPopRedirect] = useState(false);

  // ----------------------------------------------------------------------

  // 해당 글 작성자 닉네임 정보 가져오기
  useEffect(() => {
    const param = {};
    getUserInfo({
      param,
      successFn: successFnProfile,
      failFn: failFnProfile,
      errorFn: errorFnProfile,
    });
  }, []);

  const successFnProfile = result => {
    setProfileData(result);
    console.log(result);
  };
  const failFnProfile = result => {
    console.log(result);
  };
  const errorFnProfile = result => {
    console.log(result);
  };

  // 커뮤니티 해당 글 정보 가져오기(get)
  const getOneData = () => {
    getOne({ iboard, successFn, failFn, errorFn });
  };
  const successFn = result => {
    setFetching(false);
    setProduct(result);
    console.log(result);
  };
  const failFn = result => {
    setFetching(false);
    console.log(result);
  };
  const errorFn = result => {
    setFetching(false);
    console.log(result);
  };

  useEffect(() => {
    setFetching(true);
    getOneData();
  }, [iboard, page]);

  useEffect(() => {
    // 기존 이미지 URL 초기화
    const initialImages = product.pics.map(pic => ({
      url: `${host}/pic/community/${product.iboard}/${pic.pic}`,
      icommuPics: pic.icommuPics,
    }));
    setImages(initialImages);
  }, [product.pics, product.iboard]);

  // 이미지 미리보기 삭제 함수
  const deleteImage = indexToDelete => {
    // images 배열에서 이미지 삭제
    const imageToDelete = images[indexToDelete];
    if (imageToDelete.icommuPics) {
      setDeletedImageIds(prevIds => [...prevIds, imageToDelete.icommuPics]);
    }
    setImages(prevImages =>
      prevImages.filter((_, index) => index !== indexToDelete),
    );
  };

  // 업로드 할 이미지 미리보기 및 교체
  const handleFileChange = e => {
    const files = e.target.files;
    if (files) {
      const totalImages = images.length + files.length;
      if (totalImages > 5) {
        alert("최대 5장까지만 업로드 가능합니다.");
        return;
      }

      Array.from(files).forEach(file => {
        const previewUrl = URL.createObjectURL(file);
        setImages(prevImages => [
          ...prevImages,
          { url: previewUrl, file, isNew: true },
        ]);
      });
    }
  };

  // 글 작성 시 내용 업데이트
  const handleChange = e => {
    product[e.target.name] = e.target.value;
    setProduct({ ...product });
  };
  // 사진추가 버튼 클릭시 이미지 파일 선택
  const handleClickImg = () => {
    if (images.length > 5) {
      alert("더 이상 이미지를 추가할 수 없습니다.");
      return;
    }
    uploadRef.current.click();
  };

  // 해당 글 수정 실행
  const handleClickModify = async product => {
    // const files = uploadRef.current.files;
    // console.log("파일업로드 할때 이미지 배열 요소 개수", files.length);
    const formData = new FormData();
    // dto 객체 생성 및 Blob으로 변환
    const dto = new Blob(
      [
        JSON.stringify({
          iboard: product.iboard,
          icommuPics: deletedImageIds,
          title: product.title,
          contents: product.contents,
          files: product.files,
        }),
      ],
      { type: "application/json" },
    );
    // dto 객체를 FormData에 추가
    formData.append("dto", dto);

    // 새로운 이미지만 FormData에 추가
    Array.from(uploadRef.current.files).forEach(file => {
      formData.append("pics", file);
    });

    // 글 정보 전송하기
    setFetching(true);
    try {
      await putOne({
        product: formData,
        successFn: successFnModify,
        failFn: failFnModify,
        errorFn: errorFnModify,
      });
    } catch (error) {
      console.log("글 수정 중 에러 발생", error);
    } finally {
      setFetching(false);
    }
  };

  const successFnModify = result => {
    console.log("글 수정 성공", result);
    setFetching(false);
    setResult(true);
    setPopTitle("글 수정");
    setPopContent("글 수정 성공하였습니다.");
    setPopRedirect(true);
  };
  const failFnModify = result => {
    console.log("글 수정 실패", result);
    setFetching(false);
    setResult(false);
    setPopTitle("글 수정 실패");
    setPopContent("오류가 발생하였습니다. 잠시 후 다시 시도해주세요");
    setPopRedirect(false);
  };
  const errorFnModify = result => {
    console.log("글 수정 실패", result);
    setFetching(false);
    setResult(true);
    setPopTitle("서버 오류");
    setPopContent("서버가 불안정합니다. 관리자에게 문의해주세요.");
    setPopRedirect(false);
  };

  // 확인 버튼 클릭 시
  const handleConfirm = product => {
    // 글 등록 로직 실행
    handleClickModify(product);
    // 모달 닫기
    setShowModal(false);
  };

  const closeModal = () => {
    // 모달창 닫기
    setResult(false);
    moveToList({ page: 1 });
  };
  // 취소 버튼 클릭 시
  const handleCancel = () => {
    // 모달 닫기
    setShowModal(false);
  };

  // 글 등록 버튼 클릭 핸들러
  const handleAddClick = () => {
    // 모달 띄우기
    setShowModal(true);
  };

  return (
    <WrapStyle>
      {fetching ? <Fetching /> : null}
      <AddBoxStyle>
        <div className="titleBox">제목</div>
        <div className="inputBox">
          <input
            type="text"
            name="title"
            onChange={e => handleChange(e)}
            value={product.title}
          />
        </div>
      </AddBoxStyle>
      <UserBoxStyle>
        <div className="titleBox">작성자</div>
        <div className="writerBox">{profileData.nickname}</div>
      </UserBoxStyle>
      <ContentBoxStyle>
        <div className="titleBox">내용</div>
        <div className="inputBox">
          <textarea
            type="text"
            name="contents"
            onChange={e => handleChange(e)}
            value={product.contents}
          />
        </div>
      </ContentBoxStyle>
      <ImageBoxStyle>
        <div className="titleBox">사진</div>

        <div onClick={handleClickImg}>
          <Button bttext="사진추가" />
        </div>
        <div className="inputBox">
          <input
            type="file"
            ref={uploadRef}
            multiple={true}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <div className="previewBox">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={`미리보기${index}`}
                style={{
                  maxWidth: "60px",
                  margin: "5px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
                onClick={() => deleteImage(index)}
              />
            ))}
          </div>
        </div>
      </ImageBoxStyle>
      <FootStyle>
        <div className="btnBox">
          <div onClick={handleAddClick}>
            <Button bttext="확인" />
          </div>
          <div onClick={moveToList}>
            <Button bttext="취소" />
          </div>
        </div>
      </FootStyle>
      {showModal ? (
        <SelectedModal
          title="글 수정 확인"
          content="글을 수정하시겠습니까?"
          confirmFn={() => handleConfirm(product)}
          cancelFn={handleCancel}
        />
      ) : null}
      {result ? (
        <ResultModal
          title={popTitle}
          content={popContent}
          callFn={closeModal}
        />
      ) : null}
    </WrapStyle>
  );
};

export default Modify;

