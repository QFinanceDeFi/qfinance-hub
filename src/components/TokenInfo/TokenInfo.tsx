import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiRocketLine } from "react-icons/ri"
import React from "react"
import "./tokeninfo.css"

const TokenInfo: React.FC = () => {
  const image: any = useStaticQuery(query)

  return (
    <div className="token-info">
      <div className="token-icon">
        <GatsbyImage
          image={image.file.childImageSharp.gatsbyImageData}
          alt="q logo"
        />
      </div>
      <div className="token-details">
        <div className="token-details-header">
          <h1>QFI Token</h1>
          <div className="token-details-buttons">
            <a
              className="token-buy-button"
              target="_blank noreferrer"
              href={`https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x6fe88a211863d0d818608036880c9a4b0ea86795&use=v2`}
            >
              Buy
            </a>
            <a
              className="token-info-button"
              target="_blank noreferrer"
              href="https://app.moontools.io/pairs/uniswap/0xb6dd4a1adc8604ccda62c7ba92410d81647b2d61"
            >
              Charts
            </a>
            <a
              className="token-info-button"
              target="_blank noreferrer"
              href="https://etherscan.io/token/0x6fe88a211863d0d818608036880c9a4b0ea86795">
              Etherscan
            </a>
          </div>
        </div>
        <ul className="token-details-list">
          <li className="token-details-list-item">
            <span className="token-details-li-icon">
              <RiRocketLine size={24} color="#BA9860" />
            </span>
            <span className="token-details-li-content">
              1,000,000 total supply
            </span>
          </li>
          <li className="token-details-list-item">
            <span className="token-details-li-icon">
              <RiRocketLine size={24} color="#BA9860" />
            </span>
            <span className="token-details-li-content">
              100% fair launch. No presale
            </span>
          </li>
          <li className="token-details-list-item">
            <span className="token-details-li-icon">
              <RiRocketLine size={24} color="#BA9860" />
            </span>
            <span className="token-details-li-content">
              Distributed via staking rewards and airdrops for users and LPs
            </span>
          </li>
          <li className="token-details-list-item">
            <span className="token-details-li-icon">
              <RiRocketLine size={24} color="#BA9860" />
            </span>
            <span className="token-details-li-content">
              System fees reinvested as liquidity, then locked and burned
            </span>
          </li>
          <li className="token-details-list-item">
            <span className="token-details-li-icon">
              <RiRocketLine size={24} color="#BA9860" />
            </span>
            <span className="token-details-li-content">
              All contracts open source and verified
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TokenInfo

const query = graphql`
  query {
    file(relativePath: { eq: "qlogo512.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 280)
      }
    }
  }
`
