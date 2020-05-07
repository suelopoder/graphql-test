import React from 'react';

const Map = ({ mapUrl, query }) => (
  <div className="map">
    <h2>Here is {query} on the world</h2>
    <img alt={`${query} Map`} src={mapUrl} />
  </div>
)

export default Map;
