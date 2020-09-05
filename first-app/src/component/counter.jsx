import React, { Component } from "react";

class Counter extends Component {
  //dynamic class
  badgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formateCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  //Inline style
  styles = { fontSize: 10, fontWeight: 500 };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.badgeClass()}>
          {this.formateCount()}
        </span>
        <button
          className="btn btn-primary m-2 btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Add
        </button>

        <button
          className="btn btn-danger m-2 btn-sm"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
