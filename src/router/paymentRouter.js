import { Suspense, lazy } from "react";
import { Navigate } from "react-router";
import Loading from "../components/loading/Loading";
import { CheckoutPage } from "../pages/payment/Checkout";
import { SuccessPage } from "../pages/payment/Success";
import { FailPage } from "../pages/payment/Fail";

// 고깃집 페이지
const LazyPayCheckPage = lazy(() => import("../pages/payment/Checkout"));
const LazyPaySuccessPage = lazy(() => import("../pages/payment/Success"));
const LazyPayFailPage = lazy(() => import("../pages/payment/Fail"));

const paymentRouter = () => {
  return [
    { path: "", element: <Navigate to="checkout" /> },
    {
      path: "checkout",
      element: (
        <Suspense fallback={<Loading />}>
          <CheckoutPage />
        </Suspense>
      ),
    },
    {
      path: "success/",
      element: (
        <Suspense fallback={<Loading />}>
          <SuccessPage />
        </Suspense>
      ),
    },
    {
      path: "fail",
      element: (
        <Suspense fallback={<Loading />}>
          <FailPage />
        </Suspense>
      ),
    },
  ];
};

export default paymentRouter;
