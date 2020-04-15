import React from "react";
import "./App.css";
import CountryList from "./components/CountryList/CountryList";
import FavoriteCountries from "./components/FavoriteCountries/FavoriteCountries";
import { getCountries } from "./lib/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      loading: true,
      selectedCountries: [],
      serverError: "",
    };

    this.toggleCountry = this.toggleCountry.bind(this);
    this.loadItems = this.loadItems.bind(this);
  }

  componentDidMount() {
    this.loadItems();
    this.loadFromLocalStorage();
  }

  async loadItems() {
    const res = await getCountries(
      "https://restcountries.eu/rest/v2/regionalbloc/usan"
    );

    if (res.err) {
      this.setState({
        serverError: res.err,
      });
    } else {
      this.setState({
        countries: res.countries,
        loading: false,
      });
    }
  }

  loadFromLocalStorage() {
    let saveItems = localStorage.getItem("selectedCountries");
    if (saveItems) {
      saveItems = JSON.parse(saveItems);
      this.setState({
        selectedCountries: saveItems,
      });
    }
  }

  toggleCountry(e) {
    const { id, checked } = e.target;
    if (checked) {
      const newItems = [...this.state.selectedCountries, id];
      this.setState({
        selectedCountries: newItems,
      });

      localStorage.setItem("selectedCountries", JSON.stringify(newItems));
    } else {
      const newItems = this.state.selectedCountries.filter(
        (country) => country !== id
      );
      this.setState({
        selectedCountries: newItems,
      });
      localStorage.setItem("selectedCountries", JSON.stringify(newItems));
    }
  }

  render() {
    const { countries, loading, selectedCountries, serverError } = this.state;

    if (serverError) {
      return <div style={{ color: "white" }}>{serverError}</div>;
    }
    return (
      <div>
        <div className="nav-container">Which Country Do You Want to Visit?</div>

        <div className="main_container">
          {loading ? (
            <div className="loading_message">loading..</div>
          ) : (
            <CountryList
              countries={countries}
              toggleCountry={this.toggleCountry}
              selectedCountries={selectedCountries}
            />
          )}
          <FavoriteCountries selectedCountries={selectedCountries} />
        </div>
      </div>
    );
  }
}

export default App;
