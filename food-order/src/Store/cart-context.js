import React from "react";

const CartContext = React.createContext({
  CartItems: [],
  totalItemAmount: 0,
  addCartItem: (item) => {},
  removeCartItem: (id) => {},
});

export default CartContext;
