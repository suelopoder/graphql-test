import React from 'react';

const Flag = ({ name, svgUrl }) => (
  <section id="flag">
    <h2>{name} Flag</h2>
    <img src={svgUrl} alt={name + ' Flag'} />
  </section>
)

export default Flag;
