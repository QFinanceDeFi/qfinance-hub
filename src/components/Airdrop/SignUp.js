import React, { useState } from "react";
import { Card, Box, Flex, Text, Heading, Input, Button, Loader } from "rimble-ui";
import styled from "styled-components";
import axios from "axios";

const SignUp = () => {
    const [twitterHandle, setTwitterHandle] = useState('')
    const [stage, setStage] = useState(1)
    const [loading, setLoading] = useState(false)

    const stepper = () => {
        setStage(stage + 1)
    }

    const moveBack = () => {
        setStage(stage - 1)
    }

    const checkFollow = async () => {
        setLoading(true)
        let res = await axios.get("/api/CheckFollowers");
        let formatted = [];
        res.data.map(item => formatted.push(item.toLowerCase()));
        if (formatted.includes(twitterHandle.replace('@', '').toLowerCase())) {
            stepper();
            setLoading(false);
            return true
        } else {
            window.toastProvider.addMessage("Did you follow us?", {
                secondaryMessage: "Check your username",
                variant: 'failure',
                actionHref: `https://kovan.etherscan.io/tx/${res}`,
                colorTheme: "light"
                })
            moveBack();
            setLoading(false);
            return false
        }
    }

    return (
        <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <Card width='70%' maxWidth='800px' minWidth='360px' borderRadius='6px'>
            <Box>
                <Heading textAlign='center' mb={2}>
                    Sign up for the QFI Airdrop
                </Heading>
                <Text mb={2} textAlign='center'>
                This airdrop is processed by an <a href="https://github.com/QFinanceDeFi/qfinance-token" target='_blank' rel='noopener noreferrer'>Ethereum smart contract</a>. 
                You will need to make a 0 ETH transaction from your wallet to sign up. Please connect MetaMask before you continue.
                </Text>
            </Box>
            {stage === 1 &&
            <Box pt={2} pb={4}>
                <Heading as="h4" textAlign='center' mb={2}>
                    First, what is your Twitter handle?
                </Heading>
                <Flex width={1} flexDirection='column' alignItems='center'>
                <Input value={twitterHandle} onChange={e => setTwitterHandle(e.target.value)}
                    placeholder="Twitter handle" width={0.7} mb={2}/>
                <Button size='small' width={0.7} onClick={stepper}>Submit</Button>
                </Flex>
            </Box>
            }
            {stage === 2 &&
            <Box pt={2} pb={4}>
                <Heading as="h4" textAlign='center' mb={2}>
                    Now follow us @ <TwitterLink href={`https://twitter.com/QFinanceDeFi`}>QFinance Twitter</TwitterLink>
                </Heading>
                <Flex justifyContent='center'>
                    {!loading ? <Button.Outline width={0.7} onClick={checkFollow}>Followed</Button.Outline>
                    :
                    <Loader size={24} />
                    }
                </Flex>
            </Box>
            }
            {stage === 3 &&
            <Box pt={2} pb={4}>
                <Heading as="h4" textAlign='center' mb={2}>
                    Thanks for following!
                </Heading>
                <Heading as="h5" textAlign='center' mb={2}>
                    You should join our Telegram group
                </Heading>
                <Flex justifyContent='center'>
                    <Button.Outline width={0.7} onClick={() => {window.open('https://t.me/QFinanceDeFi'); stepper()}}>Telegram Group</Button.Outline>
                </Flex>
            </Box>
            }
            {stage === 4 &&
            <Box pt={2} pb={4}>
                <Heading as="h4" textAlign='center' mb={2}>
                    Now you're ready to sign up!
                </Heading>
                <Flex justifyContent='center'>
                    <Button width={0.7} onClick={stepper}>Sign up</Button>
                </Flex>
            </Box>
            }
            {
                stage > 4 &&
            <Box pt={2} pb={4}>
                <Heading as="h4" textAlign='center' mb={2}>
                    You will be able to claim your QFI tokens after January 15
                </Heading>
            </Box>
            }
        </Card>
        </div>
    )
}

export default SignUp;

const TwitterLink = styled.a
`
    color: #CC9966;
    & :hover {
        cursor: pointer;
    }
`