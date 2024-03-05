import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUserInfo } from "../../api/MyApi";
import Fetching from "../common/Fetching";
import ResultModal from "../common/ResultModal";
import SelectedModal from "../common/SelectedModal";
import useCustomHook from "../meat/hooks/useCustomHook";
import useCustomLoginTS from "../meat/hooks/useCustomLoginTS";
import {
  BarStyle,
  HeaderStyle,
  JoinStyle,
  LoginProfile,
  LogoStyle,
  NavStyle,
} from "./styles/HeaderStyle";

// 프로필 정보 초기값
const initialProfile = {
  iuser: "",
  email: "",
  name: "",
  nickname: "",
  birth: "",
  gender: "",
  address: "",
  pic: "",
  tel: "",
};

const Header = () => {
  const {
    isModal,
    openModal,
    closeModal,
    moveToLogin,
    isSelectModal,
    openSelectModal,
    confirmSelectModal,
    cancelSelectModal,
  } = useCustomHook();
  const authState = useSelector(state => state.authSlice);
  const [myProfileData, setMyProfileData] = useState(initialProfile);
  const dispatch = useDispatch();
  const { isLogin, doLogout, isSupervisorLogin, isAdminLogin } =
    useCustomLoginTS();
  const [fetching, setFetching] = useState(false);
  // const [refreshHeader, setRefreshHeader] = useState(false);

  // const [refresh, setRefresh] = useState(false);

  // @RTK
  const refresh = useSelector(state => state.refresh);
  const memoRefresh = useMemo(() => refresh, [refresh]);
  // @RECOIL
  // const refresh = useRecoilValue(refreshSelector);
  if (refresh) {
    console.log("refresh", memoRefresh);
    console.log("", authState);
    console.log("", authState.nickname);
  }
  const navigate = useNavigate();

  // 유저 정보 불러오기 (GET)
  useEffect(() => {
    const param = {};
    getUserInfo({ param, successFn, failFn, errorFn });
  }, [refresh]);

  const successFn = result => {
    setMyProfileData(result);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  const handleClick = () => {
    openSelectModal(
      "로그아웃",
      "로그아웃을 하시겠습니까?",
      () => {
        setFetching(true);
        doLogout();
        setFetching(false);
        confirmSelectModal(
          openModal("로그아웃 완료", "로그아웃이 완료되었습니다.", () => {
            closeModal(), navigate("/"), window.location.reload();
          }),
        );
      },
      cancelSelectModal,
    );
  };
  console.log("super status", isSupervisorLogin);

  return (
    <HeaderStyle>
      {fetching ? <Fetching /> : null}
      {isModal.isOpen && (
        <ResultModal
          title={isModal.title}
          content={isModal.content}
          callFn={isModal.callFn}
        />
      )}
      {isSelectModal.isOpen && (
        <SelectedModal
          title={isSelectModal.title}
          content={isSelectModal.content}
          confirmFn={isSelectModal.confirmFn}
          cancelFn={isSelectModal.cancelFn}
        />
      )}
      <LogoStyle>
        <Link to="/main">
          <img src="/assets/images/logo_1.svg" alt="logo" />
        </Link>
      </LogoStyle>
      <BarStyle>
        {isLogin || isAdminLogin || isSupervisorLogin ? (
          <JoinStyle>
            <LoginProfile>
              <span>
                <p>{myProfileData?.nickname}</p> 님, 고기로 방문을 환영합니다.
              </span>
            </LoginProfile>
            <div onClick={handleClick} style={{ cursor: "pointer" }}>
              로그아웃
            </div>
          </JoinStyle>
        ) : (
          <JoinStyle>
            <Link to="/login">로그인</Link>
            <Link to="/join">회원가입</Link>
          </JoinStyle>
        )}
        <NavStyle>
          <Link to="/meat">고깃집찾기</Link>
          <Link to="/butcher">정육점찾기</Link>
          {/* <Link to="/sale">마감세일</Link> */}
          <Link to="/community">고기잡담</Link>
          {isLogin ? <Link to="/my">마이페이지</Link> : null}

          {isAdminLogin ? <Link to="/admin">가게관리</Link> : null}

          {isSupervisorLogin ? <Link to="/svisor">고기로관리</Link> : null}
        </NavStyle>
      </BarStyle>
    </HeaderStyle>
  );
};

export default Header;
