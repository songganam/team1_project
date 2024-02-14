import { Suspense, lazy } from "react";
import { Navigate } from "react-router";
import Loading from "../components/loading/Loading";

// 마이 페이지
const LazyMyModifyPage = lazy(() => import("../pages/my/MyModifyPage"));
const LazyMyBookPage = lazy(() => import("../pages/my/MyBookPage"));
const LazyMyListPage = lazy(() => import("../pages/my/MyListPage"));
const LazyMyReviewPage = lazy(() => import("../pages/my/MyReviewPage"));

const myRouter = () => {
  return [
    { path: "", element: <Navigate to="book" /> },
    {
      path: "list",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyMyListPage />
        </Suspense>
      ),
    },
    {
      path: "book",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyMyBookPage />
        </Suspense>
      ),
    },
    {
      path: "review",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyMyReviewPage />
        </Suspense>
      ),
    },
    {
      path: "modify",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyMyModifyPage />
        </Suspense>
      ),
    },
  ];
};

export default myRouter;
