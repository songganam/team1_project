import { atom } from "recoil";

export const userRoleState = atom({
  key: "userRoleState",
  default: 0, // 기본 사용자 권한 설정
});
