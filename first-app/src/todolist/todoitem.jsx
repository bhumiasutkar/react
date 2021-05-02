import React, { Component } from "react";
class Item extends Component {
  
  render () {
    const itemdelete =() => {
      this.props.onDelete(this.props.id);
    };
    const itemedit = () => {
      this.props.onEdit(this.props.id)
    }
    return (
      <li className="list-group-item">
        {this.props.list}
        <i className="fa fa-trash-o m-2" onClick={itemdelete}></i>
        <i className="fa fa-pencil m-2" onClick={itemedit}></i>
      </li>
    );
  }
}

export default Item;
