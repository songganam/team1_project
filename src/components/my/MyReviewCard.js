import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import {
  MyBookCardBookButton,
  MyReviewCardContent,
  MyReviewCardDateContent,
  MyReviewCardInfo,
  MyReviewCardInfoTitle,
  MyReviewCardName,
  MyReviewCardPlace,
  MyReviewCardSubTitle,
  MyReviewCardTitle,
  MyReviewCardVisual,
  MyReviewCardWrapper,
} from "./styles/MyReviewCardStyle";
import useModal from "../../hooks/useModal";
import ResultModal from "../common/ResultModal";
import Bookmark from "../bookmark/Bookmark";
import { getMyReview } from "../../api/MyApi";
import MyPaging from "../common/MyPaging";
import CountingStar from "../common/CountingStar";

const MyReviewCard = props => {
  const [myReviewList, setMyReviewList] = useState([]);

  const getMyReviewData = () => {};

  useEffect(() => {
    const param = {};
    getMyReview({ param, successFn, failFn, errorFn });
    getMyReviewData();
  }, []);

  const successFn = result => {
    setMyReviewList(result);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  const { storeimg } = props;
  const { useResultModal, openModal, closeModal } = useModal();
  const handleDeleteReview = () => {
    openModal();
  };

  return (
    <>
      {myReviewList.map((myReviewList, index) => (
        <MyReviewCardWrapper key={index}>
          <MyReviewCardVisual>
            <img src={storeimg} alt="가게 이미지"></img>
          </MyReviewCardVisual>
          <MyReviewCardContent>
            <MyReviewCardTitle>
              <MyReviewCardSubTitle>
                <Bookmark isBook={myReviewList.isBook}></Bookmark>
                <MyReviewCardPlace>
                  <span>
                    {myReviewList.checkShop === 0 ? "고깃집" : "정육점"}
                  </span>
                </MyReviewCardPlace>
              </MyReviewCardSubTitle>
              <MyReviewCardName>{myReviewList.name}</MyReviewCardName>
            </MyReviewCardTitle>
            <MyReviewCardInfo>
              <CountingStar star={myReviewList.star}></CountingStar>
              <MyReviewCardInfoTitle>
                <li>날짜</li>
                <li>리뷰</li>
              </MyReviewCardInfoTitle>
              <MyReviewCardDateContent>
                <li>{myReviewList.createdAt}</li>
                <li>{myReviewList.review}</li>
              </MyReviewCardDateContent>
            </MyReviewCardInfo>
            <MyBookCardBookButton>
              <div
                onClick={() => {
                  handleDeleteReview();
                }}
              >
                <Button bttext="리뷰삭제"></Button>
              </div>
            </MyBookCardBookButton>
            {useResultModal && (
              <ResultModal
                title="리뷰 삭제"
                content="작성한 리뷰를 삭제하시겠습니까?"
                callFn={() => {
                  closeModal();
                }}
              />
            )}
          </MyReviewCardContent>
        </MyReviewCardWrapper>
      ))}
      <MyPaging totalItems={myReviewList.count}></MyPaging>
    </>
  );
};
export default MyReviewCard;
