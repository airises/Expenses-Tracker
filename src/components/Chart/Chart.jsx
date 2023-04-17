import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart({ items }) {
  const maxPercentPrice = 2000;
  const months = [
    {
      label: "Jan",
      currentPrice: 0,
    },
    {
      label: "Feb",
      currentPrice: 0,
    },
    {
      label: "March",
      currentPrice: 0,
    },
    {
      label: "Apr",
      currentPrice: 0,
    },
    {
      label: "May",
      currentPrice: 0,
    },
    {
      label: "June",
      currentPrice: 0,
    },
    {
      label: "July",
      currentPrice: 0,
    },
    {
      label: "Aug",
      currentPrice: 0,
    },
    {
      label: "Sept",
      currentPrice: 0,
    },
    {
      label: "Oct",
      currentPrice: 0,
    },
    {
      label: "Nov",
      currentPrice: 0,
    },
    {
      label: "Dec",
      currentPrice: 0,
    },
  ];

  items.forEach((elem) => {
    const monthNum = new Date(elem.date).getMonth();
    months[monthNum].currentPrice += elem.price;
  });

  console.log(months);

  return (
    <div className="chart">
      {months.map((el) => {
        return (
          <ChartBar
            key={el.label}
            label={el.label}
            currentPrice={el.currentPrice}
            maxPercentPrice={maxPercentPrice}
          />
        );
      })}
    </div>
  );
}

export default Chart;
