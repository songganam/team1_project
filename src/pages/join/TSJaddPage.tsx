// import { AxiosError } from "axios";
// import { ChangeEvent, MouseEvent, RefObject, useRef, useState } from "react";
// import { useMutation } from "react-query";
// import { Outlet, useNavigate } from "react-router-dom";
// import { nickNameCheckTS } from "../../api/SignApi";
// import { postJadd } from "../../api/joinApi";
// import Fetching from "../../components/common/Fetching";
// import ResultModal from "../../components/common/ResultModal";
// import SelectedModal from "../../components/common/SelectedModal";
// import useCustomHook from "../../components/meat/hooks/useCustomHook";
// import TitleHeader from "../../components/titleheader/TitleHeader";
// import "../join/JaddPage.css";
// import { NicknameForm, UserJoinData } from "./TSJoin";
// import {
//   DefaultBt,
//   GenderBtWrap,
//   JaddAddressBts,
//   JaddAddressWrap,
//   JaddBirthWrap,
//   JaddGenderWrap,
//   JaddMailWrap,
//   JaddMorePwWrap,
//   JaddNameWrap,
//   JaddNickNameInner,
//   JaddNickNameWrap,
//   JaddNumberWrap,
//   JaddPageImage,
//   JaddPageInfo,
//   JaddPageMain,
//   JaddPageWrap,
//   JaddPwWrap,
//   NicknameCheck,
// } from "./styles/JaddPageStyle";

// const initState: UserJoinData = {
//   pic: "",
//   email: "",
//   upw: "",
//   checkUpw: "",
//   name: "",
//   nickname: "",
//   birth: "",
//   gender: "",
//   address: "",
//   tel: "",
// };
// // 회원가입 작성 페이지입니다.
// const JaddPage = () => {
//   // const [todo, setTodo] = useState({});

//   const [signUpData, setSignUpData] = useState(initState);
//   const [fetching, setFetching] = useState(false);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
//     setMessage(""); // (비밀번호 확인 메시지) 사용자가 다시 입력할 때 메시지 초기화
//   };

//   const [image, setImage] = useState<null | string>(null); // 단일 이미지를 저장하는 상태를 사용합니다.
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);
//   const {
//     isModal,
//     openModal,
//     closeModal,
//     isSelectModal,
//     openSelectModal,
//     confirmSelectModal,
//     cancelSelectModal,
//   } = useCustomHook();

//   const uploadRef: RefObject<HTMLInputElement> = useRef(null);
//   const handleClickImg = () => {
//     if (uploadRef.current) {
//       uploadRef.current.click();
//     }
//   };

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;
//     if (files && files.length > 0) {
//       const file = files[0];
//       const previewUrl = URL.createObjectURL(file);
//       setImage(previewUrl);
//       setSelectedImage(file);
//     }
//   };

//   const deleteImage = () => {
//     setImage(null);
//   };

//   // Mutation (React-Query)
//   const addMutation = useMutation({
//     mutationFn: (signData: FormData) => postJadd({ signUpData }),
//     onSuccess: result => {
//       console.log("글 등록 성공", addResult);
//       openModal("회원가입 완료", "회원가입이 완료 되었습니다.", () => {
//         closeModal(), navigate("/");
//       });
//     },
//     onError: (error: AxiosError) => {
//       openModal("회원가입 실패", "입력 정보를 확인해주세요.", closeModal());
//     },
//   });
//   const nickNameMutation = useMutation({
//     mutationFn: () =>
//       nickNameCheckTS({
//         iNickCheck: signUpData.nickname,
//       }),

//     onSuccess: result => {
//       console.log("닉네임 조회성공", addResult);
//       openModal("닉네임 사용 가능", "사용가능한 닉네임입니다.", closeModal());
//     },

//     onError: (error: AxiosError) => {
//       if (error.response && error.response.status === 400) {
//         openModal("닉네임 중복확인", "중복된 닉네임입니다.", closeModal);
//       }
//     },
//   });

//   const handleClick = async signUpData => {
//     const formData = new FormData();
//     const dto = new Blob(
//       [
//         JSON.stringify({
//           email: signUpData?.email,
//           upw: signUpData?.upw,
//           checkUpw: signUpData?.checkUpw,
//           name: signUpData?.name,
//           nickname: signUpData?.nickname,
//           birth: signUpData?.birth,
//           gender: signUpData?.gender,
//           address: signUpData?.address,
//           tel: signUpData?.tel,
//         }),
//       ],
//       // JSON 형식으로 설정
//       { type: "application/json" },
//     );
//     formData.append("dto", dto);
//     if (selectedImage !== null) {
//       formData.append("pic", selectedImage);
//     }

//     // postJadd({ signUpData: formData, successFn, failFn, errorFn });
//   };

