import React, { useRef, useState } from "react";
import Input from "../../UIElelmets/Input";
import classes from "./menuitem.module.scss";

const Mealform = (props) => {
  const amountRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmountNum === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNum);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="amount"
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please valid input less that 5</p>}
    </form>
  );
};
export default Mealform;
