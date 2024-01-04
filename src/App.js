import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/loading/Loading";

const LazyAboutPage = lazy(() => import("./pages/about/AboutPage"));
const LazyCommunityPage = lazy(() => import("./pages/community/CommunityPgae"));
const LazyGogiPage = lazy(() => import("./pages/gogi/GogiPage"));
const LazyLoginPage = lazy(() => import("./pages/login/LoginPage"));
const LazyMartPage = lazy(() => import("./pages/mart/MartPage"));
const LazySalePage = lazy(() => import("./pages/sale/SalePage"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>페이지가 없어요</h1>}></Route>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyGogiPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loading />}>
              <LazyAboutPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/community"
          element={
            <Suspense fallback={<Loading />}>
              <LazyCommunityPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/gogi"
          element={
            <Suspense fallback={<Loading />}>
              <LazyGogiPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <LazyLoginPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/mart"
          element={
            <Suspense fallback={<Loading />}>
              <LazyMartPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/sale"
          element={
            <Suspense fallback={<Loading />}>
              <LazySalePage />
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
