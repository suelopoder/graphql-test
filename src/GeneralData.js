import React from 'react';

const GeneralData = ({ name, population, languages, area }) => (
  <>
    <h2>Some data about {name}</h2>
    <p>It's population is {new Intl.NumberFormat().format(population)} peps.</p>
    <p>They live in {new Intl.NumberFormat().format(area)} km2.</p>
    <p>The majority speaks {languages[0]}.</p>
  </>
)

export default GeneralData;