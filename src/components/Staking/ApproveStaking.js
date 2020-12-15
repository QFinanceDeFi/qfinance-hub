import React, { useState, useEffect } from "react";
import { Box, Flex, Modal, Button, Text, Card, Heading, Field, Input } from "rimble-ui";
import styled from 'styled-components'
import { getTokenBalance, approveStaking } from "../../services/staking"

const ApproveStaking = ({ open, close, address, stakingToken, update }) => {
    const [stakingAmount, setStakingAmount] = useState('0')
    const [balance, setBalance] = useState('0')

    function resetState() { setStakingAmount('0'); setBalance('0'); close()}

    const handleSubmit = async () => {
      let res = await approveStaking(address, stakingToken, stakingAmount);
      if (!res) {
          window.toastProvider.addMessage("Transaction Failed", {
              variant: 'error',
              actionHref: `https://kovan.etherscan.io/address/${window.ethereum.selectedAddress}`,
              actionText: "View", colorTheme: "light"
          })
          resetState();
          return
      }
      window.toastProvider.addMessage("Transaction Submitted", {
        secondaryMessage: `${res}`,
        variant: 'processing',
        actionHref: `https://kovan.etherscan.io/tx/${res}`,
        actionText: "View", colorTheme: "light"
        })
      update();
      resetState();
      return res
    }

    useEffect(() => {
        async function process() {
            let res = await getTokenBalance(stakingToken);
            setBalance(parseFloat(res).toFixed(4));
            return res
        }

        process();
    }, [open, stakingToken])

    return (
        <Modal isOpen={open}>
        <Card width={"360px"} p={0} borderRadius='6px'>
          <Button.Text
            icononly
            icon={"Close"}
            color={"moon-gray"}
            position={"absolute"}
            top={0}
            right={0}
            mt={3}
            mr={3}
            onClick={resetState}
          />

          <Box p={4} pb={2}>
            <Heading.h3>Approve Transfer</Heading.h3>
            <AddressLink onClick={() => window.open(`https://kovan.etherscan.io/address/${address}`)}>
                {address}
            </AddressLink>
            <BalanceText mt='8px' fontWeight='bold' onClick={() => setStakingAmount(balance)}>{`Token balance: ${balance}`}</BalanceText>
          </Box>
          <Box pl={4} pr={4} mb={4}>
              <Field label="Staking Amount">
                  <Input type="text" required={true} placeholder="Staking Amount" value={stakingAmount}
                    onChange={e => setStakingAmount(e.target.value)}/>
              </Field>
              <Text color="red">You are about to approve this contract to remove tokens from your account. Please sign the transaction in MetaMask after clicking 'Confirm'.</Text>
          </Box>

          <Flex
            px={4}
            py={3}
            borderTop={1}
            borderColor={"#E8E8E8"}
            justifyContent={"flex-end"}
          >
            <Button.Outline onClick={resetState}>Cancel</Button.Outline>
            <Button
              onClick={handleSubmit}
              ml={3} disabled={!stakingAmount || stakingAmount === '0' || stakingAmount < balance}>Approve</Button>
          </Flex>
        </Card>
      </Modal>
    )
}

export default ApproveStaking;

const AddressLink = styled(Text)
`
    font-size: 12px;
    margin: 4px 0 0 0;
    padding: 0;
    &:hover {
        cursor: pointer;
    }
`

const BalanceText = styled(Text)
`
    &:hover {
        cursor: pointer
    }
`