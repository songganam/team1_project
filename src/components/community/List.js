import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { ColorStyle } from "../../styles/common/CommonStyle";
import Thead from "./Thead";
import Topen from "./Topen";
import {
  InfoStyle,
  TableFootStyle,
  TitleStyle,
  TnoStyle,
  TtableStyle,
  WrapStyle,
} from "./styles/ListStyle";
import Ttable from "./Ttable";
import Paging from "./Paging";
import Search from "./Search";
import Button from "../button/Button";

// 서버데이터 초기값 객체
const initState = {
  current: 0,
  dtoList: [],
  next: false,
  nextpage: 0,
  pageNumlist: [],
  pageRequestDTO: null,
  prev: false,
  prevPage: 0,
  totalCount: 0,
  totalPage: 0,
};

const List = () => {
  // 패스 이동
  const navigate = useNavigate();

  // 쿼리스트링 생성
  const queryStr = createSearchParams({ page: 1, size: 10 }).toString();

  const handleClickList = () => {
    navigate({ pathname: "list", search: queryStr });
  };
  const handleClickLAdd = () => {
    navigate({ pathname: "add", search: queryStr });
  };
  const handleClickModify = () => {
    navigate({ pathname: "modify", search: queryStr });
  };
  const handleClickRead = () => {
    navigate({ pathname: "read", search: queryStr });
  };

  return (
    <WrapStyle>
      <Thead />
      <Ttable />
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
      <Ttable />
      <Ttable />
      <Ttable />
      <Ttable />
      <Ttable />
      <Ttable />
      <Ttable />
      <Ttable />
      <Paging />
      <Search />
      <TableFootStyle>
        <Button bttext="글쓰기" />
      </TableFootStyle>
    </WrapStyle>
  );
};

export default List;
