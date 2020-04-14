import React from "react";
import "./CountryList.css";

class CountryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountriesList: [],
      
    };
  }

  componentDidUpdate() {
    console.log(this.state.selectedCountriesList);
    window.localStorage.setItem(
      "savedCountries",
      JSON.stringify(this.state.selectedCountriesList)
    );
  }

  checkItem(e) {
    const selectedCountry = e.target.id;
    this.setState((prevState) => ({
      selectedCountriesList: [...prevState.selectedCountriesList, selectedCountry],
      selectedCountry:selectedCountry
    }));
  }

  render() {
    const { countries } = this.props;
    const { selectedCountry, selectedCountriesList } = this.state;
    return (
      <div>
      <div className="table_container">
        <table className="darkTable">
          <thead>
            <tr>
              <th >Countries</th>
              <th >Interested</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => (
              <tr key={country.name}>
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
    
      <div className="selected_countries"><span>Selected:</span> {selectedCountriesList + ", "}</div>

            </div>
     
    );
  }
}

export default CountryList;
