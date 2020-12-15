import React, { useState } from "react";
import { Box, Flex, Modal, Button, Text, Card, Heading, Field, Input } from "rimble-ui";
import styled from 'styled-components'
import { depositEth } from "../../services/depositEth"

const DepositModal = ({ open, close, address }) => {
    const [depositAmount, setDepositAmount] = useState('0')

    function resetState() { setDepositAmount('0'); close()}

    const handleSubmit = async () => {
      let res = await depositEth(address, depositAmount);
      close();
      window.toastProvider.addMessage("Transaction Submitted", {
        secondaryMessage: `${res}`,
        variant: 'pending',
        actionHref: `https://kovan.etherscan.io/tx/${res}`,
        actionText: "View", colorTheme: "light"
        })
      return res
    }

    return (
        <Modal isOpen={open}>
        <Card width={"360px"} p={0}>
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

          <Box p={[4]}>
            <Heading.h3>Deposit ETH to Pool</Heading.h3>
            <AddressLink onClick={() => window.open(`https://kovan.etherscan.io/address/${address}`)}>
                {address}
            </AddressLink>
          </Box>
          <Box pl={4} pr={4} mb={4}>
              <Field label="Deposit Amount (ETH)">
                  <Input type="text" required={true} placeholder="ETH Amount"
                    onChange={e => setDepositAmount(e.target.value)}/>
              </Field>
              <Text color="red">You are about to deposit ETH. Complete the transaction in MetaMask after clicking 'Confirm'</Text>
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
              ml={3} disabled={!depositAmount || depositAmount === '0'}>Confirm</Button>
          </Flex>
        </Card>
      </Modal>
    )
}

export default DepositModal;

const AddressLink = styled(Text)
`
    font-size: 12px;
    margin: 0;
    padding: 0;
    &:hover {
        cursor: pointer;
    }
`