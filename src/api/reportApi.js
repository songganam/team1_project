// 계정 관리 API
// 계정 관리 API
import axios from "axios";
import { getGInfo } from "./meatApi";

// 서버에 들어가는 주소로 들어가면 
export const API_SERVER_HOST = "";

// ${API_SERVER_HOST} = localhost:3000
const host = `${API_SERVER_HOST}/api/admin`;

export const getReport = async ({ successFn, failFn, errorFn }) => {
try {
  const res = await svisorAxios.get(`${}`)
  return res.data
} catch (error) {
  console.log(error)
}
}


const{data} = useQuery({
  queryKey: ["storeInfo"],
  queryFn: () => getGInfoTS()
})