import React, { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import TitleHeader from "../../components/titleheader/TitleHeader";
import "../join/JaddPage.css";
import {
  DefaultBt,
  GenderBtWrap,
  JaddAddressBts,
  JaddAddressWrap,
  JaddBirthWrap,
  JaddGenderWrap,
  JaddMailWrap,
  JaddMorePwWrap,
  JaddNameWrap,
  JaddNickNameInner,
  JaddNickNameWrap,
  JaddNumberWrap,
  JaddPageImage,
  JaddPageInfo,
  JaddPageMain,
  JaddPageWrap,
  JaddPwWrap,
  NicknameCheck,
} from "./styles/JaddPageStyle";
import { nickNameCheck, postJadd } from "../../api/joinApi";
// 회원가입 작성 페이지입니다.

const JaddPage = () => {
  const [todo, setTodo] = useState({});
  // const [passCheckError,setPassCheckError] = useState(false)

  // 프로필 사진 이미지 업로드
  const [selectFile, setSelectFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectFile(file);
  };

  const handleUpload = () => {
    if (selectFile) {
      alert("프로필 사진이 업로드되었습니다.");
      // 여기에서 서버로 사진을 전송하는 로직을 추가해야 합니다.
      // 서버에서는 해당 사진을 저장하고 회원 정보와 연동할 수 있습니다.
    } else {
      alert("프로필 사진을 선택하세요.");
    }
  };

  // 파일 선택 버튼을 클릭하는 것과 동일한 효과
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // 비밀번호 확인
  const passCheckForm = () => {
    const upw = todo.upw;
    const checkUpw = todo.checkUpw;
    if (upw === checkUpw) {
      return <div>비밀번호가 일치합니다.</div>;
    } else {
      return <div>비밀번호가 일치하지 않습니다.</div>;
    }
  };

  // 성별 선택
  const genderChoice = () => {
    console.log("성별");
  };
  const [genderSelect, setGenderSelect] = useState(0);
  const handleClick = e => {
    todo.gender;
    if (e == 1) {
      todo.gender = "남";
      setGenderSelect(1);

      console.log("남");
    } else if (e == 2) {
      todo.gender = "여";
      console.log("여");
      setGenderSelect(2);
    }
  };

  const handleChange = e => {
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
  };
  const handleClickJadd = () => {
    console.log("회원가입이 완료되었습니다.");
    // console.log(todo.id);
    // console.log(todo.password);

    const email = todo.email;
    const upw = todo.upw;

    const checkUpw = todo.checkUpw;
    const name = todo.name;
    const nickname = todo.nickname;
    const gender = todo.gender;
    const address = todo.address;
    const inputValue = todo.tel;

    const iJadd = {
      pic: "profile image",
      dto: {
        email: email,
        upw: upw,
        checkUpw: checkUpw,
        name: name,
        nickname: nickname,
        birth: birthday,
        gender: gender,
        address: address,
        tel: inputValue,
      },
    };
    console.log(iJadd);
    // console.log(todo.password);
    // console.log(upw);
    postJadd(iJadd);
  };

  // 닉네임 중복확인
  const [nickname, setNickname] = useState();
  const [isAvailable, setIsAvailable] = useState(null);

  // 이거는 나름 규칙으로 하면되죠
  // setIsAvailable(nickname.length >= 3);
  const handleCheckAvailability = iNickCheck => {
    // const iNickCheck = nickname;
    console.log(nickname);
    nickNameCheck({ iNickCheck: nickname });
  };

  // 휴대폰번호 하이픈 자동입력
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = e => {
    // 입력값에서 숫자만 추출
    const inputValue = e.target.value.replace(/\D/g, "");

    // 전화번호 형식에 맞게 하이픈 추가
    const formattedPhoneNumber = formatPhoneNumber(inputValue);

    // 상태 업데이트
    setPhoneNumber(formattedPhoneNumber);
  };

  const formatPhoneNumber = value => {
    // 000-0000-0000 형식으로 포맷팅
    const regex = /^(\d{3})(\d{0,4})(\d{0,4})$/;
    const matches = value.match(regex);

    if (matches) {
      return `${matches[1]}${matches[2] ? "-" + matches[2] : ""}${
        matches[3] ? "-" + matches[3] : ""
      }`;
    }

    // 일치하지 않는 경우 그대로 반환
    return value;
  };

  // 생년월일 형식
  const [birthday, setBirthday] = useState("");

  const handleBirthChange = event => {
    // 입력값에서 숫자만 추출
    const inputValue = event.target.value.replace(/\D/g, "");

    // 생년월일 형식으로 변환
    const formattedBirthday = inputValue.replace(
      /(\d{4})(\d{0,2})(\d{0,2})/,
      (match, p1, p2, p3) => {
        let result = p1;
        if (p2) {
          result += `/${p2}`;
        }
        if (p3) {
          result += `/${p3}`;
        }
        return result;
      },
    );

    // 상태 업데이트
    setBirthday(formattedBirthday);
  };

  // 패스 이동하기
  const navigate = useNavigate();

  const handleClickCancel = () => {
    navigate("/");
  };
  return (
    <JaddPageWrap>
      <TitleHeader
        timg="https://picsum.photos/1920/215/?category=meat"
        tname="회원가입"
        tcontent="오늘도 맛있는 고기와 함께하세요"
      ></TitleHeader>
      <JaddPageMain>
        <JaddPageImage>
          {/* 큰 동그라미 안에 이미지 표시 */}
          {selectFile && (
            <div>
              <img
                src={URL.createObjectURL(selectFile)}
                alt="프로필 사진"
                // style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          )}
          {/* 보이지 않는 파일 선택 버튼 */}
          <input
            // className="JaddPage-img-button"
            type="file"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: "none" }}
            
          />
          {/* 커스텀 스타일이 적용된 버튼 */}
          <button
            className="JaddPage-img-button "
            onClick={handleButtonClick}
          ></button>
        </JaddPageImage>
        <JaddPageInfo>
          <div className="JaddMailInfo">
            <JaddMailWrap>
              <label>이메일</label>
              <input
                type="text"
                name="email"
                value={todo.email}
                className="JoinMail"
                placeholder="@까지 정확하게 입력하세요."
                onChange={e => handleChange(e)}
              ></input>
            </JaddMailWrap>
            <br />
            <JaddNameWrap>
              <label>이름</label>
              <input
                type="text"
                name="name"
                value={todo.name}
                className="JaddName"
                placeholder="본인 이름을 입력하세요."
                onChange={e => handleChange(e)}
              ></input>
            </JaddNameWrap>
            <br />
            <form action="" method="post" onSubmit="return passCheckForm()">
              <JaddPwWrap>
                <label>비밀번호</label>
                <input
                  type="text"
                  name="upw"
                  value={todo.upw}
                  className="JaddPw"
                  placeholder="비밀번호를 입력하세요.(특수문자 포함 4-8자)"
                  onChange={e => handleChange(e)}
                  maxLength="8"
                ></input>
              </JaddPwWrap>
              <br />
              <JaddMorePwWrap>
                <label>비밀번호 확인</label>
                <input
                  type="text"
                  name="checkUpw"
                  value={todo.checkUpw}
                  className="JaddMorePw"
                  placeholder="입력한 비밀번호를 한번 더 확인하세요."
                  onChange={e => handleChange(e)}
                  maxLength="8"
                ></input>
                <div className="passCheck">{passCheckForm()}</div>
                <div>
                  {/* {passCheckError && (
                    <label style={{ color: "red" }}>
                      비밀번호가 일치하지 않습니다.
                    </label>
                  )} */}
                </div>
              </JaddMorePwWrap>
            </form>
            <br />
            <JaddGenderWrap>
              <div className="JaddGender">
                성별
                <GenderBtWrap>
                  <DefaultBt
                    type="button"
                    name="man"
                    className="gender-bt-man"
                    onClick={e => handleClick(1)}
                    clicked={todo.gender === "남"}
                    // 성별={1}
                  >
                    <span>남성</span>
                  </DefaultBt>
                  <DefaultBt
                    type="button"
                    name="woman"
                    className="gender-bt-woman"
                    onClick={e => handleClick(2)}
                    clicked={todo.gender === "여"}
                  >
                    <span>여성</span>
                  </DefaultBt>
                </GenderBtWrap>
              </div>
            </JaddGenderWrap>
            <br />
            <JaddNickNameWrap>
              <label>닉네임</label>
              <JaddNickNameInner>
                <input
                  type="text"
                  name="nickname"
                  value={todo.nickname}
                  className="JaddNickName"
                  placeholder="사용할 닉네임을 입력하세요."
                  onChange={e => setNickname(e.target.value)}
                ></input>

                <DefaultBt
                  className="JaddNickName-Bt"
                  onClick={handleCheckAvailability}
                >
                  중복확인
                </DefaultBt>
              </JaddNickNameInner>
              <NicknameCheck>
                {isAvailable === true && (
                  <p style={{ color: "green" }}>사용 가능한 닉네임입니다.</p>
                )}
                {isAvailable === false && (
                  <p style={{ color: "red" }}>이미 사용 중인 닉네임입니다.</p>
                )}
              </NicknameCheck>
            </JaddNickNameWrap>
            <br />

            <JaddNumberWrap>
              <label>휴대폰 번호</label>
              <input
                type="text"
                value={phoneNumber}
                className="JaddNumber"
                placeholder="휴대폰 번호를 입력하세요."
                onChange={handleInputChange}
                maxLength="13"
                onKeyDown={e => {
                  if (
                    (e.key === "Backspace" || e.key === "Delete") &&
                    e.target.selectionStart < phoneNumber.length
                  ) {
                    setPhoneNumber(prevPhoneNumber =>
                      prevPhoneNumber.slice(0, prevPhoneNumber.length - 1),
                    );
                  }
                }}
              />
            </JaddNumberWrap>
            <br />
            <JaddBirthWrap>
              <label>생년월일</label>
              <input
                type="text"
                value={birthday}
                className="JaddBirth"
                placeholder="YYYY/MM/DD"
                onChange={handleBirthChange}
                maxLength="10"
              />
            </JaddBirthWrap>
            <br />
            <JaddAddressWrap>
              <label>주소</label>
              <input
                type="text"
                name="address"
                className="JaddAddress"
                placeholder="거주 중인 주소를 입력하세요."
                onChange={e => handleChange(e)}
              ></input>
            </JaddAddressWrap>
            <JaddAddressBts>
              <DefaultBt
                type="button"
                className="Jadd-Join-Bt"
                onClick={() => {
                  handleClickJadd();
                }}
              >
                회원가입
              </DefaultBt>
              <button
                type="button"
                className="cancel-button"
                onClick={() => {
                  handleClickCancel();
                }}
              >
                취소하기
              </button>
            </JaddAddressBts>
          </div>
        </JaddPageInfo>
        <div>
          <Outlet />
        </div>
      </JaddPageMain>
    </JaddPageWrap>
  );
};
export default JaddPage;
