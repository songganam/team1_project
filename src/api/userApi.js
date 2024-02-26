import axios from "axios";

export const API_SERVER_HOST = "";
const userHost = `${API_SERVER_HOST}/api/admin`;

export const getUser = async ({ row }) => {
  try {
    const res = await axios.get(`${userHost}/black`);
    const status = res.status.toString();
    return res.data;
  } catch (error) {
    console.log("error");
  }
};
