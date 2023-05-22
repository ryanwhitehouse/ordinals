import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';

import { getOrdinalDetails } from './ordinalApi'
import { ordinalDetailStyles } from './styles'

const OrdinalDetails = () => {

    debugger
    const { ordinalId } = useParams()

    const { loading, error, data } = useQuery([`ordinal-details-${ordinalId}`], () => {
        return getOrdinalDetails(ordinalId)
    });

    if (loading) return "Loading...";

    if (error) return `Error! ${error.message}`;
    
    return (
        <div>
            <div style={ordinalDetailStyles.detailsHeaderContainer}>
                <div style={ordinalDetailStyles.detailsHeaderTextContainer}>
                    <a style={ordinalDetailStyles.chevronLeft} href="/">
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 1L1.5 8L8.5 15" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                    <div style={ordinalDetailStyles.detailsHeaderText}>Details</div>
                </div>
            </div>
            <img style={{width: '375px', height: '375px'}} alt='ordinal' src='..'></img>
            <div>Inscription Number: {data?.inscriptionNumber}</div>
            <div>Metadata: {JSON.stringify(data?.metadata)}</div>
        </div>
    )
}

export default OrdinalDetails