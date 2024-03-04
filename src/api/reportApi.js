import authAxios from "../util/tokenUtil";
import { API_SERVER_HOST } from "./config";

// 신고글 가져오기
export const getReport = async ({ params, successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const response = await authAxios.get(
      `${API_SERVER_HOST}/api/admin/report`,
      { params: params },
      header,
    );
    const status = response.status.toString();

    if (status.charAt(0) === "2") {
      console.log("신고 관리 호출 성공");
      successFn(response.data);
    } else {
      failFn("신고 관리 호출 오류");
    }
  } catch (error) {
    errorFn(error);
    console.log("신고 관리 서버 오류");
  }
};

// 신고글 숨김
export const patchReport = async ({
  hideForm,
  successHideFn,
  failHideFn,
  errorHideFn,
}) => {
  console.log("hideform", hideForm);
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.patch(
      `${API_SERVER_HOST}/api/admin/hide`,
      hideForm,
      header,
    );
    const status = res.status.toString();

    if (status.charAt(0) === "2") {
      console.log("신고글 숨김");
      successHideFn(res.reportData);
    } else {
      failHideFn("숨김 오류");
    }
  } catch (error) {
    errorHideFn(error);
    console.log("서버 오류");
  }
};

// 신고 취소
export const patchReportCancel = async ({
  cancelForm,
  successCancelFn,
  failCancelFn,
  errorCancelFn,
}) => {
  console.log("cc form", cancelForm);
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.patch(
      `${API_SERVER_HOST}/api/admin/report`,
      cancelForm,
      header,
    );
    const status = res.status.toString();

    if (status.charAt(0) === "2") {
      console.log("신고 취소");
      successCancelFn(res.reportData);
    } else {
      failCancelFn("취소 오류");
    }
  } catch (error) {
    errorCancelFn(error);
    console.log("서버 오류");
  }
};
