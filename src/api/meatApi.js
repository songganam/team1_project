import axios from "axios";
import authAxios from "../util/tokenUtil";

export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api`;

// 0이 아니면 로그인 0이면 로그아웃 상태 true = 로그아웃 상태 / false = 로그인 상태

//! GET Meat List Page
export const getGList = async ({ param, successFn, failFn, errorFn }) => {
  console.log("파라미터", param);
  try {
    const res = await axios.get(`${host}/shop`, { params: param });
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("목록 호출 성공");
      successFn(res.data);
    } else {
      failFn("목록 호출 오류");
    }
  } catch (error) {
    errorFn(error);
  }
};
// Auth test
export const getGInfo = async ({
  isLogin,
  ishop,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const axiosInstance = isLogin ? authAxios : axios;
    const res = await axiosInstance.get(`${host}/shop/${ishop}`, header);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("목록 호출 성공");
      successFn(res.data);
    } else {
      failFn("목록 호출 오류");
    }
  } catch (error) {
    errorFn(error);
  }
};

// ! Post Reservation (/gogi/reservation)
export const postReser = async ({ reserData, successFn, failFn, errorFn }) => {
  console.log("레저데이따", reserData);
  try {
    //
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.post(`${host}/reservation`, reserData, header);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("");
    }
  } catch (error) {
    errorFn("");
    //
  }
};

export const changeBookmark = async storeNum => {
  try {
    //
    const data = {
      ishop: storeNum,
    };
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.post(`${host}/shop/bookmark`, data, header);
    console.log("check", res.data);
  } catch (error) {
    console.log(error);
    //
  }
};

export const postReview = async ({ product, successFn, failFn, errorFn }) => {
  console.log("axios", product);

  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const res = await authAxios.post(`${host}/review`, product, header);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("글 등록 오류", res.statusText);
    }
  } catch (error) {
    console.log("글 등록 서버오류", error.response.data);
    errorFn("글 등록 서버오류", error.response.data);
  }
};
