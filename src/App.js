import React, { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// 라우터 페이지 로딩 컴포넌트
import Loading from "./components/loading/Loading";
// lasy 는 실시간으로 컴포넌트 불러들이기
const LazyMainPage = lazy(() => import("./pages/MainPage"));
const LazyAboutPage = lazy(() => import("./pages/AboutPage"));
const LazyTodoPage = lazy(() => import("./pages/todo/TodoPage"));
const LazyTodoListPage = lazy(() => import("./pages/todo/ListPage"));
const LazyTodoReadPage = lazy(() => import("./pages/todo/ReadPage"));
const LazyTodoModifyPage = lazy(() => import("./pages/todo/ModifyPage"));
const LazyTodoAddPage = lazy(() => import("./pages/todo/AddPage"));
// 제품 관련
const LazyProductPage = lazy(() => import("./pages/products/ProductPage"));
const LazyProductListPage = lazy(() =>
  import("./pages/products/ProductListPage"),
);
const LazyProductAddPage = lazy(() =>
  import("./pages/products/ProductAddPage"),
);
const LazyProductReadPage = lazy(() =>
  import("./pages/products/ProductReadPage"),
);
const LazyProductModifyPage = lazy(() =>
  import("./pages/products/ProductModifyPage"),
);
// 회원기능
const MemberPage = lazy(() => import("./pages/members/MemberPage"));
const LoginPage = lazy(() => import("./pages/members/LoginPage"));
const LogoutPage = lazy(() => import("./pages/members/LogoutPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyMainPage />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loading />}>
              <LazyAboutPage />
            </Suspense>
          }
        />

        {/* ---Start todo */}
        <Route
          path="/todo/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyTodoPage />
            </Suspense>
          }
        >
          {/* 최초 페이지 */}
          <Route index element={<Navigate to="list" />}></Route>
          {/* <Route path="" element={<Navigate to="list" />}></Route> */}

          <Route
            path="list" //
            element={
              <Suspense fallback={<Loading />}>
                <LazyTodoListPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="add"
            element={
              <Suspense fallback={<Loading />}>
                <LazyTodoAddPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="modify/:tno"
            element={
              <Suspense fallback={<Loading />}>
                <LazyTodoModifyPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="read/:tno"
            element={
              <Suspense fallback={<Loading />}>
                <LazyTodoReadPage />
              </Suspense>
            }
          ></Route>
        </Route>
        {/* ---End todo */}
        {/* ---Start product */}
        <Route
          path="/product/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyProductPage />
            </Suspense>
          }
        >
          {/* 리다이렉트 */}
          <Route index element={<Navigate to="list" />}></Route>
          {/* <Route path="" element={<Navigate to="list" />}></Route> */}

          {/* 목록 */}
          <Route
            path="list"
            element={
              <Suspense fallback={<Loading />}>
                <LazyProductListPage />
              </Suspense>
            }
          ></Route>
          {/* 추가 */}
          <Route
            path="add"
            element={
              <Suspense fallback={<Loading />}>
                <LazyProductAddPage />
              </Suspense>
            }
          ></Route>
          {/* 읽기 */}
          <Route
            path="read/:pno"
            element={
              <Suspense fallback={<Loading />}>
                <LazyProductReadPage />
              </Suspense>
            }
          ></Route>
          {/* 수정 */}
          <Route
            path="modify/:pno"
            element={
              <Suspense fallback={<Loading />}>
                <LazyProductModifyPage />
              </Suspense>
            }
          ></Route>
        </Route>
        {/* ---End product */}
        {/* ---Start Member */}
        <Route
          path="/member/"
          element={
            <Suspense fallback={<Loading />}>
              <MemberPage />
            </Suspense>
          }
        >
          {/* 첫페이지 리다이렉트 */}
          {/* 최초 페이지 */}
          <Route index element={<Navigate to="login" />}></Route>

          <Route
            path="login"
            element={
              <Suspense fallback={<Loading />}>
                <LoginPage />
              </Suspense>
            }
          />
          {/* 로그아웃 */}
          <Route
            path="logout"
            element={
              <Suspense fallback={<Loading />}>
                <LogoutPage />
              </Suspense>
            }
          />

        </Route>
        {/* ---End Member */}
        <Route path="*" element={<h1>페이지가 없어요</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
