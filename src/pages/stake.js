import React from "react";
import { Flex } from "rimble-ui";
import SEO from "../components/seo"
import StakingCard from "../components/Staking/StakingCard"
import Layout from "../components/Layout/Layout"

const StakingPage = () => {

    return (
        <Layout>
        <SEO title="Stake to earn QFI" keywords={[`stake`, `earn`, `pool`, `ethereum`]} />
        <Flex justifyContent='center' flexWrap='wrap' mb='64px'>
            <StakingCard title='DAI-UNI-MKR QPool' address='0xbF064B8f305c0b5B1feafA9d2eb893C70F76794F' isQPool={true} />
            <StakingCard title='QFI Staking' address='0xE05D21934e7E522C342F9439F7D7C1250E089001' isQPool={false} />
        </Flex>
        </Layout>
    )
}

export default StakingPage