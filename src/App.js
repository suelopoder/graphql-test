import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo-client';
import Country from './Country';
import './App.css';

const getCountryOfTheDay = () => 'AR';

function App() {
  return (
    <ApolloProvider client={client}>
      <Country code={getCountryOfTheDay()} />
    </ApolloProvider>
  );
}

export default App;
