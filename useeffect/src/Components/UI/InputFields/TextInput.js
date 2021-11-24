import React from "react";
import classes from "./input.module.css";

const TextInput = React.forwardRef((props, ref) => {
  return (
    <div
      className={`${classes.control} ${props.isValid === false ? classes.invalid : ""
        }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default TextInput;
