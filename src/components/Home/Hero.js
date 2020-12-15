import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import { Heading, Button, Box } from 'rimble-ui';

const Hero = () => {
    return (
        <HeroDiv>
        <Box>
            <Heading as="h1" fontSize={56} style={{paddingBottom: '8px'}}>
                QFinance
            </Heading>
            <Heading as="h3" style={{paddingBottom: '4px'}}>
                Trustless, decentralized investment pools on Ethereum
            </Heading>
            <CtaButtons>
                <Button as='a' mainColor="black" size="small" href="/learn/#about" onClick={() => navigate("/learn/#about")}>Learn More</Button>
                <Button ml={2} as='a' fontSize="14px" size="small" href="/pools" onClick={() => navigate("/pools")}>Get Started</Button>
            </CtaButtons>
        </Box>
        </HeroDiv>
    )
}

export default Hero;

const HeroDiv = styled.div
`   
    display: flex;
    flex-direction: column;
    height: 56vh;
    min-height: 300px;
    justify-content: flex-end;
    box-shadow: 0 4px 2px -2px #CC9966;
    padding-bottom: 42px;
`

const CtaButtons = styled.div
`
    margin: 12px 0;
`