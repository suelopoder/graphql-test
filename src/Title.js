import React from 'react';

const Title = ({ emoji, name }) => (
  <header>
    <h1>{emoji} {name} {emoji}</h1>
  </header>
);

export default Title;
