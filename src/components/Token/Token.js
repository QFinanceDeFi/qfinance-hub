import React from "react";
import { Card, Heading, Text } from "rimble-ui";
import styled from "styled-components";

const Token = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', margin: '24px 0 42px 0'}}>
        <Card maxWidth='768px' p={4} borderRadius='6px' justifyContent='center'>
            <Heading as="h1" p={2}>QFI Token</Heading>
            <Heading as="h2" pl={2} pr={2}>The QFinance governance token</Heading>
            <Text p={2} fontSize='14px'>
                This token is a governance token. It helps the QFinance protocol reflect the wishes and the design decisions that
                the community believes are correct. These tokens will enable voting on protocol-level decisions so that
                the will of the community is always evident.
            </Text>
            <Heading as="h3" p={2}>Capped supply of <span style={{color: "#CC9966"}}>
                1,000,000 QFI
            </span></Heading>
            <Heading as="h3" p={2}>Distribution Mechanics</Heading>
            <Heading as="h4" p={2} color="#CC9966">
                Airdrops (35% of total supply)
            </Heading>
            <Heading as="h5" pl={2} pr={2}>
                To be given out periodically over the first 6-12 months.
            </Heading>
            <DistributionList>
                <ListItem>
                    Open airdrop to anyone who signs up (15%)
                </ListItem>
                <ListItem>
                    Airdrop to pool creators (15%)
                </ListItem>
                <ListItem>
                    Airdrop to pool joiners (5%)
                </ListItem>
            </DistributionList>
            <Heading as="h4" p={2} color="#CC9966">
                Staking Rewards (50% of total supply)
            </Heading>
            <Heading as="h5" pl={2} pr={2}>
                10% of total supply over first 12 months. Rest TBD by voting by QFI holders
            </Heading>
            <DistributionList>
                <ListItem>
                    QFI/ETH Uniswap LP Staking (15%)
                </ListItem>
                <ListItem>
                    QFI Token Staking (5%)
                </ListItem>
                <ListItem>
                    Staking Deposit Tokens (30%)
                </ListItem>
            </DistributionList>
            <Heading as="h4" p={2} color="#CC9966">
                Developer and Supporter Fund (15%)
            </Heading>
            <Heading as="h5" pl={2} pr={2}>
                Half of these granted immediately; half locked for 18 months
            </Heading>
            <DistributionList>
                <ListItem>
                    Developer Fund (10%)
                </ListItem>
                <ListItem>
                    Supporter Fund (5%)
                </ListItem>
            </DistributionList>
        </Card>
        </div>
    )
}

export default Token;

const DistributionList = styled.ul
`
    list-style-type: none;
    margin: 0;
    padding: 0.5rem;
`

const ListItem = styled.li
`
    font-size: 14px;
`