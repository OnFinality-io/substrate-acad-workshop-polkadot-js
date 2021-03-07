// const { ApiPromise, WsProvider } = require('@polkadot/api');
// const provider = new WsProvider("wss://polkadot.api.onfinality.io/public")
//
// const api = await ApiPromise.create({ provider });

const {initApi} = require('./dist/api');
const api = await initApi('wss://...');
