import React, { useEffect, useState } from "react";
import { getMyList } from "../../api/MyApi";
import Bookmark from "../bookmark/Bookmark";
import {
  MyListCardContent,
  MyListCardDateContent,
  MyListCardInfo,
  MyListCardInfoTitle,
  MyListCardName,
  MyListCardPlace,
  MyListCardSubTitle,
  MyListCardTitle,
  MyListCardVisual,
  MyListCardWrapper,
  MyMoreViewButton,
} from "./styles/MyListCardStyle";
import useCustomMy from "./hooks/useCustomMy";
import { API_SERVER_HOST } from "../../api/config";

// 내 북마크 내역 카드
const MyListCard = props => {
  const [myList, setMyList] = useState([]);
  const { page, moveToListPage, moveToDetail } = useCustomMy();

  // 북마크 리스트 불러오기 (GET)
  useEffect(() => {
    const param = { page };
    getMyList({ param, successFn, failFn, errorFn });
  }, [page]);

  const successFn = result => {
    setMyList([...myList, ...result]);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  // 상세 페이지 이동
  const handleMoveDetail = e => {
    moveToDetail(e);
  };

  // 더보기 (페이지)
  const handleMyListView = () => {
    moveToListPage({ page: page + 1 });
  };

  // 추후 삭제
  const { storeimg } = props;
  const baseApi = API_SERVER_HOST;
  const host = `${baseApi}/pic`;
  return (
    <>
      {myList.map((myList, index) => (
        <MyListCardWrapper
          key={index}
          onClick={e => moveToDetail(myList.ishop)}
        >
          <MyListCardVisual>
            <img
              src={
                myList.checkShop === 0
                  ? `${host}/shop/${myList.ishop}/shop_pic/${myList.pic}`
                  : `${host}/butcher/${myList.ishop}/butchershop_pic/${myList.pic}`
              }
              alt="가게 이미지"
            />
          </MyListCardVisual>
          <MyListCardContent>
            <MyListCardTitle>
              <MyListCardSubTitle>
                <Bookmark></Bookmark>
                <MyListCardPlace>
                  <span>{myList.checkShop === 0 ? "고깃집" : "정육점"}</span>
                </MyListCardPlace>
              </MyListCardSubTitle>
              <MyListCardName>{myList.name}</MyListCardName>
            </MyListCardTitle>
            <MyListCardInfo>
              <MyListCardInfoTitle>
                <li>주소</li>
                <li>전화번호</li>
                <li>영업시간</li>
                <li>종류</li>
                <li>서비스</li>
              </MyListCardInfoTitle>
              <MyListCardDateContent>
                <li>{myList.location}</li>
                <li>{myList.tel}</li>
                <li>{myList.open}</li>
                <li>{myList.mtype}</li>
                <li>{myList.facilities}</li>
              </MyListCardDateContent>
            </MyListCardInfo>
          </MyListCardContent>
        </MyListCardWrapper>
      ))}
      <MyMoreViewButton onClick={handleMyListView}>
        <span>더보기</span>
      </MyMoreViewButton>
    </>
  );
};
export default MyListCard;
