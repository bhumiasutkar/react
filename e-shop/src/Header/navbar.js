import React from "react";
import { Link } from "react-router-dom";
import { menu } from "../apiServices/menulist";
import Logo from "../assets/images/logo.jpg";
import "./header.scss";
const Navbar = () => {
  const { submenu } = menu;
  return (
    <header>
      <div className="header-top-nav">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="left-text">
                <p>Welcome you to Ecolife store!</p>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 text-right">
              <div className="header-right-nav">
                <ul className="res-xs-flex">
                  <li className="after-n">
                    <a href="compare.html">
                      <i className="ion-ios-shuffle-strong"></i>Compare (0)
                    </a>
                  </li>
                  <li>
                    <a href="wishlist.html">
                      <i className="ion-android-favorite-outline"></i>Wishlist
                      (0)
                    </a>
                  </li>
                </ul>
                <div className="dropdown-navs">
                  <ul>
                    <li className="dropdown xs-after-n">
                      <a href="/">Settings</a>
                      <ul className="dropdown-nav">
                        <li>
                          <a href="/">My Account</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                      </ul>
                    </li>
                    <li className="top-10px first-child">
                      <select>
                        <option value="1">USD $</option>
                        <option value="2">EUR €</option>
                      </select>
                      <div className="nice-select" tabIndex="0">
                        <span className="current">USD $</span>
                        <ul className="list">
                          <li data-value="1" className="option selected">
                            USD $
                          </li>
                          <li data-value="2" className="option">
                            EUR €
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="top-10px mr-15px">
                      <select>
                        <option value="1">English</option>
                        <option value="2">France</option>
                      </select>
                      <div className="nice-select" tabIndex="0">
                        <span className="current">English</span>
                        <ul className="list">
                          <li data-value="1" className="option selected">
                            English
                          </li>
                          <li data-value="2" className="option">
                            France
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-navigation sticky-nav">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <div className="logo">
                <img src={Logo} alt="logo" />
              </div>
            </div>
            <div className="col-sm-10">
              <div className="main-navigation d-none d-lg-block">
                <ul>
                  {submenu.map((item, index) => {
                    return (
                      <li key={`menu-${index}`}>
                        <Link to={item.route ? item.route : "/"}>
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
