import { Suspense, lazy } from "react";
import { Navigate } from "react-router";
import Loading from "../components/loading/Loading";

// 커뮤니티 페이지
const LazyListPage = lazy(() => import("../pages/community/ListPage"));
const LazyAddPage = lazy(() => import("../pages/community/AddPage"));
const LazyModifyPage = lazy(() => import("../pages/community/ModifyPage"));
const LazyReadPage = lazy(() => import("../pages/community/ReadPage"));

const communityRouter = () => {
  return [
    { path: "", element: <Navigate to="list" /> },
    {
      path: "list",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyListPage />
        </Suspense>
      ),
    },
    {
      path: "add",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyAddPage />
        </Suspense>
      ),
    },
    {
      path: "modify/:iboard",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyModifyPage />
        </Suspense>
      ),
    },
    {
      path: "read/:iboard",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyReadPage />
        </Suspense>
      ),
    },
  ];
};

export default communityRouter;
