import React, { useEffect, useState } from "react";
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
} from "./styles/MyListCardStyle";
import Bookmark from "../bookmark/Bookmark";
import { getMyList } from "../../api/MyApi";
import MyPaging from "../common/MyPaging";

const MyListCard = props => {
  const [myList, setMyList] = useState([]);

  const getMyListData = () => {};

  useEffect(() => {
    const param = {};
    getMyList({ param, successFn, failFn, errorFn });
    getMyListData();
  }, []);

  const successFn = result => {
    setMyList(result);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  const { storeimg } = props;
  return (
    <>
      {myList.map((myList, index) => (
        <MyListCardWrapper key={index}>
          <MyListCardVisual>
            <img src={storeimg} alt="가게 이미지"></img>
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
      <MyPaging totalItems={myList.count}></MyPaging>
    </>
  );
};
export default MyListCard;
