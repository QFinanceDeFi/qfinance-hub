import { factory, poolPublicAbi, web3 } from "./init";

export const getPools = async (isPublic) => {
    try {
        let pools = isPublic ?
            await factory.methods.getPublicPools().call()
            :
            await factory.methods.getPrivatePools().call();
        let res = [];
        if (pools.length > 0) {
            pools.map(async (addr) => {
                let contract = new web3.eth.Contract(poolPublicAbi, addr);
                let creator = await contract.methods.creator().call();
                let poolName = await contract.methods.poolName().call();
                let currentValue = await contract.methods.totalValue().call();
                let isPublic = await contract.methods.isPublic().call();
                res.push({
                    poolAddress: addr,
                    poolName: poolName,
                    creator: creator,
                    currentValue: Number(web3.utils.fromWei(web3.utils.toHex(new web3.utils.BN(currentValue.toString())), 'ether')),
                    isPublic: isPublic
                })
            })
        }
        return res;
    }
    catch (e) {
        return e;
    }
}

export const getPool = async (address) => {
    try {
        let pool = await new web3.eth.Contract(poolPublicAbi, address);
        let poolName = await pool.methods.poolName().call();
        let tokens = await pool.methods.getTokens().call();
        let amounts = await pool.methods.getAmounts().call();
        let currentValue = await pool.methods.totalValue().call();
        let creator = await pool.methods.creator().call();
        let isPublic = await pool.methods.isPublic().call();
        let breakdown = [];
        tokens.map((item, index) => {
            breakdown.push({
                address: item,
                percent: amounts[index]
            })
            return true;
        })
        let output = {
            poolName,
            creator,
            currentValue: web3.utils.fromWei(currentValue, 'ether'),
            isPublic,
            breakdown
        }
        return output;
    }
    catch(e) {
        return false
    }
}