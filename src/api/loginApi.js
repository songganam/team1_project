// 이메일, 비밀번호를 적고
// 로그인을 누르면 완료가 된다.
// 회원가입 누르면 회원가입페이지로
//

import axios from "axios";

// proxy를 가져온다.
export const API_SERVER_HOST = "";
const loginJadd = `${API_SERVER_HOST}/api/user`;

export const postLogin = async iLog => {
  try {
    const response = await axios.post(`${loginJadd}/signin`, iLog);
    console.log("데이터임 ", response.data);
  } catch (error) {
    console.log(error);
  }
};

export const postJadd = async iJadd => {
  console.log("회원정보임", iJadd);
  try {
    const response = await axios.post(`${loginJadd}/signup`, iJadd);
  } catch (error) {
    console.log(error);
  }
};

// export const postNickname = async iNickname => {
//     try {
//         const response = await axios.post(`${}`)
//     }
// }
