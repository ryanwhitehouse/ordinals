import { useState } from "react";
import fakeData from './fakeData.json'
import { backgroundColor } from './theme'

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
      <div style={{
        background: backgroundColor,
        paddingTop: '54px',
        paddingBottom: '17px',

        textAlign: 'center',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '17px',
        color: 'white'
      }}>Ordinal Inscription Lookup</div>      

      <label htmlFor="addressInput">Owner Bitcoin Address</label>      
      <input id="addressInput" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

      <button onClick={handleLookup}>Look up</button>

    {searchResults && 
      <div>
        <div>Results</div>

        <p>{searchResults?.map(result => result.txid + '\n')}</p>
      </div>
    }
    </div>
  );
}

export default OrdinalSearch;
