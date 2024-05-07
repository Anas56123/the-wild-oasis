// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Line } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const labels = ["2017", "2018", "2019", "2020", "2021", "2022"];

// const options = {
//   plugins: {
//     legend: {
//       position: "bottom",
//     },
//   },
// };

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "React",
//       data: [32, 42, 51, 60, 51, 95],
//       backgroundColor: "#2196F3",
//       borderColor: "#2196F3",
//     },
//     {
//       label: "Angular",
//       data: [37, 42, 41, 37, 31, 44],
//       backgroundColor: "#F44236",
//       borderColor: "#F44236",
//     },
//     {
//       label: "Vue",
//       data: [60, 54, 54, 28, 27, 49],
//       backgroundColor: "#FFCA29",
//       borderColor: "#FFCA29",
//     },
//   ],
// };

// const Graph = () => {
//   return (
//     <div className="transition-colors duration-500 col-span-4 row-span-3">
//       <div style={{ width: 600, height: 300 }}>
//         <Line options={options} data={data} />
//       </div>
//     </div>
//   );
// };

// export default Graph;

import React, { useState } from "react";
// import ReactDOM from 'react-dom';
import ReactApexChart from "react-apexcharts";

interface SeriesData {
  name: string;
  data: number[];
}

interface Options {
  chart: {
    height: number;
    type: string;
  };
  dataLabels: {
    enabled: boolean;
  };
  stroke: {
    curve: string;
  };
  xaxis: {
    type: string;
    categories: string[];
  };
  tooltip: {
    x: {
      format: string;
    };
  };
}

const Graph: React.FC = () => {
  const [state, setState] = useState<{
    series: SeriesData[];
    options: Options;
  }>({
    series: [
      {
        name: "Total Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Extra Sales",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default Graph;
