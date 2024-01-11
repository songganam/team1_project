import React, { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loading from "./components/loading/Loading";
import "normalize.css";
import "./index.css";

// 어바웃 페이지
const LazyAboutPage = lazy(() => import("./pages/main/AboutPage"));

// 커뮤니티 페이지
const LazyCommunityPage = lazy(() => import("./pages/community/CommunityPage"));
const LazyListPage = lazy(() => import("./pages/community/ListPage"));
const LazyAddPage = lazy(() => import("./pages/community/AddPage"));
const LazyModifyPage = lazy(() => import("./pages/community/ModifyPage"));
const LazyReadPage = lazy(() => import("./pages/community/ReadPage"));

// 고깃집 페이지
const LazyGogiPage = lazy(() => import("./pages/gogi/GogiPage"));
const LazyGbookPage = lazy(() => import("./pages/gogi/GbookPage"));
const LazyGlistPage = lazy(() => import("./pages/gogi/GlistPage"));
const LazyGreadPage = lazy(() => import("./pages/gogi/GreadPage"));
const LazyGaddPage = lazy(() => import("./pages/gogi/GaddPage"));
const LazyGmodifyPage = lazy(() => import("./pages/gogi/GmodifyPage"));

// 회원가입 페이지
const LazyJoinPage = lazy(() => import("./pages/join/JoinPage"));
const LazyJoinAddPage = lazy(() => import("./pages/join/JaddPage"));
const LazyLoginPage = lazy(() => import("./pages/login/LoginPage"));

// 정육점 페이지
const LazyMartPage = lazy(() => import("./pages/mart/MartPage"));
const LazyMartBook = lazy(() => import("./pages/mart/MbookPage"));
const LazyMlistPage = lazy(() => import("./pages/mart/MlistPage"));
const LazyMreadPage = lazy(() => import("./pages/mart/MreadPage"));
const LazyMaddPage = lazy(() => import("./pages/mart/MaddPage"));
const LazyMmodifyPage = lazy(() => import("./pages/mart/MmodifyPage"));

// 마이페이지
const LazyMyPage = lazy(() => import("./pages/my/MyPage"));
const LazyMyModifyPage = lazy(() => import("./pages/my/MyModifyPage"));
const LazyMyBookPage = lazy(() => import("./pages/my/MyBookPage"));
const LazyMyListPage = lazy(() => import("./pages/my/MyListPage"));
const LazyMyReviewPage = lazy(() => import("./pages/my/MyReviewPage"));

// 마감세일 페이지
const LazySalePage = lazy(() => import("./pages/sale/SalePage"));
const LazySlistPage = lazy(() => import("./pages/sale/SlistPage"));
const LazySreadPage = lazy(() => import("./pages/sale/SreadPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>페이지가 없어요</h1>}></Route>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyAboutPage />
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
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <LazyLoginPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/join/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyJoinPage />
            </Suspense>
          }
        >
          {/* 회원가입 페이지 첫화면 */}
          <Route path="" element={<Navigate to="jadd" />}></Route>
          <Route
            path="jadd"
            element={
              <Suspense fallback={<Loading />}>
                <LazyJoinAddPage />
              </Suspense>
            }
          ></Route>
        </Route>
        <Route
          path="/my/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyMyPage />
            </Suspense>
          }
        >
          {/* 회원가입 페이지 첫화면 */}
          <Route path="" element={<Navigate to="mybook" />}></Route>
          <Route
            path="mylist"
            element={
              <Suspense fallback={<Loading />}>
                <LazyMyListPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="mybook"
            element={
              <Suspense fallback={<Loading />}>
                <LazyMyBookPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="myreview"
            element={
              <Suspense fallback={<Loading />}>
                <LazyMyReviewPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="mymodify"
            element={
              <Suspense fallback={<Loading />}>
                <LazyMyModifyPage />
              </Suspense>
            }
          ></Route>
        </Route>
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
            path="read/"
            element={
              <Suspense fallback={<Loading />}>
                <LazyReadPage />
              </Suspense>
            }
          ></Route>
        </Route>
        <Route
          path="/gogi/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyGogiPage />
            </Suspense>
          }
        >
          {/* 고깃집찾기 페이지 첫 화면 */}
          <Route path="" element={<Navigate to="glist" />}></Route>
          <Route
            path="gbook"
            element={
              <Suspense fallback={<Loading />}>
                <LazyGbookPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="glist"
            element={
              <Suspense fallback={<Loading />}>
                <LazyGlistPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="gread"
            element={
              <Suspense fallback={<Loading />}>
                <LazyGreadPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="gadd"
            element={
              <Suspense fallback={<Loading />}>
                <LazyGaddPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="gmodify"
            element={
              <Suspense fallback={<Loading />}>
                <LazyGmodifyPage />
              </Suspense>
            }
          ></Route>
        </Route>
        <Route
          path="/mart/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyMartPage />
            </Suspense>
          }
        >
          {/* 마트 페이지 첫 화면 */}
          <Route path="" element={<Navigate to="mlist" />}></Route>
          <Route
            path="mbook"
            element={
              <Suspense fallback={<Loading />}>
                <LazyMartBook />
              </Suspense>
            }
          ></Route>
          <Route
            path="mlist"
            element={
              <Suspense fallback={<Loading />}>
                <LazyMlistPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="mread"
            element={
              <Suspense fallback={<Loading />}>
                <LazyMreadPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="madd"
            element={
              <Suspense fallback={<Loading />}>
                <LazyMaddPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="mmodify"
            element={
              <Suspense fallback={<Loading />}>
                <LazyMmodifyPage />
              </Suspense>
            }
          ></Route>
        </Route>
        <Route
          path="/sale/"
          element={
            <Suspense fallback={<Loading />}>
              <LazySalePage />
            </Suspense>
          }
        >
          {/* 마감세일 페이지 첫 화면 */}
          <Route path="" element={<Navigate to="slist" />}></Route>
          <Route
            path="slist"
            element={
              <Suspense fallback={<Loading />}>
                <LazySlistPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="sread"
            element={
              <Suspense fallback={<Loading />}>
                <LazySreadPage />
              </Suspense>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
