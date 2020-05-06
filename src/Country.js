import React from "react";
import News from "./News";
import CountryFetch from "./CountryFetch";
import CountryDataFetch from "./CountryDataFetch";
import Map from "./Map";
import GeneralData from "./GeneralData";

function CountryView(props) {
  const { country } = props;

  return (
    <>
      <h1>
        Country of the day is
        <br />
        {country.emoji}
        {country.name}
      </h1>
      <GeneralData query={country.name} />
      <News query={country.name} />
      <Map query={country.name} />
    </>
  );
}

function Country() {
  return (
    <CountryFetch>
      <CountryDataFetch>
        <CountryView />
      </CountryDataFetch>
    </CountryFetch>
  );
}

export default Country;
