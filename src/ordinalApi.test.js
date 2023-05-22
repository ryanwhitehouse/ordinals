import { getAddressData } from "./ordinalApi";
import axios from 'axios'
import MockAdapter from "axios-mock-adapter";

describe("ordinal API", () => {
    let mock;
  
    beforeAll(() => {
      mock = new MockAdapter(axios);
    });
  
    afterEach(() => {
      mock.reset();
    });

    
    it('getAddressData returns result from API', async () => {
        const address = 'bc1pe6y27ey6gzh6p0j250kz23zra7xn89703pvmtzx239zzstg47j3s3vdvvs'
        
        mock.onGet(`https://blockstream.info/api/address/${address}/utxo`).reply(200, [
            {
                "txid":"60a7f0bcb9831896b8ac382d2b0974e2fe1832932016ddceb91a19d8aaec9635","vout":0,"status":{"confirmed":true,"block_height":788553,"block_hash":"00000000000000000005bd08481dd77d72acc5ebf3e97ab6e5b814b87f8e39a9","block_time":1683402829},"value":546
            }
        ]);
        
        const data = await getAddressData(address)
        expect(data.length).toBeGreaterThan(0)
    })

    it('getAddressData returns empty array instead of errors from API', async () => {
        const address = 'foobar'
        mock.onGet(`https://blockstream.info/api/address/${address}/utxo`).reply(400, undefined);

        const data = await getAddressData(address)
        expect(data.length).toEqual(0)
    })
})