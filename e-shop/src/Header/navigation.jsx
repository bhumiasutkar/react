import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="continer">
          <ul>
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/about"> About </NavLink>
            </li>
            <li>
              <NavLink to="/contact"> Contact us </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Navbar;
