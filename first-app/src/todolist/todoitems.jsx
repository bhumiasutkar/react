import React, { Component } from "react";
import Item from "./todoitem";
import uuid from "uuid";

class ListsItems extends Component {
  state = {
    lists: [
      { id: 1, email: "bhumi@gmail.com", done: false },
      { id: 2, email: "aai@gmail.com", done: false },
    ],
  };
  handleChange = (e) => {
    this.setState({ list: e.target.value });
  };
  addList = () => {
    const newItem = {
      id: uuid.v4(),
      email: this.state.list,
      done: false,
    };
    console.log(newItem);
    const updateItem = [...this.state.lists, newItem];
    this.setState({ lists: updateItem, list: "" });
  };
  render() {
    const { item } = this.props;
    return (
      <div className="row">
        <div className="col-md-6 card">
          <input
            className="form-control"
            name="item"
            type="email"
            placeholder="add item into list"
            value={item}
            onChange={this.handleChange}
          />
          <button className="btn-sm btn m-2" onClick={this.addList}>
            <i className="fa fa-plus-square"></i>
          </button>
        </div>
        <div className="col-md-6">
          <ul className="list-group" id="toDolist">
            {this.state.lists.map((list) => (
              <Item
                key={list.id}
                list={list.email}
                onDelete={this.deleteList}
                done={list.done}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ListsItems;
