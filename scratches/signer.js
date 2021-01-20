// set signer

// const signer = ...;
// const api = await ApiPromise.create({ provider: httpProvider, signer });

// in-memory wallet: https://github.com/polkadot-js/api/blob/master/packages/api/test/util/SingleAccountSigner.ts

// chrome extension
// check https://github.com/polkadot-js/apps/blob/master/packages/react-api/src/Api.tsx

const { web3Accounts, web3Enable } = require('@polkadot/extension-dapp');
const injectedExtension = await web3Enable('polkadot-js/apps');


const api = await ApiPromise.create({ provider: httpProvider, signer: injectedExtension.signer });

const accounts = await web3Accounts();

