import axios from "axios";

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
