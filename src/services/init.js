const Web3 = require('web3');
const raw = require("./QPoolFactory.json");
const rawPool = require("./QPool.json");
const rawPoolPublic = require("./QPoolPublic.json");
require('dotenv').config()

export const web3 = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_web3api));
export const connectMetamask = () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      return true;
    }
    return false;
  }

export const factoryAddress = "0x4A351F305f5B4AbB9eE307e1f458AEdaF5D357fD";
export const poolAbi = rawPool.abi;
export const poolPublicAbi = rawPoolPublic.abi; 

export const factory = new web3.eth.Contract(raw.abi, factoryAddress);
