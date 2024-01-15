import axios from "axios";

export const API_SERVER_HOST = "http://192.168.0.193:8082";
const reserHost = `${API_SERVER_HOST}/api/`;
export const MeatGo = async () => {
  try {
    const res = await axios.get("/json/meatmenu.json");
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
