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
import { useState } from "react";
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

const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["1월", "2월", "3월", "4월", "5월"],
    datasets: [
      {
        label: "월별 판매량",
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

  return (
    <div>
      <h2>월별 판매량 꺾은선 그래프</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