//   // 모달창
//   // 회원 가입 시 예외처리 결과 상태 업데이트
//   // 회원가입 시 모달창 관련
//   const [addResult, setAddResult] = useState(false);
//   // resultModal 관련

//   // 확인 버튼 클릭 시
//   const handleConfirm = signUpData => {
//     // 글 등록 로직 실행
//     if (signUpData.email === "") {
//       openModal("이메일 필수 입력", "이메일을 입력해주세요.", closeModal);
//     } else if (signUpData.upw === null) {
//       openModal("비밀번호 4~8자 이내", "비밀번호를 입력해주세요.", closeModal); // c,k
//     } else if (signUpData.checkUpw === null) {
//       openModal(
//         "비밀번호 확인 필수 입력",
//         "비밀번호를 확인해주세요.",
//         closeModal,
//       ); // ck
//     } else if (signUpData.name === "") {
//       openModal("이름 필수 입력", "이름을 입력해주세요.", closeModal);
//     } else if (signUpData.nickname === "") {
//       openModal("닉네임 3~6 이내", "닉네임을 입력해주세요.", closeModal);
//     } else if (signUpData.birth === "") {
//       openModal("생년월일 필수 입력", "생년월일 입력해주세요.", closeModal);
//     } else if (signUpData.gender === "") {
//       openModal("성별 필수 선택", "성별을 선택해주세요.", closeModal);
//     } else if (signUpData.address === "") {
//       openModal("주소 필수 입력", "주소를 입력해주세요.", closeModal);
//     } else if (signUpData.tel === "") {
//       openModal(
//         "휴대폰 번호 필수 입력",
//         "휴대폰 번호를 입력해주세요.",
//         closeModal,
//       );
//     } else {
//       handleClick(signUpData);
//     }
//   };

//   // 글 등록 버튼 클릭 핸들러
//   const handleAddClick = () => {
//     openSelectModal(
//       "회원가입",
//       "회원가입을 하시겠습니까?",
//       () => {
//         handleConfirm(signUpData), confirmSelectModal();
//       },
//       cancelSelectModal,
//     );
//   };

//   // 비밀번호 확인 메시지
//   const [message, setMessage] = useState("");
//   const [messageColor, setMessageColor] = useState("");

//   const handleValiation = () => {
//     if (signUpData.upw === signUpData.checkUpw) {
//       setMessage("비밀번호가 일치합니다.");
//       setMessageColor("green");
//     } else {
//       setMessage("비밀번호가 일치하지 않습니다.");
//       setMessageColor("red");
//     }
//   };

//   // 성별 선택
//   const genderChoice = () => {
//     console.log("성별");
//   };
//   const [genderSelect, setGenderSelect] = useState(0);
//   const handleGenderClick = (e: MouseEvent<HTMLDivElement> | number): void => {
//     signUpData.gender;
//     if (e == 1) {
//       signUpData.gender = "남";
//       setGenderSelect(1);

//       console.log("남");
//     } else if (e == 2) {
//       signUpData.gender = "여";
//       console.log("여");
//       setGenderSelect(2);
//     }
//   };

//   // 닉네임 중복확인
//   const [isAvailable, setIsAvailable] = useState(null);

//   // 이거는 나름 규칙으로 하면되죠
//   // setIsAvailable(nickname.length >= 3);
//   // console.log("테스트", signUpData.nickname);
//   const handleCheckAvailability = (iNickCheck: NicknameForm) => {
//     // // const iNickCheck = nickname;
//     // console.log("니크네임", signUpData.nickname);
//     // nickNameCheckTS({
//     //   iNickCheck: signUpData.nickname,
//     // });
//     nickNameMutation.mutate(iNickCheck);
//   };

//   //   const successNickFn = () => {
//   //     openModal("닉네임 중복확인", "사용가능한 닉네임 입니다.", closeModal);
//   //   };
//   //   const failNickFn = () => {
//   //     console.log("페일");
//   //   };
//   //   const errorNickFn = error => {
//   //     if (error.response && error.response.status === 400) {
//   //       openModal("닉네임 중복확인", "중복된 닉네임입니다.", closeModal);
//   //     }
//   //     // console.log("에러임 ㄹㅇㅋㅋ");
//   //   };
//   // 휴대폰번호 하이픈 자동입력
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     // 입력값에서 숫자만 추출
//     const inputValue = e.target.value.replace(/\D/g, "");

//     // 전화번호 형식에 맞게 하이픈 추가
//     const formattedPhoneNumber = formatPhoneNumber(inputValue);

//     // 상태 업데이트
//     setPhoneNumber(formattedPhoneNumber);
//   };

//   const formatPhoneNumber = (value: string) => {
//     // 000-0000-0000 형식으로 포맷팅
//     const regex = /^(\d{3})(\d{0,4})(\d{0,4})$/;
//     const matches = value.match(regex);

