import React from "react";

class FavoriteCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedMovies: [],
    };
  }

  componentDidMount() {
    const localStorageMovies = window.localStorage.getItem("savedCountries");
    const savedMoviesParsed = JSON.parse(localStorageMovies);
    this.setState({ savedMovies: savedMoviesParsed });
  }

  render() {
    return (
      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th className="checkbox_colum">Favorite Movies</th>
            </tr>
          </thead>
          <tbody>
            {this.state.savedMovies.map((movie) => (
              <tr key={movie}>
                <td>{movie}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FavoriteCountry;
