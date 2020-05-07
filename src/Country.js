import React from "react";
import News from "./News";
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
      <GeneralData {...country} />
      <News query={country.name} />
      <Map mapUrl={`/img/map/${country.code}.png`} query={country.name} />
    </>
  );
}

function Country() {
  return (
    <CountryDataFetch>
      <CountryView />
    </CountryDataFetch>
  );
}

export default Country;
