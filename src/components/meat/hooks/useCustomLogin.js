import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { loginPostAsync, logout } from "../../../redux/loginSlice";
import axios from "axios";

const useCustomLogin = () => {
  // 패스 이동하기
  const navigate = useNavigate();

  // RTK 상태값 업데이트
  const dispatch = useDispatch();

  // RTK 상태값 읽기
  const loginState = useSelector(state => state.loginSlice);
  // console.log(loginState);

  // 로그인 상태값 파악
  // const isLogin = () => {
  //   const token = getCookie("rt");
  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const decoded = jwtDecode(token);
  //     const currentTime = Date.now() / 1000;
  //     if (decoded.exp < currentTime) {
  //       // 토큰이 만료되었는지 확인
  //       doLogout();
  //       return false;
  //     }
  //     return true;
  //   } catch (error) {
  //     console.error(error);
  //     return false;
  //   }
  // };
  const isLogin = useCallback(() => {
    return loginState.result === 1; // 로그인 상태 확인
  }, [loginState]);
  // 로그인 기능
  const doLogin = async ({ loginParam, successFn, failFn, errorFn }) => {
    const action = await dispatch(
      loginPostAsync({ loginParam, successFn, failFn, errorFn }),
    );
    return action.payload;
  };

  // 로그아웃 기능
  const doLogout = useCallback(() => {
    // 로그아웃 API 호출
    axios
      .post("/api/user/signout")
      .then(response => {
        if (response.data.result === 0) {
          // 로그아웃 성공
          dispatch(logout());
        } else {
          // 로그아웃 실패
          console.log("로그아웃 실패");
        }
      })
      .catch(error => {
        console.log("로그아웃 에러", error);
      });
  }, [dispatch]);

  // 패스이동 기능
  const moveToPath = path => {
    // 패스로 이동 후에 replace:ture 를 적용시 뒤로 가기 화면
    // 이전 페이지 기록을 남기지 않는다.
    navigate({ pathname: path }, { replace: true });
  };

  // 로그인 페이동 기능
  const moveToLogin = () => {
    console.log("페이지 이동");
    return <Navigate replace to="/list" />;
  };

  return { loginState, isLogin, doLogin, doLogout, moveToPath, moveToLogin };
};

export default useCustomLogin;
