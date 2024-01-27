import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginPostAsync, logout } from "../../../redux/authSlice";

const useCustomLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector(state => state.authSlice);

  // 로그인 상태값 파악
  const isLogin = authState.result == 1 ? true : false;

  // 로그인 기능
  const doLogin = async ({ authParam, successFn, failFn, errorFn }) => {
    // 로그인 어느화면에서 실행이 될 소지가 높아요.
    // 로그인 상태 업데이트
    const action = await dispatch(
      loginPostAsync({ authParam, successFn, failFn, errorFn }),
    );
    // 결과값
    return action.payload;
  };

  // 로그아웃 기능
  const doLogout = () => {
    dispatch(logout());
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
    navigate(-1);
  };

  return {
    authState,
    isLogin,
    doLogin,
    doLogout,
    moveToPath,
    moveToLogin,
    loginComplete,
  };
};

export default useCustomLogin;
