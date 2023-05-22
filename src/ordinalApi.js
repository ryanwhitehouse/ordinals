import fakeData from './fakeData.json'

const getAddressData = (address) => {
    return Promise.resolve(fakeData.addressData)
}

export { getAddressData }