import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import News from './News';

const getCountry = code => gql`
  {
    country(code:"${code}") {
      name,
      capital,
      currency,
      emoji
    }
  }
`;

function Country(props) {
  const { loading, error, data } = useQuery(getCountry(props.code));
  if (loading) return <p>Give me a sec...</p>;
  if (error) return <p>Ups. Em... I swear this is the first time this happens.</p>;

  const { country } = data;

  return (
    <main>
      <h1>
        Country of the day is
        {country.emoji}
        {country.name}
      </h1>
      <section>
        <News query={country.name} />
      </section>
    </main>
  );
}

export default Country;
