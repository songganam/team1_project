import { Suspense, lazy } from "react";
import { Navigate } from "react-router";
import Loading from "../components/loading/Loading";

// 총 관리자 페이지
const LazySvShopPage = lazy(() =>
  import("../pages/supervisor/SupervisorShopPage"),
);
const LazySvUserPage = lazy(() =>
  import("../pages/supervisor/SupervisorUserPage"),
);
const LazySvReportPage = lazy(() =>
  import("../pages/supervisor/SupervisorReportPage"),
);
const LazySvNoticePage = lazy(() =>
  import("../pages/supervisor/SupervisorNoticePage"),
);

const supervisorRouter = () => {
  return [
    { path: "", element: <Navigate to="shop" /> },
    {
      path: "shop",
      element: (
        <Suspense fallback={<Loading />}>
          <LazySvShopPage />
        </Suspense>
      ),
    },
    {
      path: "user",
      element: (
        <Suspense fallback={<Loading />}>
          <LazySvUserPage />
        </Suspense>
      ),
    },
    {
      path: "report",
      element: (
        <Suspense fallback={<Loading />}>
          <LazySvReportPage />
        </Suspense>
      ),
    },
    {
      path: "notice",
      element: (
        <Suspense fallback={<Loading />}>
          <LazySvNoticePage />
        </Suspense>
      ),
    },
  ];
};

export default supervisorRouter;
