import authAxios from "../util/tokenUtil";
import { API_SERVER_HOST } from "./config";

export const getUser = async () => {
  try {
    const response = await authAxios.get(`${API_SERVER_HOST}/api/admin/black`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
