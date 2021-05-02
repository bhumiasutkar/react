import React, { Component, useState } from "react";
import Item from "./todoitem";
import './todolist.css'
class ListsItems extends Component {
  state = {
    lists: [
      { id: 1, email: "John@gmail.com", done: false },
      { id: 2, email: "Ben@gmail.com", done: false },
    ],
  };
  handleChange = (e) => {
    this.setState({ list: e.target.value });
  };
  addList = () => {
    let email = this.state.list;
    let inputError = 'black';
    if (email === "" || email === undefined) {
     inputError = 'red';
     return;
    }
     const newItem = {
      id: Math.random(),
      email: email,
      done: false,
    };
    const updateItem = [...this.state.lists, newItem];
    this.setState({ lists: updateItem, list: " " });
  };

 deleteHandler = (elId) => {
  const todo = this.state.lists.filter((c) => c.id !== elId);
   console.log('test ', elId);
   this.setState({ lists: todo});
  };
  editHandler = (el) => {
    console.log('edit ', el)
  }
  render() {
    const { item } = this.props;
    return (

      <div className="row">
        <div className="todo-container">
          <h3 className="center">To Do List App</h3>
        <div className="col-md-12">
          <div className="todo-input-card">
            <input
                className="form-control"
                name="item"
                type="email"
                placeholder="add item into list"
                value={item}
                style={{borderColor:''}}
                onChange={this.handleChange} />
          <button className="add-btn btn-sm btn" onClick={this.addList}>
            Add list <i className="fa fa-plus-square"></i>
          </button>
          </div>
        </div>
        <div className="col-md-12">
          <ul className="list-group" id="toDolist">
            {this.state.lists.map((list) => (
              <Item
                key={list.id}
                id={list.id}
                list={list.email}
                onDelete={this.deleteHandler}
                onEdit={this.editHandler}
                done={list.done}
              />
            ))}
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default ListsItems;
