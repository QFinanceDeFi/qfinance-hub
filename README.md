# QFinance Hub

## A front-end interface to QFinance

### What is QFinance

QFinance is a trustless, decentralized protocol for creating investment pools on Ethereum.
Create your own private or public pool, or join public pools created by other users on the network.
Your assets, held securely, by a decentralized contract. Withdraw some or all of your investment at its
current value at any time in a purely decentralized way.

### How does it work

QFinance is a series of smart contracts. The design is quite simple and is inspired by Uniswap. Pools are
created from a Factory Contract. Simply select the assets you want to invest in, determin the percent of
your portfolio to allocate to each asset, and create the pool. Then you can fund the pool with ETH as many times
as you want.

### What is QFinance Hub

QFinance Hub is a front-end interface into the aforementioned decentralized network. It provides a simple
interface by which to interact with the contracts and pools created. There are no proprietary features to this site.
All functionality available on this site is available through the contracts programatically.

The features available are:

* See all QFinance Pools
* Create a public or private pool
* Deposit ETH into an existing pool (either your own private pool or a public pool)
* Withdraw ETH from a pool

### Get Started

_Note: The app uses Alchemy API for its Ethereum network calls. Before beginning, you must create your own environment in [Alchemy](https://alchemyapi.io). Once you have created your environment, click "View Key" to get your http link with your own connection key._

1. Install NodeJS if not installed already (https://nodejs.org)
2. Install dependencies
   This app uses yarn... if not installed, first run:
   ```bash
      npm install -g yarn
   ```
   Then install dependencies:
   ```bash
      yarn
   ```
3. Create a file at the root of the project called .env.development and add the following values:
   
   GATSBY_ETH_JSONRPC_URL=[your Alchemy http env address]

4. Run development server: 
   ```bash
      gatsby develop
   ```
5. Navigate to localhost:8000 to see the site.

**Note: This is connecting to the same factory contract as the live version! Once deployed to main net, this will be updated to run in the testnet only.**