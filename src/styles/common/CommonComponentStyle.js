import styled from "@emotion/styled";

// 고깃집 가게 카드 컴포넌트
export const MeatStoreCard = styled.div`
  position: relative;
  width: 540px;
  height: 365px;
  border: 1px solid black;
  padding-top: 30px;
  margin-bottom: 100px;
`;
export const MeatStoreCardName = styled.div`
  position: relative;
  font-family: "Prentendard-Regular";
  font-size: 33px;
  font-weight: 400;
  background-color: green;
  /* margin-bottom: 20px; */
`;
export const MeatStoreInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . . . . . ."
    ". . . storeImage storeImage storeImage storeImage storeImage"
    ". . . storeImage storeImage storeImage storeImage storeImage"
    "tag tag tag storeImage storeImage storeImage storeImage storeImage"
    "tag tag tag storeImage storeImage storeImage storeImage storeImage"
    ". . . storeImage storeImage storeImage storeImage storeImage"
    "rBtn rBtn . storeImage storeImage storeImage storeImage storeImage"
    ". . . . . . . .";
`;
export const MeatSotreCardImg = styled.div`
  width: 380px;
  height: 210px;
  grid-area: storeImage;
  background-color: red;
`;
export const ReservationBtn = styled.button`
  grid-area: rBtn;
  margin-top: -20px;
  margin-left: 10px;
  position: relative;
  border: none;
  background: transparent;
  font-family: "Prentendard-Regular";
  font-size: 19px;
  font-weight: 400;
  padding: 10px;
`;
export const MeatstoreTag = styled.div`
  grid-area: tag;
  /* background-color: blue; */
  border: 1px solid #c9c9c9;
  height: 80px;
  margin-top: -20px;
`;
