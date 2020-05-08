import React from 'react';

const Map = ({ mapUrl, query }) => (
  <section id="map">
    <h2>On the world</h2>
    <img alt={`${query} Map`} src={mapUrl} />
  </section>
)

export default Map;
