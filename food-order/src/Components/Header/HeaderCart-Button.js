import React, { useContext } from "react";
import classess from "./header.module.scss";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";

const CartButton = (props) => {
  const Cartctx = useContext(CartContext);

  const numOfItem = Cartctx.item.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  return (
    <>
      <button
        onClick={props.onClick}
        className={classess.button}
        type={props.type}
      >
        <span className={classess.icon}>
          <CartIcon />
        </span>
        <span>{props.title}</span>
        <span className={classess.badge}>{numOfItem}</span>
      </button>
    </>
  );
};
export default CartButton;
