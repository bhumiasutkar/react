const ExpenseDate = (props) => {
  const month = props.expenceDate.toLocaleString("en-US", { month: "long" });
  const day = props.expenceDate.toLocaleString("en-US", { day: "2-digit" });
  const year = props.expenceDate.getFullYear();

  return (
    <div>
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_year">{year}</div>
      <div className="expense-date_day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
