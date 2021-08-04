import { Link } from "gatsby"
import React from "react"
import "./resources.css"

const Resources = () => {
  return (
    <div className="resources-container">
      <h2>Want to learn more?</h2>
      <span>Find more information using these resources</span>
      <div className="resources">
        <Link
          to="/faqs"
          className="resource-item"
          style={{ borderRight: "1px solid #BA9860" }}
        >
          FAQs
        </Link>
        <a
          href="https://github.com/QFinanceDeFi"
          className="resource-item"
          style={{ borderRight: "1px solid #BA9860" }}
          target="_blank noreferrer"
        >
          Tech
        </a>
        <a
          href="/qfinance-whitepaper.pdf"
          target="_blank noreferrer"
          className="resource-item"
          style={{ borderRight: "1px solid #BA9860" }}
        >
          Whitepaper
        </a>
        <a
          href="https://medium.com/"
          target="_blank noreferrer"
          className="resource-item"
        >
          Posts
        </a>
      </div>
      <div className="resource-social">
        Follow us on{" "}
        <a href="https://twitter.com/QFinanceDeFi" target="_blank noreferrer">
          {" "}
          Twitter{" "}
        </a>
        and join our{" "}
        <a href="https://t.me/QFinance_DeFi" target="_blank noreferrer">
          {" "}
          Telegram{" "}
        </a>{" "}
        group.
      </div>
    </div>
  )
}

export default Resources
