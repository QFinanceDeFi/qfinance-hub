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
            <StakingCard title="WBTC QPool Staking" address="0x725F7F1AeBA0c542be98a32611827D3372be1198" isQPool={true} />
            <StakingCard title="DEXes QPool Staking" address="0xAe378357B3cEb6ECB236990011Ba90516e14d8E7" isQPool={true} />
        </Flex>
        </Layout>
    )
}

export default StakingPage