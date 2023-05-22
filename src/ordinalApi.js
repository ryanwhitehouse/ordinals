import axios from 'axios'

const getAddressData = async (address) => {
    
    const response = await axios.get(`https://blockstream.info/api/address/${address}/utxo`)
        .then(response => response.data)
        .catch(_ => Promise.resolve([]))
    
    return response
}

export { getAddressData }