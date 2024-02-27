import axios from "axios";
import authAxios from "../util/tokenUtil";

export const API_SERVER_HOST = "";
const userHost = `${API_SERVER_HOST}/api/admin`;

export const getUser = async ({ row }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.get(`${userHost}/black`,header);
    // const status = res.status.toString();
    return res.data;
  } catch (error) {
    console.log("error");
  }
};
