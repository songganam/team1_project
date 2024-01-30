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
import { useState } from "react";
import Fetching from "../common/Fetching";

const Header = () => {
  const authState = useSelector(state => state.authSlice);
  const dispatch = useDispatch();
  const { isLogin, moveToPath, doLogout } = useCustomLogin();
  const [fetching, setFetching] = useState(false);
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
  const handleClick = () => {
    openSelectModal(
      "로그아웃",
      "로그아웃을 하시겠습니까?",
      async () => {
        setFetching(true);
        await doLogout();
        setFetching(false);
        cancelSelectModal();
      },
      openModal("로그아웃 완료", "로그아웃이 완료되었습니다.", closeModal),
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
                <p>{authState.nickname}</p> 님, 고기로 방문을 환영합니다.
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
