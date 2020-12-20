import { factory, factoryAddress } from "./init";

export const newPool = async (name, tokens, isPublic) => {
    let addresses = tokens.map(item => item.address)
    let amounts = tokens.map(item => item.percent)
    let data;
    if (isPublic) {
        data = factory.methods.newPublicPool(
            name,
            addresses,
            amounts).encodeABI();
    } else if (!isPublic) {
        data = factory.methods.newPool(name,
            addresses,
            amounts).encodeABI()
    }
    
    const transactionParameters = {
        to: factoryAddress,
        from: window.ethereum.selectedAddress,
        value: 0x0,
        data,
    }
    try {
        const txhash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters]
        })
        console.log(txhash);
        return txhash;
    }
    catch(e) {
        console.log(e)
        return e;
    }    
}