import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  loginAdminPostTS,
  loginPostTS,
  postSvisorSignUpTs,
} from "../../../api/SignApi";
import { atomUserState } from "../../../atom/atomUserState";
import { atomAdminState } from "../../../atom/atomAdminState";
import { SigninForm } from "../../../pages/sign/TSJoin";
import { removeCookie, setCookie } from "../../../util/CookiesUtil";
import { atomSupervisorState } from "../../../atom/atomSupervisorState";

const useCustomLoginTS = () => {
  const [userState, setUserState] = useRecoilState(atomUserState);
  const [adminState, setAdminState] = useRecoilState(atomAdminState);
  const [supervisorState, setSupervisorState] =
    useRecoilState(atomSupervisorState);
  const resetSignState = useResetRecoilState(atomUserState);
  const resetAdminState = useResetRecoilState(atomAdminState);
  const resetSupervisorState = useResetRecoilState(atomSupervisorState);

  const navigate = useNavigate();
  const API_SERVER_HOST = "";
  const host = `${API_SERVER_HOST}/api/user`;

  const isLogin = userState.result === 1;
  const isSupervisorLogin = supervisorState.result === 1;
  const isAdminLogin = adminState.result === 1;
  // const isAdminLogin = adminState?.shopName?.length > 0;
  console.log("Test3", isAdminLogin);
  console.log("Test4", adminState.shopName);

  const doLoginTS = async ({ authParam }: { authParam: SigninForm }) => {
    const result = await loginPostTS({ authParam });
    saveAsUserCookie(result);
    return result;
  };

  const doAdminLoginTS = async ({ authParam }: { authParam: SigninForm }) => {
    const result = await loginAdminPostTS({ authParam });
    saveAsAdminCookie(result);
    console.log("test22", result);
    return result;
  };
  const doSupervisorLoginTS = async ({
    authParam,
  }: {
    authParam: SigninForm;
  }) => {
    const result = await postSvisorSignUpTs({ authParam });
    saveAsSupervisorCookie(result);
    return result;
  };

  const saveAsUserCookie = (result: any) => {
    setUserState(result);

    setCookie("member", JSON.stringify(result), 1);
  };

  const saveAsAdminCookie = (result: any) => {
    setAdminState(result);
    setCookie("member", JSON.stringify(result), 1);
  };

  const saveAsSupervisorCookie = (result: any) => {
    setSupervisorState(result);
    setCookie("member", JSON.stringify(result), 1);
  };

  const doLogout = async () => {
    resetSignState();
    resetAdminState();
    resetSupervisorState();
    removeCookie("member");
    // removeCookie("member");
    // removeCookie("member");
    try {
      const header = { headers: { "Content-Type": "application/json" } };
      const res = await axios.post(`${host}/signout`, header);
      if (res.status === 200) {
        console.log("rt cookie 삭제");
        console.log(res.data);
      } else {
        // Handle failure case
      }
    } catch (error) {
      // Handle error case
    }
  };

  const moveToPath = (path: string) => {
    navigate({ pathname: path }, { replace: true });
  };

  const moveToLogin = () => {
    navigate("/login");
  };

  const loginComplete = () => {
    navigate("/");
  };

  return {
    supervisorState,
    adminState,
    userState,
    doLoginTS,
    doAdminLoginTS,
    doSupervisorLoginTS,
    doLogout,
    moveToPath,
    moveToLogin,
    loginComplete,
    isLogin,
    isAdminLogin,
    isSupervisorLogin,
  };
};

export default useCustomLoginTS;
