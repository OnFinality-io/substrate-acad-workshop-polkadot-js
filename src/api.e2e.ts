import {initApi} from "./api";

import {KittyExtend} from "./derives/types";

describe('test our customized api', () => {
   test('can connect', async () => {
       await expect(initApi()).resolves.toBeTruthy();
   })
    test('can query KittyExtend', async () => {
        const api = await initApi();
        const kitty: KittyExtend = await (api.derive as any).kitties.getKitty('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', 0);
        expect(kitty).toBeTruthy();
        expect(kitty.gender).toBeTruthy();
    })
});