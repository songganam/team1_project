import authAxios from "../util/tokenUtil";

export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api`;

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

// 관리자 예약 관리 페이지 : 고깃집 예약 확정 (PATCH)
export const patchBookConfirm = async ({
  patchBookConfirmForm,
  successConfirmPatch,
  failConfrimPatch,
  errorConfrimPatch,
}) => {
  const data = {
    checkShop: patchBookConfirmForm.checkShop,
    ireser: patchBookConfirmForm.ireser,
  };
  console.log("test", data);
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.patch(
      `${host}/reservation/confirm?checkShop=${data.checkShop}&ireser=${data.ireser}`,
      header,
    );
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("예약 확정 성공");
      successConfirmPatch(res.data);
      return res.data;
    } else {
      failConfrimPatch("예약 확정 오류");
    }
  } catch (error) {
    console.log("서버 오류");
    errorConfrimPatch(error);
  }
};

// 관리자 예약 관리 페이지 : 고깃집 예약 거부 (PATCH)
export const patchRejectBook = async ({
  patchBookForm,
  successPatch,
  failPatch,
  errorPatch,
}) => {
  const data = {
    checkShop: patchBookForm.checkShop,
    ireser: patchBookForm.ireser,
  };
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.patch(`${host}/reservation`, data, {
      headers: header,
    });
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("예약 거부 성공");
      successPatch(res.data);
      return res.data;
    } else {
      failPatch("예약 거부 오류");
    }
  } catch (error) {
    console.log("서버 오류");
    errorPatch(error);
  }
};

// 관리자 예약 관리 페이지 : 정육점 픽업 확정 (PATCH)
export const patchPickUpConfirm = async ({
  patchPickUpConfirmForm,
  successPupConfirmPatch,
  failPupConfrimPatch,
  errorPupConfrimPatch,
}) => {
  const data = {
    checkShop: patchPickUpConfirmForm.checkShop,
    ireser: patchPickUpConfirmForm.ireser,
  };
  console.log("test", data);
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.patch(
      `${host}/reservation/confirm?checkShop=${data.checkShop}&ireser=${data.ireser}`,
      header,
    );
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("예약 확정 성공");
      successPupConfirmPatch(res.data);
      return res.data;
    } else {
      failPupConfrimPatch("예약 확정 오류");
    }
  } catch (error) {
    console.log("서버 오류");
    errorPupConfrimPatch(error);
  }
};
