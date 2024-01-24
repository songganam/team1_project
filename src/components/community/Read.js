import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteComment, getOne, postComment } from "../../api/communityApi";
import { API_SERVER_HOST } from "../../api/config";
import useCustomMove from "../../hooks/useCustomMove";
import Button from "../button/Button";
import Fetching from "../common/Fetching";
import ResultModal from "../common/ResultModal";
import Tag from "../tag/Tag";
import {
  ContentInfoStyle,
  ContentStyle,
  ImgStyle,
  LargeImgStyle,
  NameStyle,
  TagBoxStyle,
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
const initComment = {
  contents: "",
};
const initIcomm = {
  icomment: 0,
};

const Read = () => {
  const [fetching, setFetching] = useState(false);
  const { moveToRead, moveToList, moveToModify, page } = useCustomMove();
  const { iboard, icomment } = useParams();
  const [content, setContent] = useState(initState);
  const [contents, setcontents] = useState(initComment);
  const [comments, setComments] = useState([]);
  const [icomm, setIcomm] = useState(initIcomm);

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

  // 글 미리보기 이미지 관련
  const [selectedImg, setSlectedImg] = useState(content.pics[0]?.pic);

  // content.pics가 변경될 때마다 실행됩니다.
  useEffect(() => {
    if (content.pics && content.pics.length > 0 && content.pics[0].pic) {
      setSlectedImg(content.pics[0].pic);
    }
  }, [content.pics]);

  const handleThumbnailClick = pic => {
    setSlectedImg(pic);
  };

  // 댓글 등록 관련
  const handleChange = e => {
    contents[e.target.name] = e.target.value;
    setcontents({ ...contents });
  };

  const addComment = () => {
    postComment({
      iboard,
      contents,
      successFn: successFnAdd,
      failFn: failFnAdd,
      errorFn: errorFnAdd,
    });
    console.log(contents);
    console.log(iboard);
  };
  const successFnAdd = result => {
    console.log(result);
    setPopRedirect(1);
    setResult(true);
    setPopTitle("댓글 등록");
    setPopContent("댓글을 등록하였습니다.");
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

  // 댓글 삭제 관련
  const handleDelComment = icomment => {
    setIcomm(icomment);
    delComment();
  };
  const delComment = () => {
    deleteComment({
      icomment,
      successFn: successFnDel,
      failFn: failFnDel,
      errorFn: errorFnDel,
    });
    console.log(icomm);
  };
  const successFnDel = result => {
    console.log(result);
    setPopRedirect(1);
    setResult(true);
    setPopTitle("댓글 삭제");
    setPopContent("댓글을 삭제하였습니다.");
    getOneData();
  };
  const failFnDel = result => {
    console.log(result);
    setPopRedirect(1);
    setResult(true);
    setPopTitle("댓글 삭제 실패");
    setPopContent("댓글 삭제에 실패하였습니다. 다시 시도 해주세요.");
  };
  const errorFnDel = result => {
    console.log(result);
    setPopRedirect(1);
    setResult(true);
    setPopTitle("댓글 삭제 실패");
    setPopContent("서버가 불안정합니다. 잠시 후 다시 시도 해주세요.");
  };

  // 모달창 관련
  const closeModal = () => {
    // 모달창 숨기기
    setResult(false);
  };

  const [result, setResult] = useState(false);
  const [popTitle, setPopTitle] = useState("");
  const [popContent, setPopContent] = useState(false);
  const [popRedirect, setPopRedirect] = useState(false);

  return (
    <WrapStyle>
      {fetching ? <Fetching /> : null}
      <TitleBoxStyle>
        <MoreTitleStyle>{content.title}</MoreTitleStyle>
        <WriterBoxStyle>
          <div className="userName">{content.name}</div>
          <div className="date">{content.createdAt}</div>
          <div className="viewBox">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/view_eye.svg`}
              alt="img"
            />
            <div className="viewCount">3574</div>
          </div>
        </WriterBoxStyle>
      </TitleBoxStyle>
      <MoreBoxStyle>
        <ImgStyle>
          <LargeImgStyle>
            <img
              src={`${host}/pic/community/${content.iboard}/${selectedImg}`}
              alt="Large image"
            />
          </LargeImgStyle>
          <ThumbnailStyle>
            {content.pics.slice(1).map(
              (pic, index) =>
                pic && (
                  <div
                    className="thumbnail"
                    key={index}
                    onClick={() => {
                      handleThumbnailClick(pic.pic);
                    }}
                  >
                    <img
                      src={`${host}/pic/community/${content.iboard}/${pic.pic}`}
                      alt={`img_${index + 2}`}
                    />
                  </div>
                ),
            )}
          </ThumbnailStyle>
        </ImgStyle>
        <ContentInfoStyle>
          <ContentStyle>
            <UserStyle>
              <img
                src={`${host}/pic/community/${content.iboard}/${content.writerPic}`}
                alt="프로필사진"
              />
              <NameStyle>
                <div>{content.name}</div>
                <TagBoxStyle>
                  <Tag tagtext="#동성로" />
                  <Tag tagtext="#모듬한판" />
                  <Tag tagtext="#퇴근길" />
                </TagBoxStyle>
              </NameStyle>
            </UserStyle>
            <MoreStyle>{content.contents}</MoreStyle>
          </ContentStyle>
        </ContentInfoStyle>
      </MoreBoxStyle>
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
            moveToRead(content.beAf[0].iboard);
          }}
        >
          {content.beAf[0].title}
        </div>
      </PrnvContentStyle>
      <PrnvContentStyle>
        {content.beAf[1] && (
          <>
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
                moveToRead(content.beAf[1].iboard);
              }}
            >
              {content.beAf[1].title}
            </div>
          </>
        )}
      </PrnvContentStyle>
      <BtnBoxStyle>
        <div className="editBtn">
          <div
            onClick={() => {
              moveToModify(content.iboard);
            }}
          >
            <Button bttext="수정하기" />
          </div>
          <div>
            <Button bttext="삭제하기" />
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
                      <div
                        className="deleteBtn"
                        onClick={() => {
                          handleDelComment(icomment);
                        }}
                      >
                        삭제
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
        <div className="inputReviewBox">
          <div className="inputReview">
            <input
              type="text"
              name="contents"
              value={contents.contents}
              onChange={e => handleChange(e)}
              placeholder="댓글을 입력해보세요"
            />
          </div>
          <div onClick={addComment}>
            <Button bttext="댓글입력" />
          </div>
        </div>
      </ReviewBox>
      {/* 모달창 */}
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

export default Read;
