import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true);
  };
  const hideCart = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCart} />}
      <Header cartShown={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
