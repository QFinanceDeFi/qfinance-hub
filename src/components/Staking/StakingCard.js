import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import { window } from "browser-monads";
import { Card, Heading, Box, Text, Button } from "rimble-ui";
import { getStakingDetails, checkAllowance } from "../../services/staking";
import Image from "./image";
import Rewards from "./Rewards";
import ApproveStaking from "./ApproveStaking";
import StakeTokens from "./StakeTokens";

const StakingCard = ({ address, title, isQPool }) => {
    const [state, setState] = useState({
        stakingToken: '',
        periodFinish: '',
        reward: ''
    })
    const [allowance, setAllowance] = useState('0');
    const [update, setUpdate] = useState(false);
    const [rewardModalOpen, setRewardModalOpen] = useState(false)
    const [approveModalOpen, setApproveModalOpen] = useState(false)
    const [stakingModalOpen, setStakingModalOpen] = useState(false)

    useEffect(() => {
        async function process() {
            let res = await getStakingDetails(address);
            let all = await checkAllowance(res.stakingToken, address);
            setAllowance(all);
            setState({
                stakingToken: res.stakingToken,
                periodFinish: new Date(Number(res.periodFinish) * 1000).toLocaleDateString(),
                reward: Math.round(res.reward)
            })
            setUpdate(false)
        }

        process();
    }, [address, update])

    if (window) {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', function () {
                setUpdate(true);
            })
        }
    }

    function updateState() {
        setUpdate(true)
    }

    return (
        <Card width={"420px"} style={{textAlign: 'center', margin: '24px 12px', borderRadius: '6px'}}>
            <TitleDiv>
                {title}
            </TitleDiv>
            <AddressLink onClick={() => window.open(`https://etherscan.io/address/${state.stakingToken}`)}>
                Contract Address: {state.stakingToken}
            </AddressLink>
            {isQPool ?
                <HelperText onClick={() => navigate(`/pool/${state.stakingToken}`)}>
                    View the QPool
                </HelperText>
                :
                <Text>No QPool for this contract</Text>
            }
            <Image />
            <Heading as="h3">
                Period finish: {state.periodFinish}
            </Heading>
            <Heading as="h3">
                Total rewards: {state.reward} QFI
            </Heading>
            <Button.Text onClick={() => setRewardModalOpen(true)} color="primary">See my rewards</Button.Text>
            <Box>
            <Button
                onClick={() => setApproveModalOpen(true)}
                minWidth='8rem' mr='12px'>
                Approve
            </Button>
            <Button
                onClick={() => setStakingModalOpen(true)}
                minWidth='8rem' ml='12px' disabled={allowance === '0'}>
                Stake
            </Button>
            </Box>
            <HelperText onClick={() => navigate("/learn/#stake-tokens")}>
                Need help? Read the how-to page on staking.
            </HelperText>
            {state.stakingToken &&
            <Rewards open={rewardModalOpen} close={() => setRewardModalOpen(false)} address={address} />
            }
            {state.stakingToken && 
            <ApproveStaking open={approveModalOpen} close={() => setApproveModalOpen(false)} stakingToken={state.stakingToken}
            address={address} update={updateState} />
            }
            {state.stakingToken &&
            <StakeTokens open={stakingModalOpen} close={() => setStakingModalOpen(false)} stakingToken={state.stakingToken}
            address={address} allowance={allowance} update={updateState} />
            }
        </Card>
    )
}

export default StakingCard;

const TitleDiv = styled.h1
`
    color: inherit;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 12px;
    color: #CC9966;
`

const AddressLink = styled.div
`
    font-size: 0.9rem;
    color: inherit;
    text-decoration: none;
    margin-bottom: 12px;

    &:hover {
        cursor: pointer;
    }
`

const HelperText = styled(Text)
`
    margin-top: 4px;

    &:hover {
        cursor: pointer
    }
`