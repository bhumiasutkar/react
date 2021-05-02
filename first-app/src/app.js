import React, { Component } from "react";
import NavBar from "./component/navbar";
import Counters from "./component/counters";
import ListsItems from "./todolist/todoitems";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };
  //Reset counter
  resetHandler = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  //Delete counter
  deleteHandler = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  //Increment Counter
  incrementHandler = (counterId) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counterId);
    counters[index] = { ...counterId };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCount={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <ListsItems />
          <Counters
            counters={this.state.counters}
            onReset={this.resetHandler}
            onDelete={this.deleteHandler}
            onIncrement={this.incrementHandler}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
