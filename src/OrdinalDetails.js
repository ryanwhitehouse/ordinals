import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';

import { getOrdinalDetails } from './ordinalApi'
import { ordinalDetailStyles } from './styles'

const stringShortener = (inputString) => {
    return `${inputString.substring(0, 14)}..${inputString.substring(inputString.length - 14, inputString.length)}`
}

const OrdinalDetails = () => {

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
            
            {!!data &&
            <>
                <div style={ordinalDetailStyles.inscriptionLabel}>{data?.inscriptionNumber}</div>
                
                <div style={ordinalDetailStyles.metadataLabel}>Inscription ID</div>
                <div style={ordinalDetailStyles.metadataField}>{data.metadata.id}</div>

                <div style={ordinalDetailStyles.metadataLabel}>Owner Address</div>
                <div style={ordinalDetailStyles.metadataField}>{data.metadata.address}</div>
                
                <div style={ordinalDetailStyles.attributesLabel}>Attributes</div>

                <div style={ordinalDetailStyles.metadataLabel}>Output Value</div>
                <div style={ordinalDetailStyles.attributeContainer}>
                    <div style={ordinalDetailStyles.attributeField}>{data.metadata["output value"]}</div>
                </div>

                <div style={ordinalDetailStyles.metadataLabel}>Content Type</div>
                <div style={ordinalDetailStyles.attributeContainer}>
                    <div style={ordinalDetailStyles.attributeField}>{data.metadata["content type"]}</div>
                </div>

                <div style={ordinalDetailStyles.metadataLabel}>Content Length</div>
                <div style={ordinalDetailStyles.attributeContainer}>
                    <div style={ordinalDetailStyles.attributeField}>{data.metadata["content length"]}</div>
                </div>

                <div style={ordinalDetailStyles.metadataLabel}>Location</div>
                <div style={ordinalDetailStyles.attributeContainer}>
                    <div style={ordinalDetailStyles.attributeField}>{stringShortener(data.metadata.location)}</div>
                </div>

                <div style={ordinalDetailStyles.metadataLabel}>Genesis Transaction</div>
                <div style={ordinalDetailStyles.attributeContainer}>
                    <div style={ordinalDetailStyles.attributeField}>{stringShortener(data.metadata["genesis transaction"])}</div>
                </div>
            </>
            }
        </div>
    )
}

export default OrdinalDetails

// <img style={{width: '375px', height: '375px'}} alt='ordinal' src='..'></img>