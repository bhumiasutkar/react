import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Pages/home";
import About from "../Pages/about";
import Contact from "../Pages/contact";
import Navbar from "./navbar";

const MenuBar = () => {
  return (
    <>
      <BrowserRouter>
        <>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </>
      </BrowserRouter>
    </>
  );
};

export default MenuBar;
