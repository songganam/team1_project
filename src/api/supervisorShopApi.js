import authAxios from "../util/tokenUtil";

export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api`;

// 총 관리자 매장 관리 페이지 : 신규 입점 매장 목록 가져오기 (GET)
export const getSvisorNewShop = async ({
  param,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.get(`${API_SERVER_HOST}/api/admin/shop`, {
      params: param,
      headers: header,
    });
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("신규 매장 목록 호출 성공");
      successFn(res.data);
    } else {
      failFn("신규 매장 목록 호출 오류");
    }
    console.log(res.data);
  } catch (error) {
    errorFn(error);
    console.log("서버 오류");
  }
};

// 총 관리자 매장 관리 페이지 : 기존 입점 매장 목록 가져오기 (GET)
export const getSvisorShop = async ({ param, successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.get(`${API_SERVER_HOST}/api/admin/shop`, {
      params: param,
      headers: header,
    });
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("기존 매장 목록 호출 성공");
      successFn(res.data);
    } else {
      failFn("기존 매장 목록 호출 오류");
    }
    console.log(res.data);
  } catch (error) {
    errorFn(error);
    console.log("서버 오류");
  }
};

// 총 관리자 매장 관리 페이지 : 매장 검색 (GET)
export const getSvisorSearchShop = async ({
  getSvisorSearchShopForm,
  successSearchFn,
  failSearchFn,
  errorSearchFn,
}) => {
  const data = {
    shopName: getSvisorSearchShopForm.shopName,
  };
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.get(
      `${API_SERVER_HOST}/api/admin/shop?search=${data.shopName}`,
      data,
      {
        headers: header,
      },
    );
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("기존 매장 목록 호출 성공");
      successSearchFn(res.data);
    } else {
      failSearchFn("기존 매장 목록 호출 오류");
    }
    console.log(res.data);
  } catch (error) {
    errorSearchFn(error);
    console.log("서버 오류");
  }
};

// 가게 승인 여부 변경 (PATCH) : 승인
export const patchShopConfirm = async ({
  patchData,
  successConfirmPatch,
  failConfirmPatch,
  errorConfirmPatch,
}) => {
  console.log("axios", patchData);
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.patch(
      `${API_SERVER_HOST}/api/admin/confirm`,
      patchData,
      header,
    );

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("가게 승인 성공");
      successConfirmPatch(res.data);
    } else {
      failConfirmPatch("가게 승인 오류");
    }
    console.log(res.data);
  } catch (error) {
    errorConfirmPatch(error);
    console.log("서버 오류");
  }
};

// 가게 승인 여부 변경 (PATCH) : 거부
export const patchShopReject = async ({
  patchRejectData,
  successRejectPatch,
  failRejectPatch,
  errorRejectPatch,
}) => {
  console.log("axios", patchRejectData);
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.patch(
      `${API_SERVER_HOST}/api/admin/confirm`,
      patchRejectData,
      header,
    );

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("가게 거부 성공");
      successRejectPatch(res.data);
    } else {
      failRejectPatch("가게 거부 오류");
    }
    console.log(res.data);
  } catch (error) {
    errorRejectPatch(error);
    console.log("서버 오류");
  }
};

// 가게 승인 여부 변경 (PATCH) : 퇴출
export const patchShopDelete = async ({
  patchDeleteData,
  successDeletePatch,
  failDeletePatch,
  errorDeletePatch,
}) => {
  console.log("axios", patchDeleteData);
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.patch(
      `${API_SERVER_HOST}/api/admin/confirm`,
      patchDeleteData,
      header,
    );

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("가게 퇴출 성공");
      successDeletePatch(res.data);
    } else {
      failDeletePatch("가게 퇴출 오류");
    }
    console.log(res.data);
  } catch (error) {
    errorDeletePatch(error);
    console.log("서버 오류");
  }
};
