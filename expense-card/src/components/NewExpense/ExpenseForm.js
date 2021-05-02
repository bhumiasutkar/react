import React, { useState } from "react";
import "./newExpense.css";

const ExpeseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterDate, setEnterDate] = useState("");

  /****  Alternative ****/
  //   const [userInput, setUserInput] = useState({
  //     enterTitle: "",
  //     enterPrice: "",
  //     enterDate: "",
  //   });

  const titleHandler = (e) => {
    setEnterTitle(e.target.value);

    /** alternative */
    //1***
    //setUserInput({ ...userInput, enterTitle: e.target.value });

    //2**
    //setUserInput((prevState) => {
    //   return { ...prevState, enterTitle: e.target.value };
    // });
  };
  const amountHandler = (e) => {
    setEnterPrice(e.target.value);
  };
  const dateHandler = (e) => {
    setEnterDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      name: enterTitle, //key should be same as Dummy data obj keys
      price: +enterPrice,
      date: new Date(enterDate),
    };
    props.onAddExpens(expenseData);
    setEnterTitle("");
    setEnterPrice("");
    setEnterDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-wrapper">
        <div className="form-group">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleHandler} />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterPrice}
            onChange={amountHandler}
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterDate}
            onChange={dateHandler}
          />
        </div>
        <div className="new-expense_actions">
          <button type="button" className="btn" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpeseForm;
