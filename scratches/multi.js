const addr1 = '15rb4HVycC1KLHsdaSdV1x2TJAmUkD7PhubmhL3PnGv7RiGY';
const addr2 = '15aHjmPM8WTr1KzCZhuEW5YQtQnxeaZTsUuZB67w9nwYiYCT';

const [account1, account2] = await api.query.system.account.multi([addr1, addr2]);

const [account, sessionKey] = await api.queryMulti(
    [
        [api.query.system.account, addr1],
        [api.query.session.nextKeys, addr1]
    ]);

