import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";
import classes from "./Navigation.module.css";
import { Link, Route, Routes } from 'react-router-dom';



const Navigation = () => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <>
            <li >
              <Link to="/">Home</Link>
            </li>
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
              <ul className={classes.subMenu}>
                <li>
                  <Link to="/todo">Create Todo</Link>
                </li>
                <li>
                  <Link to="/view-list">View</Link>
                </li>
              </ul>
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
