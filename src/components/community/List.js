import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import {
  InfoStyle,
  TableStyle,
  TitleStyle,
  TnoStyle,
  TopenStyle,
  TtableStyle,
  WrapStyle,
} from "./styles/ListStyle";
import { ColorStyle } from "../../styles/common/CommonStyle";

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
      <TableStyle>
        <TnoStyle>번호</TnoStyle>
        <TitleStyle justifyContent="center">제목</TitleStyle>
        <InfoStyle>
          <div>작성자</div>
          <div>작성일</div>
          <div>조회수</div>
        </InfoStyle>
      </TableStyle>
      <TtableStyle>
        <TnoStyle color={ColorStyle.g700}>공지</TnoStyle>
        <TitleStyle>이메일로 회원가입이 안되는 경우 읽어주세요.</TitleStyle>
        <InfoStyle color={ColorStyle.g700}>
          <div>고기로</div>
          <div>2024.01.08</div>
          <div>3578</div>
        </InfoStyle>
      </TtableStyle>
      <TtableStyle background={ColorStyle.g200}>
        <TnoStyle color={ColorStyle.g1000}>478</TnoStyle>
        <TitleStyle>이메일로 회원가입이 안되는 경우 읽어주세요.</TitleStyle>
        <InfoStyle color={ColorStyle.g1000}>
          <div>어쭈구</div>
          <div>2024.01.08</div>
          <div>4265</div>
        </InfoStyle>
      </TtableStyle>
      <TopenStyle>
        <div className="imgs">
          <div className="largeImg"></div>
          <div className="thumbnails">
            <div className="thumbnail"></div>
            <div className="thumbnail"></div>
            <div className="thumbnail"></div>
          </div>
        </div>
        <div className="contentInfo">
          <div className="content">
            <div className="user"></div>
            <div className="summary">
              퇴근하고 집에 가는데 고기가 너무 먹고싶어서 들렀음!! 요즘에 다
              구워주긴 하지만 여기는 아예 주방에서 구어서 나옴, 근데 다 식으면
              어쩌나 했는데 따뜻하게 먹을 수 있게 그거 뭐라 그러냐 고체 연료
              같은거 같이 나와서 그릇 계속...
            </div>
          </div>
          <div className="btn">
            <button>더보기</button>
          </div>
        </div>
      </TopenStyle>
    </WrapStyle>
  );
};

export default List;
