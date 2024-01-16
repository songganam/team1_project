import React, { useEffect, useState } from "react";
import { getList } from "../../api/communityApi";
import { ColorStyle } from "../../styles/common/CommonStyle";
import Button from "../button/Button";
import Paging from "./Paging";
import Search from "./Search";
import Thead from "./Thead";
import useCustomMove from "./hooks/useCustomMove";
import {
  BtnStyle,
  ContentInfoStyle,
  ContentStyle,
  ImgStyle,
  InfoStyle,
  LargeImgStyle,
  NameStyle,
  SummaryStyle,
  TableFootStyle,
  ThumbnailStyle,
  TitleStyle,
  TnoStyle,
  TopenStyle,
  TtableStyle,
  UserStyle,
  WrapStyle,
} from "./styles/ListStyle";
import ResultModal from "../common/ResultModal";
import Fetching from "../common/Fetching";
import GoTop from "../common/GoTop";

// 서버데이터 초기값 객체
const initState = [
  {
    iboard: 0,
    boardNum: 0,
    iuser: 0,
    writerName: "",
    title: "",
    contents: "",
    pics: [""],
  },
];

const List = () => {
  const { page, moveToRead } = useCustomMove();
  const [serverData, setServerData] = useState(initState);
  const [topenIboard, setTopenIboard] = useState(null);
  const [preview, setPreview] = useState({
    iboard: 0,
    boardNum: 0,
    iuser: 0,
    writerName: "",
    title: "",
    contents: "",
    pics: [],
  });
  // 최초 데이터 가져오기
  useEffect(() => {
    const param = { page };
    getList({ param, successFn, failFn, errorFn });
  }, [page]);
  // 데이터 연동 처리 결과
  const successFn = result => {
    setServerData(result);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  const handleClickTopen = item => {
    setTopenIboard(item.iboard);
    setPreview({
      iboard: item.iboard,
      boardNum: item.boardNum,
      iuser: item.iuser,
      writerName: item.writerName,
      title: item.title,
      contents: item.contents,
      pics: item.pics,
    });
  };

  return (
    <WrapStyle>
      <Thead />

      {serverData.map(item => (
        <TtableStyle
          key={item.iboard}
          selected={topenIboard === item.iboard}
          onClick={() => {
            handleClickTopen(item);
          }}
        >
          <TnoStyle color={ColorStyle.g700}>{item.iboard}</TnoStyle>
          <TitleStyle>{item.title}</TitleStyle>
          <InfoStyle color={ColorStyle.g700}>
            <div>{item.writerName}</div>
            <div>2024.01.08</div>
            <div>3578</div>
          </InfoStyle>
        </TtableStyle>
      ))}

      {topenIboard && (
        <TopenStyle>
          <ImgStyle>
            <LargeImgStyle>
              <img src={preview.pics[0]} alt="img_1" />
            </LargeImgStyle>
            <ThumbnailStyle>
              <div className="thumbnail">
                <img src={preview.pics[1]} alt="img_2" />
              </div>
              <div className="thumbnail">
                <img src={preview.pics[2]} alt="img_3" />
              </div>
              <div className="thumbnail">
                <img src={preview.pics[3]} alt="img_4" />
              </div>
              <div className="thumbnail">
                <img src={preview.pics[4]} alt="img_5" />
              </div>
            </ThumbnailStyle>
          </ImgStyle>
          <ContentInfoStyle>
            <ContentStyle>
              <UserStyle>
                <img src="/assets/images/avatar.svg" alt="프로필사진" />
                <NameStyle>
                  <div>{preview.writerName}</div>
                </NameStyle>
              </UserStyle>
              <SummaryStyle>{preview.contents}</SummaryStyle>
            </ContentStyle>
            <BtnStyle>
              <div
                onClick={() => {
                  moveToRead();
                }}
              >
                <Button bttext="더보기" />
              </div>
            </BtnStyle>
          </ContentInfoStyle>
        </TopenStyle>
      )}

      {/* <Topen /> */}
      <Paging />
      <Search />
      <TableFootStyle>
        <Button bttext="글쓰기" />
      </TableFootStyle>
    </WrapStyle>
  );
};

export default List;
