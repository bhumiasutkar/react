import React, { useContext } from "react";
import Modal from "../Overlays/Modal";
import CartItem from "./CartItem";
import classes from "./cart.module.scss";
import CartContext from "../../Store/cart-context";

const Cart = (props) => {
  const ctxCart = useContext(CartContext);
  const totalAmount = `$${ctxCart.totalAmount.toFixed(2)}`;
  const hasItem = ctxCart.item.length > 0;
  const cartAddItem = (Item) => {};
  const cartRemoveItem = (id) => {};

  const cartitem = ctxCart.item.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartRemoveItem}
      onAdd={cartAddItem}
    />
  ));

  return (
    <Modal onClickBackdrop={props.onClose}>
      <ul className={classes["cart-list"]}>{cartitem}</ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
