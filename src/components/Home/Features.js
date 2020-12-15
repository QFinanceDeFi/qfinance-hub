import React from "react";
import styled from "styled-components";
import {
    FiBox,
    FiDollarSign,
    FiAward
} from "react-icons/fi";
import { Box } from "rimble-ui";

const Features = () => {
    return (
        <FeaturesContainer>
        <Box width={[1 / 3]}>
            <FiBox size={28} />
            <div>Create Portfolio</div>
        </Box>
        <Box width={[1 / 3]}>
            <FiDollarSign size={28} />
            <div>Deposit ETH</div>
        </Box>
        <Box width={[1 / 3]}>
            <FiAward size={28} />
            <div>Stake and Earn</div>
        </Box>
        </FeaturesContainer>
    )
}

export default Features;

const FeaturesContainer = styled.div
`
    display: flex;
    height: 84px;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
`