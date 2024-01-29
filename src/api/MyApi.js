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

// 마이페이지 : 예약 내역 변경하기 (PUT)
export const putMyBook = async ({ param, successFn, failFn, errorFn }) => {
  try {
    const res = await authAxios.put(`${host}/reservation`, {
      params: param,
    });
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("예약 변경 성공");
      successFn(res.data);
    } else {
      failFn("예약 변경 오류");
    }
  } catch (error) {
    errorFn(error);
    console.log("서버 오류");
  }
};

// 마이페이지 : 예약 내역 삭제하기 (PATCH)
export const patchMyBook = async ({
  patchBookForm,
  successFn,
  failFn,
  errorFn,
}) => {
  const data = {
    checkShop: patchBookForm.checkShop,
    ireview: patchBookForm.ireview,
  };
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.patch(`${host}/reservation`, {
      ...header,
      data: data,
    });
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("예약 내역 완전 삭제 성공");
      successFn(res.data);
      return res.data;
    } else {
      failFn("예약 내역 삭제 오류");
    }
  } catch (error) {
    console.log("서버 완전 오류");
    errorFn(error);
  }
};

// 마이페이지 : 북마크 내역 가져오기 (GET)
export const getMyList = async ({ param, successFn, failFn, errorFn }) => {
  console.log("parameter :", param);
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

// 마이페이지 : 리뷰 내역 삭제하기 (DELETE)
export const deleteMyReview = async ({
  deleteForm,
  successFn,
  failFn,
  errorFn,
}) => {
  console.log("폼", deleteForm);
  // console.log("log", data);
  const data = {
    checkShop: deleteForm.checkShop,
    ireview: deleteForm.ireview,
  };
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.delete(`${host}/user/review`, {
      ...header,
      data: data,
    });

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("리뷰 내역 삭제 성공");
      successFn(res.data);
    } else {
      failFn("리뷰 내역 삭제 오류");
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

// 마이페이지 : 유저 정보 수정하기 (PUT) 안됨 ㅎㅎ
export const putUserInfo = async ({ userData, successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const res = await authAxios.put(`${host}/user`, userData, header);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("유저 정보 수정 성공");
      successFn(res.data);
    } else {
      failFn("유저 정보 수정 오류", res.statusText);
    }
  } catch (error) {
    errorFn(error);
    if (error.response) {
      console.log("서버 응답 오류", error.response.data);
      errorFn("유저 정보 수정 서버 오류: ", error.response.data);
    } else {
      errorFn("유저 정보 수정 서버 오류");
    }
  }
};
