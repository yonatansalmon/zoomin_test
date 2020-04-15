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
    const savedCountriesParsed = JSON.parse(localStorageCountries)
    console.log(savedCountriesParsed);
    this.setState({ savedCountries: savedCountriesParsed });
  }

  render() {
   
    const { savedCountries } = this.state;
    return (
      <div className="table_container">
        <table className="purpleHorizon">
          <thead>
            <tr>
              <th className="checkbox_colum">Countries You Want to Visit</th>
            </tr>
          </thead>
          <tbody>
            {!savedCountries? (
              <tr className="no_data">
              No saved countries...
              </tr>
            ) : (   
              savedCountries.map((country) => (
                <tr key={country}>
                  <td>{country}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FavoriteCountry;
