import React, { useEffect, useState } from "react";
import { getList } from "../../api/communityApi";
import { ColorStyle } from "../../styles/common/CommonStyle";
import Button from "../button/Button";
import Paging from "./Paging";
import Search from "./Search";
import Thead from "./Thead";
import Topen from "./Topen";
import useCustomMove from "./hooks/useCustomMove";
import {
  InfoStyle,
  TableFootStyle,
  TitleStyle,
  TnoStyle,
  TtableStyle,
  WrapStyle,
} from "./styles/ListStyle";

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
  // todo 로딩창
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

  return (
    <WrapStyle>
      <Thead />
      {serverData.map((item, index) => (
        <TtableStyle key={index}>
          <TnoStyle color={ColorStyle.g700}>{item.iboard}</TnoStyle>
          <TitleStyle>{item.title}</TitleStyle>
          <InfoStyle color={ColorStyle.g700}>
            <div>{item.writerName}</div>
            <div>2024.01.08</div>
            <div>3578</div>
          </InfoStyle>
        </TtableStyle>
      ))}

      <TtableStyle background={ColorStyle.g200}>
        <TnoStyle color={ColorStyle.g1000}>478</TnoStyle>
        <TitleStyle>
          간만에 퇴근길에 괜찮은 고깃집 갔음 곧 웨이팅 걸리기전에 얼른 가야할 듯
        </TitleStyle>
        <InfoStyle color={ColorStyle.g1000}>
          <div>어쭈구</div>
          <div>2024.01.08</div>
          <div>4265</div>
        </InfoStyle>
      </TtableStyle>
      <Topen />
      <Paging />
      <Search />
      <TableFootStyle>
        <Button bttext="글쓰기" />
      </TableFootStyle>
    </WrapStyle>
  );
};

export default List;
