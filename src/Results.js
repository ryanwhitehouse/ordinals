import { useQuery } from '@tanstack/react-query';

import { checkOrdinalData, getOrdinalDetails } from './ordinalApi'
import { ordinalResultStyles } from "./styles"

const SingleResultRow = ({searchResult}) => {
    const { loading, error, data } = useQuery(['checkDetails', searchResult.txid, searchResult.vout], () => {
        return checkOrdinalData(searchResult.txid, searchResult.vout)
    });

    const { isIdle, data: inscriptionData } = useQuery(['ordinalDetails', data?.id], () => {
        return getOrdinalDetails(data?.id)
    }, {
        isEnabled: !!data
    });

    if (loading || error || isIdle || !data || !inscriptionData || !data.id || !inscriptionData) return

    return (
        <a key={data.id} style={ordinalResultStyles.link} href={`/ordinal/${data.id}`}>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                { inscriptionData?.metadata?.["content type"]?.includes('image') &&
                <div style={ordinalResultStyles.imageContainer}>
                    <img style={ordinalResultStyles.image} alt='ordinal' src={`https://ordinals.com/content/${data.id}`}></img>
                </div> 
                }
        
                <div style={ordinalResultStyles.resultContainer}>{inscriptionData.inscriptionNumber}</div>
                <div style={ordinalResultStyles.chevronRight}>
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L8 8L1 15" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
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