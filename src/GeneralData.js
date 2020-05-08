import React from 'react';

const LangMap = {
  Portuguese: 'Isso é legal!',
  Spanish: '¡Eso es genial!',
  default: 'That\'s cool!',
};

const GeneralData = ({ name, population, languages, area, continent }) => (
  <section>
    <h2>Country of the day is {name}</h2>
    <p>It's population is {new Intl.NumberFormat().format(population)} peps. They live in {new Intl.NumberFormat().format(area)} km<sup>2</sup>. That's one {Math.ceil(population/area)} people per km<sup>2</sup>!</p>
    <p>We are talking about {continent} and the majority speaks {languages[0]}. <b>{LangMap[languages[0]] || LangMap.default}</b></p>
  </section>
);

export default GeneralData;