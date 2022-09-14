import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.chartDataPoints.map((dataPoint)=> dataPoint.value)
    // console.log(typeof(dataPointValues));
    const totalMaximum = Math.max(...dataPointValues)
    // console.log(typeof(totalMaximum));
  return (
    <div className="chart">
      {props.chartDataPoints.map((dataPoint) => (
        <ChartBar
        key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
