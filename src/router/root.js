import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/loading/Loading";
import joinRouter from "./joinRouter";
import meatRouter from "./meatRouter";
import butcherRouter from "./butcherRouter";
import saleRouter from "./saleRouter";
import communityRouter from "./communityRouter";
import myRouter from "./myRouter";

// 어바웃 페이지
const LazyAboutPage = lazy(() => import("../pages/about/AboutPage"));

// 회원가입, 로그인 페이지
const LazyLoginPage = lazy(() => import("../pages/login/LoginPage"));
const LazyJoinPage = lazy(() => import("../pages/join/JoinPage"));

// 고깃집 페이지
const LazyGogiPage = lazy(() => import("../pages/meat/GogiPage"));

// 정육점 페이지
const LazyMartPage = lazy(() => import("../pages/butcher/MartPage"));

// 세일 페이지
const LazySalePage = lazy(() => import("../pages/sale/SalePage"));

// 커뮤니티 페이지
const LazyCommunityPage = lazy(() =>
  import("../pages/community/CommunityPage"),
);

// 마이페이지
const LazyMyPage = lazy(() => import("../pages/my/MyPage"));

// 오류 페이지
const LazyNotFoundPage = lazy(() => import("../pages/notfound/NotFound"));

// 테스트용 로그인 페이지
const LazyGaraLogin = lazy(() => import("../redux/GaraLogin"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyAboutPage />
      </Suspense>
    ),
  },
  {
    path: "/main",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyAboutPage />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyLoginPage />
      </Suspense>
    ),
  },
  {
    path: "/join/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyJoinPage />
      </Suspense>
    ),
    children: joinRouter(),
  },
  {
    path: "/meat/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyGogiPage />
      </Suspense>
    ),
    children: meatRouter(),
  },
  {
    path: "/butcher/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyMartPage />
      </Suspense>
    ),
    children: butcherRouter(),
  },
  {
    path: "/sale/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazySalePage />
      </Suspense>
    ),
    children: saleRouter(),
  },
  {
    path: "/community/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyCommunityPage />
      </Suspense>
    ),
    children: communityRouter(),
  },
  {
    path: "/my/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyMyPage />
      </Suspense>
    ),
    children: myRouter(),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyNotFoundPage />
      </Suspense>
    ),
  },
  {
    path: "test",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyGaraLogin />
      </Suspense>
    ),
  },
]);

export default router;
