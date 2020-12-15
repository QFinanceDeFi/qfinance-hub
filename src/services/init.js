const Web3 = require('web3');
const raw = require("./QPoolFactory.json");
const rawPool = require("./QPool.json");
const rawPoolPublic = require("./QPoolPublic.json");
const rawStakingFactory = require("./QPoolStakingFactory.json");
const rawRewardsContract = require("./QPoolRewards.json");
const rawTokenContract = require("./IERC20.json");

export const web3 = new Web3(new Web3.providers.HttpProvider(process.env.GATSBY_ETH_JSONRPC_URL));

export const factoryAddress = "0x4A351F305f5B4AbB9eE307e1f458AEdaF5D357fD";
export const poolAbi = rawPool.abi;
export const poolPublicAbi = rawPoolPublic.abi;
export const factory = new web3.eth.Contract(raw.abi, factoryAddress);
export const stakingFactory = rawStakingFactory.abi;
export const rewardsContract = rawRewardsContract.abi;
export const IERC20 = rawTokenContract.abi;