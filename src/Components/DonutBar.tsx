// import React from "react";
// import ReactApexChart from "react-apexcharts";

// interface ApexChartProps {}

// interface ApexChartState {
//   series: number[];
//   labels: string[]
//   options: {
//     chart: {
//       type: string;
//       width: number;
//     };
//     responsive: {
//       breakpoint: number;
//       options: {
//         chart: {
//           width: number;
//         };
//         legend: {
//           position: string;
//         };
//       };
//     }[];
//   };
// }

// const DonutBar: React.FC<ApexChartProps> = () => {
//   const [state, setState] = React.useState<ApexChartState>({
//     series: [2, 2, 1, 1],
//     labels: ['Apples', 'Oranges', 'Berries', 'Grapes'],
//     options: {
//       chart: {
//         type: "donut",
//         width: 100,
//       },
//       responsive: [
//         {
//           breakpoint: 480,
//           options: {
//             chart: {
//               width: 200,
//             },
//             legend: {
//               position: "bottom",
//             },
//           },
//         },
//       ],
//     },
//   });

//   return (
//     <div className="w-full h-full max-w-[500px] max-h-[500px] dark:border-slate-800">
//       <div id="chart">
//         <ReactApexChart
//           options={state.options}
//           series={state.series}
//           type="donut"
//         />
//       </div>
//     </div>
//   );
// };

// export default DonutBar;

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["2 nights", "3 nights", "4-5 nights", "8-14 nights"],
  datasets: [
    {
      label: "# of Votes",
      cutout: 100,
      spacing: 20,
      data: [2, 3, 1, 1],
      backgroundColor: [
        "rgb(194,65,13)",
        "rgb(161, 98, 7)",
        "rgb(77, 124, 15)",
        "rgb(15, 118, 110)",
      ],
      borderColor: [
        "rgb(194,65,13)",
        "rgb(161, 98, 7)",
        "rgb(77, 124, 15)",
        "rgb(15, 118, 110)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function DonutBar() {
  return <Doughnut data={data} />;
}
