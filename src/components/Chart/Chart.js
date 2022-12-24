import ChartBar from "./ChartBar";

import classes from "./Chart.module.css";

const Chart = (props) => {
  const values = props.dataPoints.map((data) => data.value);

  const max = Math.max(...values);

  return (
    <div className={classes["chart"]}>
      {props.dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={max}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
