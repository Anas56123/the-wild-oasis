import { Pie } from "@ant-design/plots";

export default function DonutBar() {
  const data = [
    {
      type: "One",
      value: 27,
    },
    {
      type: "Two",
      value: 25,
    },
    {
      type: "Three",
      value: 18,
    },
    {
      type: "Four",
      value: 15,
    },
    {
      type: "Five",
      value: 10,
    },
    {
      type: "Six",
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "AntV\nG2Plot",
      },
    },
  };
  return <Pie {...config} />;
}
