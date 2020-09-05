import React, { Component } from "react";
import Movie from "./component/movie-item";

class App extends Component {
  state = {
    lists: [
      {
        id: 1,
        Title: "Die Hard",
        Genre: "Action",
        Stock: "5",
        Rate: "2.5",
        Action: false,
      },
      {
        id: 2,
        Title: "Trip to Italy",
        Genre: "Comedy",
        Stock: "10",
        Rate: "4.3",
        Action: false,
      },
      {
        id: 3,
        Title: "Catch me if u can",
        Genre: "Learninig",
        Stock: "2",
        Rate: "3",
        Action: false,
      },
    ],
  };
  removeMovie = (movie) => {
    const newMovie = this.state.lists.filter((m) => m.id !== movie);
    this.setState({ lists: newMovie });
  };
  render() {
    const movieLength = this.state.lists.length;
    if (movieLength === 0)
      return (
        <div className="container m-2">
          <h6>No movies</h6>
        </div>
      );
    if (movieLength !== 0)
      return (
        <div className="container">
          <div className="row">
            <h6>Showing {movieLength} movies from database. </h6>
            <div className="col-sm-12 m-2">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.lists.map((movie) => (
                    <Movie
                      key={movie.id}
                      id={movie.id}
                      title={movie.Title}
                      genre={movie.Genre}
                      stock={movie.Stock}
                      rate={movie.Rate}
                      action={movie.Action}
                      onDelete={() => this.removeMovie(movie.id)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
  }
}

export default App;
