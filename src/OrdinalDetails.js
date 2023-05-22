import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';

import { getOrdinalDetails } from './ordinalApi'

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
            <div>Inscription Number: {data?.inscriptionNumber}</div>
            <div>Metadata: {JSON.stringify(data?.metadata)}</div>
        </div>
    )
}

export default OrdinalDetails