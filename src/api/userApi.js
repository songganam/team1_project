import authAxios from "../util/tokenUtil";
import { API_SERVER_HOST } from "./config";

export const getUser = async ({ successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const response = await authAxios.get(
      `${API_SERVER_HOST}/api/admin/black?page=1`,
      header,
    );

    const status = response.status.toString();
    // return response.data;
    if (status.charAt(0) === "2") {
      console.log("유저 관리 호출 성공");
      successFn(response.data);
    } else {
      failFn("유저 관리 호출 오류");
    }
  } catch (error) {
    errorFn(error);
    console.log("유저 관리 서버 오류");
  }
};

export const patchUser = async ({
  result,
  successLockFn,
  failLockFn,
  errorLockFn,
}) => {
  console.log(result);
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.patch(
      `${API_SERVER_HOST}/api/admin?iuser=${result}`,
      header,
    );
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("잠금!");
      successLockFn(res.data);
    } else {
      failLockFn("실패");
    }
  } catch (error) {
    errorLockFn(error);
    console.log("서버 오류");
  }
};