//     if (matches) {
//       return `${matches[1]}${matches[2] ? "-" + matches[2] : ""}${
//         matches[3] ? "-" + matches[3] : ""
//       }`;
//     }
//     // 일치하지 않는 경우 그대로 반환
//     return value;
//   };

//   // 생년월일 형식
//   const [birthday, setBirthday] = useState("");

//   const handleBirthChange = (event: ChangeEvent<HTMLInputElement>) => {
//     // 입력값에서 숫자만 추출
//     const inputValue = event.target.value.replace(/\D/g, "");

//     // 생년월일 형식으로 변환
//     const formattedBirthday = inputValue.replace(
//       /(\d{4})(\d{0,2})(\d{0,2})/,
//       (match, p1, p2, p3) => {
//         let result = p1;
//         if (p2) {
//           result += `/${p2}`;
//         }
//         if (p3) {
//           result += `/${p3}`;
//         }
//         return result;
//       },
//     );

//     // 상태 업데이트
//     setBirthday(formattedBirthday);
//   };

//   // 패스 이동하기
//   const navigate = useNavigate();

//   const handleClickCancel = () => {
//     navigate("/");
//   };

//   const callModal = () => {
//     openModal("테스트", "테스트입니다", closeModal);
//   };

//   return (
//     <JaddPageWrap>
//       {fetching ? <Fetching /> : null}
//       {isModal.isOpen && (
//         <ResultModal
//           title={isModal.title}
//           content={isModal.content}
//           callFn={isModal.callFn}
//         />
//       )}
//       {isSelectModal.isOpen && (
//         <SelectedModal
//           title={isSelectModal.title}
//           content={isSelectModal.content}
//           confirmFn={isSelectModal.confirmFn}
//           cancelFn={isSelectModal.cancelFn}
//         />
//       )}
//       <TitleHeader
//         timg={`${process.env.PUBLIC_URL}/assets/images/join_header.png`}
//         tname="회원가입"
//         tcontent="오늘도 맛있는 고기와 함께하세요"
//       ></TitleHeader>
//       <JaddPageMain>
//         <JaddPageImage>
//           {/* 프로필 사진 미리 보기 */}
//           <div className="previewBox">
//             {image ? (
//               <img src={image} alt="프로필미리보기" />
//             ) : (
//               <img
//                 src={`${process.env.PUBLIC_URL}/assets/images/user_profile.png`}
//                 alt={`미리보기`}
//                 onClick={deleteImage}
//               />
//             )}
//           </div>

//           {/* 파일 업로드 버튼 */}
//           <div className="uploadBox" onClick={handleClickImg}>
//             <div>
//               <img
//                 src={`${process.env.PUBLIC_URL}/assets/images/profile_camera.svg`}
//                 alt="업로드 버튼"
//               />
//               <input
//                 type="file"
//                 ref={uploadRef}
//                 style={{ display: "none" }}
//                 onChange={handleFileChange}
//               />
//             </div>
//           </div>

//           {/* 커스텀 스타일이 적용된 버튼 */}
//           {/* <button
//             className="JaddPage-img-button "

