import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  //instead of usin props.title.. props.date **destructuring concept
  let { title, date } = props;
  const [ExpenceTitle, setTitle] = useState(title);
  // const editTitle = () => {
  //   setTitle("updated!");
  // };
  return (
    <div className="expense-item">
      <div className="item expense-date">
        <ExpenseDate expenceDate={date} />
      </div>
      <div className="item expense-description">
        <h2>{ExpenceTitle}</h2>
      </div>
      <div className="item expense-price"> {props.price}/- </div>
      {/* <button onClick={editTitle}>Change title</button> */}
    </div>
  );
};
export default ExpenseItem;
