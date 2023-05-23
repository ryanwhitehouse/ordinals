import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';

import { getOrdinalDetails, getOrdinalImageDetails } from './ordinalApi'
import { ordinalDetailStyles } from './styles'

const stringShortener = (inputString) => {
    return `${inputString.substring(0, 14)}..${inputString.substring(inputString.length - 14, inputString.length)}`
}

const ImageData = ({ordinalId, data, isImage}) => {
    if (isImage) {
        return (
            <div style={ordinalDetailStyles.imageContainer}>
                <img style={ordinalDetailStyles.image} alt='ordinal' src={`https://ordinals.com/content/${ordinalId}`}></img>
            </div> 
        )
    }
    
    return (
        <div style={ordinalDetailStyles.imageContainer}>
            {JSON.stringify(data, null, 2)}
        </div> 
    )
}

const OrdinalDetails = () => {

    const { ordinalId } = useParams()

    const { loading, error, data } = useQuery([`ordinal-details-${ordinalId}`], () => {
        return getOrdinalDetails(ordinalId)
    });

    const { loading: imageLoading, error: imageError, data: imageData } = useQuery(['ordinalDetailsImage', ordinalId], () => {
        return getOrdinalImageDetails(ordinalId)
    });

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    if (imageError) return `Error! ${error.message}`;
    
    return (
        <div>
            <div style={ordinalDetailStyles.detailsHeaderContainer}>
                <div style={ordinalDetailStyles.detailsHeaderTextContainer}>
                    <a style={ordinalDetailStyles.chevronLeft} href={data?.metadata?.address ? `/?address=${data?.metadata?.address}`: '/'}>
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 1L1.5 8L8.5 15" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                    <div style={ordinalDetailStyles.detailsHeaderText}>Details</div>
                </div>
            </div>
            
            {!!imageData && !imageLoading && !!data &&
                <ImageData data={imageData} ordinalId={ordinalId} isImage={data.metadata["content type"]?.includes('image')} />
            }

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