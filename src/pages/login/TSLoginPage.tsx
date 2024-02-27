import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResultModal from "../../components/common/ResultModal";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import useCustomLogin from "../../components/meat/hooks/useCustomLogin";
import useCustomLoginTS from "../../components/meat/hooks/useCustomLoginTS";
import TitleHeader from "../../components/titleheader/TitleHeader";
import Layout from "../../layouts/Layout";
import { SigninForm } from "../join/TSJoin";
import { CateSelectWrap } from "../join/styles/AdminSignUpStyles";
import "../login/LoginPage.css";
import { SelectedCate } from "../meat/styles/TS_Style";
import {
  LoginCheckBox,
  LoginPageBts,
  LoginPageID,
  LoginPageInfo,
  LoginPageMain,
  LoginPagePW,
  LoginPageWrap,
} from "./styles/LoginPageStyle";

const initState: SigninForm = {
  email: "",
  upw: "",
};
const LoginPage = () => {
  const [authParam, setAuthParam] = useState(initState);
  const { doLogin, doAdminLogin, moveToPath } = useCustomLogin();
  const { doLoginTS, doAdminLoginTS } = useCustomLoginTS();
  const { isModal, openModal, closeModal } = useCustomHook();
  const navigate = useNavigate();
  const [loginFlag, setLoginFlag] = useState(0);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setAuthParam(prevValue => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
    console.log("reredering");
  }, []);

  const handleClickCate = useCallback(
    (index: number) => {
      setLoginFlag(index);
    },
    [setLoginFlag],
  );

  const UserMutation = useMutation({
    mutationFn: (authParam: SigninForm) => doLoginTS({ authParam }),
    onSuccess: result => {
      console.log("성공", result);
      moveToPath("/");
    },
    onError: (error: AxiosError) => {
      console.log("error log", error.response);
      if (error.response) {
        if (error.response.status === 404) {
          openModal(
            "로그인 실패",
            "이메일 또는 비밀번호를 확인해주세요.",
            closeModal,
          );
        } else if (error.response.status === 400) {
          openModal(
            "로그인 실패",
            "이메일 또는 비밀번호를 확인해주세요",
            closeModal,
          );
        }
      }
    },
  });
  const AdminMutation = useMutation({
    mutationFn: (authParam: SigninForm) => doAdminLoginTS({ authParam }),
    onSuccess: result => {
      console.log("성공", result);
      moveToPath("/");
    },
    onError: (error: AxiosError) => {
      console.log("error log", error.response);
      if (error.response) {
        if (error.response.status === 404) {
          openModal(
            "로그인 실패",
            "이메일 또는 비밀번호를 확인해주세요.",
            closeModal,
          );
        } else if (error.response.status === 400) {
          openModal(
            "로그인 실패",
            "이메일 또는 비밀번호를 확인해주세요",
            closeModal,
          );
        }
      }
    },
  });
  // QueryClient;

  const handleClick = useCallback(async () => {
    if (authParam.email === "" || authParam.upw === "") {
      console.log("id", authParam.email);
      console.log("pw", authParam.upw);
      openModal(
        "로그인 실패",
        "이메일 또는 비밀번호를 입력하지 않으셨습니다.",
        closeModal,
      );
      return;
    }
    try {
      if (loginFlag === 1) {
        AdminMutation.mutate(authParam);
      } else {
        UserMutation.mutate(authParam);
      }
      // loginComplete();
    } catch (error) {
      console.log(error);
    }
  }, [
    authParam.email,
    authParam.upw,
    loginFlag,
    AdminMutation,
    UserMutation,
    openModal,
  ]);
  // @COMMENT BAKCUP
  // const handleClick = async () => {
  //   if (authParam.email === "" || authParam.upw === "") {
  //     console.log("id", authParam.email);
  //     console.log("pw", authParam.upw);
  //     openModal(
  //       "로그인 실패",
  //       "이메일 또는 비밀번호를 입력하지 않으셨습니다.",
  //       closeModal,
  //     );
  //     return;
  //   }
  //   try {
  //     if (loginFlag === 1) {
  //       AdminMutation.mutate(authParam);
  //     } else {
  //       UserMutation.mutate(authParam);
  //     }
  //     // loginComplete();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // 회원가입 페이지 이동
  const handleJaddClick = () => {
    if (loginFlag === 0) {
      navigate("/join/add"); // '/JaddPage'로 이동
    } else {
      // Admin Page
      navigate("/admin/signup");
    }
  };

  // 이메일 자동 입력 기능
  const [email, setEmail] = useState("");
  const [rememberEmail, setRememberEmail] = useState(false);

  const handleCheckboxChange = () => {
    setRememberEmail(!rememberEmail);
  };

  const handleLogin = () => {
    // 여기에서 로그인 로직을 추가할 수 있어.
    // 로그인이 성공하면, rememberEmail 상태에 따라 이메일을 저장하거나 삭제할 수 있어.
    if (rememberEmail) {
      // 이메일 저장 로직 추가 (브라우저의 로컬 스토리지 또는 쿠키를 사용할 수 있음)
      localStorage.setItem("rememberedEmail", rememberEmail ? email : "");
    } else {
      // 이메일 삭제 로직 추가
      localStorage.removeItem("rememberedEmail");
    }
    // 로그인이 성공하면 다음 페이지로 이동하도록 설정할 수 있어.
  };

  // 페이지 로딩 시 저장된 이메일이 있는지 확인하고 있다면 불러옴
  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    if (storedEmail) {
      setEmail(storedEmail);
      setRememberEmail(true);
    }
  }, []);

  return (
    <Layout>
      {isModal.isOpen && (
        <ResultModal
          title={isModal.title}
          content={isModal.content}
          callFn={isModal.callFn}
        />
      )}
      <LoginPageWrap>
        <TitleHeader
          timg={process.env.PUBLIC_URL + `/assets/images/login_header.png`}
          tname="로그인"
          tcontent="우울할 땐 고기 앞으로"
        ></TitleHeader>
        <LoginPageMain>
          <LoginPageInfo>
            <CateSelectWrap>
              <SelectedCate
                selected={loginFlag === 0}
                onClick={() => handleClickCate(0)}
              >
                일반 이용자
              </SelectedCate>
              <SelectedCate
                selected={loginFlag === 1}
                onClick={() => handleClickCate(1)}
              >
                가게 사장님
              </SelectedCate>
            </CateSelectWrap>

            {/* 적는 란 */}
            <LoginPageID
              type="text"
              name="email"
              value={authParam.email}
              placeholder="이메일"
              onChange={e => handleChange(e)}
            />

            <LoginPagePW
              type="password"
              name="upw"
              value={authParam.upw}
              placeholder="비밀번호"
              onChange={e => handleChange(e)}
              maxLength={8}
              minLength={4}
            />
          </LoginPageInfo>
          <LoginCheckBox>
            <div>
              <label className="RememberEmail">
                <input
                  className="CheckBox"
                  type="checkbox"
                  checked={rememberEmail}
                  onChange={handleCheckboxChange}
                />
                이메일 기억하기
              </label>
            </div>
          </LoginCheckBox>
          <LoginPageBts>
            <button
              type="button"
              className="Loginbutton"
              onClick={() => {
                handleClick();
              }}
            >
              로그인
            </button>
            <button
              type="button"
              className="Joinbutton"
              onClick={() => {
                handleJaddClick();
              }}
            >
              회원가입
            </button>
          </LoginPageBts>
        </LoginPageMain>
      </LoginPageWrap>
    </Layout>
  );
};

export default LoginPage;
