import React from "react"
import "./footer.css"

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-brand">
        <h3>QFinance</h3>
        <h4>Trustless, decentralized investment pools on Ethereum</h4>
        <p>
          Site made in Canada by MRS Company Ltd, &#169;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
      <div className="footer-links">
        <a
          href="https://etherscan.io/token/0x6fe88a211863d0d818608036880c9a4b0ea86795"
          target="_blank noreferrer"
        >
          Etherscan
        </a>
        <a
          href="https://coinmarketcap.com/currencies/qfinance"
          target="_blank noreferrer"
        >
          CoinMarketCap
        </a>
        <a
          href={`https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x6fe88a211863d0d818608036880c9a4b0ea86795&use=v2`}
          target="_blank noreferrer"
        >
          Uniswap
        </a>
        <a href="https://medium.com/@QFinanceDefi/qfinance-whitepaper-9dec3a384aee" target="_blank noreferrer">
          Whitepaper
        </a>
        <a href="/policy">Privacy Policy</a>
      </div>
    </div>
  )
}

export default Footer
