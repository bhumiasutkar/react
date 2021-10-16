import React, { useContext } from "react";
import classes from "./menuitem.module.scss";
import Mealform from "./MealItemForm";
import cartContext from "../../../Store/cart-context";

const MenuItem = (props) => {
  const ctxCart = useContext(cartContext);

  const price = `$${props.price.toFixed(2)}`;
  const onAddToCartHandler = (amount) => {
    console.log(ctxCart);
    ctxCart.additem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };
  return (
    <li className={classes.meal} key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <Mealform onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};
export default MenuItem;
