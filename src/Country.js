import React from "react";
import News from "./News";
import CountryDataFetch from "./CountryDataFetch";
import Map from "./Map";
import GeneralData from "./GeneralData";
import Flag from "./Flag";
import Title from "./Title";

function CountryView(props) {
  const { country } = props;

  return (
    <>
      <Title {...country} />
      <GeneralData {...country} />
      <Flag {...country} />
      <Map mapUrl={`/img/map/${country.code}.png`} query={country.name} />
      <News query={country.name} />
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
