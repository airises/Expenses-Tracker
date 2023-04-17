import React from "react";
import "./ChartBar.css";

function ChartBar({ maxPercentPrice, currentPrice, label }) {
  const fillHeight = Math.round(100 * currentPrice) / maxPercentPrice;

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: `${fillHeight}px` }}
        ></div>
      </div>
      <p className="chart-bar__label">{label}</p>
    </div>
  );
}

export default ChartBar;
