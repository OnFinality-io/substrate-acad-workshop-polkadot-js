import './interfaces/augment-api';
import './interfaces/augment-types';

import {ApiPromise, WsProvider} from "@polkadot/api";

import * as definitions from './interfaces/definitions';
import derives from './derives';
import {METADATA} from './metadata';

export async function initApi(endpoint: string = 'ws://localhost:9944'): Promise<ApiPromise>{
    const provider = new WsProvider(endpoint);
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

    return ApiPromise.create({ provider, types, derives, metadata: METADATA });
}


