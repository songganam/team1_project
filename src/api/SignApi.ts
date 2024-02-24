// import axios from "axios";

import axios from "axios";
import { SigninForm } from "../pages/join/TSJoin";

// // proxy를 가져온다.
export const API_SERVER_HOST = "";
const signHost = `${API_SERVER_HOST}/api/user`;
const adminHost = `${API_SERVER_HOST}/api/owner`;

export const loginPostTS = async ({ authParam }: { authParam: SigninForm }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const data = {
      email: authParam.email,
      upw: authParam.upw,
    };
    const res = await axios.post(`${signHost}/signin`, data, header);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const loginAdminPostTS = async ({
  authParam,
}: {
  authParam: SigninForm;
}) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const data = {
      email: authParam.email,
      upw: authParam.upw,
    };
    const res = await axios.post(`${adminHost}/signin`, data, header);
    if (res && res.status < 400) {
      console.log(res.data);
      return res.data;
    } else {
      console.log("");
    }
  } catch (error) {
    console.log(error);
  }
};
