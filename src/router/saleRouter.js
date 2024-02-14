import { Suspense, lazy } from "react";
import { Navigate } from "react-router";
import Loading from "../components/loading/Loading";

// 세일 페이지
const LazySlistPage = lazy(() => import("../pages/sale/SlistPage"));
const LazySreadPage = lazy(() => import("../pages/sale/SreadPage"));

const saleRouter = () => {
  return [
    { path: "", element: <Navigate to="list" /> },
    {
      path: "list",
      element: (
        <Suspense fallback={<Loading />}>
          <LazySlistPage />
        </Suspense>
      ),
    },
    {
      path: "read",
      element: (
        <Suspense fallback={<Loading />}>
          <LazySreadPage />
        </Suspense>
      ),
    },
  ];
};

export default saleRouter;
