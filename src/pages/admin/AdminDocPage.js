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

const AdminDocPage = () => {
  const [docData, setDocData] = useState([]);
  const { page, moveToCheck } = useCustomHook();

  const successDocFn = response => {
    setDocData(response);
  };
  const failDocFn = response => {
    setDocData(response);
  };
  const errorDocFn = response => {
    setDocData(response);
  };


  const [chartData, setChartData] = useState({
    labels: ["1주", "2주", "3주", "4주", "5주"],
    datasets: [
      {
        label: "주간 판매량",
        data: [65, 59, 80, 81, 56],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  });

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
  });
  // useEffect(() => {
  //   fetchChartData();
  // }, []);

  return (
    <SupervisorReportWrapper>
      <SupervisorHeader>
        <div className="page-title">매장 분석</div>
        <div>
          <Button bttext="저장" />
        </div>
      </SupervisorHeader>
      <AdminDocMain>
        <DocMainTop>
          <div className="title">{/* <span>Month</span> */}</div>
        </DocMainTop>
        <AdminDocBoard>
          <AdminDocBox>
            <BoxTop>
              <span>북마크</span>
            </BoxTop>
            <BoxContent>
              <span>{docData?.totalBookmark}</span>
            </BoxContent>
          </AdminDocBox>
          <AdminDocBox>
            <BoxTop>
              <span>예약</span>
            </BoxTop>
            <BoxContent>
              <span>{docData?.totalReservation}</span>
            </BoxContent>
          </AdminDocBox>
          <AdminDocBox>
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
            <h2>차트</h2>
            <Line data={chartData} options={options} />
          </div>
        </BoxChart>
      </AdminDocMain>
    </SupervisorReportWrapper>
  );
};

export default AdminDocPage;
