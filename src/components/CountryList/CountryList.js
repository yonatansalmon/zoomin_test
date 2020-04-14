import React from "react";
import "./CountryList.css";

class CountryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountries: [],
    };
  }

  componentDidUpdate() {
    console.log(this.state.selectedCountries);
    window.localStorage.setItem(
      "savedCountries",
      JSON.stringify(this.state.selectedCountries)
    );
  }

  checkItem(e) {
    const selectedCountry = e.target.id;
    this.setState((prevState) => ({
      selectedCountries: [...prevState.selectedCountries, selectedCountry],
    }));
  }

  render() {
    const { countries } = this.props;
    return (
      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th className="movie_colum">Country List</th>
              <th className="checkbox_colum">Check if You Want to Visit</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => (
              <tr key={country.id}>
                <td>{country.name}</td>

                <td>
                  <input
                    id={country.name}
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

export default CountryList;
