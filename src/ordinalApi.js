import axios from 'axios'

const getAddressData = async (address) => {
    
    const response = await axios.get(`https://blockstream.info/api/address/${address}/utxo`)
        .then(response => response.data)
        .catch(_ => Promise.resolve([]))
    
    return response
}

const checkOrdinalData = async (transactionId, outputIndex) => {
    const response = await axios.get(`https://api.xverse.app/v1/ordinals/output/${transactionId}/${outputIndex}`)
        .then(response => response.data)
        .catch(_ => Promise.resolve([]))

    return response
}

const getOrdinalData = async (address) => {
    const data = await getAddressData(address)

    // TODO: This will need changing to handle large data sets (pagination?)
    const ordinalData = await Promise.all(data.map(async txRow => {
        const ordinalData = await checkOrdinalData(txRow.txid, txRow.vout)

        return ordinalData
    }))

    return ordinalData.filter(x => x.id)
}

const getOrdinalDetails = async (ordinalId) => {
    const response = await axios.get(`https://api.xverse.app/v1/ordinals/${ordinalId}`)
        .then(response => response.data)
        .catch(_ => Promise.resolve({})) // TODO: Need to handle this error case

    return response
}

const getOrdinalImageDetails = async (ordinalId) => {
    const response = await axios.get(`https://ordinals.com/content/${ordinalId}`)
        .then(response => response.data)
        .catch(_ => Promise.resolve({})) // TODO: Need to handle this error case
        
    return response
}

export { getAddressData, getOrdinalData, getOrdinalDetails, getOrdinalImageDetails }