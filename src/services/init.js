const Web3 = require('web3');
const raw = require("./QPoolFactory.json");
const rawPool = require("./QPool.json");
const rawPoolPublic = require("./QPoolPublic.json");
const rawStakingFactory = require("./QPoolStakingFactory.json");
const rawRewardsContract = require("./QPoolRewards.json");
const rawTokenContract = require("./IERC20.json");
const rawAirdropContract = require("./QAirdrop.json");

export const web3 = new Web3(new Web3.providers.HttpProvider(process.env.GATSBY_ETH_JSONRPC_URL));

export const factoryAddress = "0xA1EDD4e98e353cAD59ab080Ca25E1b856BC5E30b";
export const poolAbi = rawPool.abi;
export const poolPublicAbi = rawPoolPublic.abi;
export const factory = new web3.eth.Contract(raw.abi, factoryAddress);
export const stakingFactory = rawStakingFactory.abi;
export const rewardsContract = rawRewardsContract.abi;
export const IERC20 = rawTokenContract.abi;
export const airdropContract = rawAirdropContract.abi;