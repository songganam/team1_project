import axios from "axios";
import { API_SERVER_HOST } from "./config";

const host = `${API_SERVER_HOST}/api/owner/modify`;

interface OwnerModify {
  pics: string[];
  dto: {
    imeat: number;
    name: string;
    location: string;
    open: string;
    tel: string;
    x: string;
    y: string;
    deposit: number;
  };
}

export const putShopInfo = async (
  shopInfo: OwnerModify,
): Promise<OwnerModify | undefined> => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const response = await axios.put(`${host}`, shopInfo, header);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
