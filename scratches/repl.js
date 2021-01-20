const { ApiPromise, WsProvider } = require('@polkadot/api');
const provider = new WsProvider("wss://polkadot.api.onfinality.io/public")

const api = await ApiPromise.create({ provider });
