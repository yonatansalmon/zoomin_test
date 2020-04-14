import React from "react";
import axios from "axios";
import "./App.css";
import CountryList from "./components/CountryList/CountryList";
import FavoriteCountries from "./components/FavoriteCountries/FavoriteCountries";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios
      .get(`https://restcountries.eu/rest/v2/regionalbloc/cais`)
      .then((res) => {
        const countries = res.data;
        console.log(countries);
        this.setState({
          countries: countries,
          loading: false,
        });
      })
      .catch((error) => {
        // alert("ERROR: Tweet Empty");
      });
  }

  render() {
    const { countries, loading } = this.state;
    return (
      <div className="main_container">
        {loading ? <div>loading..</div> : <CountryList countries={countries} />}
        <FavoriteCountries />
      </div>
    );
  }
}

export default App;
