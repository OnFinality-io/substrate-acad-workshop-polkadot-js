const { HttpProvider, WsProvider } = require('@polkadot/rpc-provider');

const wsProvider = new WsProvider("wss://rpc.polkadot.io")

const httpProvider = new HttpProvider("https://polkadot.api.onfinality.io/public")

const { ApiPromise } = require('@polkadot/api');

const api = await ApiPromise.create({ provider: httpProvider });

const api2 = await ApiPromise.create({ provider: wsProvider });
