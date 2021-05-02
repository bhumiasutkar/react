import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(
    (dataPoint) => dataPoint.monthValue
  );

  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.monthLabel}
          value={dataPoint.monthValue}
          maxValue={totalMaximum}
          label={dataPoint.monthLabel}
        />
      ))}
    </div>
  );
};

export default Chart;
