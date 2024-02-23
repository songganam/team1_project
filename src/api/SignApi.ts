// import axios from "axios";

import axios from "axios";
import { SigninForm } from "../pages/join/TSJoin";

// // proxy를 가져온다.
export const API_SERVER_HOST = "";
const signHost = `${API_SERVER_HOST}/api/user`;
const adminHost = `${API_SERVER_HOST}/api/owner`;

export const loginPostTS = async ({ authParam }: { authParam: SigninForm }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const data = {
      email: authParam.email,
      upw: authParam.upw,
    };
    const res = await axios.post(`${signHost}/signin`, data, header);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// export const loginAdminPostTS = async ({ authParam }) => {
//   try {
//     const header = { headers: { "Content-Type": "application/json" } };
//     const data = {
//       email: authParam.email,
//       upw: authParam.upw,
//     };
//     const res = await axios.post(`${adminHost}/signin`, data, header);
//     if (res && res.status < 400) {
//       console.log(res.data);
//       return res.data;
//     } else {
//       console.log("");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const logoutPostTS = async () => {
//   try {
//     const header = { headers: { "Content-Type": "application/json" } };

//     const res = await axios.post(`${signHost}/signout`, header);
//     if (res.status === 400) {
//       console.log(res.data);
//       return res.data;
//     } else {
//       console.log("");
//     }
//   } catch (error) {
//     if (error && error.response && error.response.status === 400) {
//       console.log(
//         "로그인에 실패하였습니다. 서버가 불안정합니다. 다시 시도해주세요.",
//       );
//     }
//   }
// };

// // export const postJadd = async ({ product, successFn, failFn, errorFn }) => {
// //   console.log("회원정보임", product);
// //   try {
// //     const header = { headers: { "Content-Type": "multipart/form-data" } };
// //     const response = await axios.post(`${signHost}/signup`, product, header);
// //     const status = response.status.toString();
// //     if (status.charAt(0) === "2") {
// //       successFn(response.data);
// //     } else {
// //       failFn("글 등록 오류", response.statusText);
// //     }
// //   } catch (error) {
// //     console.log("글 등록 서버오류", error.response.data);
// //     errorFn("글 등록 서버오류", error.response.data);
// //   }
// // };

// // export const nickNameCheckTS = async ({ iNickCheck }) => {
// //   //   console.log("닉네임중복체크", iNickCheck);
// //   const nickname = iNickCheck;
// //   try {
// //     const response = await axios.post(`${signHost}/signup/${nickname}`);
// //   } catch (error) {
// //     console.log(error);
// //     throw error;
// //   }
// // };
