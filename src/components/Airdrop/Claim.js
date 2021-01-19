import React, { useState, useEffect } from "react";
import { Card, Box, Flex, Text, Heading, Button, Loader } from "rimble-ui";
import { claimAirdrop, isSignee } from "../../services/airdrop";

const Claim = () => {
    const [signedUp, setSignedUp] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function process() {
            setLoading(true);
            let res = await isSignee();
            setSignedUp(res);
            setLoading(false);
        }

        process();
    }, [])

    const handleClaim = async () => {
        let res = await claimAirdrop();
        if (!res) {
            window.toastProvider.addMessage("Transaction failed", {
                secondaryMessage: "Error processing transaction",
                variant: 'failure',
                colorTheme: "light"
                })
            return
        } else if (res) {
            window.toastProvider.addMessage("Transaction submitted", {
                secondaryMessage: `Address: ${window.ethereum.selectedAddress}`,
                variant: 'processing', actionText: 'View',
                actionHref: `https://etherscan.io/tx/${res}`,
                colorTheme: "light"
                })
            return
        }
    }

    return (
        <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <Card width='70%' maxWidth='800px' minWidth='360px' borderRadius='6px'>
        {loading ?
        <Flex justifyContent='center'>
            <Loader size={24} />
        </Flex>  
        :
        <>
            <Box>
                <Heading textAlign='center' mb={2}>
                    Claim your QFI airdrop
                </Heading>
                <Text mb={2} textAlign='center' fontSize='14px'>
                Your MetaMask wallet will ask you to confirm a transaction in order to claim your airdrop.
                </Text>
            </Box>
            {signedUp ?
            <Box pt={2} pb={4}>
                <Heading as="h4" textAlign='center' mb={2}>
                    Click to claim your QFI
                </Heading>
                <Flex width={1} flexDirection='column' alignItems='center'>
                <Button size='small' width={0.7} onClick={handleClaim}>Claim QFI</Button>
                </Flex>
            </Box>
            :
            <Box pt={2} pb={4}>
                <Text mt={2} mb={2} textAlign='center' fontSize='14px'>
                    This address either did not sign up or has already claimed the airdrop.
                </Text>
            </Box>
            }
        </>
        }
        </Card>
        </div>
    )
}

export default Claim;