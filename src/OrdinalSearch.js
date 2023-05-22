import { useState } from "react";
import fakeData from './fakeData.json'
import { ordinalSearchStyles } from './styles'
import './index.css';

function OrdinalSearch() {
  const [address, setAddress] = useState()
  const [searchResults, setSearchResults] = useState()

  const handleLookup = () => {
    // const addressDataDecoded = JSON.parse(fakeData.addressData)
    const addressDataDecoded = fakeData.addressData
    setSearchResults(addressDataDecoded)
  }

  return (
    <div>
      <div style={ordinalSearchStyles.title}>Ordinal Inscription Lookup</div>        

      <label htmlFor="addressInput" style={ordinalSearchStyles.addressLabel}>Owner Bitcoin Address</label>      
      <input id="addressInput" type="text" style={ordinalSearchStyles.addressInput} value={address} onChange={(e) => setAddress(e.target.value)} />

      <button style={ordinalSearchStyles.lookupButton} onClick={handleLookup}>Look up</button>

    {searchResults && 
      <div>
        <div style={ordinalSearchStyles.resultsLabel}>Results</div>

        <p>{searchResults?.map(result => result.txid + '\n')}</p>
      </div>
    }
    </div>
  );
}

export default OrdinalSearch;
