import React from "react";
import "./expense-filter.css";

const ExpenseFilter = (props) => {
  const dropdownYearChange = (e) => {
    props.OnExpenseFilter(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <label>Filter by year</label>
      <select value={props.selected} onChange={dropdownYearChange}>
        <option value="select">Select</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
