import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { monthLabel: "Jan", monthValue: 0 },
    { monthLabel: "Feb", monthValue: 0 },
    { monthLabel: "Mar", monthValue: 0 },
    { monthLabel: "Apr", monthValue: 0 },
    { monthLabel: "May", monthValue: 0 },
    { monthLabel: "Jun", monthValue: 0 },
    { monthLabel: "Jul", monthValue: 0 },
    { monthLabel: "Aug", monthValue: 0 },
    { monthLabel: "Sep", monthValue: 0 },
    { monthLabel: "Oct", monthValue: 0 },
    { monthLabel: "Nov", monthValue: 0 },
    { monthLabel: "Dec", monthValue: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].monthValue += expense.price;
    console.log("aaaa ", chartDataPoints[expenseMonth].monthValue);
  }
  console.log(chartDataPoints);
  return (
    <div>
      <Chart dataPoints={chartDataPoints} />
    </div>
  );
};

export default ExpensesChart;
