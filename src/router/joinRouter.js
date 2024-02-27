import { Suspense, lazy } from "react";
import { Navigate } from "react-router";
import Loading from "../components/loading/Loading";

// 회원가입 페이지
const LazyUserSignUpPage = lazy(() =>
  import("../pages/sign/up/UserSignUpPage"),
);

const joinRouter = () => {
  return [
    { path: "", element: <Navigate to="add" /> },
    {
      path: "add",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyUserSignUpPage />
        </Suspense>
      ),
    },
  ];
};

export default joinRouter;
