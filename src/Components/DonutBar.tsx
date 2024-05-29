import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export let data = {}

if (localStorage.getItem("color-theme") == "dark") {
  data = {
    labels: ["2 nights", "3 nights", "4-5 nights", "8-14 nights"],
    datasets: [
      {
        label: "# of Votes",
        cutout: 80,
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
} else {
  data = {
    labels: ["2 nights", "3 nights", "4-5 nights", "8-14 nights"],
    datasets: [
      {
        label: "# of Votes",
        cutout: 80,
        spacing: 20,
        data: [2, 3, 1, 1],
        backgroundColor: [
          "rgb(230, 77, 17)",
          "rgb(207, 124, 8)",
          "rgb(106, 172, 20)",
          "rgb(23, 179, 166)",
        ],
        borderColor: [
          "rgb(230, 77, 17)",
          "rgb(207, 124, 8)",
          "rgb(106, 172, 20)",
          "rgb(23, 179, 166)",
        ],
        borderWidth: 3,
      },
    ],
  };
}

export default function DonutBar() {
  return <Doughnut data={data} />;
}
