import React from "react";
import "./CountryList.css";

function CountryList(props) {
  const { countries, selectedCountries, toggleCountry } = props;
  return (
    <table className="darkTable">
      <thead>
        <tr>
          <th></th>
          <th>Countries</th>
          <th>Interested</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country) => (
          <tr key={country.name}>
            <td>
              <img
                className="flags"
                src={country.flag}
                alt={country.name}
              ></img>
            </td>
            <td>{country.name}</td>
            <td>
              <input
                id={country.name}
                type="checkbox"
                onChange={toggleCountry}
                checked={selectedCountries.includes(country.name)}
              ></input>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CountryList;
