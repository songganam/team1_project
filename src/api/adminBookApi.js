import authAxios from "../util/tokenUtil";

export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api`;

// 관리자 예약 관리 페이지 : 고깃집 OR 정육점 (GET)

// 관리자 예약 관리 페이지 : 고깃집 예약 관리 내역 가져오기 (GET)
export const getAdminMeatBook = async ({
  param,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.get(
      `${API_SERVER_HOST}/api/owner/reservation`,
      {
        params: param,
        headers: header,
      },
    );
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("예약 관리 내역 호출 성공");
      successFn(res.data);
    } else {
      failFn("예약 관리 내역 호출 오류");
    }
    console.log(res.data);
  } catch (error) {
    errorFn(error);
    console.log("서버 오류");
  }
};

// 관리자 예약 관리 페이지 : 정육점 예약 관리 내역 가져오기 (GET)
export const getAdminButcherBook = async ({
  param,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.get(
      `${API_SERVER_HOST}/api/owner/reservation`,
      {
        params: param,
        headers: header,
      },
    );
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("정육점 예약 내역 호출 성공");
      successFn(res.data);
    } else {
      failFn("정육점 예약 내역 호출 오류");
    }
    console.log(res.data);
  } catch (error) {
    errorFn(error);
    console.log("서버 오류");
  }
};

// 관리자 예약 관리 페이지 : 노쇼 내역 가져오기 (GET)
export const getNoShow = async ({ param, successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.get(`${API_SERVER_HOST}/api/owner/noshow`, {
      params: param,
      headers: header,
    });
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("노쇼 내역 호출 성공");
      successFn(res.data);
    } else {
      failFn("노쇼 내역 호출 오류");
    }
    console.log(res.data);
  } catch (error) {
    errorFn(error);
    console.log("서버 오류");
  }
};

// 관리자 예약 관리 페이지 : 예약 확정 (PATCH)
