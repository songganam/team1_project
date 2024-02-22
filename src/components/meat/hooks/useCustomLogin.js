import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { loginPost } from "../../../api/loginApi";
import { atomSignState } from "../../../atom/atomSignState";
import { removeCookie, setCookie } from "../../../util/CookiesUtil";

const useCustomLogin = () => {
  // @RECOIL
  const [loginState, setLoginState] = useRecoilState(atomSignState);
  const resetSignState = useResetRecoilState(atomSignState);

  const navigate = useNavigate();
  // @RTK
  // const authState = useSelector(state => state.authSlice);
  // const dispatch = useDispatch();
  const API_SERVER_HOST = "";
  const host = `${API_SERVER_HOST}/api/user`;
  // 로그인 상태값 파악
  // @RECOIL
  const isLogin = loginState.result == 1 ? true : false;
  // @RTK
  // const isLogin = authState.result == 1 ? true : false;
  // 로그인 기능
  // @RTK
  // const doLogin = async ({ authParam, successFn, failFn, errorFn }) => {
  // @RECOIL
  const doLogin = async ({ authParam }) => {
    // 로그인 어느화면에서 실행이 될 소지가 높아요.
    // 로그인 상태 업데이트
    // Recoil
    // @RECOIL
    const result = await loginPost({ authParam });
    // @RTK
    // const action = await dispatch(
    //   loginPostAsync({ authParam, successFn, failFn, errorFn }),
    // );
    // 결과값
    // return action.payload;
    // @RECOIL
    saveAsCookie(result);
    return result;
  };
  // @RECOIL
  const saveAsCookie = result => {
    setLoginState(result);
    setCookie("member", JSON.stringify(result), 1);
  };

  // 로그아웃 기능
  const doLogout = async () => {
    // @RECOIL
    resetSignState();
    // @RTK
    // dispatch(logout());
    removeCookie("member");
    try {
      const header = { headers: { "Content-Type": "application/json" } };
      const res = await axios.post(`${host}/signout`, header);
      if (res.status === 200) {
        console.log("rt cookie 삭제"); // successFn(res.data);
        console.log(res.data);
        // moveToPath("/");
      } else {
        // failFn("");
      }
    } catch (error) {
      // errorFn("");
    }
  };

  // 패스이동 기능
  const moveToPath = path => {
    // 패스로 이동 후에 replace:ture 를 적용시 뒤로 가기 화면
    // 이전 페이지 기록을 남기지 않는다.
    navigate({ pathname: path }, { replace: true });
  };

  // 로그인 페이지 이동 기능
  const moveToLogin = () => {
    // return <Navigate replace to="/login" />;
    navigate("/login");
  };
  const loginComplete = () => {
    navigate("/");
  };

  return {
    // authState,
    loginState,
    isLogin,
    doLogin,
    doLogout,
    moveToPath,
    moveToLogin,
    loginComplete,
  };
};

export default useCustomLogin;
