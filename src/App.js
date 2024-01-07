import React, { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loading from "./components/loading/Loading";

const LazyAboutPage = lazy(() => import("./pages/main/AboutPage"));

const LazyCommunityPage = lazy(() => import("./pages/community/CommunityPgae"));
const LazyListPage = lazy(() => import("./pages/community/ListPage"));
const LazyAddPage = lazy(() => import("./pages/community/AddPage"));
const LazyModifyPage = lazy(() => import("./pages/community/ModifyPage"));
const LazyReadPage = lazy(() => import("./pages/community/ReadPage"));

const LazyGogiPage = lazy(() => import("./pages/gogi/GogiPage"));
const LazyGlistPage = lazy(() => import("./pages/gogi/GlistPage"));
const LazyGbookPage = lazy(() => import("./pages/gogi/GbookPage"));
const LazyGreadPage = lazy(() => import("./pages/gogi/GreadPage"));

const LazyJoinPage = lazy(() => import("./pages/join/JoinPage"));
const LazyJmodifyPage = lazy(() => import("./pages/join/JmodifyPage"));
const LazyJreadPage = lazy(() => import("./pages/join/JreadPage"));

const LazyLoginPage = lazy(() => import("./pages/login/LoginPage"));

const LazyMartPage = lazy(() => import("./pages/mart/MartPage"));
const LazyMlistPage = lazy(() => import("./pages/mart/MlistPage"));
const LazyMreadPage = lazy(() => import("./pages/mart/MreadPage"));

const LazyMyPage = lazy(() => import("./pages/my/MyPage"));
const LazyMyModifyPage = lazy(() => import("./pages/my/MyModifyPage"));
const LazyMyBookPage = lazy(() => import("./pages/my/MyBookPage"));
const LazyMyListPage = lazy(() => import("./pages/my/MyListPage"));
const LazyMyReviewPage = lazy(() => import("./pages/my/MyReviewPage"));

const LazySalePage = lazy(() => import("./pages/sale/SalePage"));
const LazySlistPage = lazy(() => import("./pages/sale/SlistPage"));
const LazySreadPage = lazy(() => import("./pages/sale/SreadPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>페이지가 없어요</h1>}></Route>
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <LazyLoginPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/join"
          element={
            <Suspense fallback={<Loading />}>
              <LazyJoinPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/my"
          element={
            <Suspense fallback={<Loading />}>
              <LazyMyPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyGogiPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/main"
          element={
            <Suspense fallback={<Loading />}>
              <LazyAboutPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/community/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyCommunityPage />
            </Suspense>
          }
        >
          {/* 커뮤니티 페이지 첫 화면 */}
          <Route path="" element={<Navigate to="list" />}></Route>
          <Route
            path="list"
            element={
              <Suspense fallback={<Loading />}>
                <LazyListPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="add"
            element={
              <Suspense fallback={<Loading />}>
                <LazyAddPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="modify"
            element={
              <Suspense fallback={<Loading />}>
                <LazyModifyPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="read/:tno"
            element={
              <Suspense fallback={<Loading />}>
                <LazyReadPage />
              </Suspense>
            }
          ></Route>
        </Route>
        <Route
          path="/gogi"
          element={
            <Suspense fallback={<Loading />}>
              <LazyGogiPage />
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
