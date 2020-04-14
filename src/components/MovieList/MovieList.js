import React from "react";
import axios from "axios";
import "./MovieList.css";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteMovies: [],
    };
  }

  componentDidUpdate() {
    console.log(this.state.favoriteMovies)
    window.localStorage.setItem("savedMovies", JSON.stringify(this.state.favoriteMovies));
  }

  checkItem(e) {
    const selectedMovie = e.target.id;
    this.setState((prevState) => ({
      favoriteMovies: [...prevState.favoriteMovies, selectedMovie],
    }));
  }

  render() {
    const { persons } = this.props;
    return (
      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th className="movie_colum">Movie List</th>
              <th className="checkbox_colum">Check if Favorite</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person) => (
              <tr key={person.id}>
                <td>{person.name}</td>

                <td>
                  <input
                    id={person.name}
                    type="checkbox"
                    onChange={(e) => this.checkItem(e)}
                  ></input>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieList;
