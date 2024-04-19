// import { Pie } from "@ant-design/plots";

// export default function DonutBar() {
//   const data = [
//     {
//       type: "2 nights",
//       value: 2,
//     },
//     {
//       type: "3 nights",
//       value: 2,
//     },
//     {
//       type: "4-5 nights",
//       value: 1,
//     },
//     {
//       type: "8-14 nights",
//       value: 1,
//     },
//   ];
//   const config = {
//     appendPadding: 10,
//     data,
//     angleField: "value",
//     colorField: "type",
//     radius: 1,
//     innerRadius: 0.6,
//     label: {
//       type: "inner",
//       offset: "-50%",
//       content: "{value}",
//       style: {
//         textAlign: "center",
//         fontSize: 14,
//       },
//     },
//     interactions: [
//       {
//         type: "element-selected",
//       },
//       {
//         type: "element-active",
//       },
//     ],
//     statistic: {
//       title: false,
//       content: {
//         style: {
//           whiteSpace: "pre-wrap",
//           overflow: "hidden",
//           textOverflow: "ellipsis",
//         },
//         content: "AntV\nG2Plot",
//       },
//     },
//   };
//   return <Pie {...config} />;
// }

import React from "react";
import ReactApexChart from "react-apexcharts";

interface ApexChartProps {}

interface ApexChartState {
  series: number[];
  labels: string[]
  options: {
    chart: {
      type: string;
      width: number;
    };
    responsive: {
      breakpoint: number;
      options: {
        chart: {
          width: number;
        };
        legend: {
          position: string;
        };
      };
    }[];
  };
}

const DonutBar: React.FC<ApexChartProps> = () => {
  const [state, setState] = React.useState<ApexChartState>({
    series: [2, 2, 1, 1],
    labels: ['Apples', 'Oranges', 'Berries', 'Grapes'],
    options: {
      chart: {
        type: "donut",
        width: 100,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div className="w-full h-full max-w-[500px] max-h-[500px] dark:border-slate-800">
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
        />
      </div>
    </div>
  );
};

export default DonutBar;
