import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  deleteComment,
  deleteOne,
  getOne,
  postComment,
  postCommuCommentReport,
  postCommuReport,
  postFav,
} from "../../api/communityApi";
import { API_SERVER_HOST } from "../../api/config";
import useCustomMove from "../../hooks/useCustomMove";
import Button from "../button/Button";
import Fetching from "../common/Fetching";
import ResultModal from "../common/ResultModal";
import SelectedModal from "../common/SelectedModal";
import {
  ContentInfoStyle,
  ContentStyle,
  ImgStyle,
  LargeImgStyle,
  NameStyle,
  ThumbnailStyle,
  UserStyle,
  WrapStyle,
} from "./styles/ListStyle";
import {
  BtnBoxStyle,
  MoreBoxStyle,
  MoreStyle,
  MoreTitleStyle,
  PrnvContentStyle,
  ReviewBox,
  TitleBoxStyle,
  WriterBoxStyle,
} from "./styles/ReadStyle";
// @COMMENT import React-Query
import { useMutation } from "@tanstack/react-query";
import LargeImageWireframe from "../common/LargeImageWireframe";
import useCustomHook from "../meat/hooks/useCustomHook";
import useCustomLoginTS from "../meat/hooks/useCustomLoginTS";
import ImagePlaceholder from "./ImagePlaceholder";
import SmallImageWireframe from "../common/SmallImageWireframe";

const host = API_SERVER_HOST;
// 서버데이터 초기값
const initState = {
  iboard: 0,
  iuser: 0,
  name: "",
  writerPic: "",
  title: "",
  contents: "",
  createdAt: "",
  isFav: 0,
  isReport: 0,
  pics: [],
  be: {
    iboard: 0,
    title: "",
  },
  af: {
    iboard: 0,
    title: "",
  },
  comments: [
    {
      icomment: 0,
      writerPk: 0,
      writerName: "",
      comment: "",
      createdAt: "",
      isCommentReport: 0,
    },
  ],
};

// 댓글 등록을 위한 초기값
const initComment = {
  contents: "",
};

