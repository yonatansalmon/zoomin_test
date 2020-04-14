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

// EU (European Union)
// EFTA (European Free Trade Association)
// CARICOM (Caribbean Community)
// PA (Pacific Alliance)
// AU (African Union)
// USAN (Union of South American Nations)
// EEU (Eurasian Economic Union)
// AL (Arab League)
// ASEAN (Association of Southeast Asian Nations)
// CAIS (Central American Integration System)
// CEFTA (Central European Free Trade Agreement)
// NAFTA (North American Free Trade Agreement)
// SAARC (South Asian Association for Regional Cooperation)

  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/regionalbloc/usan")
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
      <div>
        <div className="nav-container">
          Which Country Do You Want to Visit?
        </div>
        
      <div className="main_container">
        {loading ? <div>loading..</div> : <CountryList countries={countries} />}
        <FavoriteCountries />
      </div>
      </div>
    );
  }
}

export default App;
