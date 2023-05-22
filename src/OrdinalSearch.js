import { useState } from "react";
import { getOrdinalData } from './ordinalApi'

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

    {searchResults && searchResults.length > 0 &&
      <div>
        <div style={ordinalSearchStyles.resultsLabel}>Results</div>

        <p>{searchResults?.map(result => `Inscription ${result.id?.substring(0,5)}`)}</p>
      </div>
    }

    {searchResults && searchResults.length <= 0 &&
      <div>
        <div style={ordinalSearchStyles.noResultsLabel}>No results found</div>
      </div>
    }
    </div>
  );
}

export default OrdinalSearch;
