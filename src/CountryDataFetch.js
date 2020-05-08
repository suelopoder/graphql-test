import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Error from './Error';
import Loading from './Loading';

const GET_COUNTRY = gql`
  query {
    countryOfTheDay {
      name
      capital
      currency
      emoji
      code
      languages
      area
      population
      svgUrl
    }
  }
`;

function CountryDataFetch(props) {
  const { loading, error, data } = useQuery(GET_COUNTRY);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  const { countryOfTheDay: country } = data;

  return React.cloneElement(props.children, { country });
}

export default CountryDataFetch;