//           ></button> */}
//         </JaddPageImage>
//         <JaddPageInfo>
//           <div className="JaddMailInfo">
//             <JaddMailWrap>
//               <label>이메일</label>
//               <input
//                 type="text"
//                 name="email"
//                 value={signUpData.email}
//                 className="JoinMail"
//                 placeholder="@까지 정확하게 입력하세요."
//                 onChange={e => handleChange(e)}
//               ></input>
//             </JaddMailWrap>
//             <br />
//             <JaddNameWrap>
//               <label>이름</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={signUpData.name}
//                 className="JaddName"
//                 placeholder="본인 이름을 입력하세요."
//                 onChange={e => handleChange(e)}
//               ></input>
//             </JaddNameWrap>
//             <br />
//             <form action="" method="post" onSubmit="return passCheckForm()">
//               <JaddPwWrap>
//                 <label>비밀번호</label>
//                 <input
//                   type="password"
//                   name="upw"
//                   value={signUpData.upw}
//                   className="JaddPw"
//                   placeholder="비밀번호를 입력하세요.(특수문자 포함 4-8자)"
//                   onChange={e => handleChange(e)}
//                   maxLength="8"
//                   minLength="4"
//                 />
//               </JaddPwWrap>
//               <br />
//               <JaddMorePwWrap>
//                 <label>비밀번호 확인</label>
//                 <input
//                   type="password"
//                   name="checkUpw"
//                   value={signUpData.checkUpw}
//                   className="JaddMorePw"
//                   placeholder="입력한 비밀번호를 한번 더 확인하세요."
//                   onChange={e => handleChange(e)}
//                   maxLength="8"
//                   minLength="4"
//                   onBlur={handleValiation}
//                 />
//                 {message !== "" &&
//                   signUpData.upw !== "" &&
//                   signUpData.checkUpw !== "" && (
//                     <div
//                       style={{
//                         color: messageColor,
//                         fontSize: "14px",
//                         paddingTop: "5px",
//                       }}
//                     >
//                       {message}
//                     </div>
//                   )}
//               </JaddMorePwWrap>
//             </form>
//             <br />
//             <JaddGenderWrap>
//               <div className="JaddGender">
//                 성별
//                 <GenderBtWrap>
//                   <DefaultBt
//                     type="button"
//                     name="gender"
//                     className="gender-bt-man"
//                     onClick={e => handleGenderClick(1)}
//                     clicked={signUpData.gender === "남"}
//                     // 성별={1}
//                   >
//                     <span>남성</span>
//                   </DefaultBt>
//                   <DefaultBt
//                     type="button"
//                     name="gender"
//                     className="gender-bt-woman"
//                     onClick={e => handleGenderClick(2)}
//                     clicked={signUpData.gender === "여"}
//                   >
//                     <span>여성</span>
//                   </DefaultBt>
//                 </GenderBtWrap>
//               </div>
//             </JaddGenderWrap>
//             <br />
//             <JaddNickNameWrap>
//               <label>닉네임</label>
//               <JaddNickNameInner>
//                 <input
//                   type="text"
//                   name="nickname"
//                   value={signUpData.nickname}
//                   className="JaddNickName"
//                   placeholder="사용할 닉네임을 입력하세요."
//                   onChange={e => handleChange(e)}
//                   maxLength="6"
//                   minLength="1"
//                 ></input>

//                 <DefaultBt
//                   className="JaddNickName-Bt"
//                   onClick={handleCheckAvailability}
//                 >
//                   중복확인
//                 </DefaultBt>
//               </JaddNickNameInner>
//               <NicknameCheck>
//                 {isAvailable === 1 && (
//                   <p style={{ color: "green", paddingTop: "5px" }}>
//                     사용 가능한 닉네임입니다.
//                   </p>
//                 )}
//                 {isAvailable === 0 && (
//                   <p style={{ color: "red", paddingTop: "5px" }}>
//                     이미 사용 중인 닉네임입니다.
//                   </p>
//                 )}
//               </NicknameCheck>
//             </JaddNickNameWrap>
//             <br />

//             <JaddNumberWrap>
//               <label>휴대폰 번호</label>
//               <input
//                 type="text"
//                 name="tel"
//                 value={signUpData.tel.replace(
//                   /(\d{3})(\d{4})(\d{3})/,
//                   "$1-$2-$3",
//                 )}
//                 className="JaddNumber"
//                 placeholder="휴대폰 번호를 입력하세요."
//                 onChange={e => {
//                   let input = e.target.value.replace(/[^0-9]/g, "");
//                   let event = {
//                     target: {
//                       name: e.target.name,
//                       value: input,
//                     },
//                   };
//                   handleChange(event);
//                 }}
//                 maxLength="13"
//               />
//             </JaddNumberWrap>
//             <br />
//             <JaddBirthWrap>
//               <label>생년월일</label>
//               <input
//                 type="text"
//                 name="birth"
//                 value={signUpData.birth.replace(
//                   /(\d{4})(\d{2})(\d{2})/,
//                   "$1/$2/$3",
//                 )}
//                 className="JaddBirth"
//                 placeholder="YYYY/MM/DD"
//                 onChange={e => {
//                   let input = e.target.value.replace(/[^0-9]/g, "");
//                   let event = {
//                     target: {
//                       name: e.target.name,
//                       value: input,
//                     },
//                   };
//                   handleChange(event);
//                 }}
//                 maxLength="10"
//               />
//             </JaddBirthWrap>
//             <br />
//             <JaddAddressWrap>
//               <label>주소</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={signUpData.address}
//                 className="JaddAddress"
//                 placeholder="거주 중인 주소를 입력하세요."
//                 onChange={e => handleChange(e)}
//               ></input>
//             </JaddAddressWrap>
//             <JaddAddressBts>
//               <DefaultBt
//                 type="button"
//                 className="join-button"
//                 onClick={handleAddClick}
//               >
//                 회원가입
//               </DefaultBt>
//               <button
//                 type="button"
//                 className="cancel-button"
//                 onClick={() => {
//                   handleClickCancel();
//                 }}
//               >
//                 취소하기
//               </button>
//             </JaddAddressBts>
//           </div>
//         </JaddPageInfo>

//         <div>
//           <Outlet />
//         </div>
//       </JaddPageMain>
//     </JaddPageWrap>
//   );
// };
// export default JaddPage;
