import React, { useState } from "react";
import { Box, Flex, Modal, Button, Text, Card, Heading, Field, Input } from "rimble-ui";
import styled from 'styled-components'
import { sendStake } from "../../services/staking"

const StakeTokens = ({ open, close, address, allowance, update }) => {
    const [stakingAmount, setStakingAmount] = useState('0')

    function resetState() { setStakingAmount('0'); close()}

    const handleSubmit = async () => {
        if (Number(stakingAmount) > Number(allowance)) {
            return alert(`Make sure the amount to stake is equal to or less than ${allowance}`)
        }
        let res = await sendStake(address, stakingAmount);
        if (!res) {
            window.toastProvider.addMessage("Transaction Failed", {
                variant: 'error',
                actionHref: `https://etherscan.io/tx/${window.ethereum.selectedAddress}`,
                actionText: "View", colorTheme: "light"
            })
            resetState();
            return
        }
        window.toastProvider.addMessage("Transaction Submitted", {
            secondaryMessage: `${res}`,
            variant: 'processing',
            actionHref: `https://etherscan.io/tx/${res}`,
            actionText: "View", colorTheme: "light"
            })
        update();
        resetState();
        return res
    }

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
            <Heading.h3>Stake Tokens</Heading.h3>
            <AddressLink onClick={() => window.open(`https://etherscan.io/address/${address}`)}>
                {address}
            </AddressLink>
            <BalanceText mt='8px' fontWeight='bold' onClick={() => setStakingAmount(allowance)}>{`Approved for transfer: ${allowance}`}</BalanceText>
          </Box>
          <Box pl={4} pr={4} mb={4}>
              <Field label="Staking Amount">
                  <Input type="text" required={true} placeholder="Staking Amount" value={stakingAmount}
                    onChange={e => setStakingAmount(e.target.value)}/>
              </Field>
              <Text color="red">You are about to transfer tokens to this staking contract. Please sign the transaction in MetaMask after clicking 'Confirm'.</Text>
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
              ml={3} disabled={!stakingAmount || stakingAmount === '0'}>Stake</Button>
          </Flex>
        </Card>
      </Modal>
    )
}

export default StakeTokens;

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