const Read = () => {
  // @RTK 로그인 정보 불러오기
  // const authState = useSelector(state => state.authSlice);
  // @RECOIL 로그인 정보 불러오기
  const { userState, isSupervisorLogin } = useCustomLoginTS();
  // console.log(authState.nickname);
  const isNickname = userState.nickname;
  // const isNickname = authState.nickname;

  // 커스텀 훅
  const { moveToRead, moveToList, moveToModify, page } = useCustomMove();

  // 해당 글 pk값 추출 및 할당(get)
  const { iboard } = useParams();

  // 해당 글 상태 초기화 및 업데이트(get)
  const [content, setContent] = useState(initState);
  // console.log(content.name);
  const isName = content.name;

  // 해당 글에 댓글 작성을 위한 상태 초기화 및 업데이트(post)
  const [contents, setcontents] = useState(initComment);

  // 해당 글의 댓글 상태 초기화 및 업데이트(get)
  const [comments, setComments] = useState([]);

  // 로딩창
  const [fetching, setFetching] = useState(false);

  // 커뮤니티 해당 글 이미지 미리보기 관련
  const [selectedImg, setSlectedImg] = useState(content.pics[0]?.pic);

  // 댓글이 빈 문자열일 때 resultModal을 띄우기 위한 상태 업데이트
  const [showCommentModal, setShowCommentModal] = useState(false);

  // 댓글이 50자 넘을 때 resultModal을 띄우기 위한 상태 업데이트
  const [showCommentLengthModal, setShowCommentLengthModal] = useState(false);

  // 댓글 삭제 관련
  // 댓글 pk값 상태 업데이트
  const [currentCommentId, setCurrentCommentId] = useState(null);

  // selectedModal 띄우기 위한 상태 업데이트
  const [showModal, setShowModal] = useState(false);

  // 해당 글 pk값 상태 업데이트
  const [currentReadId, setCurrentReadId] = useState(null);

  // selectedModal 을 띄우기 위한 상태 업데이트
  const [showReadModal, setShowReadModal] = useState(false);

  // API 통신 결과 상태 업데이트
  // 댓글 등록 및 삭제 결과 상태 업데이트
  const [result, setResult] = useState(false);

  // 해당 글 삭제 결과 상태 업데이트
  const [delReadResult, setDelReadResult] = useState(false);

  // resultModal props 값 업데이트
  const [popTitle, setPopTitle] = useState("");
  const [popContent, setPopContent] = useState("");

  // Modal 닫기 이후 화면 전환 상태 업데이트
  const [popRedirect, setPopRedirect] = useState(false);

  // ----------------------------------------------------------------------------------------------------

  // 커뮤니티 해당 글 정보 가져오기(get)
  const getOneData = () => {
    getOne({ iboard, successFn, failFn, errorFn });
  };

  const successFn = result => {
    setFetching(false);
    setContent(result);
    setComments(result.comments);
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

  // 해당글의 이미지 큰이미지로 보여주기
  // content.pics가 변경될 때마다 실행됩니다.
  useEffect(() => {
    if (content.pics && content.pics.length > 0 && content.pics[0].pic) {
      setSlectedImg(content.pics[0].pic);
    }
  }, [content.pics]);

  // 썸네일 이미지 클릭 시 이미지 상태 업데이트
  const handleThumbnailClick = pic => {
    setSlectedImg(pic);
  };

  // 댓글 등록 관련
  const handleChange = e => {
    // 댓글 입력 텍스트 필드의 새로고침을 위해 변수에 할당
    const newContents = { ...contents, [e.target.name]: e.target.value };
    setcontents(newContents);
    // 기존 방식
    // contents[e.target.name] = e.target.value;
    // setcontents({ ...contents });
  };

  // 댓글 등록 함수
  const addComment = () => {
    // 댓글 입력 창에 빈 문자열이면 모달창 띄우기
    if (contents.contents.length !== 0) {
      // 댓글이 50자 이내면 post 실행
      if (contents.contents.length <= 50) {
        postComment({
          iboard,
          contents,
          successFn: successFnAdd,
          failFn: failFnAdd,
          errorFn: errorFnAdd,
        });
      }
      // 댓글이 50자 초과면 모달창 띄우기
      if (contents.contents.length > 50) {
        setShowCommentLengthModal(true);
      }
    } else {
      // 댓글 빈 문자열이면 모달창 띄우기
      setShowCommentModal(true);
    }
    // console.log(contents);
    // console.log(iboard);
  };
  const successFnAdd = result => {
    console.log(result);
    setPopRedirect(1);
    setResult(true);
    setPopTitle("댓글 등록");
    setPopContent("댓글을 등록하였습니다.");
    setcontents({ ...initComment });
    getOneData();
  };
  const failFnAdd = result => {
    console.log(result);
    setPopRedirect(1);
    setResult(true);
    setPopTitle("댓글 등록 실패");
    setPopContent("댓글을 등록에 실패하였습니다. 다시 등록 해주세요.");
  };
  const errorFnAdd = result => {
    console.log(result);
    setPopRedirect(1);
    setResult(true);
    setPopTitle("댓글 등록 실패");
    setPopContent("서버가 불안정합니다. 잠시 후 다시 등록 해주세요.");
  };

  // 댓글 삭제 시 해당 pk값으로 상태 업데이트 후
  // 확인 모달창 띄우기
  const handleDelComment = icomment => {
    setCurrentCommentId(icomment);
    setShowModal(true);
  };

  const successFnDel = result => {
    console.log("댓글 삭제 성공", result);
    setResult(true);
    setPopTitle("댓글 삭제");
    setPopContent("댓글을 삭제하였습니다.");
    setPopRedirect(1);
    getOneData();
  };
  const failFnDel = result => {
    console.log("댓글 삭제 실패", result);
    setResult(false);
    setPopTitle("댓글 삭제 실패");
    setPopContent("댓글 삭제에 실패하였습니다. 다시 시도 해주세요.");
  };
  const errorFnDel = result => {
    console.log("댓글 삭제 실패", result);
    setPopRedirect(1);
    setResult(true);
    setPopTitle("댓글 삭제 실패");
    setPopContent("서버가 불안정합니다. 잠시 후 다시 시도 해주세요.");
  };

  // 해당 글 삭제 시 해당 pk값으로 상태 업데이트 후
  // 확인 모달창 띄우기
  const handleDelRead = iboard => {
    setCurrentReadId(iboard);
    setShowReadModal(true);
  };

  // 모달창 관련
  const closeModal = () => {
    // 모달창 숨기기
    setResult(false);
  };

  // 댓글 등록시 빈 문자열일 때 모달창 닫기
  const closeCommentBlank = () => {
    setShowCommentModal(false);
  };

  // 댓글 등록 시 글 수 50자 초과 모달창 닫기
  const closeCommnetLength = () => {
    setShowCommentLengthModal(false);
  };

  // 해당 글 삭제 resultModal callFn
  const closeDelReadModal = () => {
    // 모달창 숨기기
    setShowReadModal(false);
    moveToList({ page: page });
  };

  // 해당 글 삭제 selectedModal 취소
  const cancelReadModal = () => {
    setShowReadModal(false);
  };

  // 댓글 삭제 selectedModal 취소 버튼
  const cancelModal = () => {
    setShowModal(false);
  };

  // 댓글 삭제를 위한 selectedModal 확인버튼
  const confirmModal = () => {
    if (currentCommentId) {
      deleteComment({
        icomment: currentCommentId,
        successFn: successFnDel,
        failFn: failFnDel,
        errorFn: errorFnDel,
      });
    }
    setShowModal(false);
  };

  // 해당 글 삭제를 위한 selectedModal 확인버튼
  const confirmReadModal = () => {
    if (currentReadId) {
      deleteOne({
        iboard: currentReadId,
        successFn: successFnReadDel,
        failFn: failFnReadDel,
        errorFn: errorFnReadDel,
      });
    }
    setShowReadModal(false);
  };

  const successFnReadDel = delReadResult => {
    console.log("해당 글 삭제 성공", delReadResult);
    setDelReadResult(true);
    setPopTitle("해당 글 삭제");
    setPopContent("해당 글을 삭제하였습니다.");
    setPopRedirect(1);
    getOneData();
  };
  const failFnReadDel = delReadResult => {
    console.log("해당 글 삭제 실패", delReadResult);
    setDelReadResult(false);
    setPopTitle("해당 글 삭제 실패");
    setPopContent("해당 글 삭제에 실패하였습니다. 다시 시도 해주세요.");
  };
  const errorFnReadDel = delReadResult => {
    console.log("해당 글 삭제 실패", delReadResult);
    setPopRedirect(1);
    setDelReadResult(true);
    setPopTitle("해당 글 삭제 실패");
    setPopContent("서버가 불안정합니다. 잠시 후 다시 시도 해주세요.");
  };

  // @COMMENT React-query Mutation (Like function)
  //  /api/community/fav initState
  const initStatefav = {
    iuser: 0,
    iboard: 0,
  };
  // use Mutation
  const iuser = userState.iuser;
  // const dataForm = {
  //   iuser: parseInt(iuser),
  //   iboard: parseInt(iboard),
  // };
  // console.log("데이터 폼 테스트 :", dataForm);
  const [favorite, setFavorite] = useState(false);
  const favMutation = useMutation({
    mutationFn: fav => postFav({ iboard }),
    onSuccess: result => {
      // console.log("성공한 게시물 : ", iboard);
      if (result.result === 0) {
        openModal("좋아요 해제", "좋아요가 해제 되었습니다.", shutModal);
        setFavorite(false);
      }
      if (result.result === 1) {
        openModal("좋아요 등록", "좋아요가 등록 되었습니다.", shutModal);
        setFavorite(true);
      }
    },
    onError: () => {},
  });

  const handleClickFav = () => {
    console.log("데이터다 :", iboard, iuser);
    // console.log("test2", dataForm);
    favMutation.mutate();
  };
  const reportInitState = {
    iboard: iboard,
    ireport: 1,
  };
  const [reportData, setReportData] = useState(reportInitState);
  const [reported, setReported] = useState(false);
  const reportMutation = useMutation({
    mutationFn: reportData => postCommuReport({ reportData }),
    onSuccess: () => {
      console.log("신고 성공");
      // console.log("신고 -완-");
      openModal("글신고완료", "신고가 완료 되었습니다.", shutModal);
      setReported(true);
    },
    onError: error => {
      if (error.response && error.response.status === 404) {
        // openModal("예약 실패", "시간을 기입해주세요.", closeModal);
        openModal("신고 오류", "이미 신고한 글입니다.", shutModal);
      }
    },
  });

  const handleClickRBoardBtn = comment => {
    console.log("딸깍", comment);
    // console.log("딸깍", comment);
    openSelectModal(
      "글 신고하기",
      <div style={{ padding: "10px" }}>
        <div style={{ marginBottom: "20px" }}>
          <span>신고항목을 선택해주세요.</span>
        </div>
        <div>
          <select onChange={e => handleChangeBoardReport(e)}>
            <option value={1}>욕설/인신공격</option>
            <option value={2}>음란물</option>
            <option value={3}>영리목적/홍보성</option>
            <option value={4}>개인정보</option>
            <option value={5}>게시글 도배</option>
            <option value={6}>기타</option>
          </select>
        </div>
      </div>,
      () => {
        handleClickBoardReport(), cancelSelectModal();
      },
      () => cancelSelectModal(),
    );
  };

  const handleChangeBoardReport = e => {
    const selectedValue = parseInt(e.target.value, 10);
    setReportData(prevValue => ({
      ...prevValue,
      ireport: selectedValue,
    }));
  };

  const handleClickBoardReport = () => {
    // const numIboard = parseInt(iboard, 10);
    const report = {
      iboard: iboard !== undefined ? Number(iboard) : 0,
      ireport: reportData.ireport,
    };
    console.log("report form test ", report);
    // console.log("reportData ", reportData);
    reportMutation.mutate(report);
  };

  // ! 커뮤니티 댓글 신고

  const reportCommentInitState = {
    icomment: 0,
    ireport: 1,
  };
  const [reportCommentData, setReportCommentData] = useState(
    reportCommentInitState,
  );
  const reportCommentMutation = useMutation({
    mutationFn: reportCommentData =>
      postCommuCommentReport({ reportCommentData }),
    onSuccess: result => {
      // console.log("값", result);
      // console.log("신고 -완-");
      openModal("댓글신고완료", "신고가 완료 되었습니다.", shutModal);
    },
    onError: error => {
      if (error.response && error.response.status === 404) {
        // openModal("예약 실패", "시간을 기입해주세요.", closeModal);
        openModal("신고 오류", "이미 신고한 글입니다.", shutModal);
      }
    },
  });
  // Call customhook
  const {
    isModal,
    openModal,
    // closeModal,
    openSelectModal,
    shutModal,
    isSelectModal,
    cancelSelectModal,
  } = useCustomHook();

  const handleClickRCommentBtn = comment => {
    console.log("딸깍", comment);
    // console.log("딸깍", comment);
    openSelectModal(
      "댓글 신고하기",
      <div style={{ padding: "10px" }}>
        <div style={{ marginBottom: "20px" }}>
          <span>신고항목을 선택해주세요.</span>
        </div>
        <div>
          <select onChange={e => handleChangeCommentReport(e)}>
            <option value={1}>욕설/인신공격</option>
            <option value={2}>음란물</option>
            <option value={3}>영리목적/홍보성</option>
            <option value={4}>개인정보</option>
            <option value={5}>게시글 도배</option>
            <option value={6}>기타</option>
          </select>
        </div>
      </div>,
      () => {
        handleClickCommentReport(comment), cancelSelectModal();
      },
      () => cancelSelectModal(),
    );
  };
  const handleChangeCommentReport = e => {
    const selectedValue = parseInt(e.target.value, 10);
    console.log("handlechange", selectedValue);
    setReportCommentData(prevValue => ({
      ...prevValue,
      ireport: selectedValue,
    }));
  };

  const handleClickCommentReport = comment => {
    console.log("comment num ", comment);
    // const numIboard = parseInt(iboard, 10);
    const reportComment = {
      icomment: comment !== undefined ? Number(comment) : 0,
      ireport: reportCommentData.ireport,
    };
    console.log("report form test ", reportComment);
    // console.log("reportCommentData ", reportCommentData);
    reportCommentMutation.mutate(reportComment);
  };

  // const handleClickRPostBtn = () => {};
  // Report Comment Button Click

  return (
    <WrapStyle>
      {fetching ? <Fetching /> : null}

      {isSelectModal.isOpen && (
        <SelectedModal
          title={isSelectModal.title}
          content={isSelectModal.content}
          confirmFn={isSelectModal.confirmFn}
          cancelFn={isSelectModal.cancelFn}
        />
      )}
      {isModal.isOpen && (
        <ResultModal
          title={isModal.title}
          content={isModal.content}
          callFn={isModal.callFn}
        />
      )}
      <TitleBoxStyle>
        <MoreTitleStyle>{content.title}</MoreTitleStyle>
        <WriterBoxStyle>
          <div className="userName">{content.name}</div>
          <div className="date">{content.createdAt}</div>
          {/* @COMMENT TEST LIKE BUTTON */}
          <div className="like-box" onClick={handleClickFav}>
            {content?.isFav === 1 ? (
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/like_fill.svg`}
                alt="like"
              />
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/like.svg`}
                alt="like"
              />
            )}
            <div>{content.totalFav}</div>
            <button className="like-button">좋아요</button>
          </div>
          {/* <button onClick={handleClickReport}>신고버튼</button>
           */}
          <div className="like-box" onClick={handleClickRBoardBtn}>
            {/* <span>글신고하고싶다 이말이야</span> */}
            {/* <select onChange={e => handleChangeReport(e)}>
                  <option value={1}>욕설/인신공격</option>
                  <option value={2}>음란물</option>
                  <option value={3}>영리목적/홍보성</option>
                  <option value={4}>개인정보</option>
                  <option value={5}>게시글 도배</option>
                  <option value={6}>기타</option>
                </select> */}
            {content?.isReport === 1 ? (
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/report_fill.svg`}
                alt="like"
              />
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/report.svg`}
                alt="like"
              />
            )}
            <button className="like-button">신고하기</button>
          </div>
          {/* <div className="viewBox">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/view_eye.svg`}
              alt="img"
            />
            <div className="viewCount"></div>            
          </div> */}
        </WriterBoxStyle>
      </TitleBoxStyle>
      <MoreBoxStyle>
        <ImgStyle>
          <LargeImgStyle>
            {content.pics[0] ? (
              <ImagePlaceholder
                src={`${host}/pic/community/${content.iboard}/${selectedImg}`}
                alt="Large image"
                placeholder={
                  <div>
                    <LargeImageWireframe />
                  </div>
                }
              />
            ) : null}
          </LargeImgStyle>
          <ThumbnailStyle>
            {content.pics.map(
              (pic, index) =>
                pic && (
                  <div
                    className="thumbnail"
                    key={index}
                    onClick={() => {
                      handleThumbnailClick(pic.pic);
                    }}
                  >
                    <ImagePlaceholder
                      src={`${host}/pic/community/${content.iboard}/${pic.pic}`}
                      alt={`img_${index + 1}`}
                      placeholder={
                        <div>
                          <SmallImageWireframe />
                        </div>
                      }
                    />
                  </div>
                ),
            )}
          </ThumbnailStyle>
        </ImgStyle>
        <ContentInfoStyle>
          <ContentStyle>
            <UserStyle>
              {content.writerPic ? (
                <img
                  src={`${host}/pic/user/${content.iuser}/${content.writerPic}`}
                  alt="프로필사진"
                />
              ) : (
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/user_profile.png`}
                  alt="기본사진"
                />
              )}
              <NameStyle>
                <div>{content.name}</div>
                {/* <TagBoxStyle>
                  <Tag tagtext="#동성로" />
                  <Tag tagtext="#모듬한판" />
                  <Tag tagtext="#퇴근길" />
                </TagBoxStyle> */}
              </NameStyle>
            </UserStyle>
            <MoreStyle>{content.contents}</MoreStyle>
          </ContentStyle>
        </ContentInfoStyle>
      </MoreBoxStyle>
      {content.be && (
        <PrnvContentStyle>
          <div className="prnv">
            <div className="prnvIcon">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/mingcute_up-line.svg`}
                alt="img"
              />
            </div>
            <div className="prnvText">이전글</div>
          </div>
          <div
            className="prnvTitle"
            onClick={() => {
              moveToRead(content.be.iboard);
            }}
          >
            {content.be.title}
          </div>
        </PrnvContentStyle>
      )}
      {content.af && (
        <PrnvContentStyle>
          <div className="prnv">
            <div className="prnvIcon">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/mingcute_down-line.svg`}
                alt="img"
              />
            </div>
            <div className="prnvText">다음글</div>
          </div>
          <div
            className="prnvTitle"
            onClick={() => {
              moveToRead(content.af.iboard);
            }}
          >
            {content.af.title}
          </div>
        </PrnvContentStyle>
      )}
      <BtnBoxStyle>
        <div className="editBtn">
          <div
            onClick={() => {
              moveToModify(content.iboard);
            }}
          >
            {isName === isNickname || isSupervisorLogin ? (
              <Button bttext="수정하기" />
            ) : null}
          </div>
          <div
            onClick={() => {
              handleDelRead(content.iboard);
            }}
          >
            {isName === isNickname || isSupervisorLogin ? (
              <Button bttext="삭제하기" />
            ) : null}
          </div>
        </div>
        <div
          onClick={() => {
            moveToList({ page });
          }}
        >
          <Button bttext="목록보기" />
        </div>
      </BtnBoxStyle>
      <ReviewBox>
        <div className="readReviewBox">
          <div className="readReview">
            <div className="reviewInfo">
              <div className="reviewCount">
                댓글 {content.comments.length}개
              </div>
              {content.comments.length > 0 &&
                content.comments.map(comment => (
                  <>
                    <div className="userInfo" key={comment.icomment}>
                      <div className="user">
                        <div className="icon">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/images/speech.svg`}
                          />
                        </div>
                        <div className="nickName">{comment.writerName}</div>
                      </div>
                      <div className="date">{comment.createdAt}</div>
                    </div>
                    <div className="reviewContentBox">
                      <div className="reviewContent">{comment.comment}</div>
                      <div className="button-box">
                        {comment.writerName === isNickname ? (
                          <div
                            className="deleteBtn"
                            onClick={() => {
                              handleDelComment(comment.icomment);
                            }}
                          >
                            삭제
                          </div>
                        ) : null}
                        {content.isCommentReport === 1 ? (
                          <div>
                            <div
                              className="reportBtn"
                              onClick={() =>
                                handleClickRCommentBtn(comment.icomment)
                              }
                            >
                              댓글신고
                            </div>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
        <div className="inputReviewBox">
          <div className="inputReview">
            <textarea
              cols={50}
              type="text"
              name="contents"
              value={contents.contents}
              onChange={e => handleChange(e)}
              placeholder="댓글을 입력해보세요(50자 이내)"
            />
          </div>
          <div onClick={addComment}>
            <Button bttext="댓글입력" />
          </div>
        </div>
      </ReviewBox>

      {/* 모달창 */}
      {showModal ? (
        <SelectedModal
          title="댓글 삭제"
          content="정말 댓글을 삭제하시겠습니까?"
          confirmFn={confirmModal}
          cancelFn={cancelModal}
        />
      ) : null}

      {showReadModal ? (
        <SelectedModal
          title="글 삭제"
          content="정말 해당 글을 삭제하시겠습니까?"
          confirmFn={confirmReadModal}
          cancelFn={cancelReadModal}
        />
      ) : null}

      {result ? (
        <ResultModal
          title={popTitle}
          content={popContent}
          callFn={closeModal}
        />
      ) : null}

      {delReadResult ? (
        <ResultModal
          title={popTitle}
          content={popContent}
          callFn={closeDelReadModal}
        />
      ) : null}

      {showCommentModal ? (
        <ResultModal
          title="댓글 등록"
          content="댓글을 입력해주세요"
          callFn={closeCommentBlank}
        />
      ) : null}

      {showCommentLengthModal ? (
        <ResultModal
          title="댓글 등록"
          content="댓글을 50자 이내로 작성해주세요"
          callFn={closeCommnetLength}
        />
      ) : null}
    </WrapStyle>
  );
};

export default Read;
