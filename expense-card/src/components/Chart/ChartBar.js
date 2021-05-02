import React from "react";
import "./ChartBar.css";
const ChartBar = (props) => {
  let barFillheight = "0%";

  if (props.maxValue > 0) {
    barFillheight = Math.round((props.value / props.maxValue) * 100) + "%";
    console.log("here props Value ", props.value);
    console.log("here props max value ", props.maxValue);
  }
  return (
    <div className="chart-bar">
      <div className="chart-pipe">
        <div className="pipe-filled" style={{ height: barFillheight }}></div>
      </div>
      <div className="chart-labal">{props.label}</div>
    </div>
  );
};

export default ChartBar;
