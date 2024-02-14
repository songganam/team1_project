import { Suspense, lazy } from "react";
import { Navigate } from "react-router";
import Loading from "../components/loading/Loading";

// 가게 관리자 페이지
const LazyAdInfoPage = lazy(() => import("../pages/admin/AdminInfoPage"));
const LazyAdMenuPage = lazy(() => import("../pages/admin/AdminMenuPage"));
const LazyAdBookPage = lazy(() => import("../pages/admin/AdminBookPage"));
const LazyAdReviewPage = lazy(() => import("../pages/admin/AdminReviewPage"));
const LazyAdDocPage = lazy(() => import("../pages/admin/AdminDocPage"));
const LazyAdSignupPage = lazy(() => import("../pages/admin/AdminSignUpPage"));

const adminRouter = () => {
  return [
    { path: "", element: <Navigate to="info" /> },
    {
      path: "info",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyAdInfoPage />
        </Suspense>
      ),
    },
    {
      path: "menu",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyAdMenuPage />
        </Suspense>
      ),
    },
    {
      path: "book",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyAdBookPage />
        </Suspense>
      ),
    },
    {
      path: "review",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyAdReviewPage />
        </Suspense>
      ),
    },
    {
      path: "doc",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyAdDocPage />
        </Suspense>
      ),
    },
    {
      path: "signup",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyAdSignupPage />
        </Suspense>
      ),
    },
  ];
};

export default adminRouter;
