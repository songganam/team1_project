// 계정 관리 API
// 계정 관리 API
import axios from "axios";

export const API_SERVER_HOST = "";
const blackUser = `${API_SERVER_HOST}/api/admin`;

export const getReport = async ({ successFn, failFn, errorFn }) => {
  try {
    const res = await axios.get(`${blackUser}/black`);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("잠금");

      successFn(res.data);
    } else {
      failFn("해제");
    }
  } catch (error) {
    errorFn(error);
  }
};
