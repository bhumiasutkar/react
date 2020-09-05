import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Header/navigation";
import About from "./Pages/about";
import Contact from "./Pages/contact";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div className="continer">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
