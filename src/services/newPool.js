import { factory, factoryAddress } from "./init";

export const newPrivatePool = async (name, tokens) => {
    if (window.ethereum.chainId !== "0x2a") {
        alert("You must be on the Kovan testnet! Switch to Kovan in Metamask.")
        return
    }
    let addresses = tokens.map(item => item.address)
    let amounts = tokens.map(item => item.percent)
    let data = factory.methods.newPool(name,
        addresses,
        amounts).encodeABI()
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
        console.log(e);
        return e;
    }
}

export const newPublicPool = async (name, tokens) => {
    if (window.ethereum.chainId !== "0x2a") {
        alert("You must be on the Kovan testnet! Switch to Kovan in Metamask.")
        return
    }
    let addresses = tokens.map(item => item.address)
    let amounts = tokens.map(item => item.percent)
    let data = factory.methods.newPublicPool(
        name,
        addresses,
        amounts).encodeABI();
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