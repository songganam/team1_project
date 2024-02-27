import axios from "axios";
import { ListParam, ReserForm } from "../pages/meat/Meat";
import authAxios from "../util/tokenUtil";
import { BNumForm } from "../pages/sign/TSJoin";

export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api`;

// @AREA 타입스크립트 API 실험실
// Auth test
// @COMMENT react-QUERY

//  @AREA GET
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

// @AREA GET List
export const getGListTS = async ({ params }: { params: ListParam }) => {
  console.log("파라미터", params);
  try {
    const res = await axios.get(`${host}/shop`, { params: params });
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
//  @AREA POST Review
export const postReviewTS = async ({
  reviewData,
}: {
  reviewData: FormData;
}) => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const res = await authAxios.post(`${host}/review`, reviewData, header);
    // const status = res.status.toString();
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// @AREA POST Reservation
export const postReserTS = async ({ reserData }: { reserData: ReserForm }) => {
  // console.log("레저데이따", reserData);
  try {
    //
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.post(`${host}/reservation`, reserData, header);
    // const status = res.status.toString();
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
    //
  }
};

// @AREA Post BusinessNum

export const postBusiNumTS = async ({ dataForm }: { dataForm: BNumForm }) => {
  console.log("데이터폼", dataForm);
  const header = {
    headers: {
      "Content-Type": "application/json",
      // Accept: "application/json"
    },
  };
  try {
    const response = await axios.post(`${host}/status`, dataForm);
    return response.data;
    // return ;
  } catch (error) {
    console.log("");
    throw error;
  }
};
