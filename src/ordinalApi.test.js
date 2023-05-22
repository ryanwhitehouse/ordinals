import { getAddressData } from "./ordinalApi";
import axios from 'axios'

jest.mock('axios')

const setupMock = (data, reject = false) => {
    if (reject) {
        axios.get.mockImplementation(() => Promise.reject(data))
    } else {
        axios.get.mockImplementation(() => Promise.resolve(data))
    }
    
}

test('getAddressData returns result from API', async () => {
    const address = 'bc1pe6y27ey6gzh6p0j250kz23zra7xn89703pvmtzx239zzstg47j3s3vdvvs'
    setupMock({status: 200, data: [
        {
            "txid":"60a7f0bcb9831896b8ac382d2b0974e2fe1832932016ddceb91a19d8aaec9635","vout":0,"status":{"confirmed":true,"block_height":788553,"block_hash":"00000000000000000005bd08481dd77d72acc5ebf3e97ab6e5b814b87f8e39a9","block_time":1683402829},"value":546
        }
    ]})

    const data = await getAddressData(address)
    expect(data.length).toBeGreaterThan(0)
});

test('getAddressData returns empty array instead of errors from API', async () => {
    setupMock({status: 400, data: undefined}, true)
    
    const data = await getAddressData('foobar')
    expect(data.length).toEqual(0)
});