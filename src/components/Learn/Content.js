export const about =
`
# What is QFinance?

QFinance is a decentralized protocol enabling users to create and join Ethereum-based investment
pools in a trustless, decentralized manner. Each pool consists of underlying assets (generally but not
necessarily ERC20 tokens on Ethereum) determined at pool creation.

## How does it work?

As noted above, a QFinance pool is created with a breakdown of assets that represent the portfolio. When
new ETH is deposited to the pool, the pool will acquire the tokens as determined by their breakdown
and hold them on the user's behalf. At any time, a user may call the withdraw function on the contract
to retrieve some or all of their principal.

## Public or Private

Pools can be public or private. Private pools are quite simple - only the user who creates the pool may
deposit and withdraw from it. The construction and function of these pools is straightforward.

For public pools, there is added complexity to ensure users are fairly compensated for the amount of ETH
deposited and the growth (or loss) of value over time. That is, users' profits and losses are calculated
based on when they deposited and when they withdrew the funds accordingly, as it should.

## Deposit Tokens

As part of the calculation of public pool ownership, an ERC20 token is returned to the user that represents
their ownership stake in the overall pool. The pool will grow as new participants join, and existing participants
will have a smaller share of a larger pool, equalling out the value. Deposit tokens can be staked to earn QFI,
a reward and governance token used by QFinance. Additionally, network participants are free to set up their own
staking systems and rewards to provide users an incentive to join their pool.

## Differentiators

There are similar asset/investment pool protocols available. QFinance has a few unique features. 

First, many of the similar investment pool protocols require a "manager" or follow an index. These are great solutions for
some cases, but QFinance has a different vision. In the future, public pools will be managed entirely by the depositors.
The creator may set an initial vision for the fund (i.e. "DeFi Blue Chips"). But investors in the pool will have the ability
to vote on rebalancing decisions (when/how) through their stake of QPDTs. A traditional ETF is managed by a fund manager; QPools
are managed by the users directly.

Second, QFinance seeks to be a protocol owned and managed by the community. Through staking of deposit tokens, new QFI tokens are
granted to the users of the protocol. Additional staking pools reward QFI holders, and QFI-ETH Uniswap liquidity providers with new
QFI. This way, the project rewards its ecosystem with new QFI tokens. The QFI tokens are then used to vote on protocol decisions, such
as staking pool reward allocation, and new feature prioritization.

Lastly, QFinance is a simple solution. If you just want to invest in a pool and earn some QFI, it is super easy and always will be.

## Is QFinance Centralized?

There is absolutely no central party with any control whatsover over the QFinance protocol. This website is a simple
front end to interact with the QFinance Factory Contract, which is open source. That means anyone can review the code,
verify its lack of control mechanisms, create a new front-end interface (or use development or CLI tools), or even fork
the code into a completely new system. No one can stop QFinance without stopping Ethereum first.

Private pools are controlled by the user who creates them, and can only be interacted with by the owner. Public pools,
on the other hand, can be interacted with by anyone in a trustless way. That is, even if the creator of the asset pool
is a known scammer, the only financial risk a user takes is related to the value of the underlying asset. The creator
of a pool has no means to steal or siphon funds from other users no matter how nefarious they are.

QFinance uses Uniswap, by far the most popular decentralized exchange protocol, as the mechanism for exchanges. Uniswap
also acts as the oracle to gain price insights from a trustless source.

QFinance is entirely, 100% decentralized.

## QFinance Use Cases

1. Get exposure to multiple Ethereum-based assets in one simple, manageable interface and transaction.
2. Join a well performing or otherwise attractive asset pool created by another user.
3. Create a public asset pool and invite users to join your investment. Prove your crypto investing prowess and
even create staking programs for users to earn other coins as a reward for participating.
4. Compete with others in your private pools on the public leaderboard.
`

export const qhub =
`
# What is QFinance Hub (this website)

QFinance Hub is a front-end to the QFinance system. In more technical terms, it is an application that provides
a simple front-end interface to interact with the QFinance Factory Contract (to create new pools) and to interact
with QFinance Pool Contracts (to deposit, withdraw, and explore pools). This website is developed entirely via
client-side programming, meaning all activities occur on the user's local machine. In any case, the system uses
web3 wallets such as Metamask to create and sign transactions, and is therefore protected against theft of private
keys and other sensitive data.

This website, like all aspects of QFinance, are open source and have their code available on GitHub for exploration,
auditing, and reference. Additionally, anyone on the network can build their own front-end to interact
with the QFinance Factory Contract. Anyone could theoretically take the QFinance contract code and fork it to create
a completely separate system if they so wish. Such is the nature of decentralized protocols.
`

