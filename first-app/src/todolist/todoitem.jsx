import React, { Component } from "react";
class Item extends Component {
  render() {
    return (
      <li className="list-group-item">
        {this.props.list}
        <i
          className="fa fa-trash-o m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        ></i>
        <i
          className="fa fa-pencil m-2"
          onClick={() => this.props.onEdit(this.props.id)}
        ></i>
      </li>
    );
  }
}

export default Item;
