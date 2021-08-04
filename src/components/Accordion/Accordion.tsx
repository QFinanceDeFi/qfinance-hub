import React from "react"
import AccordionItem from "./AccordionItem"
import "./accordion.css"

const Accordion: React.FC = () => {
  const [open, setOpen] = React.useState<number>(0)

  return (
    <div className="accordion">
      <div className="accordion-headers">
        <h1>FAQs</h1>
        <h3>Learn more about QFinance here</h3>
        <a href="https://t.me/QFinance_DeFi" target="_blank noreferrer">
          Join our Telegram group to ask questions to the team and community
        </a>
      </div>
      <AccordionItem
        header="What is QFinance?"
        isOpen={open}
        setOpen={setOpen}
        index={1}
      >
        <p>
          QFinance is a protocol enabling users to create and join
          Ethereum-based investment pools in a trustless, decentralized manner.
          Each pool consists of underlying assets as determined by the user
          during pool creation.
        </p>
      </AccordionItem>
      <AccordionItem
        header="How does it work?"
        isOpen={open}
        setOpen={setOpen}
        index={2}
      >
        <p>
          To create a pool, a user must select a collection of assets and
          determine their allocation as a percentage of the portfolio. When ETH
          is deposited to this pool, the pool will automatically buy the
          underlying assets as per the portfolio breakdown and hold them on the
          user's behalf. At any point, a user may call the withdrawal function
          on the contract to retrieve some or all of their principal.
        </p>
      </AccordionItem>
      <AccordionItem
        header="Deposit tokens"
        isOpen={open}
        setOpen={setOpen}
        index={3}
      >
        <p>
          To calculate ownership of public pools, an ERC20 token is returned to
          the depositor which represents their share of the pool. If there are
          1000 deposit tokens for a pool and an account holds 50% of those
          tokens, this account may withdraw 50% of the pool's value. If the pool
          holds 1 ETH of tokens, the account can liquidate for 0.5 ETH.
        </p>
        <p>
          There are additional uses for QPool Deposit Tokens (QPDTs). You can
          stake them to earn QFI as a reward. In the future we plan to add loan
          functionality to allow depositors to procure loans using their QPDTs
          as collateral.
        </p>
      </AccordionItem>
      <AccordionItem
        header="What makes QFinance unique?"
        isOpen={open}
        setOpen={setOpen}
        index={4}
      >
        <p>
          There are other asset/investment pool protocols available. QFinance
          differs from them in a few key ways.
        </p>
        <p>
          Many such solutions have a "manager" or follow an index. These are
          great solutions for some use cases, but QFinance has a different
          vision. Public QPools are managed by the depositors. The creator may
          set up a vision for the fund (i.e. "DeFi Blue Chips"), but investors
          in the pool have the ability to vote on rebalancing proposals in the
          future.
        </p>
        <p>
          Secondly, QFinance seeks to be a protocol owned and managed by the
          community. Through staking of deposit tokens, new QFI tokens are
          granted to the users of the protocol. Additional staking pools reward
          QFI holders and QFI-ETH LP providers with new QFI. The QFI tokens are
          then used to vote on governance decisions such as staking pool reward
          allocation and new features.
        </p>
        <p>
          Lastly, QFinance is a simple solution. If you just want to invest in a
          pool and earn some QFI, it is super easy and always will be.
        </p>
      </AccordionItem>
      <AccordionItem
        header="Is QFinance centralized?"
        isOpen={open}
        setOpen={setOpen}
        index={5}
      >
        <p>
          There is no central party with absolute control over the QFinance protocol.
          Anyone can review the code, verify its lack of control mechanisms,
          create a new front-end interface (or use development or CLI tools), or
          even fork the code into a completely new system. No one can stop
          QFinance without stopping Ethereum first.
        </p>
        <p>
          QFinance uses Uniswap to facilitate swaps and to price assets. Uniswap
          is by far the most popular DEX by volume, ensuring your swaps are always
          priced accurately and in the most liquid DEX market.
        </p>
        <p>QFinance is entirely, 100% decentralized.</p>
      </AccordionItem>
      <AccordionItem
        header="What are example use cases?"
        isOpen={open}
        setOpen={setOpen}
        index={6}
      >
        <p>
          <ol className="accordion-list">
            <li>
              Get exposure to multiple Ethereum-based assets in one simple,
              manageable interface and transaction.
            </li>
            <li>
              Join a well performing or otherwise attractive asset pool created
              by another user.
            </li>
            <li>
              Create a public asset pool and invite users to join your
              investment. Prove your crypto investing prowess and even create
              staking programs for users to earn other coins as a reward for
              participating.
            </li>
            <li>
              Compete with others in your private pools on the public
              leaderboard.
            </li>
          </ol>
        </p>
      </AccordionItem>
      <AccordionItem
        header="Do pools actually hold assets?"
        isOpen={open}
        setOpen={setOpen}
        index={7}
      >
        <p>
          Yes. The pools will route deposits through Uniswap and actually
          perform swaps. The pools will then hold the assets until it is time to
          withdraw and/or rebalance. This is all verifiable by looking up the
          contract address on Etherscan.
        </p>
      </AccordionItem>
      <AccordionItem
        header="What is QFI?"
        isOpen={open}
        setOpen={setOpen}
        index={8}
      >
        <p>
          QFI is the QFinance governance token. It is used to vote on
          protocol-level decisions and take part in protocol governance. It was
          launched in January 2021 and trades on Uniswap.
        </p>
        <p>
          The token address is 0x6fe88a211863d0d818608036880c9a4b0ea86795 and
          its Uniswap trading link is available here:
          <a
            href={`https://uniswap.exchange/swap?inputCurrency=0x6fe88a211863d0d818608036880c9a4b0ea86795&outputCurrency=ETH`}
          >
            ETH-QFI Uniswap
          </a>
          .
        </p>
      </AccordionItem>
      <AccordionItem
        header="How do I stake and earn?"
        isOpen={open}
        setOpen={setOpen}
        index={9}
      >
        <p>
          You can stake 3 types of assets to earn QFI. QFI holders can stake and
          earn. QFI-ETH Uniswap LP providers are eligible for staking. QPool
          Deposit Tokens for applicable pools are eligible for staking rewards
          as well.
        </p>
        <p>
          The staking rewards program is designed to put control of the QFI
          protocol back into the hands of those who use it.
        </p>
      </AccordionItem>
      <AccordionItem
        header="How do I become eligible for airdrops?"
        isOpen={open}
        setOpen={setOpen}
        index={10}
      >
        <p>
          Just use QFinance! There are periodic QFI airdrops for all accounts
          who interact with the protocol.
        </p>
      </AccordionItem>
    </div>
  )
}

export default Accordion
