import { useState, useEffect } from "react";
import { useQuery } from '@tanstack/react-query';

import { getOrdinalData } from './ordinalApi'

import Results from './Results'

import { useSearchParams } from "react-router-dom";

import { ordinalSearchStyles } from './styles'
import './index.css';

function OrdinalSearch() {
  let [searchParams] = useSearchParams();
  const addressFromPrevious = searchParams.get('address');

  const [address, setAddress] = useState(addressFromPrevious)

  const { isIdle, data: searchResults, refetch } = useQuery(['ordinalSearch', address], () => {
      return getOrdinalData(address)
  }, {
    // The query will not execute until the userId exists
    enabled: false,
  });

  useEffect(() => {
    if (address) {
      refetch()
    }
  }, [])

  return (
    <div>
      <div style={ordinalSearchStyles.title}>Ordinal Inscription Lookup</div>        

      <label htmlFor="addressInput" style={ordinalSearchStyles.addressLabel}>Owner Bitcoin Address</label>      
      <input id="addressInput" type="text" style={ordinalSearchStyles.addressInput} value={address} onChange={(e) => setAddress(e.target.value)} />

      <button style={ordinalSearchStyles.lookupButton} onClick={refetch}>Look up</button>

      { !isIdle && <Results searchResults={searchResults} /> }
    </div>
  );
}

export default OrdinalSearch;
