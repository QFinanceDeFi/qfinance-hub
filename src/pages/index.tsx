import React from "react"
import Layout from "../components/Navigation/Layout"
import loadable from '@loadable/component'
import Seo from "../components/seo"
import Main from "../components/Main/Main"
const Tokens = loadable(() => import("../components/TokenOrbit/Tokens"));
const HowTo = loadable(() => import("../components/HowTo/HowTo"));
const WhatIs = loadable(() => import("../components/WhatIs/WhatIs"));
const QToken = loadable(() => import("../components/QToken/QToken"));
const Timeline = loadable(() => import("../components/Timeline/Timeline"));
const Resources = loadable(() => import("../components/Resources/Resources"));

const IndexPage: React.FC = () => {

  return (
    <Layout>
        <Seo title="QFinance - DeFi Investment Pools on Ethereum" description="DeFi ETF investment pools on Ethereum. Fully trustless, permissionless, and decentralized." />
          <Main />
          <Tokens />
          <WhatIs />
          <Resources />
          <HowTo />
          <QToken />
          <Timeline />
    </Layout>
    )
}

export default IndexPage
