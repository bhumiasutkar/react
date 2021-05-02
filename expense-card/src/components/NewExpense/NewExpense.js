import React, { useState } from "react";
import "./newExpense.css";
import ExpeseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const getNewExpense = (getExpence) => {
    const expenseData = {
      ...getExpence,
      id: Math.random().toString(),
    };
    props.onExpHandler(expenseData);
    setIsEditing(false);
  };
  const showExpenseForm = () => {
    setIsEditing(true);
  };
  const hideExpenseForm = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing && (
        <ExpeseForm onAddExpens={getNewExpense} onCancel={hideExpenseForm} />
      )}
      {!isEditing && (
        <button className="btn" onClick={showExpenseForm}>
          Add new Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
