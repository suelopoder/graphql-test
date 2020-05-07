import React from 'react';

const GeneralData = ({ name, population, languages, area }) => (
  <>
    <h2>Some data about {name}</h2>
    <p>It's population is {population} peps, that live in {area} km2. The majority speaks {languages[0]}</p>
    Time now
  </>
)

export default GeneralData;