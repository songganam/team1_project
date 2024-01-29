import React, { useEffect, useState } from "react";
import { getList } from "../../api/communityApi";
import { API_SERVER_HOST } from "../../api/config";
import useCustomMove from "../../hooks/useCustomMove";
import { ColorStyle } from "../../styles/common/CommonStyle";
import Button from "../button/Button";
import Fetching from "../common/Fetching";
import Paging from "../common/Paging";
import Tag from "../tag/Tag";
import Thead from "./Thead";
import {
  BtnStyle,
  ContentInfoStyle,
  ContentStyle,
  ImgStyle,
  InfoStyle,
  NameStyle,
  SearchStyle,
  SummaryStyle,
  TableFootStyle,
  TagBoxStyle,
  ThumbnailStyle,
  TitleStyle,
  TnoStyle,
  TopenStyle,
  TtableStyle,
  UserStyle,
  WrapStyle,
} from "./styles/ListStyle";

const host = API_SERVER_HOST;

// 서버데이터 초기값 배열
const initState = [
  {
    iboard: 0,
    boardNum: 0,
    iuser: 0,
    writerName: "",
    writerPic: "",
    title: "",
    contents: "",
    createdAt: "",
    pics: [],
    count: 0,
  },
];

const List = () => {
  // 커스텀 훅
  const { page, search, moveToRead, moveToAdd, moveToSearch } = useCustomMove();
  // 서버 데이터 내용 상태 변경
  const [serverData, setServerData] = useState(initState);
  // 해당 글로 상태 변경
  const [topenIboard, setTopenIboard] = useState({});
  // 해당 글 미리보기 내용 상태 변경
  const [preview, setPreview] = useState({
    iboard: 0,
    boardNum: 0,
    iuser: 0,
    writerName: "",
    writerPic: "",
    title: "",
    contents: "",
    createdAt: "",
    pics: [],
    count: 0,
  });
  // 로딩창
  const [fetching, setFetching] = useState(false);
  // page에 따라 최초 데이터 가져오기
  useEffect(() => {
    const param = { page, search };
    getList({ param, successFn, failFn, errorFn });
  }, [page, search]);

  // 데이터 연동 처리 결과
  const successFn = result => {
    setServerData(result);
    setFetching(false);
    // console.log(result);
  };
  const failFn = result => {
    setFetching(false);
    console.log(result);
  };
  const errorFn = result => {
    setFetching(false);
    console.log(result);
  };

  // 해당 글 클릭 시 미리보기 함수정의
  const handleClickTopen = item => {
    if (topenIboard === item.iboard) {
      // 이미 선택된 항목을 다시 클릭하면 미리보기를 닫습니다.
      setTopenIboard(null);
    } else {
      // 다른 항목을 클릭하면 그 항목의 미리보기를 엽니다.
      setTopenIboard(item.iboard);
      if (preview.iboard != item.iboard) {
        setPreview(item);
        // setPreview({
        //   iboard: item.iboard,
        //   boardNum: item.boardNum,
        //   iuser: item.iuser,
        //   writerName: item.writerName,
        //   writerPic: item.writerPic,
        //   title: item.title,
        //   createdAt: item.createdAt,
        //   contents: item.contents,
        //   pics: item.pics,
        //   count: item.count,
        // });
      }
    }
  };

  // 검색어 상태 업데이트
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = e => {
    // 검색어 변경 시 상태 업데이트
    setSearchInput(e.target.value);
  };
  const handleSearchSubmit = e => {
    // 폼 제출 기본 동작 방지
    e.preventDefault();
    moveToSearch({ page: 1, search: searchInput });
  };

  return (
    <WrapStyle>
      {fetching ? <Fetching /> : null}
      <Thead />
      {/* 게시글 목록 보기 */}
      {serverData.map(item => (
        <div key={item.iboard}>
          <TtableStyle
            selected={topenIboard === item.iboard}
            onClick={() => {
              handleClickTopen(item);
            }}
          >
            <TnoStyle color={ColorStyle.g700}>{item.boardNum}</TnoStyle>
            <TitleStyle>{item.title}</TitleStyle>
            <InfoStyle color={ColorStyle.g700}>
              <div>{item.writerName}</div>
              <div>{item.createdAt}</div>
              {/* <div>조회수</div> */}
            </InfoStyle>
          </TtableStyle>

          {/* 해당 글 미리보기 */}
          {topenIboard === item.iboard && (
            <TopenStyle>
              <ImgStyle>
                {/* <LargeImgStyle>
                  {preview.pics[0] && (
                    <img
                      src={`${host}/pic/community/${preview.iboard}/${preview.pics[0]}`}
                      alt="img_1"
                    />
                  )}
                </LargeImgStyle> */}
                <ThumbnailStyle>
                  {preview.pics.map(
                    (pic, index) =>
                      pic && (
                        <div className="thumbnail" key={index}>
                          <img
                            src={`${host}/pic/community/${preview.iboard}/${pic}`}
                            alt={`img_${index + 1}`}
                          />
                        </div>
                      ),
                  )}
                </ThumbnailStyle>
              </ImgStyle>
              <ContentInfoStyle>
                <ContentStyle>
                  <UserStyle>
                    <img src={preview.writerPic} alt="프로필사진" />
                    <NameStyle>
                      <div>{preview.writerName}</div>
                      {/* 더미 태그 */}
                      <TagBoxStyle>
                        <Tag tagtext="#동성로" />
                        <Tag tagtext="#모듬한판" />
                        <Tag tagtext="#퇴근길" />
                      </TagBoxStyle>
                    </NameStyle>
                  </UserStyle>
                  <SummaryStyle>{preview.contents}</SummaryStyle>
                </ContentStyle>
              </ContentInfoStyle>
              <BtnStyle>
                <div
                  onClick={() => {
                    moveToRead(preview.iboard);
                  }}
                >
                  <Button bttext="글 더보기" />
                </div>
              </BtnStyle>
            </TopenStyle>
          )}
        </div>
      ))}

      {/* 페이지네이션 */}
      <Paging totalItems={serverData[0].count} itemPerPage={10} />
      <SearchStyle>
        {/* <select className="select">
          <option value={0}>전체</option>
          <option value={1}>제목</option>
          <option value={2}>내용</option>
        </select> */}
        <div className="searchBox">
          <form onSubmit={handleSearchSubmit}>
            <div>
              <input
                type="text"
                placeholder="글 제목을 검색해보세요"
                value={searchInput}
                onChange={handleSearchChange}
              />
              <button
                className="icon"
                style={{ border: "none", background: "none" }}
              >
                <img src="/assets/images/search.svg" alt="search" />
              </button>
            </div>
          </form>
        </div>
      </SearchStyle>
      <TableFootStyle>
        <div onClick={moveToAdd}>
          <Button bttext="글쓰기" />
        </div>
      </TableFootStyle>
    </WrapStyle>
  );
};

export default List;
