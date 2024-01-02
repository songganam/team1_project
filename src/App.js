import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 라우터 페이지 로딩 컴포넌트
const Loading = <div style={{ background: "red" }}>로딩중...</div>;
// lasy는 실시간으로 컴포넌트 불러들이기
const LazyMainPage = lazy(() => import("./pages/MainPage"));
const LazyAboutPage = lazy(() => import("./pages/AboutPage"));
const LazyTodoPage = lazy(() => import("./pages/TodoPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={Loading}>
              <LazyMainPage />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={Loading}>
              <LazyAboutPage />
            </Suspense>
          }
        />
        <Route
          path="/todo"
          element={
            <Suspense fallback={Loading}>
              <LazyTodoPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
