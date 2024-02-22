import axios from "axios";
import { API_SERVER_HOST } from "./config";

const host = `${API_SERVER_HOST}/api/owner/modify`;

export const postMenu = async ({ menuInfo }: { menuInfo: FormData }) => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const response = await axios.post(`${host}`, menuInfo, header);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
