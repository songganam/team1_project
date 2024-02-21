import axios from "axios";
import { API_SERVER_HOST } from "./config";

const host = `${API_SERVER_HOST}/api/owner/modify`;

interface OwnerMenu {
  pics: string;
  dto: {
    imenu: number;
    ishop: number;
  };
}

export const postMenu = async (
  menuInfo: OwnerMenu,
): Promise<OwnerMenu | undefined> => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const response = await axios.put(`${host}`, menuInfo, header);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
