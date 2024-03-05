// import axios from "axios";

import axios from "axios";
import { SigninForm } from "../pages/sign/TSJoin";
import authAxios from "../util/tokenUtil";

// // proxy를 가져온다.
export const API_SERVER_HOST = "";
const signHost = `${API_SERVER_HOST}/api/user`;
const adminHost = `${API_SERVER_HOST}/api/owner`;
const supervisorHost = `${API_SERVER_HOST}/api/admin`;

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
    throw error;
  }
};

export const postSignUpTS = async ({
  signUpData,
}: {
  signUpData: FormData;
}) => {
  console.log("plz", signUpData);
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const response = await axios.post(
      `${API_SERVER_HOST}/api/owner/signup`,
      signUpData,
      header,
    );
    return response.data;
  } catch (error) {
    console.log("오류임");
    throw error;
  }
};

// export const postSvisorSignUpTs = async () => {};

export const postSvisorSignUpTs = async ({
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
    const res = await axios.post(`${supervisorHost}/signin`, data, header);
    if (res && res.status < 400) {
      console.log(res.data);
      return res.data;
    } else {
      console.log("");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
