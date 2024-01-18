import axios from "axios";

export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api`;

//! GET Gogi List Page
export const getGList = async ({ param, successFn, failFn, errorFn }) => {
  try {
    const res = await axios.get(`${host}/shop`, { params: param });
    const status = res.status.toString();
    const httpSt = status.charAt(0).toString();
    if (httpSt == 2) {
      console.log(res.data);
      successFn(res.data);
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export const MeatMenu = async () => {
  try {
    const res = await axios.get("/json/menu.json");
    const status = res.status.toString();
    const httpSt = status.charAt(0).toString();
    if (httpSt == 2) {
      return res.data;
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export const ReserPost = async () => {
  try {
    const res = await axios.post();
  } catch (error) {
    console.log(error);
  }
};
