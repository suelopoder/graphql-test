import React from 'react';

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOLE_MAPS_API_KEY;

const Map = ({ query }) => (
  <div className="map">
    <h2>Here is {query} on the world</h2>
    <img alt={`${query} Map`} src={`https://maps.googleapis.com/maps/api/staticmap?center=${query}&size=640x480&key=${GOOGLE_MAPS_API_KEY}`} />
  </div>
)

export default Map;
