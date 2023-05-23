import { useQuery } from '@tanstack/react-query';

import { checkOrdinalData, getOrdinalDetails } from './ordinalApi'
import { ordinalResultStyles } from "./styles"

const SingleResultRow = ({searchResult}) => {
    debugger
    const { loading, error, data } = useQuery(['checkDetails', searchResult.txid, searchResult.vout], () => {
        return checkOrdinalData(searchResult.txid, searchResult.vout)
    });

    const { isIdle, data: inscriptionData } = useQuery([`ordinal-details-${data?.id}`], () => {
        return getOrdinalDetails(data.id)
    }, {
        isEnabled: !!data
    });

    if (loading || error || isIdle || !data || !inscriptionData || !data.id || !inscriptionData) return

    return (
        <a style={ordinalResultStyles.link} href={`/ordinal/${data.id}`}>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <div style={ordinalResultStyles.resultContainer}>{inscriptionData.inscriptionNumber}</div>
                <div style={ordinalResultStyles.chevronRight}>
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L8 8L1 15" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div> 
        </a>
    )
}

const Results = ({searchResults}) => {
    
    return (
        <>
        {searchResults && searchResults.length > 0 &&
            <div>
              <div style={ordinalResultStyles.resultsLabel}>Results</div>
      
              { searchResults.map(result => <SingleResultRow searchResult={result} />) }
            </div>
          }
      
          {searchResults && searchResults.length <= 0 &&
            <div>
              <div style={ordinalResultStyles.noResultsLabel}>No results found</div>
            </div>
          }
          </>
    )
}

export default Results