import { rewardsContract, IERC20, web3 } from "./init";

export const getStakingDetails = async (address) => {

    let contract = await new web3.eth.Contract(rewardsContract, address);

    try {
        let stakingToken = await contract.methods.stakingToken().call();
        let periodFinish = await contract.methods.periodFinish().call();
        let reward = web3.utils.fromWei(await contract.methods.getRewardForDuration().call(), 'ether');
    
        let output = {
            stakingToken,
            periodFinish,
            reward
        }

        return output;
    }
    catch(e) {
        return e
    }

}

export const getTokenBalance = async (stakingToken) => {
    if (!window.ethereum || !window.ethereum.selectedAddress) { return '0'}
    let contract = await new web3.eth.Contract(IERC20, stakingToken);
    let balance = web3.utils.fromWei(await contract.methods.balanceOf(window.ethereum.selectedAddress).call(), 'ether');
    return balance
}

export const checkAllowance = async (stakingToken, rewardsContract) => {
    if (!window.ethereum || !window.ethereum.selectedAddress) {
        return '0'
    }
    let contract = await new web3.eth.Contract(IERC20, stakingToken);
    let allowance = web3.utils.fromWei(await contract.methods.allowance(window.ethereum.selectedAddress, rewardsContract).call(), 'ether');
    return allowance
}

export const approveStaking = async (address, stakingToken, amount) => {
    if (!window.ethereum || !window.ethereum.selectedAddress) { return false}
    if (window.ethereum.chainId !== "0x2a") {
        alert("You must be on the Kovan testnet! Switch to Kovan in Metamask.")
        return
    }

    let contract = await new web3.eth.Contract(IERC20, stakingToken);
    let stakeAmount = web3.utils.toWei(amount, 'ether');
    let data = await contract.methods.approve(address, stakeAmount).encodeABI();

    let transactionParameters = {
        to: stakingToken,
        from: window.ethereum.selectedAddress,
        value: 0x00,
        data
    }

    try {
        const txhash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters]
        })
        console.log(txhash);
        return txhash
    }
    catch(e) {
        console.log(e);
        return false;
    }

}

export const sendStake = async (address, amount) => {
    if (!window.ethereum || !window.ethereum.selectedAddress) { return false}
    if (window.ethereum.chainId !== "0x2a") {
        alert("You must be on the Kovan testnet! Switch to Kovan in Metamask.")
        return
    }

    let contract = await new web3.eth.Contract(rewardsContract, address);
    let stakeAmount = web3.utils.toWei(amount, 'ether');
    let data = await contract.methods.stake(stakeAmount).encodeABI();

    let transactionParameters = {
        to: address,
        from: window.ethereum.selectedAddress,
        value: 0x00,
        data
    }

    try {
        const txhash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters]
        })
        console.log(txhash);
        return txhash
    }
    catch(e) {
        console.log(e)
        return false
    }
}

export const getEarnings = async (address) => {
    if (!window.ethereum || !window.ethereum.selectedAddress) { return '0'}
    if (window.ethereum.chainId !== "0x2a") {
        alert("You must be on the Kovan testnet! Switch to Kovan in Metamask.")
        return '0'
    }

    try {
        let contract = await new web3.eth.Contract(rewardsContract, address);
        let earnedAmount = web3.utils.fromWei(await contract.methods.earned(window.ethereum.selectedAddress).call(), 'ether');
        return earnedAmount;
    }
    catch(e) {
        console.log(e);
        return '0';
    }
}

export const claimEarnings = async (address) => {
    if (!window.ethereum || !window.ethereum.selectedAddress) { return false}
    if (window.ethereum.chainId !== "0x2a") {
        alert("You must be on the Kovan testnet! Switch to Kovan in Metamask.")
        return
    }

    try {
        let contract = await new web3.eth.Contract(rewardsContract, address);
        let data = await contract.methods.getReward().encodeABI();
        let transactionParameters = {
            to: address,
            from: window.ethereum.selectedAddress,
            value: 0x00,
            data
        }
        const txhash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters]
        })
        return txhash
    }
    catch(e) {
        console.log(e);
        return false;
    }
}

export const getStakingBalance = async (address) => {
    if (!window.ethereum || !window.ethereum.selectedAddress) { return '0'}
    if (window.ethereum.chainId !== "0x2a") {
        alert("You must be on the Kovan testnet! Switch to Kovan in Metamask.")
        return '0'
    }

    try {
        let contract = await new web3.eth.Contract(rewardsContract, address);
        let stakingBalance = web3.utils.fromWei(await contract.methods.balanceOf(window.ethereum.selectedAddress).call(), 'ether');
        return stakingBalance;
    }
    catch(e) {
        console.log(e);
        return '0'
    }
}

export const withdrawStakingaBalacence = async (address, amount) => {
    if (!window.ethereum || !window.ethereum.selectedAddress) { return false}
    if (window.ethereum.chainId !== "0x2a") {
        alert("You must be on the Kovan testnet! Switch to Kovan in Metamask.")
        return false
    }

    try {
        let contract = await new web3.eth.Contract(rewardsContract, address);
        let withdrawAmount = web3.utils.toWei(amount);
        let data = await contract.methods.withdraw(withdrawAmount).encodeABI();
        let transactionParameters = {
            to: address,
            from: window.ethereum.selectedAddress,
            value: 0x00,
            data
        }
        const txhash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters]
        })
        return txhash 
    }
    catch(e) {
        console.log(e)
        return false;
    }
}