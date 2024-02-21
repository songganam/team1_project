import moment from "moment";
import { useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { postReview } from "../../api/meatApi";
import Fetching from "../../components/common/Fetching";
import ResultModal from "../../components/common/ResultModal";
import SelectedModal from "../../components/common/SelectedModal";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import useCustomMove from "../../hooks/useCustomMove";
import {
  AddImageBtn,
  ImageBox,
  ImageSelector,
  ReviewCommentInput,
  ReviewCommentItem,
  ReviewCommentItemWrap,
  ReviewCommentSubItem,
  ReviewCommentWrap,
  ReviewContent,
  ReviewContentWrap,
  ReviewFormWrap,
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
import { useMutation } from "@tanstack/react-query";
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

  // ! 유저 정보 가져오기
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { ireser } = useParams();
  const checkShop = queryParams.get("checkShop");
  const name = queryParams.get("name");
  const ishop = queryParams.get("ishop");
  const { isModal, openModal, closeModal } = useCustomHook();
  // ! Call date
  const createdate = new Date();
  const nowdata = moment(createdate).format("YYYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(nowdata);

  // 로딩창 연결
  const [fetching, setFetching] = useState(false);

  const [reviewData, setReviewData] = useState(initState);

  // 글 작성 시 내용 업데이트, 텍스트 필드의 변경사항 처리
  const handleChange = e => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  const handleStarClick = star => {
    setReviewData({ ...reviewData, star: star });
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
      const totalImages = images.length + files.length;
      if (totalImages > 5) {
        openModal(
          "이미지오류",
          "이미지는 5장까지 업로드 가능합니다.",
          closeModal,
        );
        return;
      }
      // 사용자가 선택한 파일로부터 URL을 생성
      const newImages = Array.from(files).map(file =>
        URL.createObjectURL(file),
      );

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
  const addMutation = useMutation({
    mutationFn: reviewData =>
      postReview({ reviewData, successFn, failFn, errorFn }),
  });
  // 파일 업로드 실행
  const handleClick = async reviewData => {
    const formData = new FormData();

    // 글 정보를 담은 dto Blob객체 생성
    const dto = new Blob(
      [
        JSON.stringify({
          ireser: ireser,
          ishop: ishop,
          checkShop: checkShop,
          star: reviewData.star,
          review: reviewData.review,
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
    addMutation.mutate(formData);
    // postReview({ reviewData: formData, successFn, failFn, errorFn });
  };

  // 모달창 관련
  const [addResult, setAddResult] = useState(false);
  const [popTitle, setPopTitle] = useState("");
  const [popContent, setPopContent] = useState(false);
  const [popRedirect, setPopRedirect] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  // 확인 버튼 클릭 시
  const handleConfirm = reviewData => {
    // 글 등록 로직 실행
    handleClick(reviewData);
    // 모달 닫기
    setShowModal(false);
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

  const successFn = addResult => {
    console.log("글 등록 성공", addResult);
    setFetching(false);
    openModal("등록성공", "리뷰가 등록 되었습니다.", () => {
      closeModal(), navigate("/my/review");
    });
  };
  const failFn = addResult => {
    console.log("글 등록 실패", addResult);
    setFetching(false);
    setAddResult(false);
    setPopTitle("글 등록 실패");
    setPopContent("오류가 발생하였습니다. 잠시 후 다시 시도해주세요");
    setPopRedirect(false);
  };
  const errorFn = error => {
    console.log("글 등록 실패", addResult);
    if (error.response && error.response.status === 400) {
      setFetching(false);
      openModal("등록 실패", "입력정보를 확인해주세요.", closeModal);
    }
    if (error.response && error.response.status === 500) {
      setFetching(false);
      openModal("등록 실패", "관리자에게 문의해주세요.", closeModal);
    }
  };

  const { moveToList } = useCustomMove();

  return (
    <ReviewWrap>
      {isModal.isOpen && (
        <ResultModal
          title={isModal.title}
          content={isModal.content}
          callFn={isModal.callFn}
        />
      )}
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
                    src={star <= reviewData.star ? countStar : noCountStar}
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
                  value={reviewData.review}
                  maxLength={30}
                />
              </ReviewInputWrap>
            </ReviewCommentItemWrap>
            <ReviewFormWrap>
              <ReviewCommentWrap>
                <ReviewCommentItem>
                  <span>사진</span>
                </ReviewCommentItem>
                <ReviewCommentSubItem>
                  <span>(5장 제한)</span>
                </ReviewCommentSubItem>
              </ReviewCommentWrap>
              <ReviewContent>
                <ImageSelector>
                  <div onClick={handleClickImg}>
                    <AddImageBtn>
                      <span>사진추가</span>
                    </AddImageBtn>
                  </div>
                  <div className="inputBox">
                    <input
                      type="file"
                      ref={uploadRef}
                      multiple={true}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    <ImageBox>
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
                    </ImageBox>
                  </div>
                </ImageSelector>
              </ReviewContent>
            </ReviewFormWrap>
          </ReviewWrapper>
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
          confirmFn={() => handleConfirm(reviewData)}
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
