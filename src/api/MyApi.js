import axios from "axios";
import authAxios from "../util/tokenUtil";

export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api`;

// 마이페이지 : 예약 내역 가져오기 (GET)
export const getMyBook = async ({ param, successFn, failFn, errorFn }) => {
  try {
    const res = await authAxios.get(`${host}/user/reservation`, {
      params: param,
    });
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("예약 내역 호출 성공");
      successFn(res.data);
    } else {
      failFn("예약 내역 호출 오류");
    }
  } catch (error) {
    errorFn(error);
    console.log("서버 오류");
  }
};

// 마이페이지 : 리뷰 내역 가져오기 (GET)
export const getMyReview = async ({ param, successFn, failFn, errorFn }) => {
  try {
    const res = await authAxios.get(`${host}/user/review`, { params: param });
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("리뷰 내역 호출 성공");
      successFn(res.data);
    } else {
      failFn("리뷰 내역 호출 오류");
    }
  } catch (error) {
    errorFn(error);
    console.log("서버 오류");
  }
};

// 마이페이지 : 북마크 내역 가져오기 (GET)
export const getMyList = async ({ param, successFn, failFn, errorFn }) => {
  try {
    const res = await authAxios.get(`${host}/user/bookmark`, { params: param });
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("북마크 내역 호출 성공");
      successFn(res.data);
    } else {
      failFn("북마크 내역 호출 오류");
    }
  } catch (error) {
    errorFn(error);
    console.log("서버 오류");
  }
};

// 마이페이지 : 유저 정보 가져오기 (GET)
export const getUserInfo = async ({ param, successFn, failFn, errorFn }) => {
  try {
    const res = await authAxios.get(`${host}/user`, { params: param });
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("유저 정보 호출 성공");
      successFn(res.data);
    } else {
      failFn("유저 정보 호출 오류");
    }
  } catch (error) {
    errorFn(error);
    console.log("서버 오류");
  }
};
