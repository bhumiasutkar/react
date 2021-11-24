import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";
import classes from "./Navigation.module.css";
import { Link, Route, Routes } from 'react-router-dom';



const Navigation = () => {
  const ctx = useContext(AuthContext);
  console.log("is user logged in ", ctx.isLoggedIn);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <>
            <li >
              <Link to="/user">Users</Link>
            </li>
            <li>
              <Link to="/test-page">Test Page</Link>
            </li>
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <Link to="/view-list">View</Link>
            </li>
            <li>
              <button onClick={ctx.onLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
