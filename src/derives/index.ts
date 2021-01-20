import {DeriveCustom} from '@polkadot/api-derive';
import {ApiInterfaceRx} from "@polkadot/api/types";
import {AccountId} from "@polkadot/types/interfaces";
import {AnyNumber} from "@polkadot/types/types";
import {memo} from '@polkadot/api-derive/util';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

import {KittyExtend, KittyGender} from './types';
import {KittyIndex} from "../interfaces";

export default {
    kitties: {
        getKitty(instanceId: string, api: ApiInterfaceRx): (accountId: AccountId | string | Uint8Array, kittyId: KittyIndex | AnyNumber | Uint8Array) => Observable<KittyExtend | undefined> {
          return memo(instanceId, (accountId: AccountId | string | Uint8Array, kittyId: KittyIndex | AnyNumber | Uint8Array): Observable<KittyExtend | undefined> =>
              api.query.kitties.kitties(accountId, kittyId).pipe(map(kitty => {
                  if (kitty.isEmpty) {
                      return undefined;
                  }
                  const gender = kitty.unwrap().toU8a()[0] % 2 ? KittyGender.Female : KittyGender.Male;
                  return {
                      id: api.registry.createType<'KittyIndex'>('KittyIndex', kittyId),
                      dna: kitty.unwrap(),
                      gender,
                  };
              })));
        }
    }
};

