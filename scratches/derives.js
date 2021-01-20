const v = await api.derive.staking.validators()

const accounts = await api.derive.staking.queryMulti(v.validators, {withExposure: true})

