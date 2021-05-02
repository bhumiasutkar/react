import React from "react";
import { Link } from "react-router-dom";
import { menu } from "./menulist";

const Navbar = () => {
  const { submenu } = menu;
  return (
    <header>
      <div className="continer">
        <ul>
          {submenu.map((item, index) => {
            return (
              <li key={`menu-${index}`}>
                <Link to={item.route ? item.route : "/"}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
