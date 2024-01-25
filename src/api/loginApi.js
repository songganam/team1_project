// 이메일, 비밀번호를 적고
// 로그인을 누르면 완료가 된다.
// 회원가입 누르면 회원가입페이지로
//

import axios from "axios";

// proxy를 가져온다.
export const API_SERVER_HOST = "";
const signHost = `${API_SERVER_HOST}/api/user`;

export const loginPost = async ({ authParam, successFn, failFn, errorFn }) => {
  try {
    // 만약에 API 서버가 JSON 을 원한다면
    const header = { headers: { "Content-Type": "application/json" } };
    const data = {
      email: authParam.email,
      upw: authParam.upw,
    };
    const res = await axios.post(`${signHost}/signin`, data, header);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
      return res.data;
    } else {
      if (res.status === 404) {
        console.log("비밀번호가 틀렸습니다.");
        failFn("비밀번호가 틀렸습니다.");
      } else {
        failFn("로그인에 실패하였습니다. 다시 시도해주세요.");
      }
    }
  } catch (error) {
    if (error.response.data === 404) {
      errorFn(
        "로그인에 실패하였습니다. 서버가 불안정합니다.다시 시도해주세요.",
      );
    }
  }
};

export const postJadd = async iJadd => {
  console.log("회원정보임", iJadd);
  try {
    const response = await axios.post(`${signHost}/signup`, iJadd);
  } catch (error) {
    console.log(error);
  }
};

export const nickNameCheck = async ({ iNickCheck }) => {
  console.log("닉네임중복체크", iNickCheck);
  const nickname = iNickCheck.nickname;
  console.log("닉네임중복체크", iNickCheck.nickname);
  try {
    const response = await axios.post(`${signHost}/signup/${nickname}`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
