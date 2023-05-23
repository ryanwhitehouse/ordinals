import { useEffect, useState } from "react";
import { getOrdinalData } from './ordinalApi'

import Results from './Results'

import { useSearchParams } from "react-router-dom";

import { ordinalSearchStyles } from './styles'
import './index.css';

function OrdinalSearch() {
  let [searchParams] = useSearchParams();
  const addressFromPrevious = searchParams.get('address');

  const [address, setAddress] = useState(addressFromPrevious)
  const [searchResults, setSearchResults] = useState(null)

  const handleLookup = async () => {
    const addressData = await getOrdinalData(address)

    setSearchResults(addressData)
  }

  useEffect(() => {
    if (address) {
      handleLookup()
    }
  }, [])

  return (
    <div>
      <div style={ordinalSearchStyles.title}>Ordinal Inscription Lookup</div>        

      <label htmlFor="addressInput" style={ordinalSearchStyles.addressLabel}>Owner Bitcoin Address</label>      
      <input id="addressInput" type="text" style={ordinalSearchStyles.addressInput} value={address} onChange={(e) => setAddress(e.target.value)} />

      <button style={ordinalSearchStyles.lookupButton} onClick={handleLookup}>Look up</button>

      <Results searchResults={searchResults} />
    </div>
  );
}

export default OrdinalSearch;
