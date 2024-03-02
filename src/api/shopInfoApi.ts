import axios from "axios";
import authAxios from "../util/tokenUtil";
import { API_SERVER_HOST } from "./config";

const host = `${API_SERVER_HOST}/api`;

// 매장정보 가져오기
export const getShopInfo = async ({ ishop }: { ishop: number }) => {
  try {
    const header = { headers: { "Content-type": "application/json" } };
    const response = await authAxios.get(`${host}/owner/management`, header);
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

// 매장정보 수정하기
export const putShopInfo = async ({
  shopInfoData,
}: {
  shopInfoData: FormData;
}) => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const response = await authAxios.put(
      `${host}/owner/modify`,
      shopInfoData,
      header,
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
