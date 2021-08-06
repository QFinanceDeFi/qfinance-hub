import * as React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FaGithub, FaTelegramPlane, FaMediumM, FaTwitter } from "react-icons/fa"
import useScrollHeight from "../../hooks/useScrollHeight"
import useWindowWidth from "../../hooks/useWindowWidth"

const Header: React.FC = () => {
  const height: number = useScrollHeight()
  const width: number = useWindowWidth()

  const image = useStaticQuery(query)

  return (
    <header style={{ background: height > 100 ? "rgba(0,0,0,0.7)" : "none" }}>
      <div style={{display: 'flex', alignSelf: 'center', alignItems: 'center'}}>
        <AnchorLink className="brand" to="/#main">
          <GatsbyImage image={image.file.childImageSharp.gatsbyImageData} alt="logo" />
          {width > 800 && <span className="brand-title">QFinance</span>}
        </AnchorLink>
        <div className="nav-links">
          <AnchorLink to="/#tech" title="Tech">Tech</AnchorLink>
          <AnchorLink to="/#qfi" title="QFI">QFI</AnchorLink>
          <AnchorLink to="/#roadmap" title="Roadmap">Roadmap</AnchorLink>
          <Link to="/faqs">FAQs</Link>
          <a href="/qfinance-whitepaper.pdf" target="_blank noreferrer">Whitepaper</a>
        </div>
      </div>
      <div className="app-button">
        <a
          style={{ display: "flex" }}
          href="https://medium.com/@QFinanceDefi"
          target="_blank noreferrer"
        >
          <FaMediumM size={20} aria-label="Medium" className="app-button-icon" />
        </a>
        <a
          style={{ display: "flex" }}
          href="https://twitter.com/QFinanceDeFi"
          target="_blank noreferrer"
        >
          <FaTwitter size={20} aria-label="Twitter" className="app-button-icon" />
        </a>
        <a
          style={{ display: "flex" }}
          href="https://t.me/QFinance_DeFi"
          target="_blank noreferrer"
        >
          <FaTelegramPlane size={20} aria-label="Telegram" className="app-button-icon" />
        </a>
        <a
          style={{ display: "flex" }}
          href="https://github.com/QFinanceDeFi"
          target="_blank noreferrer"
        >
          <FaGithub size={20} className="app-button-icon" aria-label="GitHub" />
        </a>
        <a
          href="https://app.qfihub.com"
          target="_blank noreferrer"
          className="app-button-link"
        >
          Use App
        </a>
      </div>
    </header>
  )
}

export default Header

const query = graphql`
  query {
    file(relativePath: { eq: "q.png" }) {
      childImageSharp {
        gatsbyImageData(width: 48)
      }
    }
  }
`