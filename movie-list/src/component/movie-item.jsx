import React, { Component } from "react";

class Movie extends Component {
  render() {
    const item = this.props;
    return (
      <tr>
        <td>{item.title}</td>
        <td>{item.genre}</td>
        <td>{item.stock}</td>
        <td>{item.rate}</td>
        <td>
          <button
            className="btn btn-danger"
            value={item.action}
            onClick={() => item.onDelete(item.id)}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;
