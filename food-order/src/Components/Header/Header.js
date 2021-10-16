import React from "react";
import classess from "./header.module.scss";
import HeaderBg from "../../assets/header-bg-3.jpg";
import CartButton from "./HeaderCart-Button";

const Header = (props) => {
  return (
    <>
      <header className={classess.header}>
        <h1>Order food</h1>
        <CartButton type="button" title="Cart" onClick={props.cartShown} />
      </header>
      <div className={classess["main-image"]}>
        <img alt="" src={HeaderBg} />
      </div>
    </>
  );
};

export default Header;
