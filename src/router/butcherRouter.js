import { Suspense, lazy } from "react";
import { Navigate } from "react-router";
import Loading from "../components/loading/Loading";

// 정육점 페이지
const LazyMartBook = lazy(() => import("../pages/butcher/ButcherReviewPage"));
const LazyMlistPage = lazy(() => import("../pages/butcher/ButcherListPage"));
const LazyMreadPage = lazy(() => import("../pages/butcher/ButcherDetailPage"));
const LazyMaddPage = lazy(() => import("../pages/butcher/ButcherPickupPage"));
const LazyMmodifyPage = lazy(() =>
  import("../pages/butcher/ButcherModifyPage"),
);

const butcherRouter = () => {
  return [
    { path: "", element: <Navigate to="list" /> },
    {
      path: "review/:ireser",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyMartBook />
        </Suspense>
      ),
    },
    {
      path: "list",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyMlistPage />
        </Suspense>
      ),
    },
    {
      path: "detail/:ibutcher",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyMreadPage />
        </Suspense>
      ),
    },
    {
      path: "pickup/:ibutcher",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyMaddPage />
        </Suspense>
      ),
    },
    {
      path: "modify/:ibutcher",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyMmodifyPage />
        </Suspense>
      ),
    },
  ];
};

export default butcherRouter;
