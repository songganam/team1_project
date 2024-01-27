import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { getBInfo } from "../../api/butcherApi";
import ResultModal from "../../components/common/ResultModal";
import ReserCalendar from "../../components/meat/ReserCalendar";
import useCustomHook from "../../components/meat/hooks/useCustomHook";

import {
  MenuWrapper,
  PickupItemCount,
  PickupItemCountWrap,
  PickupItemOption,
  PickupItemSelect,
  PickupItemWrap,
  PickupMenuAddBtn,
  ReserContent,
  ReserCountWrap,
  ReserFormWrap,
  ReserItem,
  ReserItemWrap,
  ReserRequireInput,
  ReserSubmitBtn,
  ReserTimeBtn,
  ReserTimeItem,
  ReserTimeWrap,
  ReserTitle,
  ReserWrap,
  ReserWrapper,
  ReviewImageDeleteBtn,
} from "./styles/ButcherPickupStyle";

const MeatDetailPage = () => {
  const { openModal, isModal, closeModal } = useCustomHook();
  const navigate = useNavigate();
  const { ibutcher } = useParams();
  const location = useLocation();
  const storeName = location.state?.storeName;
  const [loading, setLoading] = useState(false);
  const [storeInfo, setStoreInfo] = useState({});
  const [selectedItems, setSelectedItems] = useState([
    { item: "", quantity: 1 },
  ]);
  const deleteBtn = process.env.PUBLIC_URL + `/assets/images/delete_button.svg`;
  const addBtn = process.env.PUBLIC_URL + `/assets/images/add_menu.png`;
  const disableBtn = process.env.PUBLIC_URL + `/assets/images/disable.png`;
  console.log(storeInfo);
  console.log(storeInfo.menus);
  // 가게 정보를 가져와서 성공하면 setStoreInfo를 사용하여 상태를 업데이트합니다.
  useEffect(() => {
    getBInfo({ ibutcher, successFn, failFn, errorFn });
  }, []);
  const successFn = result => {
    console.log(result);
    setStoreInfo(result);
    setLoading(false);
  };
  const failFn = result => {
    console.log(result);
    setStoreInfo(result);
    setLoading(false);
  };
  const errorFn = result => {
    console.log(result);
    setStoreInfo(result);
    setLoading(false);
  };

  const handleAddForm = () => {
    setSelectedItems([...selectedItems, { item: "", quantity: 1 }]);
  };

  const handleRemoveForm = index => {
    const values = [...selectedItems];
    values.splice(index, 1);
    setSelectedItems(values);
  };

  const handleChange = (index, event) => {
    const values = [...selectedItems];
    values[index][event.target.name] = event.target.value;
    setSelectedItems(values);
  };

  const handleIncrease = index => {
    const values = [...selectedItems];
    values[index].quantity++;
    setSelectedItems(values);
  };

  const handleDecrease = index => {
    const values = [...selectedItems];
    if (values[index].quantity > 1) {
      values[index].quantity--;
    } else {
      alert("수량은 1 이상이어야 합니다.");
    }
    setSelectedItems(values);
  };
  const storeNum = ibutcher;

  const [personCount, setPersonCount] = useState(1);
  const timeValue = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
  ];
  const [timeCount, setTimeCount] = useState("");
  const [clickedValue, setClickedValue] = useState("");

  const handleClickTCount = event => {
    const clickedValue = event.target.innerText;
    setTimeCount(clickedValue);
    setClickedValue(clickedValue);
  };

  const handleClickPCountPlus = () => {
    setPersonCount(personCount + 1);
  };

  const handleClickPCountMinus = () => {
    if (personCount > 1) {
      setPersonCount(personCount - 1);
    } else {
      openModal(
        "인원 수 오류",
        "인원 수가 1명보다 적을 수 없습니다.",
        closeModal,
      );
    }
  };

  const handleClickPCountReset = () => {
    setPersonCount(1);
  };

  const [requiredMsg, setRequiredMsg] = useState("");
  const handleRequireMsg = e => {
    setRequiredMsg(e.target.value);
  };

  const createdate = new Date();
  const nowdata = moment(createdate).format("YYYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(nowdata);

  const handleDateChange = formattedDate => {
    if (formattedDate) {
      const dateData = moment(formattedDate).format("YYYY-MM-DD");
      setSelectedDate(dateData);
      console.log("값임 :", dateData);
      return dateData;
    } else {
      console.log("formattedDate is undefined");
    }
  };

  const timeCountvalue =
    timeCount.split(":")[0] + ":" + timeCount.split(":")[1] + ":00";
  console.log(timeCountvalue);
  const timeline = selectedDate + " " + timeCountvalue;
  console.log(timeline);
  console.log("timecount :", timeCount);

  const reserData = {
    ishop: ibutcher,
    date: timeline,
    headCount: personCount,
    request: requiredMsg,
  };

  const handleReserSubmit = () => {
    if (timeCount == "") {
      openModal(
        "예약시간오류",
        "예약시간을 입력하지 않았습니다. 시간을 입력해주세요.",
        closeModal,
      );
    }
    console.log("내용 :", reserData);
    return reserData;
  };

  const handleSubmit = () => {
    const menus = selectedItems.map(item => ({
      ibutMenu: item.item,
      count: item.quantity,
    }));
    console.log("menus:", menus);
  };

  // return을 이용해 UI를 렌더링합니다.

  return (
    <div>
      {isModal.isOpen && (
        <ResultModal
          title={isModal.title}
          content={isModal.content}
          callFn={isModal.callFn}
        />
      )}
      <ReserWrapper>
        {/* title */}
        <ReserTitle>
          <span>픽업하기</span>
        </ReserTitle>
        {/* wrapper */}
        <ReserWrap>
          {/* Item - Wrapper */}
          <ReserItemWrap>
            {/* 
            // * 가게명 
            */}
            <ReserFormWrap>
              <ReserItem>
                <span>가게명</span>
              </ReserItem>
              <ReserContent>
                <span>{storeName}</span>
              </ReserContent>
            </ReserFormWrap>
            {/* 
            // * 예약날짜 
            */}
            <ReserFormWrap>
              <ReserItem>
                <span>날짜</span>
              </ReserItem>
              <ReserContent>
                <span>{selectedDate}</span>
              </ReserContent>
            </ReserFormWrap>
            {/* 
            // * 예약가능시간 
            */}
            <ReserTimeWrap>
              <ReserItem>
                <span>예약가능시간</span>
              </ReserItem>
              {/* 에약 가능 시간대 버튼 */}
              {createdate && createdate ? (
                <ReserTimeItem>
                  {timeValue.map((item, index) => (
                    <ReserTimeBtn
                      key={index}
                      onClick={handleClickTCount}
                      clicked={clickedValue == item}
                    >
                      <span>{item}</span>
                    </ReserTimeBtn>
                  ))}
                </ReserTimeItem>
              ) : (
                <div></div>
              )}
            </ReserTimeWrap>
            {/* 
            // * 인원 수 
            */}
            <ReserCountWrap>
              <ReserItem>
                <span>메뉴</span>
              </ReserItem>
              {/* Counting Box */}
              <div>
                <MenuWrapper>
                  {selectedItems.map((selectedItem, index) => (
                    <PickupItemWrap key={index}>
                      <PickupItemSelect
                        name="item"
                        value={selectedItem.item || undefined}
                        onChange={event => handleChange(index, event)}
                      >
                        <PickupItemOption value="">
                          메뉴를 선택해주세요
                        </PickupItemOption>
                        {Array.isArray(storeInfo.menus) &&
                          storeInfo.menus
                            .filter(
                              menu =>
                                !selectedItems
                                  .slice(0, index)
                                  .concat(selectedItems.slice(index + 1))
                                  .map(item => item.item)
                                  .includes(menu.menu),
                            )
                            .map(menu => (
                              <PickupItemOption
                                key={menu.menu}
                                value={menu.menu}
                              >
                                {menu.menu}
                              </PickupItemOption>
                            ))}
                      </PickupItemSelect>
                      <PickupItemCountWrap>
                        <PickupItemCount onClick={() => handleDecrease(index)}>
                          <span>-</span>
                        </PickupItemCount>
                        <PickupItemCount>
                          <span>{selectedItem.quantity}</span>
                        </PickupItemCount>
                        <PickupItemCount onClick={() => handleIncrease(index)}>
                          <span>+</span>
                        </PickupItemCount>
                      </PickupItemCountWrap>

                      {index !== 0 && (
                        <ReviewImageDeleteBtn
                          onClick={() => handleRemoveForm(index)}
                          bgImg={deleteBtn}
                        ></ReviewImageDeleteBtn>
                      )}
                    </PickupItemWrap>
                  ))}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <PickupMenuAddBtn
                      onClick={handleAddForm}
                      disabled={
                        storeInfo.menus &&
                        selectedItems.length === storeInfo.menus.length
                      }
                      bgImg={addBtn}
                      disblaImg={disableBtn}
                    />
                  </div>
                </MenuWrapper>
              </div>

              {/* <PickupItemWrap>
                <PickupItemLabel>
                  <span>한우종합선물셋트</span>
                </PickupItemLabel>
                <PickupItemCountWrap>
                  <PickupItemCount>
                    <span>-</span>
                  </PickupItemCount>
                  <PickupItemCount>
                    <span>1</span>
                  </PickupItemCount>
                  <PickupItemCount>
                    <span>+</span>
                  </PickupItemCount>
                </PickupItemCountWrap>
              </PickupItemWrap> */}
            </ReserCountWrap>

            {/* 
            // * 요청사항
            */}
            <ReserFormWrap>
              <ReserItem>
                <span>요청사항</span>
              </ReserItem>
              <ReserContent>
                <ReserRequireInput
                  type="text"
                  name="requireMsg"
                  onChange={e => handleRequireMsg(e)}
                  value={requiredMsg}
                  placeholder="요청사항을 입력해주세요. (30자 내외)"
                  maxLength="50"
                />
              </ReserContent>
            </ReserFormWrap>
          </ReserItemWrap>
          {/* Calendar */}
          <div>
            <ReserCalendar onDateChange={handleDateChange} />
          </div>
        </ReserWrap>
        {/* button */}
        <ReserSubmitBtn onClick={handleReserSubmit}>
          <span>예약하기</span>
        </ReserSubmitBtn>
      </ReserWrapper>
    </div>
  );
};

export default MeatDetailPage;
