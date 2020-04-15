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
    window.localStorage.setItem(
      "savedCountries", JSON.stringify(this.state.selectedCountriesList)
    );
  }

  checkItem(e) {
    const selectedCountry = e.target.id;
    const checked = e.target.checked
    console.log(checked)
   if(checked){
    localStorage.setItem(selectedCountry,checked)
    this.setState((prevState) => ({
      selectedCountriesList: [...prevState.selectedCountriesList, selectedCountry],  
    }))
  }else{
    var selectedCountryList = [...this.state.selectedCountriesList]; // make a separate copy of the selectedCountryList
    var indexOfRemovedCountry = selectedCountryList.indexOf(e.target.id)
    if (indexOfRemovedCountry !== -1) {
      selectedCountryList.splice(indexOfRemovedCountry, 1);
      this.setState({selectedCountriesList: selectedCountryList});
    }
    localStorage.setItem("savedCountries",JSON.stringify(selectedCountryList))
  }
  }

  render() {
    const { countries } = this.props;
    const { selectedCountriesList } = this.state;
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
                    onChange={(e) => this.checkItem(e)
                    }
                    defaultChecked={localStorage.getItem(country.name)}
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