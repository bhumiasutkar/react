import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import NewExpense from "../NewExpense/NewExpense";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpenseChart";
import "./ExpenseStyle.css";

const expenses = [
  {
    id: "e1",
    name: "Books",
    price: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", name: "New TV", price: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    name: "Fridge",
    price: 294.67,
    date: new Date(2021, 5, 28),
  },
];

const ExpenseCard = () => {
  const [filteredYear, setFilteredData] = useState("select");

  const [newExpenses, setExpences] = useState(expenses);

  const expenseHandler = (expense) => {
    setExpences((preExpenses) => {
      return [expense, ...preExpenses];
    });
  };
  const filterChangeHandler = (selectedYear) => {
    setFilteredData(selectedYear);
  };
  const filterExpense = newExpenses.filter((el) => {
    return el.date.getFullYear().toString() === filteredYear;
  });
  let expenceContent = "";
  if (filteredYear === "select") {
    expenceContent = newExpenses.map((el) => (
      <ExpenseItem
        key={el.id}
        date={el.date}
        title={el.name}
        price={el.price}
      />
    ));
  } else if (filterExpense.length > 0) {
    expenceContent = filterExpense.map((el) => (
      <ExpenseItem
        key={el.id}
        date={el.date}
        title={el.name}
        price={el.price}
      />
    ));
  } else {
    expenceContent = <p className="no-data">No data found</p>;
  }

  return (
    <>
      <NewExpense onExpHandler={expenseHandler} />

      <div className="expence-card">
        <ExpenseFilter
          selected={filteredYear}
          OnExpenseFilter={filterChangeHandler}
        />
        {/* {filterExpense == 0 && <p>No Data available</p>}
        {filterExpense.length > 0 &&
          filterExpense.map((el) => (
            <ExpenseItem
              key={el.id}
              date={el.date}
              title={el.name}
              price={el.price}
            />            
          ))} */}
        <ExpensesChart expenses={filterExpense} />
        {expenceContent}
      </div>
    </>
  );
};
export default ExpenseCard;
