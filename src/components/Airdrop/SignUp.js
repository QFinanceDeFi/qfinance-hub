import React, { useState, useEffect } from "react";
import { Card, Box, Flex, Heading, Input, Button } from "rimble-ui";
import styled from "styled-components";

const SignUp = () => {
    const [twitterHandle, setTwitterHandle] = useState('')
    const [stage, setStage] = useState(1)

    const stepper = () => {
        setStage(stage + 1)
    }

    return (
        <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <Card width='50%' maxWidth='800px' minWidth='360px' borderRadius='6px'>
            <Box>
                <Heading textAlign='center' mb={4}>
                    Sign up for the QFI Airdrop
                </Heading>
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
                    <Button.Outline width={0.7} onClick={stepper}>Followed</Button.Outline>
                </Flex>
            </Box>
            }
            {stage === 3 &&
            <Box pt={2} pb={4}>
                <Heading as="h4" textAlign='center' mb={2}>
                    Now you should join our Telegram community
                </Heading>
                <Flex justifyContent='center'>
                    <Button.Outline width={0.7} onClick={stepper}>Telegram Group</Button.Outline>
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