import authAxios from "../util/tokenUtil";
import { API_SERVER_HOST } from "./config";

export const getDoc = async ({ successDocFn, failDocFn, errorDocFn }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const response = await authAxios.get(
      `${API_SERVER_HOST}/api/owner/dashboard`,
      header,
    );
    const status = response.status.toString();
    if (status.charAt(0) === "2") {
      console.log("대시보드 호출 성공");
      successDocFn(response.data);
    } else {
        failDocFn("대시보드 호출 오류");
    }
  } catch (error) {
    errorDocFn(error);
    console.log("서버 오류");
  }
};
