import { poolPublicAbi, web3 } from "./init";

export const depositEth = async (address, amount) => {
    if (window.ethereum.chainId !== "0x2a") {
        alert("You must be on the Kovan testnet! Switch to Kovan in Metamask.")
        return
    }
    let pool = await new web3.eth.Contract(poolPublicAbi, address);
    let data = await pool.methods.processDeposit().encodeABI();
    const transactionParameters = {
        to: address,
        from: window.ethereum.selectedAddress,
        value: web3.utils.toHex(web3.utils.toWei(amount, 'ether')),
        data
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