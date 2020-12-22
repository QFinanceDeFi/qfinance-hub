import React, { useState, useEffect } from "react";
import { Box, Flex, Modal, Button, Text, Card, Heading, Field, Input } from "rimble-ui";
import styled from 'styled-components'
import { getStakingBalance, getEarnings, claimEarnings, withdrawStakingBalance } from "../../services/staking"

const Rewards = ({ open, close, address }) => {
    const [earned, setEarned] = useState('0')
    const [stakingBalance, setStakingBalance] = useState('0')
    const [withdrawAmount, setWithdrawAmount] = useState('0')
    const [update, setUpdate] = useState(false)

    function resetState() { setWithdrawAmount('0'); close()}

    const claim = async () => {
        let res = await claimEarnings(address);
        if (!res) {
            window.toastProvider.addMessage("Transaction Failed", {
                variant: 'failure',
                actionHref: `https://etherscan.io/address/${window.ethereum.selectedAddress}`,
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
        resetState();
        setUpdate(true);
        return res
    }

    const withdrawStake = async () => {
        let res = await withdrawStakingBalance(address, withdrawAmount);
        if (!res) {
            window.toastProvider.addMessage("Transaction Failed", {
                variant: 'failure',
                actionHref: `https://etherscan.io/address/${window.ethereum.selectedAddress}`,
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
        resetState();
        setUpdate(true);
        return res
    }

    useEffect(() => {
        async function process() {
            let res = await getEarnings(address);
            let bal = await getStakingBalance(address);
            setEarned(res)
            setStakingBalance(bal)
            return res
        }
        process();
    }, [address, update])

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
            <Heading.h3>Staking Rewards</Heading.h3>
            <AddressLink onClick={() => window.open(`https:/etherscan.io/address/${address}`)}>
                {address}
            </AddressLink>
          </Box>

          <Box pl={4} pr={4} mt={2} mb={4}>
            <BalanceText onClick={() => setWithdrawAmount(stakingBalance)}>Max: {stakingBalance === '0' ? '0' : parseFloat(stakingBalance).toFixed(4)}</BalanceText>
              <Field label="Withdraw Amount">
                  <Input type="text" required={true} placeholder="Withdraw stake" value={withdrawAmount}
                    onChange={e => setWithdrawAmount(e.target.value)}/>
              </Field>
              <Text color="red">You are about to withdraw tokens from the staking contract.</Text>
          </Box>

          <Box pl={4} pr={4} mt={2} mb={4}>
              <Text mb={2}>Total amount earned: {earned !== '0' ? parseFloat(earned).toFixed(5) : '0'} QFI</Text>
              <Button size="small" width={1} mainColor="#9b744e" onClick={claim}>Claim Earnings</Button>
          </Box>

          <Flex
            px={4}
            py={3}
            borderTop={1}
            borderColor={"#E8E8E8"}
            justifyContent={"flex-end"}>
                <Button.Outline onClick={resetState}>Cancel</Button.Outline>
                <Button ml={3} onClick={withdrawStake}>Withdraw</Button>
          </Flex>
        </Card>
      </Modal>
    )
}

export default Rewards;

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