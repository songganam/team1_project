import moment from "moment";
import React, { useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { postReview } from "../../api/meatApi";
import Button from "../../components/button/Button";
import Fetching from "../../components/common/Fetching";
import ResultModal from "../../components/common/ResultModal";
import SelectedModal from "../../components/common/SelectedModal";
import useCustomMove from "../../hooks/useCustomMove";
import {
  ImageBox,
  ReviewCommentInput,
  ReviewCommentItem,
  ReviewCommentItemWrap,
  ReviewCommentSubItem,
  ReviewCommentWrap,
  ReviewContent,
  ReviewContentWrap,
  ReviewFormWrap,
  ReviewImageWrap,
  ReviewInput,
  ReviewInputLabel,
  ReviewInputWrap,
  ReviewItem,
  ReviewItemWrap,
  ReviewRating,
  ReviewRatingStar,
  ReviewSubmitBtn,
  ReviewTitle,
  ReviewWrap,
  ReviewWrapper,
} from "./styles/MeatReviewStyle";

const initState = {
  pics: [],
  checkShop: 0,
  ireser: "",
  star: 1,
  review: "",
};

const MeatReviewPage = () => {
  // ! Star Image
  const noCountStar =
    process.env.PUBLIC_URL + `/assets/images/star_no_count.svg`;
  const countStar = process.env.PUBLIC_URL + `/assets/images/star_count.svg`;
  const mainImageSelect =
    process.env.PUBLIC_URL + `/assets/images/main_image_select.png`;

  // ! 유저 정보 가져오기
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { ireser } = useParams();
  const checkShop = queryParams.get("checkShop");
  const name = queryParams.get("name");
  const ishop = queryParams.get("ishop");

  // ! Call date
  const createdate = new Date();
  const nowdata = moment(createdate).format("YYYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(nowdata);

  // 로딩창 연결
  const [fetching, setFetching] = useState(false);

  const [product, setProduct] = useState(initState);

  // 글 작성 시 내용 업데이트, 텍스트 필드의 변경사항 처리
  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleStarClick = star => {
    setProduct({ ...product, star: star });
  };

  // useRef(DOM 요소를 참조한다.)
  // useRef를 만든 후 반드 시 태그랑 연결
  const uploadRef = useRef(null);

  // 업로드 할 이미지 미리보기 상태 업데이트
  const [images, setImages] = useState([]);

  // 사진추가 버튼 클릭시 이미지 파일 선택
  const handleClickImg = () => {
    uploadRef.current.click();
  };

  // 업로드 할 이미지 미리보기
  const handleFileChange = e => {
    // 파일 입력 필드에서 선택된 파일들에 대한 참조
    // e.target.files는 사용자가 선택한 파일들의 목록을 포함
    const files = e.target.files;
    if (files) {
      // 사용자가 선택한 파일로부터 URL을 생성
      const newImages = Array.from(files).map(file =>
        // 각 파일에 대해 임시 URL을 생성
        // 이 URL은 브라우저 내에서 파일을 참조할 수 있는 경로를 제공
        URL.createObjectURL(file),
      );
      // 기존 이미지 목록에 새로운 이미지 URL들을 추가
      // ...prevImages는 기존의 이미지 목록
      // ...newImages는 새로운 이미지 URL목록을 펼쳐서 하나의 배열로 합치는 작업
      // 최종적으로 기존 이미지 목록에 새로운 이미지들이 추가
      setImages(prevImages => [...prevImages, ...newImages]);
    }
  };

  // 이미지 미리보기에서 삭제 함수
  const deleteImage = indexToDelete => {
    // 이미지 상태 업데이트 setImages()
    setImages(prevImages =>
      // filter 함수를 사용해,
      // 제거할 이미지의 인덱스가 아닌 이미지만을 새배열에 포함
      prevImages.filter((_, index) => index !== indexToDelete),
    );
  };

  // 파일 업로드 실행
  const handleClick = async product => {
    const formData = new FormData();

    // 글 정보를 담은 dto Blob객체 생성
    const dto = new Blob(
      [
        JSON.stringify({
          ireser: ireser,
          ishop: ishop,
          checkShop: checkShop,
          star: product.star,
          review: product.review,
        }),
      ],
      // JSON 형식으로 설정
      { type: "application/json" },
    );

    // dto 객체를 FormData에 추가
    formData.append("dto", dto);

    // 이미지를 formData에 추가하기 위해 image 배열을 순회하는 Promise 배열 생성
    const imagePromises = images.map(async (image, index) => {
      // 이미지 URL로 부터 응답을 가져옴
      const response = await fetch(image);
      // 응답으로부터 Blob 객체를 생성
      const blob = await response.blob();
      // Blob 객체로부터 File 객체를 생성
      const file = new File([blob], `image${index}.jpg`, {
        type: "image/jpeg",
      });
      // 생성된 File 객체를 fromData에 추가
      formData.append("pics", file);
    });

    // 모든 이미지가 FormData에 추가된 후 서버에 전송
    // 모든 이미지 처리가 완료될 때까지 대기
    await Promise.all(imagePromises);
    // 데이터 전송 중임을 나타내는 상태 true
    setFetching(true);
    // formData를 서버에 전송
    postReview({ product: formData, successFn, failFn, errorFn });
  };

  // 모달창 관련
  const [result, setResult] = useState(false);
  const [addResult, setAddResult] = useState(false);
  const [popTitle, setPopTitle] = useState("");
  const [popContent, setPopContent] = useState(false);
  const [popRedirect, setPopRedirect] = useState(false);
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
    if (popRedirect === true) {
      // 목록으로 가기
      moveToList({ page: 1 });
    }
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

    console.log("!n", name);
    console.log("!s", ishop);
    console.log("!r", ireser);
    console.log("!c", checkShop);
  };

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

  return (
    <ReviewWrap>
      <ReviewItemWrap>
        {fetching ? <Fetching /> : null}
        <ReviewTitle>
          <span>리뷰쓰기</span>
        </ReviewTitle>
        {/* items */}
        <ReviewContentWrap>
          <ReviewWrapper>
            {/* 
        // * 가게명 
        */}
            <ReviewFormWrap>
              <ReviewItem>
                <span>가게명</span>
              </ReviewItem>
              <ReviewContent>
                <span>{name}</span>
              </ReviewContent>
            </ReviewFormWrap>
            {/* 
          // * 날짜
          */}
            <ReviewFormWrap>
              <ReviewItem>
                <span>날짜</span>
              </ReviewItem>
              <ReviewContent>
                <span>{selectedDate}</span>
              </ReviewContent>
            </ReviewFormWrap>
            {/* 
          // * 별점
          */}
            <ReviewFormWrap>
              <ReviewItem>
                <span>별점</span>
              </ReviewItem>
              <ReviewRating>
                {[1, 2, 3, 4, 5].map(star => (
                  <ReviewRatingStar
                    key={star}
                    src={star <= product.star ? countStar : noCountStar}
                    alt=""
                    onClick={() => handleStarClick(star)}
                  />
                ))}
              </ReviewRating>
            </ReviewFormWrap>
            {/* 
          // * 코멘트
          */}
            <ReviewCommentItemWrap>
              <ReviewCommentWrap>
                <ReviewCommentItem>
                  <span>코멘트</span>
                </ReviewCommentItem>
                <ReviewCommentSubItem>
                  <span>(30자 제한)</span>
                </ReviewCommentSubItem>
              </ReviewCommentWrap>

              <ReviewInputWrap>
                <ReviewCommentInput
                  maxRows={15}
                  minRows={1}
                  name="review"
                  placeholder="리뷰를 작성해주세요."
                  height={375}
                  onChange={e => handleChange(e)}
                  value={product.review}
                  maxLength={30}
                />
              </ReviewInputWrap>
            </ReviewCommentItemWrap>
          </ReviewWrapper>
          {/* 이미지 첨부 */}
          {/* process.env.PUBLIC_URL +
                `/assets/images/main_image_select.png` */}
          {/* 
        // TODO 첫 input state 줘서 투명도 없애고 보여주고 그다음부터는
        // TODO 이미지가 들어오면? 투명하게 보이도록
        */}
          <ReviewImageWrap>
            <div>
              <ReviewImageWrap>
                {/* <div onClick={handleClickImg}>
                  <Button bttext="사진추가" />
                </div> */}
                <div className="inputBox">
                  <ReviewInputLabel
                    htmlFor="main-page"
                    onClick={handleClickImg}
                    mainImageSelect={mainImageSelect}
                  >
                    <ReviewInput
                      type="file"
                      ref={uploadRef}
                      multiple={true}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </ReviewInputLabel>
                  <div className="previewBox">
                    {images.map((src, index) => (
                      <ImageBox
                        key={index}
                        className={index === 0 ? "fristImage" : "subImage"}
                      >
                        <div className={index === 0 ? "" : "subImageItem"}>
                          <img
                            src={src}
                            alt={`미리보기${index}`}
                            // style={{
                            //   maxWidth: "60px",
                            //   margin: "5px",
                            //   cursor: "pointer",
                            //   borderRadius: "5px",
                            // }}
                            onClick={() => deleteImage(index)}
                          />
                        </div>
                      </ImageBox>
                    ))}
                  </div>
                </div>
              </ReviewImageWrap>
            </div>
          </ReviewImageWrap>
        </ReviewContentWrap>
      </ReviewItemWrap>
      {/* submit button */}
      <ReviewSubmitBtn onClick={handleAddClick}>
        <span>작성완료</span>
      </ReviewSubmitBtn>
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
    </ReviewWrap>
  );
};

export default MeatReviewPage;
