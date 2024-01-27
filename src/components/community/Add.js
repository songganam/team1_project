import React, { useEffect, useRef, useState } from "react";
import { getUserInfo } from "../../api/MyApi";
import { postAdd } from "../../api/communityApi";
import useCustomMove from "../../hooks/useCustomMove";
import Button from "../button/Button";
import Fetching from "../common/Fetching";
import {
  AddBoxStyle,
  ContentBoxStyle,
  FootStyle,
  ImageBoxStyle,
  UserBoxStyle,
} from "./styles/AddStyle";
import { WrapStyle } from "./styles/ListStyle";
import SelectedModal from "../common/SelectedModal";
import ResultModal from "../common/ResultModal";

// 글 쓰기 초기값
const initState = {
  pics: [],
  title: "",
  contents: "",
};

// 유저 정보 초기값
const initProfile = {
  nickname: "",
};

const Add = () => {
  // 유저 정보 가져오기
  const [profileData, setProfileData] = useState(initProfile);
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

  const [product, setProduct] = useState(initState);
  // 글 작성 시 내용 업데이트
  const handleChange = e => {
    product[e.target.name] = e.target.value;
    setProduct({ ...product });
  };

  // useRef(DOM 요소를 참조한다.)
  // useRef를 만든 후 반드 시 태그랑 연결
  const uploadRef = useRef(null);

  // 로딩창 연결
  const [fetching, setFetching] = useState(false);

  // 파일 업로드 실행
  const handleClick = product => {
    const files = uploadRef.current.files;
    console.log("파일업로드 할때 이미지 배열 요소 개수", files.length);
    const formData = new FormData();
    // dto 객체 생성
    const dto = new Blob(
      [
        JSON.stringify({
          title: product.title,
          contents: product.contents,
        }),
      ],
      { type: "application/json" },
    );

    // dto 객체를 FormData에 추가
    formData.append("dto", dto);

    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      formData.append("pics", files[i]);
    }

    // 글 정보 전송하기
    setFetching(true);
    postAdd({ product: formData, successFn, failFn, errorFn });
  };

  // 모달창 관련
  const [showModal, setShowModal] = useState(false);

  // 확인 버튼 클릭 시
  const handleConfirm = product => {
    // 글 등록 로직 실행
    handleClick(product);
    // 모달 닫기
    setShowModal(false);
  };

  const closeModal = () => {
    // 모달창 닫기
    setAddResult(false);
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

  const [result, setResult] = useState(false);
  const [addResult, setAddResult] = useState(false);
  const [popTitle, setPopTitle] = useState("");
  const [popContent, setPopContent] = useState(false);
  const [popRedirect, setPopRedirect] = useState(false);

  const successFn = addResult => {
    console.log("글 등록 성공", addResult);
    setFetching(false);
    setAddResult(true);
    setPopTitle("글 등록 성공");
    setPopContent("글 등록에 성공하였습니다.");
    setPopRedirect(true);
  };
  const failFn = addResult => {
    console.log("글 등록 실패", addResult);
    setFetching(false);
    setAddResult(false);
    setPopTitle("글 등록 실패");
    setPopContent("오류가 발생하였습니다. 잠시 후 다시 시도해주세요");
    setPopRedirect(false);
  };
  const errorFn = addResult => {
    console.log("글 등록 실패", addResult);
    setFetching(false);
    setAddResult(true);
    setPopTitle("서버 오류");
    setPopContent("서버가 불안정합니다. 관리자에게 문의해주세요.");
    setPopRedirect(false);
  };

  const { moveToList } = useCustomMove();

  // 업로드 할 이미지 미리보기 상태 업데이트
  const [images, setImages] = useState([]);

  // 사진추가 버튼 클릭시 이미지 파일 선택
  const handleClickImg = () => {
    uploadRef.current.click();
  };

  // 업로드 할 이미지 미리보기
  const handleFileChange = e => {
    const files = e.target.files;
    if (files) {
      const totalImages = images.length + files.length;
      if (totalImages > 5) {
        alert("최대 5장까지만 업로드 가능합니다.");
        return;
      }

      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImages(prevImages => [...prevImages, reader.result]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  // 이미지 미리보기에서 삭제 함수
  const deleteImage = indexToDelete => {
    setImages(prevImages =>
      prevImages.filter((_, index) => index !== indexToDelete),
    );
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
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
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
          title="글 등록 확인"
          content="글을 등록하시겠습니까?"
          confirmFn={() => handleConfirm(product)}
          cancelFn={handleCancel}
        />
      ) : null}
      {addResult ? (
        <ResultModal
          title={popTitle}
          content={popContent}
          callFn={closeModal}
        />
      ) : null}
    </WrapStyle>
  );
};

export default Add;
