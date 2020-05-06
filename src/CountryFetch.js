import React, { useEffect, useState } from 'react';
import Error from './Error';
import Loading from './Loading';

const COUNTRY_URL = 'http://localhost:3001/api/country';

function CountryFetch(props) {
  const [countryCode, setCountryCode] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(COUNTRY_URL)
      .then(data => data.json())
      .then(data => setCountryCode(data.code))
      .catch(setError);
  }, []);

  if (error) return <Error error={error} />;
  if (!countryCode) return <Loading />;
  return React.cloneElement(props.children, { countryCode });
}

export default CountryFetch;
