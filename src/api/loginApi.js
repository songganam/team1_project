import axios from "axios";

// proxy를 가져온다.
export const API_SERVER_HOST = "";
const signHost = `${API_SERVER_HOST}/api/user`;
const adminHost = `${API_SERVER_HOST}/api/owner`;

export const loginPost = async ({ authParam }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const data = {
      email: authParam.email,
      upw: authParam.upw,
    };
    const res = await axios.post(`${signHost}/signin`, data, header);
    if (res && res.status < 400) {
      console.log(res.data);
      return res.data;
    } else {
      console.log("");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const loginAdminPost = async ({ authParam }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const data = {
      email: authParam.email,
      upw: authParam.upw,
    };
    const res = await axios.post(`${adminHost}/signin`, data, header);
    if (res && res.status < 400) {
      console.log(res.data);
      return res.data;
    } else {
      console.log("");
    }
  } catch (error) {
    console.log(error);
  }
};

export const logoutPost = async () => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };

    const res = await axios.post(`${signHost}/signout`, header);
    if (res.status === 400) {
      console.log(res.data);
      return res.data;
    } else {
      console.log("");
    }
  } catch (error) {
    if (error && error.response && error.response.status === 400) {
      console.log(
        "로그인에 실패하였습니다. 서버가 불안정합니다. 다시 시도해주세요.",
      );
    }
  }
};
