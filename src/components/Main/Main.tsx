import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import loadable from '@loadable/component'
import "./main.css"
import { motion } from "framer-motion"

const Video = loadable(() => import('./Video'));

const Main: React.FC = () => {
  const videos: any = useStaticQuery(pageQuery)

  const style: any = {
    color: "#BA9860",
    fontWeight: 700,
    textShadow: "2px 2px 14px black",
  }

  return (
    <motion.div className="main-hero" id="main">
      <div className="hero-header">
        <h1>
          <span style={{ color: "#BA9860", fontWeight: 800 }}>Q</span>Finance
        </h1>
        <h2>Trustless, Decentralized Investment Pools on Ethereum</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "8px",
            flexGrow: 1,
          }}
        >
          <span style={style}>Swap / Pool / Stake / Buy</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "24px",
            flexGrow: 1,
          }}
        >
          <a
            className="cta-button"
            target="_blank noreferrer"
            style={{ marginRight: "12px" }}
            href={`https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x6fe88a211863d0d818608036880c9a4b0ea86795&use=v2`}
          >
            Buy QFI
          </a>
          <a
            className="cta-button"
            target="_blank noreferrer"
            href="https://app.qfihub.com"
            style={{ marginLeft: "12px" }}
          >
            Use App
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "24px",
            flexGrow: 1,
          }}
        >
          <a
            href="/faqs"
            style={{ color: "#BA9860", fontSize: "18px", fontWeight: 700 }}
          >
            Learn more about QFinance
          </a>
        </div>
      </div>
      <Video link={videos.vid.publicURL} />
    </motion.div>
  )
}

export default Main

const pageQuery = graphql`
  {
    vid: file(relativePath: { eq: "glow.mov" }) {
      publicURL
    }
    pic: file(relativePath: { eq: "poster.png" }) {
      publicURL
    }
  }
`
