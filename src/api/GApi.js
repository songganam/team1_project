import axios from "axios";

export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api`;

//! GET Gogi List Page
export const getGList = async ({ param, successFn, failFn, errorFn }) => {
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

export const getGInfo = async ({ ishop, successFn, failFn, errorFn }) => {
  try {
    const res = await axios.get(`${host}/shop/${ishop}`);
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
