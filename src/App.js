import "normalize.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GoTop from "./components/common/GoTop";
import Loading from "./components/loading/Loading";
import "./index.css";

// 어바웃 페이지
const LazyAboutPage = lazy(() => import("./pages/about/AboutPage"));

// 커뮤니티 페이지
const LazyCommunityPage = lazy(() => import("./pages/community/CommunityPage"));
const LazyListPage = lazy(() => import("./pages/community/ListPage"));
const LazyAddPage = lazy(() => import("./pages/community/AddPage"));
const LazyModifyPage = lazy(() => import("./pages/community/ModifyPage"));
const LazyReadPage = lazy(() => import("./pages/community/ReadPage"));

// 고깃집 페이지
const LazyGogiPage = lazy(() => import("./pages/meat/GogiPage"));
const LazyGbookPage = lazy(() => import("./pages/meat/MeatReviewPage"));
const LazyGlistPage = lazy(() => import("./pages/meat/MeatListPage"));
const LazyGreadPage = lazy(() => import("./pages/meat/MeatDetailPage"));
const LazyGaddPage = lazy(() => import("./pages/meat/MeatReservationPage"));
const LazyGmodifyPage = lazy(() => import("./pages/meat/MeatModifyPage"));

// 회원가입 페이지
const LazyJoinPage = lazy(() => import("./pages/join/JoinPage"));
const LazyJoinAddPage = lazy(() => import("./pages/join/JaddPage"));
const LazyLoginPage = lazy(() => import("./pages/login/LoginPage"));

// 정육점 페이지
const LazyMartPage = lazy(() => import("./pages/butcher/MartPage"));
const LazyMartBook = lazy(() => import("./pages/butcher/ButcherReviewPage"));
const LazyMlistPage = lazy(() => import("./pages/butcher/ButcherListPage"));
const LazyMreadPage = lazy(() => import("./pages/butcher/ButcherDetailPage"));
const LazyMaddPage = lazy(() => import("./pages/butcher/ButcherPickupPage"));
const LazyMmodifyPage = lazy(() => import("./pages/butcher/MmodifyPage"));

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
const LazyGaraLogin = lazy(() => import("./redux/GaraLogin"));

const LazyNotFoundPage = lazy(() => import("./pages/notfound/NotFound"));
const App = () => {
  return (
    <BrowserRouter>
      <GoTop />
      <Routes>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <LazyNotFoundPage />
            </Suspense>
          }
        ></Route>

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
          <Route path="" element={<Navigate to="add" />}></Route>
          <Route
            path="add"
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
          <Route path="" element={<Navigate to="book" />}></Route>
          <Route
            path="list"
            element={
              <Suspense fallback={<Loading />}>
                <LazyMyListPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="book"
            element={
              <Suspense fallback={<Loading />}>
                <LazyMyBookPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="review"
            element={
              <Suspense fallback={<Loading />}>
                <LazyMyReviewPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="modify"
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
            path="modify/:iboard"
            element={
              <Suspense fallback={<Loading />}>
                <LazyModifyPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="read/:iboard"
            element={
              <Suspense fallback={<Loading />}>
                <LazyReadPage />
              </Suspense>
            }
          ></Route>
        </Route>
        {/* 
        // ! Meat Router 
        */}
        <Route
          path="/meat/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyGogiPage />
            </Suspense>
          }
        >
          {/* 고깃집찾기 페이지 첫 화면 */}
          <Route path="" element={<Navigate to="list" />}></Route>
          <Route
            path="review/:ishop"
            element={
              <Suspense fallback={<Loading />}>
                <LazyGbookPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="list"
            element={
              <Suspense fallback={<Loading />}>
                <LazyGlistPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="detail/:ishop"
            element={
              <Suspense fallback={<Loading />}>
                <LazyGreadPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="reservation/:ishop"
            element={
              <Suspense fallback={<Loading />}>
                <LazyGaddPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="modify/:ireser"
            element={
              <Suspense fallback={<Loading />}>
                <LazyGmodifyPage />
              </Suspense>
            }
          ></Route>
        </Route>
        <Route
          path="/butcher/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyMartPage />
            </Suspense>
          }
        >
          {/* 마트 페이지 첫 화면 */}
          <Route path="" element={<Navigate to="list" />}></Route>
          <Route
            path="review"
            element={
              <Suspense fallback={<Loading />}>
                <LazyMartBook />
              </Suspense>
            }
          ></Route>
          <Route
            path="list"
            element={
              <Suspense fallback={<Loading />}>
                <LazyMlistPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="detail/:ibutcher"
            element={
              <Suspense fallback={<Loading />}>
                <LazyMreadPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="pickup/:ibutcher"
            element={
              <Suspense fallback={<Loading />}>
                <LazyMaddPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="modify"
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
          <Route path="" element={<Navigate to="list" />}></Route>
          <Route
            path="list"
            element={
              <Suspense fallback={<Loading />}>
                <LazySlistPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="read"
            element={
              <Suspense fallback={<Loading />}>
                <LazySreadPage />
              </Suspense>
            }
          ></Route>
        </Route>
        <Route
          path="test"
          element={
            <Suspense fallback={<Loading />}>
              <LazyGaraLogin />
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
