import React from "react"
import StepItem from "./StepItem"
import "./howto.css"

const HowTo: React.FC = () => {
  return (
    <div className="how-to">
      <h2>Get started with QFinance</h2>
      <StepItem step={1} header="Open the QFI Hub App">
        <a href="https://app.qfihub.com" target="_blank noreferrer">
          Open the QFI Hub app
        </a>{" "}
        and connect your wallet. The QFI Hub supports multiple web3 wallets.
        From there you can access QFinance services.
      </StepItem>
      <StepItem step={2} header="Browse the Pools">
        On the Pools screen you can see all the pools other users have created.
        Find a pool that holds the assets you want to buy and select it to see
        the details.
      </StepItem>
      <StepItem step={3} header="Deposit ETH">
        Once you find a pool you like, deposit ETH and the pool will acquire
        more assets. In return, you receive a QPool Deposit Token (QPDT),
        representing your share of the pool.
      </StepItem>
      <StepItem step={4} header="Explore the Rest of QFinance">
        You can create your own pool if none of the existing pools meet your
        needs. Keep an eye on the governance news board to see if there are any
        proposals to vote on with your QPDTs or QFI. Just looking to make a
        swap? Use our multiswap function and trade ETH for multiple tokens in
        one transaction.
      </StepItem>
    </div>
  )
}

export default HowTo
