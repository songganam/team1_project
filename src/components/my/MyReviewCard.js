import React, { useEffect, useState } from "react";
import { deleteMyReview, getMyReview } from "../../api/MyApi";
import { API_SERVER_HOST } from "../../api/config";
import Button from "../../components/button/Button";
import useModal from "../../hooks/useModal";
import Bookmark from "../bookmark/Bookmark";
import CountingStar from "../common/CountingStar";
import SelectedModal from "../common/SelectedModal";
import useCustomMy from "./hooks/useCustomMy";
import {
  MyBookCardBookButton,
  MyMoreViewButton,
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

// 내가 쓴 리뷰 보기 카드 리스트
const MyReviewCard = props => {
  const [myReviewList, setMyReviewList] = useState([]);
  const [reviewToDelete, setReviewToDelete] = useState(null);
  const { page, moveToReviewPage } = useCustomMy();

  // 모달창
  const { useResultModal, openModal, closeModal } = useModal();

  // 리뷰 리스트 불러오기 (GET)
  useEffect(() => {
    const param = { page };
    getMyReview({ param, successFn, failFn, errorFn });
  }, [page]);

  const successFn = result => {
    setMyReviewList([...myReviewList, ...result]);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  // 리뷰 삭제 (DELETE)
  const handledeleteReview = (checkShop, ireview) => {
    const deleteForm = {
      checkShop: checkShop,
      ireview: ireview,
    };
    // 삭제 전 확인 모달창
    setReviewToDelete(deleteForm);
    openModal();
    console.log(deleteForm);
  };

  const handleConfirmDelete = () => {
    if (reviewToDelete) {
      const { checkShop, ireview } = reviewToDelete;
      // 리뷰 삭제 성공 시 리스트 업데이트
      const updatedMyReviewList = myReviewList.filter(
        review => review.ireview !== ireview,
      );
      setMyReviewList(updatedMyReviewList);
      deleteMyReview({
        deleteForm: reviewToDelete,
        successFn,
        failFn,
        errorFn,
      });
      console.log(reviewToDelete);
      closeModal();
    }
  };

  const handleMyReviewView = () => {
    moveToReviewPage({ page: page + 1 });
  };
  const baseApi = API_SERVER_HOST;
  const host = `${baseApi}/pic`;
  return (
    <>
      {myReviewList.map((myReviewList, index) => (
        <MyReviewCardWrapper key={index}>
          <MyReviewCardVisual>
            <img
              src={
                myReviewList.checkShop === 0
                  ? `${host}/shop/${myReviewList.ishop}/shop_pic/${myReviewList.pic}`
                  : `${host}/butcher/${myReviewList.ishop}/butchershop_pic/${myReviewList.pic}`
              }
              alt="가게 이미지"
            />
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
            <CountingStar star={myReviewList.star}></CountingStar>
            <MyReviewCardInfo>
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
                onClick={e =>
                  handledeleteReview(
                    myReviewList.checkShop,
                    myReviewList.ireview,
                  )
                }
              >
                <Button bttext="리뷰삭제"></Button>
              </div>
            </MyBookCardBookButton>
            {useResultModal && (
              <SelectedModal
                title="리뷰 삭제"
                content="작성한 리뷰를 삭제하시겠습니까?"
                confirmFn={handleConfirmDelete}
                cancelFn={closeModal}
              />
            )}
          </MyReviewCardContent>
        </MyReviewCardWrapper>
      ))}
      <MyMoreViewButton onClick={handleMyReviewView}>
        <span>더보기</span>
      </MyMoreViewButton>
    </>
  );
};
export default MyReviewCard;
