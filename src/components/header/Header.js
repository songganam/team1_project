import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useCustomLogin from "../meat/hooks/useCustomLogin";
import {
  BarStyle,
  HeaderStyle,
  JoinStyle,
  LoginProfile,
  LogoStyle,
  NavStyle,
} from "./styles/HeaderStyle";
import useCustomHook from "../meat/hooks/useCustomHook";
import ResultModal from "../common/ResultModal";
import SelectedModal from "../common/SelectedModal";
import { useEffect, useState } from "react";
import Fetching from "../common/Fetching";
import { getUserInfo } from "../../api/MyApi";

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
  const { isLogin, moveToPath, doLogout } = useCustomLogin();
  const [fetching, setFetching] = useState(false);
  // const [refresh, setRefresh] = useState(false);

  const refresh = useSelector(state => state.refresh);
  console.log("refresh", refresh);

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
            closeModal();
          }),
        );
      },
      cancelSelectModal,
    );
  };

  console.log(authState);
  console.log(authState.nickname);
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
        {isLogin ? (
          <JoinStyle>
            <LoginProfile>
              <span>
                <p>{myProfileData.nickname}</p> 님, 고기로 방문을 환영합니다.
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
        </NavStyle>
      </BarStyle>
    </HeaderStyle>
  );
};

export default Header;
