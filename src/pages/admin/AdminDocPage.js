import { useEffect, useState } from "react";
import { getDoc } from "../../api/docApi";
import Button from "../../components/button/Button";
import useCustomHook from "../../components/meat/hooks/useCustomHook";
import {
  SupervisorHeader,
  SupervisorReportWrapper,
} from "../supervisor/styles/SupervisorReportStyle";
import {
  AdminDocBoard,
  AdminDocBox,
  AdminDocMain,
  BoxChart,
  BoxContent,
  BoxTop,
  DocHeader,
  DocMainTop,
} from "./styles/AdminDocStyle";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const initState = {
  totalBookmark: 0,
  totalReservation: 0,
  totalReview: 0,
  starAvg: 0,
  bookmarkCnt: [0],
  reviewCnt: [0],
  reservationCnt: [0],
};

const AdminDocPage = () => {
  const { page, moveToCheck } = useCustomHook();

  // 매장 데이터 및 차트 데이터를 상태로 관리
  const [docData, setDocData] = useState(initState);
  const [selectedCategory, setSelectedCategory] = useState("북마크");

  console.log("카테고리", selectedCategory);

  const bookmarkArray = [
    docData?.bookmarkCnt[0],
    docData?.bookmarkCnt[1],
    docData?.bookmarkCnt[2],
    docData?.bookmarkCnt[3],
  ];

  const reserArray = [
    docData?.reservationCnt[0],
    docData?.reservationCnt[1],
    docData?.reservationCnt[2],
    docData?.reservationCnt[3],
  ];
  const reviewArray = [
    docData?.reviewCnt[0],
    docData?.reviewCnt[1],
    docData?.reviewCnt[2],
    docData?.reviewCnt[3],
  ];

  console.log("BArray", bookmarkArray);
  console.log("RESERArray", reserArray);
  console.log("REVIEWArray", reviewArray);

  // 북마크, 예약, 리뷰 각각의 차트 데이터 상태 정의
  const [bookmarkChartData, setBookmarkChartData] = useState({
    // labels: ["1주", "2주", "3주", "4주", "5주"],
    labels: ["1주", "2주", "3주", "4주"],
    datasets: [
      {
        label: "주간 북마크 수",
        data: [10, 20, 15, 25],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  });
  // console.log("데스트두", docData?.bookmarkCnt[0]);

  const [reservationChartData, setReservationChartData] = useState({
    labels: ["1주", "2주", "3주", "4주"],
    datasets: [
      {
        label: "주간 예약 수",
        data: [5, 15, 10, 20],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  });

  const [reviewChartData, setReviewChartData] = useState({
    labels: ["1주", "2주", "3주", "4주"],
    datasets: [
      {
        label: "주간 리뷰 수",
        data: [15, 10, 25, 20],
        fill: false,
        backgroundColor: "rgb(255, 205, 86)",
        borderColor: "rgba(255, 205, 86, 0.2)",
      },
    ],
  });

  // 차트 데이터 업데이트 함수
  const updateChartData = data => {
    console.log("차트 성공");
    // 선택된 카테고리에 따라 적절한 차트 데이터를 업데이트합니다.
    if (selectedCategory === "북마크") {
      setBookmarkChartData({
        labels: ["1주", "2주", "3주", "4주"],
        datasets: [
          {
            label: "주간 북마크 수",
            data: data.bookmarkCnt,
            fill: false,
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgba(255, 99, 132, 0.2)",
          },
        ],
      });
    }
    if (selectedCategory === "예약") {
      setReservationChartData({
        labels: ["1주", "2주", "3주", "4주"],
        datasets: [
          {
            label: "주간 예약 수",
            data: data.reservationCnt,
            fill: false,
            backgroundColor: "rgb(75, 192, 192)",
            borderColor: "rgba(75, 192, 192, 0.2)",
          },
        ],
      });
    }
    if (selectedCategory === "리뷰") {
      setReviewChartData({
        labels: ["1주", "2주", "3주", "4주"],
        datasets: [
          {
            label: "주간 리뷰 수",
            data: data.reviewCnt,
            fill: false,
            backgroundColor: "rgb(255, 205, 86)",
            borderColor: "rgba(255, 205, 86, 0.2)",
          },
        ],
      });
    }
  };

  // 차트 옵션
  const options = {
    scales: {
      x: {
        // X축 설정
        type: "category",
      },
      y: {
        // Y축 설정
        type: "linear",
      },
    },
  };

  useEffect(() => {
    const params = { page };
    getDoc({ params, successDocFn, failDocFn, errorDocFn });
  }, [page, selectedCategory]);

  const successDocFn = response => {
    setDocData(response);
    updateChartData(response);
    // console.log("들어온 데이터 :", docData);
  };
  const failDocFn = response => {
    setDocData(response);
  };
  const errorDocFn = response => {
    setDocData(response);
  };

  return (
    <SupervisorReportWrapper>
      <DocHeader>
        <div className="page-title">매장 분석</div>
        {/* <div>
          <Button bttext="저장" />
        </div> */}
      </DocHeader>
        {/* <DocMainTop>
          <div className="title"><span></span></div>
        </DocMainTop> */}
      <AdminDocMain>
        <AdminDocBoard>
          <AdminDocBox onClick={() => setSelectedCategory("북마크")}>
            <BoxTop>
              <span>북마크</span>
            </BoxTop>
            <BoxContent>
              <span>{docData?.totalBookmark}</span>
            </BoxContent>
          </AdminDocBox>
          <AdminDocBox onClick={() => setSelectedCategory("예약")}>
            <BoxTop>
              <span>예약</span>
            </BoxTop>
            <BoxContent>
              <span>{docData?.totalReservation}</span>
            </BoxContent>
          </AdminDocBox>
          <AdminDocBox onClick={() => setSelectedCategory("리뷰")}>
            <BoxTop>
              <span>리뷰</span>
            </BoxTop>
            <BoxContent>
              <span>{docData?.totalReview}</span>
            </BoxContent>
          </AdminDocBox>
          <AdminDocBox>
            <BoxTop>
              <span>별점</span>
            </BoxTop>
            <BoxContent>
              <span>{docData?.starAvg}</span>
            </BoxContent>
          </AdminDocBox>
        </AdminDocBoard>
        <BoxChart>
          <div>
            <h2>월간 통계</h2>
            {/* 선택된 카테고리에 따라 해당 차트를 렌더링 */}
            {selectedCategory === "북마크" && (
              <Line
                data={bookmarkChartData}
                options={{
                  scales: { x: { type: "category" }, y: { type: "linear" } },
                }}
              />
            )}
            {selectedCategory === "예약" && (
              <Line
                data={reservationChartData}
                options={{
                  scales: { x: { type: "category" }, y: { type: "linear" } },
                }}
              />
            )}
            {selectedCategory === "리뷰" && (
              <Line
                data={reviewChartData}
                options={{
                  scales: { x: { type: "category" }, y: { type: "linear" } },
                }}
              />
            )}
          </div>
        </BoxChart>
      </AdminDocMain>
    </SupervisorReportWrapper>
  );
};

export default AdminDocPage;
