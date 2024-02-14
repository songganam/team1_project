import { Suspense, lazy } from "react";
import { Navigate } from "react-router";
import Loading from "../components/loading/Loading";

// 회원가입 페이지
const LazyJoinAddPage = lazy(() => import("../pages/join/JaddPage"));

const joinRouter = () => {
  return [
    { path: "", element: <Navigate to="add" /> },
    {
      path: "add",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyJoinAddPage />
        </Suspense>
      ),
    },
  ];
};

export default joinRouter;
