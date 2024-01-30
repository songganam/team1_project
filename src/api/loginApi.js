import axios from "axios";

// proxy를 가져온다.
export const API_SERVER_HOST = "";
const signHost = `${API_SERVER_HOST}/api/user`;

// 응답 인터셉터 추가
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 400) {
      console.log("비밀번호가 틀렸습니다.");
    }
    // 오류를 던지지 않고 null을 반환합니다.
    return null;
  },
);

export const loginPost = async ({ authParam, successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const data = {
      email: authParam.email,
      upw: authParam.upw,
    };
    const res = await axios.post(`${signHost}/signin`, data, header);
    if (res && res.status < 400) {
      successFn(res.data);

      return res.data;
    } else {
      failFn("");
    }
  } catch (error) {
    if (error && error.response && error.response.status === 400) {
      errorFn(
        "로그인에 실패하였습니다. 서버가 불안정합니다. 다시 시도해주세요.",
      );
    }
  }
};
let response = null;
export const logoutPost = async ({ successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };

    const res = await axios.post(`${signHost}/signout`, header);
    if (res.status === 400) {
      successFn(res.data);
      return res.data;
    } else {
      failFn("");
    }
  } catch (error) {
    if (error && error.response && error.response.status === 400) {
      errorFn(
        "로그인에 실패하였습니다. 서버가 불안정합니다. 다시 시도해주세요.",
      );
    }
  }
};
