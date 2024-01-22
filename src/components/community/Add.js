import React, { useRef, useState } from "react";
import Button from "../button/Button";
import {
  AddBoxStyle,
  ContentBoxStyle,
  FootStyle,
  ImageBoxStyle,
  UserBoxStyle,
} from "./styles/AddStyle";
import { WrapStyle } from "./styles/ListStyle";
import { postAdd } from "../../api/communityApi";
import useCustomMove from "../../hooks/useCustomMove";
import ResultModal from "../common/ResultModal";
import Fetching from "../common/Fetching";

// 글 쓰기 초기값
const initState = {
  title: "",
  contents: "",
  pics: [],
};

const Add = () => {
  const [write, setWrite] = useState(initState);
  // 글 쓰기 업데이트
  const handleChange = e => {
    write[e.target.name] = e.target.value;
    setWrite({ ...write });
  };
  const uploadRef = useRef(null);
  const [fetching, setFetching] = useState(false);
  // 파일 업로드 실행
  const handleClick = () => {
    const pics = uploadRef.current.pics;
    const picsTotal = pics.length;
    const formData = new FormData();
    for (let i = 0; i < picsTotal; i++) {
      console.log(pics[i]);
      formData.append("pics", pics[i]);
    }
    formData.append("title", write.title);
    formData.append("contents", write.contents);

    // 글 정보 전송하기
    setFetching(true);
    postAdd({ dto: formData, successFn, failFn, errorFn });
  };

  const [resultTiltle, setResultTiltle] = useState("");
  const [resultContent, setResultContent] = useState("");
  const [redirect, setRedirect] = useState(0);

  const successFn = result => {
    setFetching(false);
    setResultTiltle("글 등록");
    setResultContent("글 등록에 성공하였습니다");
    setRedirect(0);
    console.log(result);
  };
  const failFn = result => {
    setFetching(false);
    setResultTiltle("글 등록 실패");
    setResultContent("오류가 발생하였습니다. 잠시 후 다시 시도해주세요");
    setRedirect(1);
    console.log(result);
  };
  const errorFn = result => {
    setFetching(false);
    setResultTiltle("서버 오류");
    setResultContent("서버가 불안정합니다. 관리자에게 문의해주세요.");
    setRedirect(1);
    console.log(result);
  };

  const { moveToList } = useCustomMove();

  const closeModal = () => {
    // 모달 닫기
    setResultTiltle("");
    if (redirect === 0) {
      // 목록가기
      moveToList({ page: 1 });
    } else {
      // 팝업닫기
    }
  };

  const [images, setImages] = useState([]);

  const handleClickImg = () => {
    uploadRef.current.click();
  };

  const handleFileChange = e => {
    const files = e.target.files;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(prevImages => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <WrapStyle>
      {resultTiltle !== "" ? (
        <ResultModal
          title={resultTiltle}
          content={resultContent}
          callFn={closeModal}
        />
      ) : null}
      {fetching ? <Fetching /> : null}
      <AddBoxStyle>
        <div className="titleBox">제목</div>
        <div className="inputBox">
          <input
            type="text"
            name="title"
            onChange={e => handleChange(e)}
            value={write.title}
          />
        </div>
      </AddBoxStyle>
      <UserBoxStyle>
        <div className="titleBox">작성자</div>
        <div className="writerBox">어쭈구리고기봐라</div>
      </UserBoxStyle>
      <ContentBoxStyle>
        <div className="titleBox">내용</div>
        <div className="inputBox">
          <textarea
            type="text"
            name="contents"
            onChange={e => handleChange(e)}
            value={write.contents}
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
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
      </ImageBoxStyle>
      <FootStyle>
        <div className="btnBox">
          <div onClick={handleClick}>
            <Button bttext="확인" />
          </div>
          <div onClick={moveToList}>
            <Button bttext="취소" />
          </div>
        </div>
      </FootStyle>
    </WrapStyle>
  );
};

export default Add;