export const create = `
# Create an asset pool
    
QFinance provides the ability to create asset pools on Ethereum. When creating a pool the user
has the ability to select different Ethereum-based assets and determine a percentage of the
portfolio to allocate to each.

Each pool is represented by a smart contract on the Ethereum network. When a user funds a smart
contract with ETH, the contract will buy in the proportions determined by the user when creating
the smart contract.

## Public or Private

Pools can be private or public. Private pools can only be funded and managed by the user who
creates it. Public pools are created by a single user, but anyone can deposit ETH to the contract
and take part in the investment pool. At any point, with both private and public pools, a user can
withdraw some or all of their investment. Investments are made in ETH and are retrieved in ETH. The
contract will buy and sell when a user deposits and withdraws, respectively.

## Use Cases

* Create a pool of assets related to one asset class (i.e. "DeFi Tokens")
* Gain exposure to multiple assets without managing separate transactions.
* Join a well performing public pool created by someone else.

## Decentralization

Pools created via QFinance are completely decentralized. The underlying contracts are available on
the Ethereum network, meaning this website is simply an interface to the decentralized network. Check
the developer documentation for more information.

There is no central party who manages QFinance - the system is comprised of a series of smart contracts
deployed on Ethereum. The original developers have no control over the system, nor do any of the
participants in QFinance or Ethereum generally.
`

export const join =
`
# Join an asset pool

To join an asset pool, you can use the browse feature or search for the contract address of a pool. On
the pools page you can see a list of previously created pools and their breakdown of assets. This
will help you decide which pools are worth contributing to.

## How it works

The initial user determines the breakdown of assets within the pool. If they select "Public" when
creating the pool, any user on the Ethereum network will be able to contribute to and take part in
the pool. User deposits do not have any impact on other users' deposits - each user is granted a
percentage of the pool when they contribute ETH, based on the amount of ETH deposited and the value
of the pool, in ETH, at the time of deposit. This way, each user can join an investment pool of their
choosing without relying on any other users.

At this time, pools cannot be rebalanced. Upon creation, pool breakdowns are set for their entire
lifecycle. This feature is to be added in the next version of QFinance.

## Deposit Tokens

When a user deposits ETH, they will receive ERC20 tokens equal to their share of the overall pool.
For example, if a user deposits 1 ETH in a pool that is currently worth 1 ETH, they will receive new
tokens equal to 50% of the total supply of tokens. If the total supply of tokens was 100 prior to
the user's 1 ETH deposit, and the value of the pool was 1 ETH before the deposit, the user will be
minted 100 new tokens.
`

export const deposit =
`
# Deposits

Currently, QFinance pools only accept ETH as a deposit. In the future, Ethereum-based stablecoins
such as USDT and USDC may be supported.

When depositing, the contract will buy an amount of the underlying tokens (as determined by the pool
creator on pool creation) according to the proportions set. At the same time, the pool will return
an ERC20 token to the user that represents their share in the pool. This ERC20 token is worthless
to any other user as it simply reflects ownership in the pool. The tokens are minted on deposit
and burned on withdrawal.

## How it works

For private pools it is quite simple. The pool will simply amass the underlying tokens until the
user decides to withdraw.

For public pools it is slightly more complex. The breakdown, like private pools, is set at creation
and cannot be rebalanced. This is a feature to be added in the future. In a public pool, any Ethereum
user can deposit and take an ownership share in the pool. The user, upon deposit, will receive "shares",
which are just ERC20 tokens, that represent their ownership stake of the overall pool. If the pool is worth
1 ETH prior to a user's 1 ETH deposit, they will be minted an amount of deposit tokens equal to the current
supply of deposit tokens. That is, if a user were to add an equivalent amount of value to the pool that
already exists, they will then own 50% of the overall pool. The initial depositor's ownership stake will go
down from 100% to 50%, but the pool is now worth double so the value remains the same.

## Traditional Analog

Consider the analog, a traditional ETF. The ETF holds a basket of securities, and as people deposit funds
to the ETF, the ETF acquires more shares in the underlying securities. Likewise for QFinance pools, except
instead of traditional securities, the pool will acquire Ethereum-based assets as defined by the contract.

## Deposit Tokens

Deposit tokens can be used to stake on the QFinance Hub site to earn the QFI token as a reward for
participating in the system. It may be possible that individual pool owners create their own staking
functionality outside of the QFinance system. This is the nature of a decentralized protocol. Over time,
it is expected that an ecosystem of asset pools and staking rewards will be created entirely independent
of QFI and used to reward in various cryptocurrencies or other reward programs. This is, however,
entirely dependent on the participants of the network to do this for themselves.
`

export const withdraw =
`
# Withdraw

Withdrawing ETH is very simple. At any time, for either a public or private asset pool, ETH can be withdrawn
partially or entirely (determined by a percentage value). If a user would like to remove 25% of their principal,
for example, they can do so simply through the QFinance Hub site or any other front-end that exists (or even
through development and/or command line interfaces).

## Public Pool Withdrawals

To withdraw ETH from a public pool, the behind-the-scenes process is fairly simple. The user determines
the percentage of their total value to remove. The contract will then calculate a) the user's overall share
of the pool, b) the amount of each token to sell and return the ETH to the user, and c) the amount of deposit
tokens to burn. This is a seamless process - the user simply needs to call the withdrawEth function and pass
a percentage value as a parameter. In this manner, one user's deposits and withdrawals do not impact any other
users' deposits and withdrawals which allows the system to operate in a shared but trustless environment.

## Private Pool Withdrawls

Private pool withdrawls are much simpler as there is only one participant. The pool will simply sell its
underlying assets according to the percentage value that the user requests.
`

