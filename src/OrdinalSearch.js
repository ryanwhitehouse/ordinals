import { useState } from "react";
import { getOrdinalData } from './ordinalApi'

import Results from './Results'

import { ordinalSearchStyles } from './styles'
import './index.css';

function OrdinalSearch() {
  const [address, setAddress] = useState()
  const [searchResults, setSearchResults] = useState(null)

  const handleLookup = async () => {
    const addressData = await getOrdinalData(address)

    setSearchResults(addressData)
  }

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
