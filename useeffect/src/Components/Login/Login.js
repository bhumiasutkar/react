import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import TextInput from "../UI/InputFields/TextInput";
import AuthContext from "../../context/auth-context";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    if (state.value === "" || state.value === undefined) {
      return false;
    } else {
      return { value: state.val, isValid: state.value.includes("@") };
    }
  }

  return { value: "", isValid: false };
};
const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    if (state.value === "" || state.value === undefined) {
      return false;
    } else {
      return { value: state.val, isValid: state.value.trim().length > 6 };
    }
  }
  return { value: "", isValid: false };
};

const Login = () => {
  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailStatus, dispatchEmail] = useReducer(emailReducer, [
    { type: "USER_INPUT", isValid: null },
  ]);

  const [passwordStatus, dispatchPassword] = useReducer(passwordReducer, [
    { type: "USER_INPUT", isValid: null },
  ]);

  const { isValid: emailIsValid } = emailStatus;
  const { isValid: passwordIsValid } = passwordStatus;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const onBlurEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const onBlurPasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('submit');
    ctx.onLogin(emailStatus.val, passwordStatus.val);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <TextInput
          type="email"
          label="E-mail"
          id="email"
          value={emailStatus.value}
          isValid={emailIsValid}
          onBlur={onBlurEmailHandler}
          onChange={emailChangeHandler}
        />
        <TextInput
          type="password"
          label="Password"
          id="password"
          value={passwordStatus.value}
          isValid={passwordIsValid}
          onBlur={onBlurPasswordHandler}
          onChange={passwordChangeHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
