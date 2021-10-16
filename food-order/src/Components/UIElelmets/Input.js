import React from "react";
import classes from "./input.module.scss";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={ref}
        key={props.input.id}
        id={props.input.id}
        {...props.input}
      />
    </div>
  );
});
export default Input;