export const stake =
`
# Stake Deposit Tokens

When depositing ETH into public QFinance Pools, you will receive QFinance Pool Deposit Tokens (QPDTs) in return, in an
amount relative to your ownership stake in the pool. A user's ownership stake is calculated by taking the user's
QPDTs for a particular pool and dividing it by the total supply.

These tokens can be "staked" - locked in on the QFinance Hub website and used to earn new QFI tokens, a rewards
and governance token issued by the protocol.

## Other Staking Services

It is quite possible, indeed likely, that other parties, websites, and businesses may set up their own pools and
provide their own staking and rewards mechanisms. It is recommended that you review the trustfulness of each service
independently. The QFinance Staking Contract is publicly available as open source code on GitHub for anyone's
review and auditing.
`

export const trade =
`
# Buying and Selling QFI

QFI is now trading on Uniswap! [Click here to trade](https://uniswap.exchange/swap?inputCurrency=0x6fe88a211863d0d818608036880c9a4b0ea86795&outputCurrency=ETH).

## Token Address

QFI token address is 0x6fe88a211863d0d818608036880c9a4b0ea86795

## Locked Liquidity

Liquidity is locked on Unicrypt. Verify by pasting the token address at https://v2.unicrypt.network/tokens.

## Want to provide liquidity?

A strong ecosystem is a key part of any successful DeFi project. Uniswap QFI-ETH liquidity providers can stake their
tokens on the staking page to earn QFI. The founding team has provided initial liquidity, but new LPs are encouraged
to join and strengthen the ecosystem for all, and to earn QFI while doing so!
`

export const start =
`
# Get Started

* Navigate to "Pools" page using the top navigation bar.

## Create Pool

1. If no pools sound interesting, click "New Pool" above the list of pools. A form should pop up on the right side of the screen.
2. Add in your details. You can select the name of the pool (public pools only - private pools do not have a name). You must also
choose at least one asset to add to the pool. Regardless of the amount of assets, the breakdown must equal 100% of course. There
is a toggle switch to determine whether it should be public or private.
3. Once you click "Submit" you will be asked to confirm the transaction via your Web3 wallet. Once confirmed, the transaction is
broadcasted and the new pool is created!
4. If you refresh the page, you should see your pool available to you. Now you can follow the instructions for depositing in
an existing pool.

## Existing Pool

1. Identify the pool you are interested and click on it for more details.
2. You can see the breakdown of assets. It should show the token address/name along with the percentage breakdown of the
portfolio that the token represents.
3. If the pool is of interest to you, add the amount of ETH you'd like to deposit via the form below the breakdown and click
"Deposit ETH". This will bring up your Web3 wallet to confirm.
4. Upon confirmation, the contract will acquire assets on your behalf as per the breakdown of the pool.
5. When you are ready to withdraw, type a percentage value that you would like to withdraw. This percentage is relative to the
amount that you have deposited, your ownership stake of the overall pool, and the current value of the pool. That is, you can deposit
a percentage of the current value of your portion of the pool.
`

export const roadmap =
`
# QFinance Roadmap

QFinance is still in its beta stage as a project. Everything from the core protocol to the front-end is under active development
and will be consistently improved for the foreseeable future.

Here is a 1 year (December 2021) roadmap list of priorities for the QFinance project:

1. __Deploy core protocol, including staking and airdrop contracts (COMPLETE).__
2. __Deploy beta front-end interface, QFI Hub, as initial front end (COMPLETE).__
3. __Launch on Uniswap and lock initial liquidity (COMPLETE).__
4. Rebuild and rebrand the front-end with an upgraded user experience (in progress).
5. Deploy QFinance Protocol V2 (in progress):

    * Rebalancing function
    * User voting on when/how to rebalance
    * USDT / other asset deposits and withdrawals

6. Implement an aggregator function to source best asset prices across multiple DEXes.
`

export const thanks =
`
# Thanks and Credits

There are many people and services to thank. In no particular order, here are the services and entities that have inspired and assisted
QFinance's development.

* Satoshi Nakamoto for Bitcoin, and all the actors who worked tirelessly to make Bitcoin a well known name in the world.
* Vitalik Buterin and all other developers who have contributed to the development of Ethereum and its associated tools (Solidity, Truffle, etc.).
* ShapeShift, the crypto exchange, for building a similar application many years ago before shutting it down. The infrastructure
is now in place to create a fully decentralized asset pool system. Thank you for the inspiration.
* MRS Company in Toronto, for providing funding, development support and infrastructure to build.
* Uniswap for being the primary inspiration to create QFinance. Uniswap is a brilliant system with beautiful, simple code and
documentation that guided the development principles of QFinance. Thanks to the team there for the incredible service to the 
cryptocurrency and digital asset space in general.
* Alchemy API for providing access to the Ethereum blockchain in a generous and feature-rich API service. While the team at QFinance Hub
plans to switch to our own nodes for production, this simple-to-use service was instrumental in getting the front-end up and running.
`