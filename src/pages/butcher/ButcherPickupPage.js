import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { getBInfo } from "../../api/butcherApi";
import ResultModal from "../../components/common/ResultModal";
import ReserCalendar from "../../components/meat/ReserCalendar";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import Select from "react-select";

import {
  MenuWrapper,
  PickupItemCount,
  PickupItemCountWrap,
  PickupItemOption,
  PickupItemSelect,
  PickupItemWrap,
  PickupMenuAddBtn,
  PickupTimeSelectBox,
  PickupTimeSelector,
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

  // ! 시간 (00시 : 00분)
  const [meridiem, setMeridiem] = useState("AM");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  // ! 오픈시간 (openingHour / closeingHour)
  const [openingHour, setOpeningHour] = useState(9);
  const [closingHour, setClosingHour] = useState(20);

  const meridiemOptions = [
    { value: "AM", label: "오전" },
    { value: "PM", label: "오후" },
  ];

  const hourOptions = Array.from({ length: 12 }, (_, i) => ({
    value: i + 1,
    label: String(i + 1).padStart(2, "0"),
  })).filter((option, index) => {
    if (meridiem === "AM") {
      return option.value >= openingHour && option.value <= 12;
    } else {
      const value24 = (option.value % 12) + 12;
      return value24 <= closingHour;
    }
  });

  const minuteOptions = Array.from({ length: 60 }, (_, i) => ({
    value: i,
    label: String(i).padStart(2, "0"),
  }));

  const customStyles = {
    control: (styles, { isFocused, isSelected }) => ({
      ...styles,
      border: isFocused || isSelected ? "1.5px solid #066E52" : "none",
      boxShadow: isFocused ? "0 0 0 1px #066E52" : null,
      "&:hover": {
        border: "1.5px solid #066E52",
      },
    }),
    menu: styles => ({ ...styles, zIndex: 999 }),
    singleValue: (provided, state) => ({
      ...provided,
      fontFamily: "DAEAM_LEE_TAE_JOON",
      fontSize: "14px",
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: "DAEAM_LEE_TAE_JOON",
      fontSize: "14px",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      fontFamily: "DAEAM_LEE_TAE_JOON",
      fontSize: "14px",
    }),
  };

  // ! POST
  const handleReserSubmit = () => {
    const menus = selectedItems.map((item, index) => ({
      ibutMenu: index,
      count: item.quantity,
    }));

    if (!meridiem || !hour || !minute) {
      openModal("시간입력오류", "시간을 입력해주세요.", closeModal);
      return;
    }
    const hour24 = meridiem === "PM" ? (hour % 12) + 12 : hour % 12;
    const time = `${String(hour24).padStart(2, "0")}:${String(minute).padStart(
      2,
      "0",
    )}`; // 분도 두 자리 숫자로 출력
    const timeline = selectedDate + " " + time;
    const PickupData = {
      ibutcher: ibutcher,
      date: timeline,
      request: requiredMsg,
      menu: menus,
    };
    console.log(PickupData);
  };
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
              <ReserTimeItem>
                <PickupTimeSelector>
                  <PickupTimeSelectBox>
                    <Select
                      options={meridiemOptions}
                      placeholder="오전/오후"
                      onChange={option => setMeridiem(option.value)}
                      onMenuOpen={() => setMeridiem(meridiem)}
                      styles={customStyles}
                    />
                  </PickupTimeSelectBox>
                  <PickupTimeSelectBox>
                    <Select
                      options={hourOptions}
                      placeholder="시"
                      onChange={option => setHour(option.value)}
                      onMenuOpen={() => setHour(hour)}
                      styles={customStyles}
                    />
                  </PickupTimeSelectBox>
                  <PickupTimeSelectBox>
                    <Select
                      options={minuteOptions}
                      placeholder="분"
                      onChange={option => setMinute(option.value)}
                      onMenuOpen={() => setMinute(minute)}
                      styles={customStyles}
                    />
                  </PickupTimeSelectBox>
                </PickupTimeSelector>
              </ReserTimeItem>
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
