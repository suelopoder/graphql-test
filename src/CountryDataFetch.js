import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Error from './Error';
import Loading from './Loading';

const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      name,
      capital,
      currency,
      emoji
    }
  }
`;

function CountryDataFetch(props) {
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code: props.countryCode.toUpperCase() }
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  const { country } = data;

  return React.cloneElement(props.children, { country });
}

export default CountryDataFetch;
