import React from "react";
//import classes from "./input.scss";

const Input = React.forwardRef((props, ref) => {
    const req = props.input.require;
    console.log(req);
    return (
        <div className={`form-group ${props.isValid === false ? 'invalid' : ""
            }`}  >
            <label htmlFor={props.id}>{props.label}</label>
            <input {...props.input} ref={ref} />
        </div>
    );
});

export default Input;