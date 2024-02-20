import axios from "axios";
import authAxios from "../util/tokenUtil";

export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api`;

// @AREA 타입스크립트 API 실험실
// Auth test
// @COMMENT react-QUERY
export const getGInfoTS = async ({
  isLogin,
  ishop,
}: {
  ishop?: number | string;
  isLogin?: boolean;
}) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const axiosInstance = isLogin ? authAxios : axios;
    const res = await axiosInstance.get(`${host}/shop/${ishop}`, header);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("목록 호출 성공");
      // successFn(res.data);
      return res.data;
    } else {
      console.log("목록 호출 오류");
    }
  } catch (error) {
    console.log(error);
  }
};
