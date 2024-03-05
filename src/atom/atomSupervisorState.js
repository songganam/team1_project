import { atom } from "recoil";
import { getCookie } from "../util/CookiesUtil";

const initState = {
  result: 0,
};

const loadMemberCookie = () => {
  const memberInfo = getCookie("member");
  return memberInfo;
};
export const atomSupervisorState = atom({
  key: "atomSupervisorState",
  default: loadMemberCookie() || initState,
});
