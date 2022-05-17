import "./App.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function App() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        "2013-01",
        "2013-02",
        "2013-03",
        "2013-04",
        "2013-05",
        "2013-06",
        "2013-07",
      ],
      datasets: [
        {
          label: "Values($)",
          data: [53, 50, 30, 60, 34, 14, 57],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(67,132,180)",
        },
      ],
    });
    setChartOptions({
      responsive: true,
    });
  }, []);

  return (
    <div className="App">
      <Bar
        options={
          ({chartOptions},{ maintainAspectRatio: false })
        }
        data={chartData}
        height="500px"
        width="600px"/>
    </div>
  );
}

export default App;
