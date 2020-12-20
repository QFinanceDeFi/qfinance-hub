import React from "react";
import { Flex } from "rimble-ui";
import SEO from "../components/seo"
import StakingCard from "../components/Staking/StakingCard"
import Layout from "../components/Layout/Layout"

const StakingPage = () => {

    return (
        <Layout>
        <SEO title="Stake to earn QFI" keywords={[`stake`, `earn`, `pool`, `ethereum`, `crypto`, `defi`, `erc20`, `token`]} />
        <Flex justifyContent='center' flexWrap='wrap' mb='64px'>
            <h3 style={{margin: '32px 16px'}}>Staking contracts will be opened soon!</h3>
        </Flex>
        </Layout>
    )
}

export default StakingPage