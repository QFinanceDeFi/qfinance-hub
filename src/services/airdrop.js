import { airdropContract, web3 } from "./init";
const address = "0x825d6A67cdCF897F94ea7F6f11Fb715D6CF81A1c";

export const airdropSignUp = async () => {
    if (!window.ethereum) {
        return false
    }
    const airdrop = await new web3.eth.Contract(airdropContract, address);
    const data = await airdrop.methods.signUp().encodeABI();
    const transactionParameters = {
        to: address,
        from: window.ethereum.selectedAddress,
        value: 0x00,
        data
    }

    try {
        const txhash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters]
        });
        console.log(txhash);
        return txhash
    }
    catch(e) {
        console.log(e);
        return false;
    }
}

export const isSignee = async () => {
    if (!window.ethereum) {
        return false
    }

    const airdrop = await new web3.eth.Contract(airdropContract, address);
    try {
        let signedUp = await airdrop.methods.isSignee(window.ethereum.selectedAddress).call();
        return signedUp
    }
    catch (e) {
        console.log(e);
        return false
    }
}

export const claimAirdrop = async () => {
    if (!window.ethereum) {
        return false
    }

    const airdrop = await new web3.eth.Contract(airdropContract, address);
    const data = await airdrop.methods.claim().encodeABI();
    const transactionParameters = {
        to: address,
        from: window.ethereum.selectedAddress,
        value: 0x00,
        data
    }

    try {
        const txhash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters]
        });
        console.log(txhash);
        return txhash
    }
    catch(e) {
        console.log(e);
        return false;
    }
}