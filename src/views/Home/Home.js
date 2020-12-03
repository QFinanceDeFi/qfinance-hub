import React from "react"
import { Link } from "react-router-dom"
import { Icon } from "@fluentui/react/lib/Icon"

const Home = () => {
    return (
      <div>
        <div className="hero">
          <div className="hero-content">
              <h1 className="hero-content_title">QFinance</h1>
              <h3 className="hero-content_subtitle">Trustless, decentralized investment pools on Ethereum</h3>
              <div className="hero-links">
                <Link to="/learn" className="hero-links_a">Learn More</Link>
                <Link to="/pools" className="hero-links_a">Get Started</Link>
              </div>
          </div>
        </div>
        <div className="features">
          <div className="feature-item">
            <span>Create a pool</span>
            <Icon iconName="ProductVariant" className="feature-icon" />
          </div>
          <div className="feature-item">
            <span>Find a pool</span>
            <Icon iconName="World" className="feature-icon"/>
          </div>
          <div className="feature-item">
            <span>Join a pool</span>
            <Icon iconName="AllCurrency" className="feature-icon" />
          </div>
          <div className="feature-item">
            <span>Earn!</span>
            <Icon iconName="PartyLeader" className="feature-icon" />
          </div>
        </div>
      </div>
    )
}

export default Home