import React from "react";
import "./FavoriteCountries.css";

class FavoriteCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedCountries: [],
    };
  }

  componentDidMount() {
    const localStorageCountries = window.localStorage.getItem("savedCountries");
    const savedCountriesParsed = JSON.parse(localStorageCountries);
    this.setState({ savedCountries: savedCountriesParsed });
  }

  render() {
    return (
      <div className="table_container">
        <table className="purpleHorizon">
          <thead>
            <tr>
              <th className="checkbox_colum">Countries You Want to Visit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.savedCountries.map((country) => (
              <tr key={country}>
                <td>{country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FavoriteCountry;
