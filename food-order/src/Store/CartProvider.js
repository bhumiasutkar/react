import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  item: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log(state.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.item[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.item.concat(action.item);
    }

    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, cartDispatchAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addCartItem = (item) => {
    cartDispatchAction({
      type: "ADD",
      item: item,
    });
  };
  const removeCartItem = (id) => {
    cartDispatchAction({
      type: "Remove",
      id: id,
    });
  };
  /*used all over wherever cartcontext is used*/
  const cartContext = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    additem: addCartItem,
    removeitem: removeCartItem,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
