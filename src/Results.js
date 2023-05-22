import { ordinalSearchStyles } from "./styles"

const Results = ({searchResults}) => {
    return (
        <>
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
          </>
    )
}

export default Results